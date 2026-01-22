import React from 'react';
import './LoadingSpinner-improved.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <p className="loading-text">Chargement des accompagnants...</p>
    </div>
  );
};

export default LoadingSpinner;
