import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';

import './ProjectsContent.css'; 
import { projectData } from '../../data/projectData';

export default function ProjectsContent({onSelectProject}) {
  
  return (
    <div className="projects-view-container">
      <h2 className="projects-section-title">Explore some of my projects!</h2>
      
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => onSelectProject(project)} 
          />
        ))}
      </div>

    </div>
  );
}
