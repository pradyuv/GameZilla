import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io'; // Import the search icon from the Ionicons icon library
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon from the FontAwesome icon library

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          GameZilla
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" id="navbar-first-item">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Games" id="navbar-item">
            Games
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutUs" id="navbar-item">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/Genres" id="navbar-item">
            Genres
          </Nav.Link>
          <Nav.Link as={Link} to="/Platforms" id="navbar-item">
            Platforms
          </Nav.Link>
        </Nav>
        <div className="d-flex">
          <Form inline className="mr-2 p-3">
            <div className="position-relative">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 search-input"
              />
              <Button variant="outline-light" className="search-button">
                <IoMdSearch size={20} />
              </Button>
            </div>
          </Form>
          <Button variant="success" style={{ padding: '8px', width: '40px', height: '40px' }}>
            <FaShoppingCart size={20} />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
