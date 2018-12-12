/**
 * CMS Pods Manager
 * Copyright (C) Madalin Ignisca
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import Docker from 'dockerode';
import randomize from 'randomatic';
import EventEmitter from 'events';
import uuidv4 from 'uuid/v4';

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

    const ID = uuidv4();

    const docker = new Docker({
        protocol: 'http',
        host: 'single.todds.vm',
        port: 2375,
        version: 'v1.37'
    });

    ee.on('ready', function() {
        // do something nice for the user
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
            HostConfig: {
                RestartPolicy: {
                    Name: 'unless-stopped'
                },
                NetworkMode: 'wordpress'
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
                'WORDPRESS_DB_HOST=db',
                'WORDPRESS_DB_USER=' + MYSQL_USER,
                'WORDPRESS_DB_PASSWORD=' + MYSQL_PASSWORD,
                'WORDPRESS_DB_NAME=' + MYSQL_DATABASE,
                'VIRTUAL_HOST=' + data.hostname
            ],
            ExposedPorts: {
                "80/tcp": { }
            },
            HostConfig: {
                RestartPolicy: {
                    Name: 'unless-stopped'
                },
                NetworkMode: 'wordpress'
            }
        }).then((container) => {
            return container.start();
        }).then((container) => {
            ee.emit('ready', true);
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

    ee.on('proxy', () => {
        docker.pull(data.cms + ':latest', function(err, stream) {
            docker.modem.followProgress(stream, onFinished);
    
            function onFinished(err, output) {
                console.log(output);
                ee.emit('wppull', true);
            }
        });
    })

    docker.createNetwork({
        Name: 'wordpress',
        CheckDuplicate: true
    }).then((network) => {
        network.connect({
            Container: 'proxy'
        }).then(() => ee.emit('proxy', true));
    });
}

export default provisionWebsite;