import React from 'react';
import { Button, Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import Games from './Games';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Genres from './Genres';
import Platforms from './Platforms';

import logo1 from './images/firstcarousel.jpg';
import logo2 from './images/secondcarousel.jpg';
import logo3 from './images/thirdcarousel.jpg';

function Home() {
  return (
    <div className="App bg-dark">
      <NavigationBar />
      <Container fluid className="vh-100 d-flex flex-column">
        <Row className="flex-grow-1 overflow-auto">
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="carousel-container">
                  <Carousel>
                    <Carousel.Item>
                      <img className="d-block w-100" src={logo1} alt="Slide 1" />
                      <Carousel.Caption>
                        <h3>Diablo 4</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src={logo2} alt="Slide 2" />
                      <Carousel.Caption>
                        <h3>Destiny 2: Lightfall</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src={logo3} alt="Slide 3" />
                      <Carousel.Caption>
                        <h3>Elden Ring</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Card.Body>
            </Card>
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
