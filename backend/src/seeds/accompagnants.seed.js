import mongoose from "mongoose";
import dotenv from "dotenv";
import Accompagnant from "../models/Accompagnant.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Accompagnant.deleteMany();

await Accompagnant.insertMany([
  {
    nomComplet: "Salma AL FADILI",
    photo: "https://i.pravatar.cc/150?img=5",
    domaineEtude: "Informatique",
    estDisponible: true,
  },
  {
    nomComplet: "Youssef Ben Ali",
    photo: "https://i.pravatar.cc/150?img=8",
    domaineEtude: "Mathématiques",
    estDisponible: false,
  },
]);

console.log("✅ Seed accompagnants terminé");
process.exit();
