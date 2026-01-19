//with real database after
// import { getAllAccompagnants } from "../services/accompagnant.service.js";

// export const getAccompagnants = async (req, res) => {
//   try {
//     const accompagnants = await getAllAccompagnants();
//     res.status(200).json(accompagnants);
//   } catch (error) {
//     res.status(500).json({ message: "Erreur serveur" });
//   }
// };
import { accompagnants } from "../data/accompagnants.mock.js";

export const getAccompagnants = (req, res) => {
  const disponibles = accompagnants.filter(
    (a) => a.estDisponible === true
  );

  res.status(200).json({
    success: true,
    data: disponibles,
    meta: {
      count: disponibles.length,
    },
  });
};
