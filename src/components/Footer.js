import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-left">
          {/* Middle Section: Social Links */}
          <Col md={4} className="mb-2">
            <h5 className="footer-heading">Follow Me</h5>
            <ul className="social-links">
              <li>
                <a href="https://github.com/mikecode321" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/maikl" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>

          {/* Left Section: Email */}
          <Col md={4} className="mb-2">
            <h5 className="footer-heading">Email</h5>
            <p className="contact-info">
              maiklawad311 (at) gmail (dot) com
            </p>
          </Col>

          {/* Right Section: Connect with Me */}
          <Col md={4} className="mb-2">
            <h5 className="footer-heading">Connect with Me</h5>
            <p className="contact-info">
              Feel free to reach out for collaborations or questions.
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-2">
            <p>&copy; {new Date().getFullYear()} Maikl Awad. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
