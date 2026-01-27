import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// route de test
app.get("/api/test", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// ✅ ROUTE US 1.1.a — accompagnants (mock data)
app.get("/api/accompagnants", (req, res) => {
  res.status(200).json([
    {
      _id: "1",
      prenom: "Aya",
      nom: "Elmouslih",
      specialite: "Mathématiques",
      estDisponible: true,
    },
    {
      _id: "2",
      prenom: "Salma",
      nom: "Haddoute",
      specialite: "Physique",
      estDisponible: false,
    },
    {
      _id: "3",
      prenom: "Youssef",
      nom: "Amrani",
      specialite: "Informatique",
      estDisponible: true,
    },
  ]);
});
// ===============================
// US 1.3.a & 1.3.b — Demandes d'aide (mock)
// ===============================

// stockage temporaire en mémoire
const demandes = new Map(); // id -> { statut, createdAt, accompagnantId }

// ➤ Créer une demande d'aide
app.post("/api/demandes-aide", (req, res) => {
  const { accompagnantId, message, studentName } = req.body || {};

  if (!accompagnantId) {
    return res.status(400).json({ message: "accompagnantId requis" });
  }

  const id = Date.now().toString();

  demandes.set(id, {
    statut: "pending",
    createdAt: Date.now(),
    accompagnantId,
    message: message || "",
    studentName: studentName || "",
  });

  // ⏳ Simulation acceptation après 8 secondes
  setTimeout(() => {
    const d = demandes.get(id);
    if (d) {
      demandes.set(id, { ...d, statut: "accepted" });
    }
  }, 8000);

  res.status(201).json({
    id,
    statut: "pending",
    accompagnantId,
  });
});

// ➤ Lire le statut d'une demande
app.get("/api/demandes-aide/:id", (req, res) => {
  const demande = demandes.get(req.params.id);

  if (!demande) {
    return res.status(404).json({ message: "Demande introuvable" });
  }

  res.status(200).json({
    id: req.params.id,
    ...demande,
  });
});


export default app;
