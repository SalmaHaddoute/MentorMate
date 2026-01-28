import mongoose from "mongoose";

const accompagnantSchema = new mongoose.Schema(
  {
    nomComplet: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    domaineEtude: {
      type: String,
      required: true,
    },
    estDisponible: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: String,
      required: false,
    },
    sessions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Accompagnant", accompagnantSchema);