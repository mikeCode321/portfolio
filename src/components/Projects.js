import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="container mt-5">
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="project1.jpg" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description of project 1.</p>
            </div>
          </div>
        </div>
        {/* Repeat for other projects */}
      </div>
    </div>
  );
};

export default Projects;
