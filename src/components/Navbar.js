import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false); // State to track whether the navbar is expanded

  // Function to handle closing the navbar after a link is clicked
  const handleLinkClick = () => {
    setExpanded(false); // Close the navbar
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Navbar.Brand href="/portfolio" className="ml-4 custom-navbar-brand">Maikl Awad</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)} // Toggle the navbar state when clicked
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ps-3">
          <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>
          <Nav.Link as={Link} to="/projects" onClick={handleLinkClick}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/certificates" onClick={handleLinkClick}>Certificates</Nav.Link>
          <Nav.Link as={Link} to="/cv" onClick={handleLinkClick}>CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
