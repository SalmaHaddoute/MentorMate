import { demandes } from "../data/demandeAide.store.js";

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function createDemande({ accompagnantId, message, studentName }) {
  const now = new Date().toISOString();

  const demande = {
    _id: genId(),
    accompagnantId,
    message: message ?? "",
    studentName: studentName ?? "Student",
    statut: "pending",
    createdAt: now,
    updatedAt: now,
  };

  demandes.push(demande);
  return demande;
}

export function getDemandeById(id) {
  return demandes.find((d) => d._id === id) || null;
}

export function updateDemandeStatus(id, statut) {
  const d = demandes.find((x) => x._id === id);
  if (!d) return null;

  d.statut = statut;
  d.updatedAt = new Date().toISOString();
  return d;
}
