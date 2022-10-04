import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Portfolio/About';
import Projects from './Portfolio/Projects';
import Resume from './Portfolio/Resume';
import Contact from './Portfolio/Contact';
import Navbar from './Navbar/Navbar';
import './App.css';

function App() {
  return (
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
