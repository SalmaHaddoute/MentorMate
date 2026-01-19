import React from 'react';
import './AccompagnantList.css';

const AccompagnantList = () => {
  // Mock data - replace with API call
  const accompagnements = [
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