import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { Collapse} from 'antd';
import './FAQ.css'; // Import the custom CSS file

const { Panel } = Collapse;

function FAQ() {
  return (
    <div className="bg-dark d-flex flex-column min-vh-100">
      <NavigationBar />
      <h2 className="text-white align-self-start mx-auto pt-3">Frequently Asked Questions</h2>
      <Container fluid className="vh-100 d-flex flex-column flex-grow-1">
        <div id="faq" className="block faqBlock flex-grow-1">
          <Container fluid>
            <div className="titleHolder">
            </div>
            <Collapse defaultActiveKey={['1']} className="text-white">
              <Panel header={<h6 className="text-white">How does GameZilla select the games in its collection?</h6>} key="1" className="text-white">
                <p>
                At GameZilla, we carefully curate our game collection to ensure that every title meets our high standards. We prioritize quality over quantity and handpick games that offer exceptional gameplay, immersive experiences, and unique appeal. Our team of passionate gamers thoroughly researches and evaluates each game before adding it to our collection.
                </p>
              </Panel>
              <Panel header={<h6 className="text-white">Can I request a specific game to be included in GameZilla's collection?</h6>} key="2" className="text-white">
                <p>
                Absolutely! We value your input and would love to hear your game recommendations. While we cannot guarantee that every requested game will be added, we take customer suggestions into consideration when expanding our collection. Feel free to contact us with your game suggestions, and we'll do our best to accommodate them.
                </p>
              </Panel>
              <Panel header={<h6 className="text-white">What platforms are the games on GameZilla available for?</h6>} key="3" className="text-white">
                <p>
                GameZilla offers games for various platforms, including PC, PlayStation, and Xbox. Each game listing on our website is compatible with all current modern platforms, save the Nintendo Switch (only some), so you can easily find games that are playable on your preferred gaming system.
                </p>
              </Panel>
              <Panel header={<h6 className="text-white">How often does GameZilla update its game collection?</h6>} key="4" className="text-white">
                <p>
                We strive to keep our game collection fresh and up-to-date. GameZilla regularly adds new titles to our collection to offer our customers a diverse and exciting selection of games. Be sure to check our website frequently or subscribe to our newsletter to stay informed about the latest game releases and additions to our collection.
                </p>
              </Panel>
              <Panel header={<h6 className="text-white">Does GameZilla offer any special promotions or discounts?</h6>} key="5" className="text-white">
                <p>
                Yes! GameZilla occasionally runs special promotions and offers discounts on selected games. Keep an eye on our website and follow us on social media to stay informed about any ongoing promotions or exclusive deals. We believe in providing value to our customers and making gaming more accessible.
                </p>
              </Panel>
              <Panel header={<h6 className="text-white">How can I contact GameZilla for support or further assistance?</h6>} key="6" className="text-white">
                <p>
                We're here to help! If you have any questions, need assistance, or require support, you can reach out to our dedicated customer service team. You can contact us via email or phone! We take pride in offering prompt and friendly customer support to ensure your gaming experience with GameZilla is enjoyable and hassle-free.
                </p>
              </Panel>
            </Collapse>
            <div className="quickSupport pt-3 align-self-start mx-auto">
              <h3 className="text-white">Want quick support?</h3>
              <p className="text-white">
                Contact Us at 555-0129 or at Gamezilla@email.com!
              </p>
            </div>
          </Container>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default FAQ;
