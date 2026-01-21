import React from 'react';
import './AccompagnementCard.css';

const AccompagnementCard = () => {
  return (
    <div className="accompagnement-card">
      <div className="accompagnement-header">
        <div className="accompagnement-badge">
          <span className="badge-icon">👥</span>
          <span className="badge-text">3 accompagnants disponibles maintenant</span>
        </div>
        <h3 className="accompagnement-title">Besoin d'aide pour démarrer ?</h3>
        <p className="accompagnement-description">
          Nos accompagnants sont là pour vous guider dans votre parcours d'apprentissage. 
          Obtenez de l'aide personnalisée pour atteindre vos objectifs plus rapidement.
        </p>
      </div>
      <div className="accompagnement-actions">
        <button className="btn-primary">
          Demander de l'aide maintenant
        </button>
        <button className="btn-secondary">
          Voir les accompagnants
        </button>
      </div>
    </div>
  );
};

export default AccompagnementCard;
