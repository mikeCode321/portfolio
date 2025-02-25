import React from 'react';
import { Card } from 'react-bootstrap';

const CertificiateCard = ({ title, description, image, onClick }) => {
  return (
    <Card className="cert-card" onClick={() => onClick(image)}>
      <div className="card-img-container">
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{
            width: '100%', 
            height: 'auto', 
            maxHeight: '400px', 
            objectFit: 'contain',
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CertificiateCard;
