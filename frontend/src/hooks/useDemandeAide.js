import { useState } from "react";
import { apiPost } from "../services/api";

export function useDemandeAide() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [demande, setDemande] = useState(null); // {id, statut...}

  async function envoyerDemande(payload) {
    try {
      setLoading(true);
      setError("");
      const data = await apiPost("/api/demandes-aide", payload);
      setDemande(data);
      return data;
    } catch (e) {
      setError(e.message || "Erreur envoi demande");
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, demande, envoyerDemande, setDemande };
}
