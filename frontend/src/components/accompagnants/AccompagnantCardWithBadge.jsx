import React from 'react';
import './AccompagnantCardWithBadge.css';
import StatusIndicator from './StatusIndicator';
import AvailableNowBadge from './AvailableNowBadge';

const AccompagnantCardWithBadge = ({ 
  accompagnement, 
  isChecking = false, 
  lastCheck = null,
  showAvailableBadge = false,
  onContact 
}) => {
  const { id, title, description, rating, image, status } = accompagnement;

  const handleContact = () => {
    if (status !== 'offline' && onContact) {
      onContact(id);
    }
  };

  return (
    <div className={`accompagnant-card-with-badge ${status}`} data-status={status}>
      {/* Badge "Disponible maintenant" */}
      {showAvailableBadge && status === 'available' && (
        <div className="available-badge-container">
          <AvailableNowBadge count={1} animated={true} />
        </div>
      )}
      
      {/* Indicateur de statut */}
      <StatusIndicator 
        status={status} 
        isChecking={isChecking}
        lastCheck={lastCheck}
        size="small"
        position="top-right"
      />
      
      {/* Ancien indicateur de statut (conservé pour compatibilité) */}
      <div className="status-indicator"></div>
      
      <div className="accompagnant-card-content">
        <img 
          src={image} 
          alt={title}
          className="accompagnant-image"
        />
        <div className="accompagnant-info">
          <h3 className="accompagnant-name">{title}</h3>
          <p className="accompagnant-description">{description}</p>
          <div className="accompagnant-stats">
            <span className="accompagnant-rating">{rating}</span>
            <span className="accompagnant-sessions">12 sessions</span>
          </div>
        </div>
      </div>
      
      <button 
        className={`contact-btn ${status}`}
        onClick={handleContact}
        disabled={status === 'offline'}
      >
        {status === 'offline' ? 'Hors ligne' : 'Contacter'}
      </button>
    </div>
  );
};

export default AccompagnantCardWithBadge;
