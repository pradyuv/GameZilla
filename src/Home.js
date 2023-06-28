import React from 'react';
import { Button, Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navbar';
import Footer from './Footer';

import logo1 from './images/firstcarousel.jpg';
import logo2 from './images/secondcarousel.jpg';
import logo3 from './images/thirdcarousel.jpg';

function Home() {
  return (
    <div className="bg-dark">
      <NavigationBar />
      <Container fluid className="vh-100 d-flex flex-column">
        <h1 className="text-white align-self-start mx-auto pt-3">GameZilla</h1> {/* Added align-self-start class and pt-3 class */}
        <Row className="flex-grow-1 overflow-auto">
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="carousel-container">
                  <Carousel>
                    <Carousel.Item>
                      <img className="d-block w-100" src={logo1} alt="Slide 1" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src={logo2} alt="Slide 2" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src={logo3} alt="Slide 3" />
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
