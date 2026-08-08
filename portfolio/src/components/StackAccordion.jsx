import React, { useState } from 'react';
import './StackAccordion.css';

export default function StackAccordion({ stack }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!stack || stack.length === 0) return null;

  return (
    <section className="stack-accordion-section">
      <button 
        className={`accordion-trigger-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Stack used <span className="arrow-indicator">&gt;</span>
      </button>

      {isOpen && (
        <div className="accordion-content-panel">
          <p className="accordion-intro-phrase">This project was built using the following stack:</p>
          <ul className="accordion-list-element">
            {stack.map((tech, index) => (
              <li key={index}>• {tech}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
