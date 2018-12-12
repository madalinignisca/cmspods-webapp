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
