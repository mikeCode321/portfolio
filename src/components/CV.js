import React from 'react';
import { Container } from 'react-bootstrap';
import './CV.css';
import pdf from "../img/Curriculum Vitae.pdf"
const CV = () => {
  return (
    <Container id="cv">
      <div id='cv-pdf-container'>
        <iframe src={pdf+"#toolbar=0"} title='cv-pdf' width="600" height="800"></iframe>
      </div>
    </Container>
  );
};

export default CV;
