import React from 'react';
import StatusBadge from './StatusBadge';
import './StatusIndicator.css';

const StatusIndicator = ({ 
  status, 
  isChecking = false, 
  lastCheck = null, 
  showLabel = true,
  size = 'medium',
  position = 'top-right'
}) => {
  const getPositionClass = () => {
    switch (position) {
      case 'top-left':
        return 'indicator-top-left';
      case 'top-right':
        return 'indicator-top-right';
      case 'bottom-left':
        return 'indicator-bottom-left';
      case 'bottom-right':
        return 'indicator-bottom-right';
      default:
        return 'indicator-top-right';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'indicator-small';
      case 'large':
        return 'indicator-large';
      default:
        return 'indicator-medium';
    }
  };

  return (
    <div className={`status-indicator-wrapper ${getPositionClass()} ${getSizeClass()}`}>
      <StatusBadge 
        status={status} 
        isChecking={isChecking} 
        lastCheck={showLabel ? lastCheck : null}
      />
    </div>
  );
};

export default StatusIndicator;
