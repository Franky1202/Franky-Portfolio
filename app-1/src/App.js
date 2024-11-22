import React from'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Portfolio/Components/Pages/Navbar';
import Home from './Portfolio/Components/Pages/Home';
import About from './Portfolio/Components/Pages/About';
import Contact from './Portfolio/Components/Pages/Contact';
import CV from './Portfolio/Components/Pages/Cv';

function App() {
  return (
     <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  
  );
}

export default App;
