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


class NavigationNonAuth extends Component {
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
                                <NavLink tag={Link} to={ROUTES.SIGNIN}>Sign In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={ROUTES.SIGNUP}>Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationNonAuth;
