import React, { Component } from 'react';
import AddCluster from './addCluster';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class Clusters extends Component {
    constructor (props) {
        super(props);

        this.state = {
            clusters: []
        };
    }

    render () {
        return (
            <Container className="mb-3">
                <Row>
                    <Col md="6" lg="4">
                        <AddCluster />
                    </Col>
                </Row>
            </Container>
        )
    }
}