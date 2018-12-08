import React, { Component } from 'react';
import HetznerCloud from 'hcloud-js';
import { FormGroup, Input, Label } from 'reactstrap';

class Hetzner extends Component {
    constructor (props) {
        super (props);

        this.state = {
            serverTypes: false,
            locations: false
        };

        this.getServerList = this.getServerList.bind(this);
        this.setServerList = this.setServerList.bind(this);
        this.getLocationList = this.getLocationList.bind(this);
        this.setLocationList = this.setLocationList.bind(this);
    }

    getServerList () {
        let client = new HetznerCloud.Client({
            token: this.props.apiKey
        });
        client.serverTypes.list().then(this.setServerList);
    }

    getLocationList () {
        let client = new HetznerCloud.Client({
            token: this.props.apiKey
        });
        client.locations.list().then(this.setLocationList);
    }

    setServerList (result) {
        console.log(result)
        this.setState({
            serverTypes: result.serverTypes
        })
    }

    setLocationList (result) {
        console.log(result);
        this.setState({
            locations: result.locations
        })
    }

    displayServerTypes () {
        if (this.state.serverTypes) {
            return (
                <FormGroup tag="fieldset">
                    <legend>Select server type</legend>
                    {this.state.serverTypes.map((serverType, index) => {
                        return (
                            <div key={index}>
                                <FormGroup check>
                                    <Label check>
                                    <Input onClick={this.props.serverHandler} type="radio" name="serverType" value={serverType.name} />{' '}
                                    {serverType.description}
                                    </Label>
                                </FormGroup>
                            </div>
                        )
                    })}
                </FormGroup>
            )
        }
    }

    displayLocationList () {
        if (this.state.locations) {
            return (
                <FormGroup tag="fieldset">
                    <legend>Select a location</legend>
                    {this.state.locations.map((location, index) => {
                        return (
                            <div key={index}>
                                <FormGroup check>
                                    <Label check>
                                        <Input onClick={this.props.locationHandler} type="radio" name="location" value={location.name} />{' '}
                                        {location.description}
                                    </Label>
                                </FormGroup>
                            </div>
                        )
                    })}
                </FormGroup>
            )
        }
    }

    componentDidMount() {
        this.getServerList();
        this.getLocationList();
    }

    render () {
        return (
            <div>
                <h1>Hetzner</h1>
                {this.displayServerTypes()}
                {this.displayLocationList()}
            </div>
        )
    }
}

export default Hetzner;
