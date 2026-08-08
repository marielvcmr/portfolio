import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <h3 className="project-card-title">{project.title}</h3>
      
      <div className="project-card-illustration">
        {project.type === "text" ? (
          <div className="project-brand-box">
            <span className="brand-dot">⚿</span> {project.content}
          </div>
        ) : (
          <span className="project-emoji-icon">{project.content}</span>
        )}
      </div>

      <p className="project-card-desc">{project.desc}</p>
    </div>
  );
}
