import React from 'react';
import './GithubRepoLink.css';

export default function GithubRepoLink({ repoUrl }) {
  // Si el proyecto no tiene un repositorio configurado en el JSON, el componente se oculta
  if (!repoUrl) return null;

  // Función para calcular la ruta exacta hacia la carpeta de logos generales
  const getGithubLogoUrl = () => {
    return new URL('../assets/logos/github.png', import.meta.url).href;
  };

  return (
    <section className="github-redirect-section">
      <a 
        href={repoUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-icon-anchor"
      >
        <img 
          src={getGithubLogoUrl()} 
          alt="GitHub Repository Link" 
          className="github-logo-img-element"
          onError={(e) => { e.target.style.display = 'none'; }}/>
      </a>
    </section>
  );
}

