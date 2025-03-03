import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust path if necessary

const ProjectSlider = ({ projects }) => {
  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': projects.length }}>
        {projects.map((project, index) => (
          <div className="item" style={{ '--position': index }} key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                demo={project.demo || false} // Use project.demo value or fallback to false
                demo_coming_soon={project.demo_coming_soon || false} // Same here
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
