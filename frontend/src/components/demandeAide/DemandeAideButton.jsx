import { useEffect, useState } from "react";
import { useDemandeAide } from "../../hooks/useDemandeAide";
import RequestStatus from "./RequestStatus";

export default function DemandeAideButton({ accompagnant }) {
  const { loading, error, demande, envoyerDemande } = useDemandeAide();
  const [success, setSuccess] = useState(false);

  const dispo = Boolean(accompagnant?.estDisponible);
  const accompagnantId = accompagnant?._id || accompagnant?.id;

  useEffect(() => {
    if (demande?.id) {
      setSuccess(true);
      const t = setTimeout(() => setSuccess(false), 2000);
      return () => clearTimeout(t);
    }
  }, [demande?.id]);

  async function handleClick() {
    if (!dispo || loading || success) return;

    await envoyerDemande({
      accompagnantId,
      message: "Besoin d’aide",
      studentName: "Salma",
    });
  }

  const label = loading
    ? "Envoi..."
    : success
    ? "Demande envoyée ✓"
    : "Demander de l’aide";

  return (
    <div style={{ marginTop: 12 }}>
      <button
        onClick={handleClick}
        disabled={!dispo || loading || success}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: !dispo ? "#f3f4f6" : success ? "#0f172a" : "white",
          color: !dispo ? "#9ca3af" : success ? "white" : "#0f172a",
          cursor: !dispo || loading || success ? "not-allowed" : "pointer",
          fontWeight: 800,
        }}
      >
        {label}
      </button>

      {error && (
        <p
          style={{
            marginTop: 8,
            marginBottom: 0,
            color: "crimson",
            fontSize: 12,
          }}
        >
          ❌ {error}
        </p>
      )}

      {demande?.id && (
        <RequestStatus
          demandeId={demande.id}
          onAccepted={() => alert("Session démarrée ✅ (mock)")}
        />
      )}
    </div>
  );
}
