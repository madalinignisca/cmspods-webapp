import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import Hetzner, { hetznerLogo } from './Providers/Hetzner';
import DigitalOcean, { digitalOceanLogo } from './Providers/DigitalOcean';

class AddClusterForm extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            provider: '',
            apiKey: '',
            location: ''
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
        alert("On this step I would provision the first server... To be continued!")
    }

    render () {
        return (
            <Form tag="fieldset">
                <FormGroup>
                    <img src={hetznerLogo} alt="hetzner logo" title="Hetzner" width="64" height="64" />
                    <img src={digitalOceanLogo} alt="digital ocean" title="Digital Ocean" width="64" height="64" />
                    
                    <legend>Choose a Cloud provider</legend>
                    <FormGroup check>
                        <Label check>
                            <Input onClick={this.setProviderHandler} type="radio" name="provider" value="hetzner" />{' '}
                            Hetzner
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input onClick={this.setProvider} type="radio" name="provider" value="digitalocean" />{' '}
                            Digital Ocean
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input onClick={this.setProvider} type="radio" name="provider" value="linode" />{' '}
                            Linode
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input onClick={this.setProvider} type="radio" name="provider" value="vultr" />{' '}
                            Vultr
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="apikey">API Key</Label>
                    <Input onInput={this.setApiKeyHandler} type="text" name="apikey" id="clusterFormApikey" />
                </FormGroup>
                {this.displayProvider()}
                {this.displayProvisioningButton()}
            </Form>
        )
    }
}

export default AddClusterForm;
