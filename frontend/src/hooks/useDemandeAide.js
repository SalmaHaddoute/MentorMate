import { useEffect, useState } from "react";
import { createDemandeAide, getDemandeAideById } from "../api/demandeAide.api.js";

export function useDemandeAide() {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [demande, setDemande] = useState(null);

  async function envoyerDemande(payload) {
    setLoading(true);
    setError("");

    try {
      // ✅ (optionnel) petit delay pour voir le spinner
      // await new Promise((r) => setTimeout(r, 800));

      const created = await createDemandeAide(payload);
      setDemande(created);
      return created;
    } catch (e) {
      setError(e.message || "Erreur inconnue");
      throw e;
    } finally {
      setLoading(false);
    }
  }

  // 🔁 polling auto tant que pending
  useEffect(() => {
    if (!demande?._id || demande?.statut !== "pending") return;

    const interval = setInterval(async () => {
      setRefreshing(true);
      try {
        const updated = await getDemandeAideById(demande._id);
        setDemande(updated);
      } catch (e) {
        // on ne bloque pas l'UI
        console.error(e);
      } finally {
        setRefreshing(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [demande?._id, demande?.statut]);

  return { loading, refreshing, error, demande, envoyerDemande };
}
