import React, { useState, useEffect } from 'react';
import './AccompagnantList-improved.css';
import LoadingSpinner from './LoadingSpinner';
import EmptyState from './EmptyState';
import AccompagnantCardWithBadge from './AccompagnantCardWithBadge';
import useStatusCheck from '../../hooks/useStatusCheck';
import useAvailableCount from '../../hooks/useAvailableCount';
import AvailableNowBadge from './AvailableNowBadge';

const AccompagnantListWithAvailableBadge = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBadges, setShowBadges] = useState(true);

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

  // Utiliser les hooks pour la gestion des statuts et du comptage
  const {
    data: accompagnements,
    isChecking,
    lastCheck,
    checkStatus,
    updateItemStatus
  } = useStatusCheck(initialData);

  const {
    availableCount,
    hasAvailable
  } = useAvailableCount(accompagnements);

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

  const toggleBadges = () => {
    setShowBadges(!showBadges);
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
            onClick={toggleBadges}
            className={`btn-toggle-badges ${showBadges ? 'active' : ''}`}
          >
            <span className="badge-icon">🏷️</span>
            {showBadges ? 'Masquer les badges' : 'Afficher les badges'}
          </button>
          <button 
            onClick={handleRefresh} 
            className={`btn-refresh-status ${isChecking ? 'checking' : ''}`}
            disabled={isChecking}
          >
            <span className="refresh-icon">🔄</span>
            {isChecking ? 'Vérification...' : 'Vérifier les statuts'}
          </button>
          <a href="#" className="see-all-link">
            <span>Voir tous</span>
          </a>
        </div>
      </div>
      
      {/* Badge global "Disponible maintenant" */}
      {hasAvailable && showBadges && (
        <div className="global-available-badge">
          <AvailableNowBadge 
            count={availableCount} 
            animated={true}
          />
        </div>
      )}
      
      {lastCheck && (
        <div className="status-info">
          <span className="last-check-text">
            Dernière vérification: {new Date(lastCheck).toLocaleTimeString('fr-FR')}
          </span>
          {hasAvailable && (
            <span className="available-summary">
              {availableCount} sur {accompagnements.length} disponibles
            </span>
          )}
        </div>
      )}
      
      <div className="accompagnant-list">
        {accompagnements.map((accompagnement) => (
          <AccompagnantCardWithBadge
            key={accompagnement.id}
            accompagnement={accompagnement}
            isChecking={isChecking}
            lastCheck={lastCheck}
            showAvailableBadge={showBadges && accompagnement.status === 'available'}
            onContact={handleContact}
          />
        ))}
      </div>
    </div>
  );
};

export default AccompagnantListWithAvailableBadge;
