export const getAccompagnants = async (req, res) => {
  try {
    // Données mock temporairement (sans MongoDB)
    const mockAccompagnants = [
      {
        id: 1,
        nomComplet: "Dr. Marie Dubois",
        photo: "https://picsum.photos/seed/mentor1/70/70",
        domaineEtude: "Développement Web",
        estDisponible: true,
        rating: "+4.9",
        sessions: 12
      },
      {
        id: 2,
        nomComplet: "Prof. Jean Martin",
        photo: "https://picsum.photos/seed/mentor2/70/70",
        domaineEtude: "Data Science",
        estDisponible: true,
        rating: "+4.8",
        sessions: 8
      },
      {
        id: 3,
        nomComplet: "M. Ahmed Benali",
        photo: "https://picsum.photos/seed/mentor3/70/70",
        domaineEtude: "Intelligence Artificielle",
        estDisponible: false,
        rating: "+5.0",
        sessions: 15
      },
      {
        id: 4,
        nomComplet: "Mme. Sophie Laurent",
        photo: "https://picsum.photos/seed/mentor4/70/70",
        domaineEtude: "UX Design",
        estDisponible: true,
        rating: "+4.7",
        sessions: 6
      }
    ];

    const accompagnants = mockAccompagnants.filter(acc => acc.estDisponible);

    return res.status(200).json({
      success: true,
      data: accompagnants,
      meta: {
        count: accompagnants.length
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des accompagnants"
    });
  }
};
