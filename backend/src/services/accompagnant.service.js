import Accompagnant from "../models/Accompagnant.js";

export const getAllAccompagnants = async () => {
  return await Accompagnant.find();
};
