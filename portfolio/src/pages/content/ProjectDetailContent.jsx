import React from 'react';
import ProjectDescription from '../../components/ProjectDescription';
import StackAccordion from '../../components/StackAccordion';
import GithubRepoLink from '../../components/GithubRepoLink';
import './ProjectDetailContent.css';

export default function ProjectDetailContent({ project, onBack }) {
  return (
    <div className="project-detail-container">

      <button 
        onClick={onBack}
        style={{
          alignSelf: 'flex-start',
          background: 'none',
          border: 'none',
          color: '#2e1065',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.85rem',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        ← Back to Projects
      </button>
      
      <ProjectDescription 
        title={project.name} 
        description={project.description} 
      />

      <div className = "detail-actions-row">
        <StackAccordion stack={project.stack} />
        <GithubRepoLink repoUrl={project.repo} />
      </div>

    </div>
  );
}
