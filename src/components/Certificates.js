import React, { useState } from 'react';
import CertificiateCard from './CertificateCard.js';
import { Container, Modal } from 'react-bootstrap';


import placeholderImg1 from '../img/CertificateOfCompletion_Learning SQL Programming.png';
import placeholderImg2 from '../img/CertificateOfCompletion_Become a Software Developer.png';
import placeholderImg3 from '../img/CertificateOfCompletion_Programming Foundations Databases.png';
import placeholderImg4 from '../img/CertificateOfCompletion_Programming Foundations Fundamentals.png';
import placeholderImg5 from '../img/CertificateOfCompletion_Data Science Professional Certificate by KNIME.png';

const certs = [
  {
    title: 'Become a Software Developer',
    description: 'Click to enlarge',
    image: placeholderImg2,
  },
  {
    title: 'Data Science Professional Certificate',
    description: 'Click to enlarge',
    image: placeholderImg5,
  },
  {
    title: 'Programming Foundations: Databases',
    description: 'Click to enlarge',
    image: placeholderImg3,
  },
  {
    title: 'Learning SQL Programming',
    description: 'Click to enlarge',
    image: placeholderImg1,
  },
  {
    title: 'Programming Foundations: Fundamentals',
    description: 'Click to enlarge',
    image: placeholderImg4,
  },
];

const Certificates = () => {
  const [showModal, setShowModal] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(''); 

  const handleCardClick = (image) => {
    setSelectedImage(image); 
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <Container id="projects" className="mt-5">
      <h2 className="text-center mb-3">Certificates</h2>

      <div className="grid-container">
        {certs.map((cert, index) => (
          <div key={index} className="grid-item">
            <CertificiateCard
              title={cert.title}
              description={cert.description}
              image={cert.image}
              onClick={handleCardClick}
            />
          </div>
        ))}
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Enlarged Certificate"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Certificates;
