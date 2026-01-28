import { useState, useEffect, useCallback } from 'react';

const useAvailableCount = (accompagnants = []) => {
  const [availableCount, setAvailableCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  // Compter les accompagnants disponibles
  const countAvailable = useCallback((items = accompagnants) => {
    setIsCounting(true);
    
    try {
      const count = items.filter(item => item.status === 'available').length;
      setAvailableCount(count);
      return count;
    } catch (error) {
      console.error('Erreur lors du comptage des disponibles:', error);
      setAvailableCount(0);
      return 0;
    } finally {
      setIsCounting(false);
    }
  }, [accompagnants]);

  // Mettre à jour le compteur quand les accompagnants changent
  useEffect(() => {
    countAvailable();
  }, [accompagnants, countAvailable]);

  // Simuler des changements de disponibilité
  const simulateAvailabilityChange = useCallback(() => {
    setIsCounting(true);
    
    setTimeout(() => {
      // Simuler un changement aléatoire de disponibilité
      const randomChange = Math.random();
      let newCount;
      
      if (randomChange < 0.3) {
        // 30% de chance d'augmenter
        newCount = Math.min(availableCount + 1, accompagnants.length);
      } else if (randomChange < 0.6) {
        // 30% de chance de diminuer
        newCount = Math.max(availableCount - 1, 0);
      } else {
        // 40% de chance de rester le même
        newCount = availableCount;
      }
      
      setAvailableCount(newCount);
      setIsCounting(false);
    }, 800);
  }, [availableCount, accompagnants.length]);

  // Vérifier si des accompagnants sont disponibles
  const hasAvailable = availableCount > 0;

  // Obtenir le texte d'affichage
  const getDisplayText = useCallback(() => {
    if (availableCount === 0) return null;
    if (availableCount === 1) return '1 disponible maintenant';
    return `${availableCount} disponibles maintenant`;
  }, [availableCount]);

  return {
    availableCount,
    isCounting,
    hasAvailable,
    countAvailable,
    simulateAvailabilityChange,
    getDisplayText
  };
};

export default useAvailableCount;
