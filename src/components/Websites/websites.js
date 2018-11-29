import React, { Component } from 'react';
import AddWebsite from './addWebsite';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class Websites extends Component {
    constructor (props) {
        super(props);

        this.state = {
            websites: []
        };
    }

    render () {
        return (
            <Container className="mb-3">
                <Row>
                    <Col md="6" lg="4">
                        <AddWebsite />
                    </Col>
                </Row>
            </Container>
        )
    }
}