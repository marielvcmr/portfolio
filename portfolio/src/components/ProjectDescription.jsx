import React from 'react';
import './ProjectDescription.css';

export default function ProjectDescription({ title, description }) {
  return (
    <section className="project-desc-card">
      <h2 className="detail-project-title">{title}</h2>
      <p className="detail-project-text">{description}</p>
    </section>
  );
}
