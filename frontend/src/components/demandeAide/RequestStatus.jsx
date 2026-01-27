import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function RequestStatus({ demandeId, onAccepted }) {
  const [status, setStatus] = useState("pending");
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!demandeId) return;

    let alive = true;

    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    async function poll() {
      try {
        const res = await fetch(`${API_URL}/api/demandes-aide/${demandeId}`);
        if (!res.ok) throw new Error("Erreur serveur");
        const data = await res.json();
        if (!alive) return;
        setStatus(data.statut);
      } catch (e) {
        if (!alive) return;
        setError("Erreur lors de la mise à jour du statut");
      }
    }

    poll();
    const polling = setInterval(poll, 2500);

    return () => {
      alive = false;
      clearInterval(timer);
      clearInterval(polling);
    };
  }, [demandeId]);

  const message =
    status === "accepted"
      ? "Demande acceptée ✅"
      : seconds < 5
      ? "En attente d’un accompagnateur…"
      : seconds < 12
      ? "On cherche un accompagnateur disponible…"
      : "Toujours en attente, merci de patienter.";

  return (
    <div
      style={{
        marginTop: 12,
        padding: 14,
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        background: "#f9fafb",
      }}
    >
      <strong>{message}</strong>

      {status !== "accepted" && (
        <p style={{ marginTop: 6, color: "#64748b" }}>
          Temps écoulé : {seconds}s
        </p>
      )}

      {status === "accepted" && (
        <button
          onClick={onAccepted}
          style={{
            marginTop: 10,
            padding: "10px 12px",
            borderRadius: 12,
            border: "none",
            background: "#0f172a",
            color: "white",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Démarrer la session
        </button>
      )}

      {error && (
        <p style={{ marginTop: 6, color: "crimson", fontSize: 12 }}>
          ❌ {error}
        </p>
      )}
    </div>
  );
}
