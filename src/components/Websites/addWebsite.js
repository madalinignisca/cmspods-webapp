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
    ButtonGroup,
    FormGroup,
    Input,
    InputGroup,
    Label,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import provisionWebsite from '../../lib/provisionWebsite'

export default class AddWebsite extends Component {
    constructor (props) {
        super(props);

        this.state = {
            modal: false,
            cms: '',
            project: '',
            hostname: '',
            cluster: ''
        };

        this.addWebsiteHandler = this.addWebsiteHandler.bind(this);
        this.projectNameHandler = this.projectNameHandler.bind(this);
        this.hostnameHandler = this.hostnameHandler.bind(this);
        this.clusterHandler = this.clusterHandler.bind(this);
        this.cmsHandler = this.cmsHandler.bind(this);
        this.clusterHandler = this.clusterHandler.bind(this);
    }

    addWebsiteHandler = (e) => {
        this.setState({
            modal: !this.state.modal
        });
    }

    projectNameHandler = (e) => {
        this.setState({
            project: e.target.value
        });
    }

    hostnameHandler = (e) => {
        this.setState({
            hostname: e.target.value
        });
    }

    cmsHandler = (e) => {
        this.setState({
            cms: e.target.value
        });
    }

    clusterHandler = (e) => {
        this.setState({
            cluster: e.target.value
        })
    }

    clusterHandler = (e) => {
        this.setState({
            cluster: e.target.value
        });
    }

    displayCreateButton = () => {
        if (
            this.state.project &&
            this.state.hostname &&
            this.state.cms &&
            this.state.cluster
        ) {
            return (
                <FormGroup>
                    <InputGroup>
                        <Button onClick={this.createHandler}>
                            Create
                        </Button>
                    </InputGroup>
                </FormGroup>
            )
        }
    }

    createHandler = () => {
        provisionWebsite({
            cluster: this.state.cluster,
            project: this.state.project,
            hostname: this.state.hostname,
            cms: this.state.cms
        });
    }

    render () {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Add Website</CardTitle>
                    <CardText>Create or import a WordPress, Ghost or Drupal website</CardText>
                    <Button onClick={this.addWebsiteHandler} color="primary">Add a website</Button>
                    <Modal size="lg" isOpen={this.state.modal} toggle={this.addWebsiteHandler}>
                        <ModalHeader toggle={this.addWebsiteHandler}>New Website Wizard</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label>Project name:</Label>
                                <Input onInput={this.projectNameHandler} type="text" name="projectName" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Hostname:</Label>
                                <Input onInput={this.hostnameHandler} type="url" name="hostnameName" placeholder="blog.mycooldomain.tld" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Pick an app:</Label>
                                <InputGroup>
                                    <ButtonGroup>
                                        <Button onClick={this.cmsHandler} value="wordpress">
                                            WordPress
                                        </Button>
                                    </ButtonGroup>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Choose a cluster:</Label>
                                <InputGroup>
                                    <ButtonGroup>
                                        <Button onClick={this.clusterHandler} value="local">
                                            Local
                                        </Button>
                                    </ButtonGroup>
                                </InputGroup>
                            </FormGroup>
                            {this.displayCreateButton()}
                        </ModalBody>
                    </Modal>
                </CardBody>
            </Card>
        )
    }
}