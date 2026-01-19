import mongoose from "mongoose";

const accompagnantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  domaine: { type: String, required: true },
  statut: { type: String, default: "disponible" },
  photo: { type: String }
});

export default mongoose.model("Accompagnant", accompagnantSchema);
