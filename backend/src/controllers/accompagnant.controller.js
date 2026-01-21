import Accompagnant from "../models/Accompagnant.js";

export const getAccompagnants = async (req, res) => {
  try {
    const accompagnants = await Accompagnant.find();

    res.status(200).json({
      success: true,
      data: accompagnants,
      meta: {
        count: accompagnants.length,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des accompagnants",
    });
  }
};
