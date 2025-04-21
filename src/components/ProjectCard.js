import React, { useState } from 'react';
import '../styles/ProjectCard.css'
import { Card, Modal, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, image, link, demo, demo_coming_soon, asset, video }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
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
        
        {link && (
        <a href={link} className="btn btn-primary me-1" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        )}

         {asset && (
            <a href='#/pdf' className="btn btn-primary me-1" target="_blank" rel="noopener noreferrer" >
              View Project
            </a>
          )}

        
        {video && (
          <button className="btn btn-secondary" onClick={handleOpenModal}>
            Demo
          </button>
        )}

        
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

     <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title} – Demo Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              src={video}
              title="Video Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
};

export default ProjectCard;
