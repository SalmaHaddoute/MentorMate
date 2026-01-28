import React, { useState, useEffect } from 'react';
import './AccompagnantList.css';
import LoadingSpinner from './LoadingSpinner';
import EmptyState from './EmptyState';
import { fetchAccompagnants } from '../../api/accompagnant.api';

const AccompagnantList = () => {
  const [accompagnements, setAccompagnements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Appel API réel
  useEffect(() => {
    const fetchAccompagnements = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAccompagnants();
        
        // Adapter les données de l'API au format du composant
        const adaptedData = response.data.map(acc => ({
          id: acc.id,
          title: acc.nomComplet,
          description: `Expert en ${acc.domaineEtude}`,
          rating: acc.rating,
          image: acc.photo,
          status: acc.estDisponible ? "available" : "busy"
        }));
        
        setAccompagnements(adaptedData);
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

  const handleRefresh = async () => {
    try {
      setIsLoading(true);
      const response = await fetchAccompagnants();
      
      // Adapter les données de l'API au format du composant
      const adaptedData = response.data.map(acc => ({
        id: acc.id,
        title: acc.nomComplet,
        description: `Expert en ${acc.domaineEtude}`,
        rating: acc.rating,
        image: acc.photo,
        status: acc.estDisponible ? "available" : "busy"
      }));
      
      setAccompagnements(adaptedData);
      setError(null);
    } catch (error) {
      setError("Erreur lors du chargement des accompagnants");
      console.error('Error refreshing accompagnements:', error);
    } finally {
      setIsLoading(false);
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
        <a href="#" className="see-all-link">Voir tous</a>
      </div>
      
      <div className="accompagnant-list">
        {accompagnements.map((accompagnement) => (
          <div key={accompagnement.id} className="accompagnant-card" data-status={accompagnement.status}>
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
            <button className="contact-btn">Contacter</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccompagnantList;