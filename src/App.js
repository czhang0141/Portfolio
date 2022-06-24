import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Image from './Images/Cristina.jpg'
import About from './Portfolio/About';
// import Resume from './Portfolio/Resume';
import Projects from './Portfolio/Projects';
import Contact from './Portfolio/Contact';
import Navbar from './Navbar/Navbar';
import './App.css';

function App() {
  return (
      <div className="App">
        <img src={Image} alt="Cristina Zhang" />
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<About />}>
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
