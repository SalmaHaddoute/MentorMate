import DemandeAide from "../models/DemandeAide.js";
import Accompagnant from "../models/Accompagnant.js";

export const createDemandeAide = async (req, res) => {
  try {
    const { accompagnantId, message } = req.body;

    // 1. Vérifier les champs
    if (!accompagnantId || !message) {
      return res.status(400).json({
        success: false,
        message: "accompagnantId et message sont obligatoires",
      });
    }

    // 2. Vérifier que l'accompagnant existe
    const accompagnant = await Accompagnant.findById(accompagnantId);

    if (!accompagnant) {
      return res.status(404).json({
        success: false,
        message: "Accompagnant introuvable",
      });
    }

    // 3. Vérifier la disponibilité
    if (!accompagnant.estDisponible) {
      return res.status(400).json({
        success: false,
        message: "Accompagnant indisponible",
      });
    }

    // 4. Créer la demande
    const demande = await DemandeAide.create({
      accompagnant: accompagnantId,
      message,
    });

    return res.status(201).json({
      success: true,
      data: demande,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la création de la demande d'aide",
    });
  }
};