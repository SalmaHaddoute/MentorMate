import { useDemandeAide } from "../../hooks/useDemandeAide.js";
import Spinner from "../../ui/Spinner.jsx";
import "./demandeAideCard.css";

export default function DemandeAideCard({ accompagnantId = "acc1" }) {
  const { loading, refreshing, error, demande, envoyerDemande } = useDemandeAide();
  const statut = demande?.statut;

  async function handleClick() {
    await envoyerDemande({
      accompagnantId,
      message: "Besoin d’aide",
      studentName: "Salma",
    });
  }

  return (
    <div className="da-card">
      <div className="da-head">
        <div>
          <h3 className="da-title">Demande de l’aide</h3>
          <p className="da-sub">
            Envoie une demande à un accompagnant et suis le statut en temps réel.
          </p>
        </div>

        {statut && (
          <span className={`da-pill da-${statut}`}>
            {statut === "pending"
              ? "En attente"
              : statut === "accepted"
              ? "Acceptée"
              : "Refusée"}
          </span>
        )}
      </div>

      <button
        className="da-btn"
        onClick={handleClick}
        disabled={loading || statut === "pending"}
      >
        {loading ? "Envoi..." : "Poser une question"}
      </button>

      {(loading || refreshing) && (
        <div className="da-loading">
          <Spinner size={16} />
          <span>{loading ? "Envoi en cours..." : "Vérification du statut..."}</span>
        </div>
      )}

      {error && <div className="da-error">❌ {error}</div>}

      {demande?._id && <div className="da-id">id: {demande._id}</div>}
    </div>
  );
}
