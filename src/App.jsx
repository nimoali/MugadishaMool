import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './assets/pages/Menu';
import Home from './assets/pages/Home';
import Gallery from './assets/pages/Gallary';
import About from './assets/pages/About';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/gallary' element ={<Gallery/>} />
          <Route path='/About' element ={<About/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
