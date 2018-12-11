import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';


class NavigationAuth extends Component {
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
                <Container fluid={true}>
                    <NavbarBrand tag={Link} to={ROUTES.HOME}>cmsPods</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to={ROUTES.ACCOUNT}>Account</NavLink>
                            </NavItem>
                            <NavItem>
                              <SignOutButton />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationAuth;