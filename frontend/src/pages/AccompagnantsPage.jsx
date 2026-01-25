import DemandeAideCard from "../components/demandeAide/DemandeAideCard.jsx";
import "./accompagnantsPage.css";

export default function AccompagnantsPage() {
  return (
    <div className="acc-page">
      <div className="acc-main">
        <h2 className="acc-hello">Bonjour Maria 👋</h2>
        <p className="acc-sub">Choisis un accompagnant et envoie une demande d’aide.</p>

        <div className="acc-big">📌 Ici : “Sections Démarrer / Organiser / …”</div>
        <div className="acc-big">📌 Ici : “Accompagnants disponibles”</div>
        <div className="acc-big">📌 Ici : “Suivi & Feedback”</div>
      </div>

      <div className="acc-side">
        <DemandeAideCard accompagnantId="acc1" />
      </div>
    </div>
  );
}
