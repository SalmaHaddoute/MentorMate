import React from 'react';
import './BonjourSection.css';

const BonjourSection = () => {
  return (
    <div className="bonjour-section">
      <div className="bonjour-header">
        <h2 className="bonjour-title">Bonjour Maria 👋</h2>
        <p className="bonjour-subtitle">Prête à commencer ta révision ? Un accompagnant est disponible pour t'aider.</p>
      </div>
      <div className="streak-card">
        <span className="streak-label">Streak actuel</span>
        <div className="streak-info">
          <span className="streak-icon">🔥</span>
          <span className="streak-days">7 jours</span>
        </div>
      </div>
    </div>
  );
};

export default BonjourSection;
