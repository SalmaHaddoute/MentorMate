import React from 'react';
import './StatusBadge.css';

const StatusBadge = ({ status, isChecking = false, lastCheck = null }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'available':
        return {
          label: 'Disponible',
          color: '#10b981',
          bgColor: 'rgba(16, 185, 129, 0.1)',
          borderColor: 'rgba(16, 185, 129, 0.3)',
          icon: '🟢'
        };
      case 'busy':
        return {
          label: 'Occupé',
          color: '#f59e0b',
          bgColor: 'rgba(245, 158, 11, 0.1)',
          borderColor: 'rgba(245, 158, 11, 0.3)',
          icon: '🟡'
        };
      case 'offline':
        return {
          label: 'Hors ligne',
          color: '#6b7280',
          bgColor: 'rgba(107, 114, 128, 0.1)',
          borderColor: 'rgba(107, 114, 128, 0.3)',
          icon: '🔴'
        };
      default:
        return {
          label: 'Inconnu',
          color: '#64748b',
          bgColor: 'rgba(100, 116, 139, 0.1)',
          borderColor: 'rgba(100, 116, 139, 0.3)',
          icon: '⚪'
        };
    }
  };

  const config = getStatusConfig(status);

  const formatLastCheck = (date) => {
    if (!date) return '';
    
    const now = new Date();
    const checkTime = new Date(date);
    const diffMs = now - checkTime;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    
    if (diffSecs < 60) {
      return `Il y a ${diffSecs}s`;
    } else if (diffMins < 60) {
      return `Il y a ${diffMins} min`;
    } else {
      return checkTime.toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }
  };

  return (
    <div className="status-badge-container">
      <div 
        className={`status-badge ${isChecking ? 'checking' : ''}`}
        style={{
          color: config.color,
          backgroundColor: config.bgColor,
          borderColor: config.borderColor
        }}
      >
        <div className="status-indicator">
          <span className="status-icon">{config.icon}</span>
          {isChecking && <div className="checking-dot"></div>}
        </div>
        <span className="status-label">{config.label}</span>
      </div>
      
      {lastCheck && (
        <div className="status-timestamp">
          <span className="timestamp-text">{formatLastCheck(lastCheck)}</span>
        </div>
      )}
    </div>
  );
};

export default StatusBadge;