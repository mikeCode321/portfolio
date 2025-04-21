import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes here
import Home from './components/Home';
import Projects from './components/Projects';
import Certificates from './components/Certificates'
import CV from './components/CV'
import DeepLearningSoccerPDF from './components/PDFViewer';

import './App.css';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/pdf" element={<DeepLearningSoccerPDF />}/>
          </Routes>
        </main>
    </Router>
  );
}

export default App;
