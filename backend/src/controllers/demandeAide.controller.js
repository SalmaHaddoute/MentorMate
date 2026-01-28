import {
  createDemande,
  getDemandeById,
  updateDemandeStatus,
} from "../services/demandeAide.service.js";

export function postDemandeAide(req, res) {
  const { accompagnantId, message, studentName } = req.body || {};

  if (!accompagnantId) {
    return res.status(400).json({ message: "accompagnantId is required" });
  }

  const demande = createDemande({ accompagnantId, message, studentName });
  return res.status(201).json(demande);
}

export function getDemandeAide(req, res) {
  const { id } = req.params;
  const demande = getDemandeById(id);

  if (!demande) return res.status(404).json({ message: "Not found" });
  return res.json(demande);
}

export function patchDemandeAide(req, res) {
  const { id } = req.params;
  const { statut } = req.body || {};
  const allowed = ["pending", "accepted", "rejected"];

  if (!allowed.includes(statut)) {
    return res.status(400).json({ message: "Invalid statut" });
  }

  const updated = updateDemandeStatus(id, statut);
  if (!updated) return res.status(404).json({ message: "Not found" });

  return res.json(updated);
}
