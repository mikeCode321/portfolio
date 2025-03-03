import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Home.css';

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-card-container">
        <div className="home-card text-center p-4">
          <h1 className="home-title">Maikl Awad</h1>
          <div className="home-text">
            I am a visionary, developer, researcher, and a lifelong learner.
          </div>
          <Button className="home-btn" href="#projects">
            Explore My Work
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
