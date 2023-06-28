import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

function ThisGame() {
  const location = useLocation();
  const { name, imagePath } = location.state || {};

  // You can customize the description and price for each game
  const description = 'This is a generic description for the game.';
  const price = '$49.99';
  if (!name || !imagePath) {
    // Handle the case when location.state is null or missing properties
    alert("Game information not sent properly!");
    console.log('name:', name);
    console.log('imagePath:', imagePath);
  }


  return (
    <>
      <NavigationBar />
      <div className="bg-dark">
        <Container fluid className="vh-100 d-flex flex-column">
          <h2 className="text-white text-center mb-4 pt-3">Game Details</h2>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className="text-center">
              <Card className="bg-dark text-white">
                <Card.Img src={imagePath} alt={name} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>Price: {price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ThisGame;