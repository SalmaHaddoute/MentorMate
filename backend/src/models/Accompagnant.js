import mongoose from "mongoose";

const accompagnantSchema = new mongoose.Schema(
  {
    nomComplet: {
      type: String,
      required: true,
    },
    domaineEtude: {
      type: String,
      required: true,
    },
    estDisponible: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Accompagnant", accompagnantSchema);
