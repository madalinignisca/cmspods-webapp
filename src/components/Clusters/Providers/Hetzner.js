import React, { Component } from 'react';
import HetznerCloud from 'hcloud-js';
import { Button, FormGroup } from 'reactstrap';
import HetznerServerType from './HetznerServerType';

class Hetzner extends Component {
    constructor (props) {
        super (props);

        this.state = {
            serverTypes: false
        };

        this.getServerList = this.getServerList.bind(this);
        this.setServerList = this.setServerList.bind(this);
    }

    getServerList () {
        let client = new HetznerCloud.Client({
            token: this.props.apiKey
        });
        client.serverTypes.list().then(this.setServerList)
    }

    setServerList (result) {
        console.log(result)
        this.setState({
            serverTypes: result.serverTypes
        })
    }

    serverTypes () {
        if (this.state.serverTypes) {
            return (
                <div>
                    <FormGroup tag="fieldset">
                        <legend>Select server type</legend>
                        {this.state.serverTypes.map((serverType, key) => {
                            return <HetznerServerType serverType={serverType} key={key} />
                        })}
                    </FormGroup>
                </div>
            )
        }
    }

    render () {
        return (
            <div>
                <h1>Hetzner</h1>
                <Button onClick={this.getServerList}>Get Server Types</Button>
                {this.serverTypes()}
            </div>
        )
    }
}

export default Hetzner;
