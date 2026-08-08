import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';

import './ProjectsContent.css'; 

export default function ProjectsContent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    { id: 1, title: "FlowSheet", desc: "System to manage projects and employees", type: "text", content: "FlowSheet" },
    { id: 2, title: "Mi Chinita", desc: "System to manage a Dental Clinic", type: "icon", content: "🦷" },
    { id: 3, title: "IA for a Captcha", desc: "IA that deciphers a 4-digit captcha", type: "icon", content: "🤖" },
    { id: 4, title: "Mi Chinita", desc: "System to manage a Dental Clinic", type: "icon", content: "🦷" }
  ];

  // Función directa que dispara la alerta nativa con la info del proyecto
  const handleCardClick = (project) => {
    alert(`Proyecto: ${project.title}\nDescripción: ${project.desc}`);
  };

  return (
    <div className="projects-view-container">
      <h2 className="projects-section-title">Explore some of my projects!</h2>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </div>

      {/* Si el usuario hizo clic en una tarjeta, se abre la ventana especial */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
