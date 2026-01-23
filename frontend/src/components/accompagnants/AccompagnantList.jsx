import { useEffect, useState } from "react";
import AccompagnantCard from "./AccompagnantCard";
import { apiGet } from "../../services/api";

function SkeletonCard() {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        padding: 14,
        background: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ height: 14, width: "60%", background: "#e5e7eb", borderRadius: 8 }} />
          <div style={{ marginTop: 10, height: 12, width: "90%", background: "#f3f4f6", borderRadius: 8 }} />
          <div style={{ marginTop: 6, height: 12, width: "75%", background: "#f3f4f6", borderRadius: 8 }} />
        </div>
        <div style={{ height: 26, width: 92, background: "#e5e7eb", borderRadius: 999 }} />
      </div>
    </div>
  );
}

export default function AccompagnantList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await apiGet("/api/accompagnants");
        if (!alive) return;
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!alive) return;
        setError(e.message || "Erreur lors du chargement.");
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
        }}
      >
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          border: "1px solid #fecaca",
          background: "#fff1f2",
          color: "#991b1b",
          padding: 12,
          borderRadius: 12,
        }}
      >
        ❌ {error}
      </div>
    );
  }

  if (!items.length) {
    return (
      <div
        style={{
          border: "1px solid #e5e7eb",
          background: "#f9fafb",
          padding: 12,
          borderRadius: 12,
          color: "#4b5563",
        }}
      >
        Aucun accompagnant disponible pour le moment.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 12,
      }}
    >
      {items.map((a) => (
        <AccompagnantCard key={a._id || a.id} a={a} />
      ))}
    </div>
  );
}
