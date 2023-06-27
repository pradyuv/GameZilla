import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          GameZilla
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link id='navbar-first-item' href='/App'>
            Home
          </Nav.Link>
          <Nav.Link id='navbar-item' href='/Games'>
            Games
          </Nav.Link>
          <Nav.Link id='navbar-item' href='/AboutUs'>
            About Us
          </Nav.Link>
          <Nav.Link id='navbar-item' href='/Genres'>
            Genres
          </Nav.Link>
          <Nav.Link id='navbar-item' href='/Platforms'>
            Platforms
          </Nav.Link>
        </Nav>
        <div className="d-flex">
          <Form inline className="mr-2 p-3">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 search-input"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Button variant="success">Add to Cart</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
