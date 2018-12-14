import React from 'react';
import {
  Container,
  Row,
  Col,
  Nav
} from 'reactstrap';

const layout = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col tag={Nav} md="2" className="d-none d-md-block bg-dark sidebar"></Col>
        <Col tag="main" md="10"></Col>
      </Row>
    </Container>
  )
}

export default layout;