const BASE_URL = "http://localhost:5000/api";

export async function createDemandeAide(payload) {
  const res = await fetch(`${BASE_URL}/demandes-aide`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || `Erreur API (${res.status})`;
    throw new Error(message);
  }

  return data;
}

export async function getDemandeAideById(id) {
  const res = await fetch(`${BASE_URL}/demandes-aide/${id}`);

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || "Impossible de récupérer la demande";
    throw new Error(message);
  }

  return data;
}
