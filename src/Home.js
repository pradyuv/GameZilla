import React from 'react';
import { Button, Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navbar';
import Footer from './Footer';


function Home() {
  return (
    <div className="bg-dark">
      <NavigationBar />
      <Container fluid className="vh-100 d-flex flex-column">
        <h1 className="text-white align-self-start mx-auto pt-3">GameZilla</h1>
        <Row className="flex-grow-1 overflow-auto">
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="carousel-container">
                  <Carousel>
                    <Carousel.Item>
                      <img className="d-block w-100" src="images/firstcarousel.jpg" alt="Slide 1" />
                      <Carousel.Caption>
                        <h3>Diablo IV</h3>
                        <p>Revisit Sanctuary!</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src="images/secondcarousel.jpg" alt="Slide 2" />
                      <Carousel.Caption>
                        <h3>Destiny 2: Lightfall</h3>
                        <p>Explore Neomuna!</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src="images/thirdcarousel.jpg" alt="Slide 3" />
                      <Carousel.Caption>
                        <h3>Elden Ring</h3>
                        <p>A legendary world...</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Card.Body>
            </Card>
            <Row className="mt-3">
              <Col>
                <div className="carousel-caption bg-dark text-white">
                  <h4>Our featured games!</h4>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Card.Text className="text-white text-center">
                  Welcome to our website! We aim to provide you with the best gaming experience. Explore our collection of games and discover new adventures. Have fun and enjoy your stay!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
