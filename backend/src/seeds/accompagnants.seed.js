import mongoose from "mongoose";
import dotenv from "dotenv";
import Accompagnant from "../models/Accompagnant.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Accompagnant.deleteMany(); // supprime tout avant d'insérer

await Accompagnant.insertMany([
  {
    nomComplet: "Salma AL FADILI",
    photo: "https://i.pravatar.cc/150?img=5",
    domaineEtude: "Informatique",
    estDisponible: true,
    statut: "disponible",
  },
  {
    nomComplet: "Youssef Ben Ali",
    photo: "https://i.pravatar.cc/150?img=8",
    domaineEtude: "Mathématiques",
    estDisponible: false,
    statut: "indisponible",
  },
  {
    nomComplet: "Sara El Amrani",
    photo: "https://i.pravatar.cc/150?img=10",
    domaineEtude: "Physique",
    estDisponible: true,
    statut: "disponible",
  },
  {
    nomComplet: "Omar Benjelloun",
    photo: "https://i.pravatar.cc/150?img=15",
    domaineEtude: "Chimie",
    estDisponible: false,
    statut: "indisponible",
  },
  {
    nomComplet: "Leila Haddad",
    photo: "https://i.pravatar.cc/150?img=20",
    domaineEtude: "Biologie",
    estDisponible: true,
    statut: "disponible",
  },
  {
    nomComplet: "Karim Rami",
    photo: "https://i.pravatar.cc/150?img=25",
    domaineEtude: "Informatique",
    estDisponible: true,
    statut: "disponible",
  },
]);

console.log("✅ Seed accompagnants terminé");
process.exit();
