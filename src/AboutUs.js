import React from 'react';
import { Button, Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navbar';
import Footer from './Footer';
import GameZillaLogo from './images/GameZillalogo.jpg';



function AboutUs() {
  return (
    <div className="bg-dark">
      <NavigationBar />
      <Container fluid className="vh-100 d-flex flex-column">
        <Row className="flex-grow-1 overflow-auto">
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="gamezilla-image-and-caption">
                <img className="d-block w-100" src={GameZillaLogo} alt="GameZillaLogo" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark">
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Card.Text className="text-white text-center">
                <p>
        At GameZilla, we are passionate about providing you with the best gaming experience. We believe that games have the power to inspire, entertain, and connect people from all walks of life. Our mission is to create a haven for gamers, where they can discover new adventures, immerse themselves in captivating worlds, and forge unforgettable memories.
      </p>
      <p>
        As a small independent game store, we take pride in curating a diverse selection of games from various genres and platforms. Whether you're a casual gamer, a seasoned enthusiast, or someone looking to explore the gaming realm for the first time, we have something for everyone. Our dedicated team carefully selects each title, ensuring that it meets our standards of quality, innovation, and entertainment value.
      </p>
      <p>
        At GameZilla, we believe in fostering a sense of community. We understand that gaming is not just about the games themselves but also about the connections and friendships that can be formed through shared experiences. That's why we host regular gaming events, tournaments, and meet-ups where gamers can come together, share their passion, and forge new bonds.
      </p>
      <p>
        Customer satisfaction is at the heart of everything we do. Our friendly and knowledgeable staff is always ready to assist you in finding the perfect game or providing recommendations based on your preferences. We strive to create a welcoming and inclusive environment where gamers of all backgrounds feel comfortable and supported.
      </p>
      <p>
        We also value your convenience. In addition to our physical store, we offer an easy-to-use online platform where you can browse our catalog, make purchases, and have your games delivered right to your doorstep. We want to make your gaming experience as seamless and enjoyable as possible.
      </p>
      <p>
        Thank you for choosing GameZilla as your go-to game store. We are honored to be a part of your gaming journey and look forward to serving you with the latest releases, exceptional customer service, and a passion for all things gaming.
      </p>
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

export default AboutUs;
