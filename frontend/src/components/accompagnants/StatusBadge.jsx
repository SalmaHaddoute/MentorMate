export default function StatusBadge({ estDisponible }) {
  const dispo = Boolean(estDisponible);

  return (
    <span
      style={{
        flexShrink: 0,
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        border: "1px solid",
        borderColor: dispo ? "#bbf7d0" : "#fecaca",
        color: dispo ? "#065f46" : "#7f1d1d",
        background: dispo ? "#ecfdf5" : "#fef2f2",
      }}
    >
      {dispo ? "Disponible" : "Indisponible"}
    </span>
  );
}
