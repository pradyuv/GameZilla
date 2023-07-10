import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { FaShoppingCart } from 'react-icons/fa';
import gamesData from './games.json';

function ThisGame() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, imagePath } = location.state || {};

  const [gameInfo, setGameInfo] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [review, setReview] = useState('');

  useEffect(() => {
    if (!name || !imagePath) {
      console.log('name:', name);
      console.log('imagePath:', imagePath);
      alert("Game information not passed correctly");
    } else {
      const game = gamesData.games.find((game) => game.name === name);
      if (game) {
        setGameInfo(game);
      } else {
        alert("Game not found in the database!");
      }
    }
  }, [name, imagePath]);

  const { description, price, imagePath: gameImagePath } = gameInfo || {};

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (review.trim() === '') {
     // If the review field is empty, show an error alert and return
       setShowErrorAlert(true);
      return;
    }
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate('/');
    }, 3000);
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.name === gameInfo.name);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      const newItem = { ...gameInfo, quantity: 1, imagePath: gameImagePath || imagePath };
      const updatedCartItems = [...cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    // Redirect to the Cart page with the selected game
    navigate('/cart', { state: { selectedGame: gameInfo } });
  };

  return (
    <div className="bg-dark">
      <NavigationBar />
      <Container fluid className="vh-100 d-flex flex-column">
        <h1 className="text-white align-self-start mx-auto pt-3">{name}</h1>
        <Row className="flex-grow-1 overflow-auto">
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img src={gameImagePath || imagePath} alt={name} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                <div>
                  <Card.Text className="text-white text-center">
                    {description}
                  </Card.Text>
                  <Card.Text className="text-white text-center">
                    Price: {price}
                  </Card.Text>
                </div>
                <Button
                  variant="success"
                  className="mt-3"
                  style={{ padding: '8px', width: '40px', height: '40px' }}
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart size={20} />
                </Button>
                <Form className="mt-4" onSubmit={handleReviewSubmit}>
          <Form.Group controlId="reviewForm">
            <Form.Label>Leave a review:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your review here"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {showErrorAlert && (
              <Alert variant="danger" className="mt-4">
                Please write your review before submitting.
              </Alert>
            )}
            {showAlert && !showErrorAlert && (
              <Alert variant="success" className="mt-4">
                Thank you for your review!
              </Alert>
            )}
          </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ThisGame;
