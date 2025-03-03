import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/ProjectCard.css'

const ProjectCard = ({ title, description, image, link, demo, demo_coming_soon }) => {
  return (
    <Card className={`project-card`}>
      <div className="card-img-container">
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link} className="btn btn-primary me-1" target="_blank" rel="noopener noreferrer">
          View Project
        </a>

        {demo && (
          <a href={demo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}

        {demo_coming_soon && (
          <button className="btn btn-secondary demo-cs-button disabled" disabled>
            Demo Coming Soon
          </button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
