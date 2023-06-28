import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

import logo1 from './images/firstcarousel.jpg';
import logo2 from './images/secondcarousel.jpg';
import logo3 from './images/thirdcarousel.jpg';

function Games() {
  return (
    <>
      <NavigationBar />
      <div className="bg-dark">
        <Container fluid className="vh-100 d-flex flex-column">
          <h2 className="text-white text-center mb-4 pt-3">Featured Games</h2>
          <Row>
            <Col md={4}>
            <Link to='/thisgame' state={{name:'Diablo IV', imagePath: logo1}}>
                <Card className="bg-dark text-white">
                  <Card.Img src={logo1} alt="Diablo IV" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title>Diablo IV</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
            <Link to='/thisgame' state={{name:'Destiny 2: Lightfall', imagePath: logo2}}>
                <Card className="bg-dark text-white">
                  <Card.Img src={logo2} alt="Destiny 2: Lightfall" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title>Destiny 2: Lightfall</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
            <Link to='/thisgame' state={{name:'Elden Ring', imagePath: logo3}}>
                <Card className="bg-dark text-white">
                  <Card.Img src={logo3} alt="Elden Ring" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title>Elden Ring</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Games;
