import { useDemandeAide } from "../../hooks/useDemandeAide.js";
import Spinner from "../../ui/Spinner.jsx";

export default function DemandeAideButton({ accompagnantId = "acc1" }) {
  const { loading, refreshing, error, demande, envoyerDemande } =
    useDemandeAide();

  async function handleClick() {
    await envoyerDemande({
      accompagnantId,
      message: "Besoin d’aide",
      studentName: "Salma",
    });
  }

  const statut = demande?.statut;

  const statusUI = (() => {
    if (statut === "pending")
      return { text: "En attente…", color: "#b45309", bg: "#fffbeb", bd: "#fde68a" };
    if (statut === "accepted")
      return { text: "Acceptée", color: "#047857", bg: "#ecfdf5", bd: "#a7f3d0" };
    if (statut === "rejected")
      return { text: "Refusée", color: "#b91c1c", bg: "#fef2f2", bd: "#fecaca" };
    return null;
  })();

  const disabled = loading || statut === "pending";

  return (
    <div style={styles.wrap}>
      <button
        onClick={handleClick}
        disabled={disabled}
        style={{
          ...styles.button,
          opacity: disabled ? 0.75 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <span>{loading ? "Envoi..." : "Demander de l’aide"}</span>
        {loading && <Spinner size={16} />}
      </button>

      {/* refresh du statut */}
      {refreshing && (
        <div style={styles.row}>
          <Spinner size={14} />
          <span style={styles.muted}>Vérification du statut...</span>
        </div>
      )}

      {/* badge statut */}
      {statusUI && (
        <div
          style={{
            ...styles.badge,
            color: statusUI.color,
            background: statusUI.bg,
            borderColor: statusUI.bd,
          }}
        >
          {statusUI.text}
        </div>
      )}

      {/* erreur */}
      {error && <div style={styles.error}>❌ {error}</div>}

      {/* id debug */}
      {demande?._id && <div style={styles.id}>id: {demande._id}</div>}
    </div>
  );
}

const styles = {
  wrap: {
    display: "grid",
    gap: 10,
    width: "100%",
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "#111827",
    color: "white",
    fontWeight: 600,
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  muted: {
    color: "#64748b",
    fontSize: 13,
  },
  badge: {
    width: "fit-content",
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid",
    fontWeight: 700,
  },
  error: {
    color: "#b91c1c",
    fontSize: 13,
  },
  id: {
    fontSize: 12,
    opacity: 0.65,
  },
};
