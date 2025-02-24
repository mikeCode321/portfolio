import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import './Home.css';  // Import custom CSS for more styling

const Home = () => {
  return (
    <Container fluid className="home-container d-flex justify-content-center align-items-center flex-column">
      <div className="home-card-container">
        <Card className="home-card text-center p-4 home-card-welcome">
          <Card.Body>
            <Card.Title as="h1" className="home-title">
              Welcome to My Portfolio
            </Card.Title>
            <Card.Text className="home-text">
              My name is <span className="highlighted-text">Maikl Awad</span>, I am a visionary, developer, researcher, 
              and a lifelong learner. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="home-card text-center p-4 home-card-projects">
          <Card.Body>
            <Card.Title as="h2" className="home-title">Projects</Card.Title>
            <Card.Text className="home-text">
              Check out my recent projects and research work in the 'Projects' section.
            </Card.Text>
            <Button variant="primary" href="#projects" className="home-btn">View Projects</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
