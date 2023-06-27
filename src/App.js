import React from 'react';
import { Button, Alert, Breadcrumb, Row, Col, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import Games from './Games';

import logo1 from './images/firstcarousel.jpg';
import logo2 from './images/secondcarousel.jpg';
import logo3 from './images/thirdcarousel.jpg';

function App() {
  return (
    <div className="App dark-background">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/Games.js" element={<Games />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      <Row>
        <Col>
          <Card className="h-100 dark-background">
            <Card.Body className="d-flex flex-column align-items-center">
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
              <div className="text-center">
                <Alert variant="primary">Le button</Alert>
                <Button>Test Button</Button>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 dark-background">
            <Card.Body>
              {/* Content for the second column */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
