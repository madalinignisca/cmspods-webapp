import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import Hetzner from './Providers/Hetzner';
import DigitalOcean from './Providers/DigitalOcean';

class AddClusterForm extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            provider: '',
            apiKey: ''
        }

        this.setProvider = this.setProvider.bind(this);
        this.setApiKey = this.setApiKey.bind(this);
    }
    

    setProvider = (e) => {
        this.setState({
            provider: e.target.value
        })
    }

    setApiKey = (e) => {
        this.setState({
            apiKey: e.target.value
        })
    }

    displayProvider = () => {
        if (!this.state.apiKey) return;
        switch (this.state.provider) {
            case 'hetzner':
                return (
                    <Hetzner apiKey={this.state.apiKey} />
                );
            default:
                return '';
        }
    }

    render () {
        return (
            <Form tag="fieldset">
                <FormGroup>
                    <legend>Choose a Cloud provider</legend>
                    <FormGroup check>
                        <Label check>
                            <Input onClick={this.setProvider} type="radio" name="provider" value="hetzner" />{' '}
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
                    <Input onInput={this.setApiKey} type="text" name="apikey" id="clusterFormApikey" />
                </FormGroup>
                {this.displayProvider()}
            </Form>
        )
    }
}

export default AddClusterForm;
