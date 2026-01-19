export const fetchAccompagnants = async () => {
  const response = await fetch("http://localhost:5000/api/accompagnants");

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des accompagnants");
  }

  return response.json();
};
