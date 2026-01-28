import React, { useState, useEffect } from 'react';
import './AccompagnantList.css';
import LoadingSpinner from './LoadingSpinner';
import EmptyState from './EmptyState';
import StatusIndicator from './StatusIndicator';
import useStatusCheck from '../../hooks/useStatusCheck';

const AccompagnantListWithStatus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Données initiales pour le hook de statut
  const initialData = [
    {
      id: 1,
      title: "Accompagnement Personnalisé",
      description: "Suivi individualisé avec mentor expert pour atteindre vos objectifs professionnels",
      rating: "+4.9 ⭐",
      image: "https://picsum.photos/seed/mentor1/70/70",
      status: "available"
    },
    {
      id: 2,
      title: "Coaching de Carrière",
      description: "Développez votre potentiel professionnel et trouvez votre voie",
      rating: "+4.8 ⭐",
      image: "https://picsum.photos/seed/mentor2/70/70",
      status: "available"
    },
    {
      id: 3,
      title: "Mentorat Tech",
      description: "Apprentissage des technologies modernes avec des experts du secteur",
      rating: "+5.0 ⭐",
      image: "https://picsum.photos/seed/mentor3/70/70",
      status: "busy"
    },
    {
      id: 4,
      title: "Accompagnement Startup",
      description: "Lancez votre projet entrepreneurial avec succès",
      rating: "+4.7 ⭐",
      image: "https://picsum.photos/seed/mentor4/70/70",
      status: "available"
    },
    {
      id: 5,
      title: "Leadership & Management",
      description: "Développez vos compétences de leader et manager",
      rating: "+4.9 ⭐",
      image: "https://picsum.photos/seed/mentor5/70/70",
      status: "available"
    },
    {
      id: 6,
      title: "Transformation Digitale",
      description: "Accompagnez votre transformation digitale avec nos experts",
      rating: "+4.6 ⭐",
      image: "https://picsum.photos/seed/mentor6/70/70",
      status: "busy"
    }
  ];

  // Utiliser le hook de vérification de statut
  const {
    data: accompagnements,
    isChecking,
    lastCheck,
    checkStatus,
    updateItemStatus
  } = useStatusCheck(initialData);

  // Simulation d'un appel API initial
  useEffect(() => {
    const fetchAccompagnements = async () => {
      try {
        setIsLoading(true);
        // Simuler un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 2000));
        setError(null);
      } catch (err) {
        setError("Erreur lors du chargement des accompagnants");
        console.error('Error fetching accompagnements:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccompagnements();
  }, []);

  const handleRefresh = () => {
    checkStatus();
  };

  const handleContact = async (accompagnementId) => {
    try {
      // Simuler une action de contact qui change le statut
      await updateItemStatus(accompagnementId, 'busy');
      console.log(`Contact initié avec l'accompagnant ${accompagnementId}`);
    } catch (error) {
      console.error('Erreur lors du contact:', error);
    }
  };

  // État de chargement
  if (isLoading) {
    return (
      <div className="accompagnant-section">
        <div className="accompagnant-header">
          <h2 className="accompagnant-title">Accompagnements disponibles</h2>
          <a href="#" className="see-all-link">Voir tous</a>
        </div>
        <LoadingSpinner />
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div className="accompagnant-section">
        <div className="accompagnant-header">
          <h2 className="accompagnant-title">Accompagnements disponibles</h2>
          <a href="#" className="see-all-link">Voir tous</a>
        </div>
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={handleRefresh} className="btn-retry">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  // État liste vide
  if (accompagnements.length === 0) {
    return (
      <div className="accompagnant-section">
        <div className="accompagnant-header">
          <h2 className="accompagnant-title">Accompagnements disponibles</h2>
          <a href="#" className="see-all-link">Voir tous</a>
        </div>
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="accompagnant-section">
      <div className="accompagnant-header">
        <h2 className="accompagnant-title">Accompagnements disponibles</h2>
        <div className="header-actions">
          <button 
            onClick={handleRefresh} 
            className={`btn-refresh-status ${isChecking ? 'checking' : ''}`}
            disabled={isChecking}
          >
            <span className="refresh-icon">🔄</span>
            {isChecking ? 'Vérification...' : 'Vérifier les statuts'}
          </button>
          <a href="#" className="see-all-link">Voir tous</a>
        </div>
      </div>
      
      {lastCheck && (
        <div className="status-info">
          <span className="last-check-text">
            Dernière vérification: {new Date(lastCheck).toLocaleTimeString('fr-FR')}
          </span>
        </div>
      )}
      
      <div className="accompagnant-list">
        {accompagnements.map((accompagnement) => (
          <div key={accompagnement.id} className="accompagnant-card" data-status={accompagnement.status}>
            <StatusIndicator 
              status={accompagnement.status} 
              isChecking={isChecking}
              lastCheck={lastCheck}
              size="small"
              position="top-right"
            />
            <div className="status-indicator"></div>
            <div className="accompagnant-card-content">
              <img 
                src={accompagnement.image} 
                alt={accompagnement.title}
                className="accompagnant-image"
              />
              <div className="accompagnant-info">
                <h3 className="accompagnant-name">{accompagnement.title}</h3>
                <p className="accompagnant-description">{accompagnement.description}</p>
                <div className="accompagnant-stats">
                  <span className="accompagnant-rating">{accompagnement.rating}</span>
                  <span className="accompagnant-sessions">12 sessions</span>
                </div>
              </div>
            </div>
            <button 
              className="contact-btn"
              onClick={() => handleContact(accompagnement.id)}
              disabled={accompagnement.status === 'offline'}
            >
              {accompagnement.status === 'offline' ? 'Hors ligne' : 'Contacter'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccompagnantListWithStatus;
