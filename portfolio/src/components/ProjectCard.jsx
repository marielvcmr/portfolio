import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick }) {

    const getLogoUrl = (projectFolder, fileName) => {
    return new URL(`../assets/projects/${projectFolder}/${fileName}`, import.meta.url).href;
  };

  return (
    <div className="project-card" onClick={onClick}>
      <h3 className="project-card-title">{project.name}</h3>
      
      <div className="project-card-illustration">
        {project.iconType === "image" ? (
          <div className="project-brand-box">
            <img 
              src={getLogoUrl(project.id, project.iconContent)} 
              alt={`${project.name} logo`} 
              className="card-brand-logo-img" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ) : (
          <span className="project-emoji-icon">{project.iconContent}</span>
        )}
      </div>

      <p className="project-card-desc">{project.about}</p>
    </div>
  );
}
