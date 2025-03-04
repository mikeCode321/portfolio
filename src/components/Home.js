import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
// import smallplanet1 from '../img/small-planet-1.png'
import spaceship from '../img/Screenshot.png'
// import smallplanet2 from '../img/small-planet-2.png'
import asteroid from '../img/asteroid.png'

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false); 
  };

  const toggleNavbar = () => {
    setExpanded(prevExpanded => !prevExpanded); 
    const toggler = document.querySelector('.homenav-toggler');
    toggler.classList.toggle('open');
  };
  
  return (
    <div className="home-container">
      <nav className="homenav">
        <a className="homenav-brand" href="/portfolio">Maikl Awad</a>
        <button
          className="homenav-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="homenav-toggler-icon"></span>
        </button>
        <div className={`homenavbar-collapse ${expanded ? 'show' : ''}`} id="homenav-bar">
          <ul className="homenavbar-nav">
            <li className="homenav-item">
              <Link className="homenav-link" to="/projects" onClick={handleLinkClick}>Projects</Link>
            </li>
            <li className="homenav-item">
              <Link className="homenav-link" to="/certificates" onClick={handleLinkClick}>Certificates</Link>
            </li>
            <li className="homenav-item">
              <Link className="homenav-link" to="/cv" onClick={handleLinkClick}>CV</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="parallax">
        <div className="bg"></div>
         <div className="content">
            <div className="chome-card">
              <div><h1 className="chome-title">Maikl Awad</h1></div>
              <div className="chome-text">
                I am a visionary, developer, researcher, and a lifelong learner.
              </div>
              <button className="chome-btn">
                <Link id='chome-btn-main' to="/projects" onClick={handleLinkClick}>Explore My Work</Link>
              </button>
            </div>
            <div class="mouse"></div>
            <div class="scroll"></div>
          </div>
          {/* <img src={smallplanet1} alt='small-planet-1' className='small-planet-1'/> */}
          <img src={spaceship} alt='spaceship' className='spaceship'/>
          <img src={asteroid} alt='asteroid' className='asteroid'/>
          {/* <div className='small-planet-2'></div> */}
      </div>

      <div class='main-content'>
        <div className="shadow"></div>
        <div className="static" style={{textAlign:"center"}}>
            <div>
              <p style={{textDecoration: "underline", marginBottom: "5px"}}>
                Hello!
              </p>
              <div>
                More Coming Soon...
              </div>
              <div>
                In the meantime click the link below
              </div>
               <div>
                <button className="chome-btn-secondary">
                  <Link id='chome-btn-main-secondary' to="/projects" onClick={handleLinkClick}>Explore My Work</Link>
                </button>
              </div>
            </div>
        </div>
      </div>

      <footer class="home-footer">
        <div class="footer-content">
          <div class="footer-section">
            <h5 class="footer-heading">Follow Me</h5>
            <ul class="social-links">
              <li>
                <a href="https://github.com/mikecode321" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/maikl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h5 class="footer-heading">Email</h5>
            <p class="contact-info">maiklawad311 (at) gmail (dot) com</p>
          </div>

          <div class="footer-section">
            <h5 class="footer-heading">Connect with Me</h5>
            <p class="contact-info">Feel free to reach out for collaborations or questions.</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; <span id="current-year"></span> Maikl Awad. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
