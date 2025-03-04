import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard'; 
import { Container } from 'react-bootstrap';
import { getProjects } from '../data/projectData'; 
import NavBar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchedProjects = getProjects();  
    setProjects(fetchedProjects);  
  }, []);

  return (
    <>
    <NavBar />
    <Container id="projects" className="mt-3">
      <h2 className="text-center mb-3">Projects</h2>

      <div className="grid-container">
        {projects.map((project, index) => (
          <div key={index} className="grid-item">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              demo={project.demo} 
              demo_coming_soon={project.demo_coming_soon}
            />
          </div>
        ))}
      </div>
    </Container>
    <ScrollToTop /> 
    <Footer />
    </>
  );
};

export default Projects;
