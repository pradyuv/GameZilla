import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './Games';
import AboutUs from './AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import ThisGame from './ThisGame';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirm from './Confirm';
import FAQ from './faq';


function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ/>} />
          <Route exact path={"/thisgame"} element={<ThisGame/>}></Route>
          <Route exact path="/cart" element={<Cart/>}> </Route>
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/confirm" element={<Confirm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
