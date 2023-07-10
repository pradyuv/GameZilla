import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isFrench, setIsFrench] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
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

  const getGenreLink = (genre) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('genre', genre);
    return {
      pathname: '/Games',
      search: searchParams.toString()
    };
  };

  const handleLanguageToggle = () => {
    setIsFrench(!isFrench);
  };

  return (
    <Navbar className='bg-black navbar-dark'>
      <Container fluid className="d-flex justify-content-between align-items-center ml-0">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img className="logo-image" src="images/GameZillalogo.jpg" alt="GameZilla Logo" style={{ width: '100px', height: '90px' }} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" id="navbar-first-item" className={`text-white ${isFrench ? 'french-text' : ''}`}>
            {isFrench ? 'Accueil' : 'Home'}
          </Nav.Link>
          <Nav.Link as={Link} to="/Games" id="navbar-item" className={`text-white ${isFrench ? 'french-text' : ''}`}>
            {isFrench ? 'Jeux' : 'Games'}
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutUs" id="navbar-item" className={`text-white ${isFrench ? 'french-text' : ''}`}>
            {isFrench ? 'À Propos' : 'About Us'}
          </Nav.Link>
          <NavDropdown title={isFrench ? 'Genres' : 'Genres'} id="navbar-dropdown" className={`text-white ${isFrench ? 'french-text' : ''}`}>
            <NavDropdown.Item as={Link} to={getGenreLink('Action RPG')}>
              {isFrench ? 'Action RPG' : 'Action RPG'}
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={getGenreLink('FPS')}>
              {isFrench ? 'FPS' : 'FPS'}
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={getGenreLink('Open World')}>
              {isFrench ? 'Open World' : 'Open World'}
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={getGenreLink('Zombie')}>
              {isFrench ? 'Zombie' : 'Zombie'}
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={getGenreLink('Strategy')}>
              {isFrench ? 'Stratégie' : 'Strategy'}
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/faq" id="navbar-item" className={`text-white ${isFrench ? 'french-text' : ''}`}>
            {isFrench ? 'FAQ' : 'FAQ'}
          </Nav.Link>
        </Nav>
        <div className="d-flex">
          <Button variant="success" className='mt-3' style={{ padding: '8px', width: '40px', height: '40px' }} onClick={handleCartClick}>
            <FaShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span className="cart-item-count">{cartItemsCount}</span>
            )}
          </Button>
          <Button variant="danger" className='mt-3 ml-2' onClick={handleClearCart}>
            {isFrench ? 'Vider le Panier' : 'Clear Cart'}
          </Button>
          <Button variant="outline-light" className='mt-3 ml-2' onClick={handleLanguageToggle}>
            {isFrench ? 'English' : 'Français'}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
