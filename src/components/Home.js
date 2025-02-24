import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
      <Jumbotron>
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a web developer passionate about creating modern, responsive websites.
        </p>
        <Button variant="primary" href="#about">Learn More</Button>
      </Jumbotron>
    </div>
  );
};

export default Home;
