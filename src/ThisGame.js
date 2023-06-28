import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon from the FontAwesome icon library

function ThisGame() {
  const location = useLocation();
  const { name, imagePath } = location.state || {};

  // Can customize the description and price for each game
  const description = 'This is a generic description for the game.';
  const price = '$49.99';
  if (!name || !imagePath) {
    // Handle the case when location.state is null or missing properties
    alert("Game information not sent properly!");
    console.log('name:', name);
    console.log('imagePath:', imagePath);
  }

  return (
    <div className="bg-dark">
      <NavigationBar />
      <Container fluid className="vh-100 d-flex flex-column">
        <h1 className="text-white align-self-start mx-auto pt-3">{name}</h1>
        <Row className="flex-grow-1 overflow-auto">
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Img src={imagePath} alt={name}/>
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
                <Form className="mt-4">
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
