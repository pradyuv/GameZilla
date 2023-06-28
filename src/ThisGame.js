import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
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

  useEffect(() => {
    if (!name || !imagePath) {
      // Handle the case when location.state is null or missing properties
      console.log('name:', name);
      console.log('imagePath:', imagePath);
      alert("Game information not passed correctly");
    } else {
      const game = gamesData.games.find(game => game.name === name);
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
    // Perform review submission logic
    navigate('/');
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
                <Button variant="success" className='mt-3' style={{ padding: '8px', width: '40px', height: '40px' }}>
                  <FaShoppingCart size={20} />
                </Button>
                <Form className="mt-4" onSubmit={handleReviewSubmit}>
                  <Form.Group controlId="reviewForm">
                    <Form.Label>Leave a review:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write your review here" />
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="primary" type="submit">Submit</Button>
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
