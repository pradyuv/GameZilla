import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';



function Games() {
  return (
    <>
      <NavigationBar />
      <div className="bg-dark">
        <Container fluid className="vh-100 d-flex flex-column">
          <h2 className="text-white text-center mb-4 pt-3">Featured Games</h2>
          <Row>
            <Col md={4}>
            <Link to='/thisgame' state={{name:'Diablo IV', imagePath: "images/firstcarousel.jpg"}}>
                <Card className="bg-dark text-white">
                  <Card.Img src="images/firstcarousel.jpg" alt="Diablo IV" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title>Diablo IV</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
            <Link to='/thisgame' state={{name:'Destiny 2: Lightfall', imagePath: "images/secondcarousel.jpg"}}>
                <Card className="bg-dark text-white">
                  <Card.Img src="images/secondcarousel.jpg" alt="Destiny 2: Lightfall" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title>Destiny 2: Lightfall</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
            <Col md={4}>
            <Link to='/thisgame' state={{name:'Elden Ring', imagePath: "images/thirdcarousel.jpg"}}>
                <Card className="bg-dark text-white">
                  <Card.Img src="images/thirdcarousel.jpg" alt="Elden Ring" />
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
