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
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import Hetzner from './Providers/Hetzner';
import DigitalOcean from './Providers/DigitalOcean';
import provisionServer from '../../lib/provisionServer';

class AddClusterForm extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            provider: '',
            apiKey: '',
            location: '',
            server: '',
        }

        this.setProviderHandler = this.setProviderHandler.bind(this);
        this.setApiKeyHandler = this.setApiKeyHandler.bind(this);
        this.setLocationHandler = this.setLocationHandler.bind(this);
        this.setServerHandler = this.setServerHandler.bind(this);
    }
    

    setProviderHandler = (e) => {
        this.setState({
            provider: e.target.value
        });
    }

    setApiKeyHandler = (e) => {
        this.setState({
            apiKey: e.target.value
        });
    }

    setLocationHandler = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    setServerHandler = (e) => {
        this.setState({
            server: e.target.value
        })
    }

    displayProvider = () => {
        if (!this.state.apiKey) return;
        switch (this.state.provider) {
            case 'hetzner':
                return (
                    <Hetzner apiKey={this.state.apiKey} locationHandler={this.setLocationHandler} serverHandler={this.setServerHandler} />
                );
            default:
                return '';
        }
    }

    displayProvisioningButton = () => {
        if (this.state.apiKey && this.state.location && this.state.provider) {
            return (
                <Button onClick={this.provisionCluster} color="primary">Create</Button>
            )
        }
    }

    provisionCluster = () => {
        provisionServer(this.state);
    }

    render () {
        return (
            <Form>
                <FormGroup>                    
                    <legend>Choose a Cloud provider</legend>
                    <FormGroup check>
                        <Label check>
                            <Input onClick={this.setProviderHandler} type="radio" name="provider" value="hetzner" />{' '}
                            Hetzner
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="apikey">API Key</Label>
                    <Input onInput={this.setApiKeyHandler} type="text" name="apikey" id="clusterFormApikey" />
                </FormGroup>
                <FormGroup>
                    <Label for="serverHostname">Server hostname</Label>
                    <Input onInput={this.setServerHostnameHandler} type="text" name="serverHostname" id="serverHostname" />
                </FormGroup>
                
                {this.displayProvider()}
                {this.displayProvisioningButton()}
            </Form>
        )
    }
}

export default AddClusterForm;
