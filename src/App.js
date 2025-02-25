import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes here
import NavBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
// import Certificates from './components/Certificates'
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/certificates" element={<Certificates />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
