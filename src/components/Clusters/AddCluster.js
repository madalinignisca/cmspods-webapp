import React, { Component } from 'react';
import AddClusterForm from './AddClusterForm';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

export default class AddCluster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Add Cluster</CardTitle>
                        <CardText>
                            A cluster is a group of servers hosting a Docker swarm.
                            Using multiple servers allows higher availability...
                        </CardText>
                        <Button color="primary" onClick={this.toggle}>Add</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>New Cluster Wizard</ModalHeader>
                    <ModalBody>
                        <AddClusterForm />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        )
    } 
}
