import Accompagnant from "../models/Accompagnant.js";

export const getAccompagnants = async (req, res) => {
  try {
    // Récupérer seulement les accompagnants disponibles
    const accompagnants = await Accompagnant.find({ estDisponible: true })
      .select("nomComplet photo domaineEtude estDisponible rating sessions");

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