import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import spaceship from '../img/Screenshot.png'
import asteroid from '../img/asteroid.png'
// import smallplanet2 from '../img/small-planet-2.png'
// import smallplanet1 from '../img/small-planet-1.png'

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const skills = [
    { id: 'advanced', label: 'Advanced Topics' },
    { id: 'machineLearning', label: 'Machine Learning & AI' },
    { id: 'dataScience', label: 'Data Science' },
    { id: 'softwareDev', label: 'Software Development' },
    { id: 'embeddedSystems', label: 'Embedded Systems' },
    { id: 'automation', label: 'Automation' },
    { id: 'cloud', label: 'Cloud Services' },
    { id: 'programming', label: 'Programming Languages' },
    { id: 'databases', label: 'Databases' },
  ];

  const skillsData = {
    programming: ["Python", "JavaScript", "Java", "C++", "C", "ReactJS", "HTML", "CSS"],
    databases: ["MongoDB", "SQL Server", "Elastic Search"],
    machineLearning: ["Convolutional Neural Networks (CNN)", "Reinforcement Learning", "Large Language Models (LLM)", "Feature Engineering", "Machine Learning Deployment"],
    dataScience: ["Bayesian Methods", "Data Collection", "Data Preprocessing", "Data Visualization", "A/B Tests"],
    cloud: ["Azure", "Amazon Web Services (AWS)"],
    automation: ["Docker", "Kubernetes", "Jenkins"],
    softwareDev: ["Frontend Development", "API Design", "RESTful APIs", "Backend Development"],
    embeddedSystems: ["Signal Processing", "2D/3D Modeling", "3D Printing", "Bluetooth Low Energy (BLE)", "Zephyr RTOS", "Circuitry"],
    advanced: ["Advanced Mathematics", "Advanced Algorithms", "Advanced Statistics", "Data Science"]
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(prevState => !prevState);
    setActiveSkill(null);
  };

  const handleSkillSelect = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
    setDropdownOpen(false);  
  };

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
          <div className="skills-section">
            <h1 className="skills-header" onClick={handleDropdownToggle} >Skills
              <span className="dropdown-icon"> {dropdownOpen ? "▲" : "▼"}</span>
            </h1>
            <div className="skills-list">
              <div className={`skills-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`skill-item ${activeSkill === skill.id ? 'active' : ''}`}
                    onClick={() => handleSkillSelect(skill.id)}
                  >
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>
                
            {Object.keys(skillsData).map((category) => (
              <div key={category} className={`skill-content ${activeSkill === category ? 'show' : ''}`}>
                <div className="scrolling-banner">
                  {skillsData[category].map((skill, index) => (
                    <div key={index} className="skill-banner">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}

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
