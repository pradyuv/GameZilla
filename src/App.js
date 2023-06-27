import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import Games from './Games';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/Games.js" element={<Games />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      <Row>
        <Col>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Alert variant="primary">Le button</Alert>
            <Button>Test Button</Button>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </Col>
        <Col>
          {/* Content for the second column */}
        </Col>
      </Row>
    </div>
  );
}

export default App;
