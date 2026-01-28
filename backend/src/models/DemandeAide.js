import mongoose from "mongoose";

const demandeAideSchema = new mongoose.Schema(
  {
    accompagnant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Accompagnant',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    statut: {
      type: String,
      enum: ['en_attente', 'acceptee', 'refusee'],
      default: 'en_attente',
    },
  },
  { timestamps: true }
);

export default mongoose.model("DemandeAide", demandeAideSchema);