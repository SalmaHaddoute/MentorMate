import StatusBadge from "./StatusBadge";
import DemandeAideButton from "../demandeAide/DemandeAideButton";
import "./AccompagnantCard.css";

export default function AccompagnantCard({ a }) {
  const fullName = [a.prenom, a.nom].filter(Boolean).join(" ") || "Accompagnant";
  const dispo = Boolean(a.estDisponible);
  const initial = (a.prenom || a.nom || "A").trim().charAt(0).toUpperCase();

  return (
    <div className="ac-card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", gap: 12, minWidth: 0 }}>
          <div className="ac-avatar" aria-hidden="true">
            {initial}
          </div>

          <div style={{ minWidth: 0 }}>
            <div className="ac-name" title={fullName}>
              {fullName}
            </div>

            {a.specialite && (
              <div className="ac-spec" title={a.specialite}>
                {a.specialite}
              </div>
            )}
          </div>
        </div>

        <StatusBadge estDisponible={dispo} />
      </div>

      <div className="ac-footer">
        <span
          className="ac-dot"
          style={{ background: dispo ? "#10b981" : "#ef4444" }}
        />
        <span>
          {dispo ? "Disponible maintenant" : "Pas disponible pour le moment"}
        </span>
      </div>

      {/* ✅ Bouton demande d’aide */}
      <DemandeAideButton accompagnant={a} />
    </div>
  );
}
