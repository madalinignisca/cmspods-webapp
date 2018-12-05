import Docker from 'dockerode';
import randomize from 'randomatic';
import EventEmitter from 'events';

const ee = new EventEmitter();

async function provisionWebsite(data) {
    // data.cluster
    // data.cms
    // data.hostname
    // data.id
    // data.project
    console.log(data);

    const MYSQL_ROOT_PASSWORD = randomize('Aa0', 32);
    const MYSQL_DATABASE = 'wordpress';
    const MYSQL_USER = 'wp';
    const MYSQL_PASSWORD = randomize('Aa0', 32);

    const docker = new Docker({
        protocol: 'http',
        host: 'single.todds.vm',
        port: 2375,
        version: 'v1.37'
    });

    const network = docker.createNetwork({
        Name: 'wordpress',
        CheckDuplicate: true
    });

    ee.on('dbpull', function() {
        docker.createContainer({
            name: 'db',
            Image: 'mariadb',
            Hostname: 'db',
            Env: [
                'MYSQL_ROOT_PASSWORD=' + MYSQL_ROOT_PASSWORD,
                'MYSQL_DATABASE=' + MYSQL_DATABASE,
                'MYSQL_USER=' + MYSQL_USER,
                'MYSQL_PASSWORD=' + MYSQL_PASSWORD
            ],
            ExposedPorts: {
                "3306/tcp": { }
            },
            NetworkingConfig: {
                'wordpress': {
                    NetworkID: network.Id,
                    IPAddress: '172.17.0.2'
                }
            }
        }).then((container) => {
            return container.start();
        }).then((container) => {
            ee.emit('dbcomplete', true);
            console.log(container);
        });
    });

    ee.on('dbcomplete', function() {
        docker.createContainer({
            name: 'wp',
            Image: 'wordpress',
            Hostname: 'wp',
            Env: [
                'WORDPRESS_DB_HOST=172.17.0.2',
                'WORDPRESS_DB_USER=' + MYSQL_USER,
                'WORDPRESS_DB_PASSWORD=' + MYSQL_PASSWORD,
                'WORDPRESS_DB_NAME=' + MYSQL_DATABASE
            ],
            ExposedPorts: {
                "80/tcp": { }
            },
            HostConfig: {
                PortBindings: {
                    '80/tcp': [
                        {
                            HostPort: '11080'
                        }
                    ]
                }
            },
            NetworkingConfig: {
                'wordpress': {
                    NetworkID: network.Id,
                    IPAddress: '172.17.0.3'
                }
            }
        }).then((container) => {
            return container.start();
        }).then((container) => {
            console.log(container);
        });
    });

    ee.on('wppull', function() {
        docker.pull('mariadb:latest', function(err, stream) {
            docker.modem.followProgress(stream, onFinished);
    
            function onFinished(err, output) {
                console.log(output);
                ee.emit('dbpull', true);
            }
        });
    });

    docker.pull(data.cms + ':latest', function(err, stream) {
        docker.modem.followProgress(stream, onFinished);

        function onFinished(err, output) {
            console.log(output);
            ee.emit('wppull', true);
        }
    });
}

export default provisionWebsite;