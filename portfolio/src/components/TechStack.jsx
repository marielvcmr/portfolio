import React from 'react';
import './TechStack.css';

export default function TechStack() {
  // Array de objetos
  const technologies = [
    { name: "Python", fileName: "python.png" },
    { name: "C++", fileName: "cpp.png" },
    { name: "Java", fileName: "java.png" },
    { name: "JavaScript", fileName: "javascript.png" },
    { name: "React", fileName: "react.png" },
    { name: "CSS", fileName: "css.png" },
    { name: "Git", fileName: "git.png" },,
    { name: "GitHub", fileName: "github.png" },
    { name: "HTML", fileName: "html.png" },
    { name: "PostgresSQL", fileName: "postgressql.png" }
    
  ];

  // Vite function to resolve image direction dinamically
  const getLogoUrl = (fileName) => {
    return new URL(`../assets/logos/${fileName}`, import.meta.url).href;
  };

  return (
    <section className="tech-stack-belt">
      <div className="tech-grid">

        {technologies.map((tech, index) => (
          <div key={index} className="tech-item-box">
            <img 
              src={getLogoUrl(tech.fileName)} 
              alt={`${tech.name} logo`} 
              className="tech-logo-img"
              // placeholder for an unfound image
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <span className="tech-name-text">{tech.name}</span>
          </div>
        ))}

      </div>
    </section>
  );
}
