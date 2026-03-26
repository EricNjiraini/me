import React, { useEffect, useState } from 'react';
import './Projects.css'; // Assuming you have a CSS file for styling

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from GitHub API
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/EricNjiraini/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">  
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p>{project.description || 'No description available'}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;