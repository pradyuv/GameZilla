import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import Games from './Games';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Genres from './Genres';
import Platforms from './Platforms';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import ThisGame from './ThisGame';


function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/genres" element={<Genres />} />
          <Route path="/platforms" element={<Platforms />} /> */}
          <Route exact path={"/thisgame"} component={<ThisGame/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
