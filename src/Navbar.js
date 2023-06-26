import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">GameZilla</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/App">Home</Nav.Link>
          <Nav.Link as={Link} to="/Games">Games</Nav.Link>
          <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Button variant="success" className="ml-2">Add to Cart</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
