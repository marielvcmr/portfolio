import React, { useState } from 'react';
import './ImageSlider.css';

export default function ImageSlider({ images, projectId, projectName }) {
  // 1. Estado para saber cuál es el índice de la imagen que se está mostrando
  const [currentIndex, setCurrentIndex] = useState(0);

  // Seguridad: si no hay un arreglo válido o está vacío, el componente se oculta
  if (!images || !Array.isArray(images) || images.length === 0) return null;

  // Constructor dinámico oficial de Vite para subcarpetas estructuradas
  const getProjectImageUrl = (projectFolder, fileName) => {
    return new URL(`../assets/projects/${projectFolder}/${fileName}`, import.meta.url).href;
  };

  // Función para avanzar a la siguiente imagen
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder a la imagen anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="project-slider-wrapper">
      <div className="slider-main-container">
        
        {/* Botón Flecha Izquierda (Solo se muestra si hay más de 1 imagen) */}
        {images.length > 1 && (
          <button className="slider-arrow-btn prev" onClick={handlePrev}>
            &#10094;
          </button>
        )}

        {/* El Marco Oscuro */}
        <div className="slider-frame">
          <img 
            src={getProjectImageUrl(projectId, images[currentIndex])} // Carga la imagen activa del arreglo
            alt={`${projectName} screenshot ${currentIndex + 1}`} 
            className="slider-img-element"
            onError={(e) => { 
              e.target.style.backgroundColor = '#334155'; 
              console.error("No se pudo cargar la imagen del slider.");
            }} 
          />
        </div>

        {/* Botón Flecha Derecha (Solo se muestra si hay más de 1 imagen) */}
        {images.length > 1 && (
          <button className="slider-arrow-btn next" onClick={handleNext}>
            &#10095;
          </button>
        )}
      </div>

      {/* Indicador de "Frame" o Burbujas de Progreso Inferiores */}
      <div className="slider-footer-info">
        <span className="frame-indicator-label"></span>
        {images.length > 1 && (
          <div className="slider-dots-container">
            {images.map((_, index) => (
              <span 
                key={index} 
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)} // Permite saltar a una imagen al hacer clic en la burbuja
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
