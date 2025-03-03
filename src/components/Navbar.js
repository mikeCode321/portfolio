import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false); 
  
  const handleLinkClick = () => {
    setExpanded(false); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Navbar.Brand href="/portfolio" className="ml-4 custom-navbar-brand">Maikl Awad</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)} 
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ps-3">
          <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>
          <Nav.Link as={Link} to="/projects" onClick={handleLinkClick}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/certificates" onClick={handleLinkClick}>Certificates</Nav.Link>
          <Nav.Link id='navbar-cv-link' as={Link} to="/cv" onClick={handleLinkClick}>CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
