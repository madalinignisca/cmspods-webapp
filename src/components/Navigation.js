import React, { Component } from 'react';
import {
    Container,
    Navbar,
    NavbarBrand
} from 'reactstrap';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
      }
      toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <Navbar color="dark" dark expand="md" className="mb-3">
                <Container>
                    <NavbarBrand href="/">cmsPods</NavbarBrand>
                </Container>
            </Navbar>
        )
    }
}