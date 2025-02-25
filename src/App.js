import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes here
import NavBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Certificates from './components/Certificates'
import Footer from './components/Footer';
import CV from './components/CV'
import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
