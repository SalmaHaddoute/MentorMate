import React from 'react';
import './EmptyState-improved.css';

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <div className="empty-state-icon">
        <span className="icon-emoji">🔍</span>
      </div>
      <h3 className="empty-state-title">Aucun accompagnant disponible</h3>
      <p className="empty-state-description">
        Il n'y a aucun accompagnant disponible pour le moment. 
        Veuillez réessayer plus tard ou contacter notre support.
      </p>
      <div className="empty-state-actions">
        <button className="btn-refresh">
          <span className="refresh-icon">🔄</span>
          Actualiser
        </button>
        <button className="btn-contact-support">
          Contacter le support
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
