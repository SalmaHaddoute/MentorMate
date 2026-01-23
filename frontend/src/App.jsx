import AccompagnantList from "./components/accompagnants/AccompagnantList";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f6f8fc" }}>
      <div style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ marginBottom: 6 }}>MentorMate</h1>
        <p style={{ marginTop: 0, color: "#4b5563" }}>
          Consulte les accompagnants disponibles.
        </p>

        <AccompagnantList />
      </div>
    </div>
  );
}
