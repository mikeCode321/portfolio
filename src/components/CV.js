import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/CV.css';
import pdf from "../img/Curriculum Vitae.pdf";

const CV = () => {
  return (
    <Container id="cv">
      <div id='cv-pdf-container'>
        <iframe
          id='cv-pdf-iframe'
          src={pdf + "#toolbar=0"}
          title='cv-pdf'
          width="100%"
          height="100%"
          allowFullScreen=""
        ></iframe>
        <div className="cv-message">
          Media unavailable at the moment.
        </div>
      </div>
    </Container>
  );
};

export default CV;
