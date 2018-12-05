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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuidv4 from 'uuid/v4';
import provisionWebsite from '../../lib/provisionWebsite'

export default class AddWebsite extends Component {
    constructor (props) {
        super(props);

        this.state = {
            modal: false,
            id: uuidv4(),
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
                            Create{' '}
                            <FontAwesomeIcon icon={['far', 'hand-point-up']} />
                        </Button>
                    </InputGroup>
                </FormGroup>
            )
        }
    }

    createHandler = () => {
        provisionWebsite({
            id: this.state.id,
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
                                            <FontAwesomeIcon icon={['fab', 'wordpress']} />{' '}
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
                                            <FontAwesomeIcon icon={['fab', 'linux']} />{' '}
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