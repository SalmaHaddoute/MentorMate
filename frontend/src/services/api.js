const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`Erreur API (${res.status})`);
  return res.json();
}
export async function apiPost(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body ?? {}),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Erreur API (${res.status})`);
  }
  return res.json();
}
