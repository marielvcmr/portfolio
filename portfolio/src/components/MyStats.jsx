import React from 'react';
import './MyStats.css';
import { projectData } from '../data/projectData.js';

export default function MyStats() {
  const totalProjects = projectData.length;

  // Calculate tech usage based on occurrences in projectData
  const techCounts = {};
  projectData.forEach(project => {
    project.stack.forEach(tech => {
      techCounts[tech] = (techCounts[tech] || 0) + 1;
    });
  });

  const totalTechOccurrences = Object.values(techCounts).reduce((a, b) => a + b, 0);

  // A softer and more distinct color palette for the tech stack
  const colors = [
    '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6',
    '#f79646', '#1f497d', '#4f6228', '#772c2a', '#e3b505',
    '#607d8b', '#b33939', '#218c74', '#9e6d71', '#d4a017'
  ];

  const stats = Object.entries(techCounts)
    .map(([tech, count]) => ({
      tech,
      percentage: Math.round((count / totalTechOccurrences) * 100),
      count
    }))
    .sort((a, b) => b.count - a.count)
    .map((stat, i) => ({
      ...stat,
      color: colors[i % colors.length]
    }));

  // Build the conic-gradient string dynamically
  let currentPercent = 0;
  const gradientStops = stats.map((stat, i) => {
    const start = currentPercent;
    let end = currentPercent + stat.percentage;
    if (i === stats.length - 1) end = 100; // ensure the last slice completes the circle
    currentPercent = end;
    return `${stat.color} ${start}% ${end}%`;
  });

  const conicGradient = `conic-gradient(${gradientStops.join(', ')})`;

  return (
    <section className="stats-section-container">
      <div className="stats-dashboard-layout">

        {/* Projects Built Card */}
        <div className="projects-built-card">
          <span className="projects-built-number">{totalProjects}</span>
          <span className="projects-built-text">Projects Built</span>
        </div>

        {/* Legend */}
        <div className="stats-legend-card">
          <h3 className="legend-card-title">Technologies Used</h3>
          <div className="legend-list-grid">
            {stats.map((stat, index) => (
              <div key={index} className="legend-item-row">
                <span
                  className="legend-color-box"
                  style={{ backgroundColor: stat.color }}
                ></span>
                <span className="legend-tech-name">{stat.tech}</span>
                <span className="legend-percentage-value">{stat.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Pie Chart */}
        <div
          className="pure-css-pie-chart"
          style={{ background: conicGradient }}
        ></div>

      </div>
    </section>
  );
}
