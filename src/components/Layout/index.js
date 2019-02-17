import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const layout = Component => {
  class Layout extends React.Component {
    render () {
      return (    
        <Container fluid={true}>
          <Row>
            <Col tag="nav" md="2" className="d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                  <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                      Projects
                  </h4>
                  <Nav className="flex-column">
                    <NavItem>
                      <NavLink tag={Link} to={ROUTES.PROJECT_ADD}>
                          + Add project
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    Servers
                  </h4>
              </div>
            </Col>
            <Col role="main" tag="main" md="9" lg="10" className="ml-sm-auto px-4">
              <Component />
            </Col>
          </Row>
        </Container>
      )
    }
  }
  
  return Layout;
}

export default layout;