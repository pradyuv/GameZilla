import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

function ThisGame() {
  const location = useLocation();
  const { name, imagePath } = location.state;

  // You can customize the description and price for each game
  const description = 'This is a generic description for the game.';
  const price = '$49.99';

  return (
    <>
      <NavigationBar />
      <div className="bg-dark">
        <Container fluid className="vh-100 d-flex flex-column">
          <h2 className="text-white text-center mb-4 pt-3">Game Details</h2>
          <Row>
            <Col md={12} className="text-center">
              <Card className="bg-dark text-white">
                <Card.Img src={imagePath} alt={name} />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>Price: {price}</Card.Text>
                </Card.ImgOverlay>
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
