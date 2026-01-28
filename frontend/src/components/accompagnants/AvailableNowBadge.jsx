import React from 'react';
import './AvailableNowBadge.css';

const AvailableNowBadge = ({ isVisible = true, count = 0, animated = true }) => {
  if (!isVisible || count === 0) return null;

  return (
    <div className={`available-now-badge ${animated ? 'animated' : ''}`}>
      <div className="badge-content">
        <div className="badge-icon">
          <span className="pulse-dot"></span>
          <span className="available-icon">🟢</span>
        </div>
        <div className="badge-text">
          <span className="available-count">{count}</span>
          <span className="available-label">
            {count === 1 ? 'disponible maintenant' : 'disponibles maintenant'}
          </span>
        </div>
      </div>
      <div className="badge-glow"></div>
    </div>
  );
};

export default AvailableNowBadge;
