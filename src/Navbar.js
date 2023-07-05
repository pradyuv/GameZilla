import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon from the FontAwesome icon library
import './Navbar.css';

const NavigationBar = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0); //state func to set cart
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //using local storage to manage cart 
    const totalItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    setCartItemsCount(totalItemsCount);
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem('cartItems');
    setCartItemsCount(0);
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Navbar className='bg-black navbar-dark'>
      <Container fluid className="d-flex justify-content-between align-items-center ml-0">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img className="logo-image" src="images/GameZillalogo.jpg" alt="GameZilla Logo" style={{ width: '100px', height: '90px' }} /> {/* Added logo-image class and inline style */}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" id="navbar-first-item" className='text-white'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Games" id="navbar-item" className='text-white'>
            Games
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutUs" id="navbar-item" className='text-white'>
            About Us
          </Nav.Link>
          <NavDropdown title="Genres" id="navbar-dropdown" className='text-white'>
            <NavDropdown.Item href="/option1">Action RPG</NavDropdown.Item>
            <NavDropdown.Item href="/option2">Open World</NavDropdown.Item>
            <NavDropdown.Item href="/option3">FPS</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Platforms" id="navbar-dropdown" className='text-white'>
            <NavDropdown.Item href="/option1">PC</NavDropdown.Item>
            <NavDropdown.Item href="/option2">PS5</NavDropdown.Item>
            <NavDropdown.Item href="/option3">Xbox Series X</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="d-flex">
          <Button variant="success" className='mt-3' style={{ padding: '8px', width: '40px', height: '40px' }} onClick={handleCartClick}>
            <FaShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span className="cart-item-count">{cartItemsCount}</span>
            )}
          </Button>
          <Button variant="danger" className='mt-3 ml-2' onClick={handleClearCart}>
            Clear Cart
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
