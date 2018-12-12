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
