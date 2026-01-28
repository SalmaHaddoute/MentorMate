import { useState, useEffect, useCallback } from 'react';

const useStatusCheck = (initialData = []) => {
  const [data, setData] = useState(initialData);
  const [isChecking, setIsChecking] = useState(false);
  const [lastCheck, setLastCheck] = useState(null);

  // Simuler une vérification de statut
  const checkStatus = useCallback(async (items = data) => {
    setIsChecking(true);
    
    try {
      // Simuler un appel API pour vérifier les statuts
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mettre à jour les statuts avec des données aléatoires
      const updatedItems = items.map(item => {
        const randomStatus = Math.random();
        let newStatus;
        
        if (randomStatus < 0.6) {
          newStatus = 'available';
        } else if (randomStatus < 0.85) {
          newStatus = 'busy';
        } else {
          newStatus = 'offline';
        }
        
        return {
          ...item,
          status: newStatus,
          lastStatusChange: new Date().toISOString()
        };
      });
      
      setData(updatedItems);
      setLastCheck(new Date());
      
      return updatedItems;
    } catch (error) {
      console.error('Erreur lors de la vérification du statut:', error);
      throw error;
    } finally {
      setIsChecking(false);
    }
  }, [data]);

  // Vérification automatique toutes les 30 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      checkStatus();
    }, 30000); // 30 secondes

    return () => clearInterval(interval);
  }, [checkStatus]);

  // Vérification initiale
  useEffect(() => {
    if (initialData.length > 0) {
      checkStatus(initialData);
    }
  }, []);

  // Mettre à jour une seule item
  const updateItemStatus = useCallback(async (itemId, newStatus) => {
    setIsChecking(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedItems = data.map(item => 
        item.id === itemId 
          ? { ...item, status: newStatus, lastStatusChange: new Date().toISOString() }
          : item
      );
      
      setData(updatedItems);
      setLastCheck(new Date());
      
      return updatedItems;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
      throw error;
    } finally {
      setIsChecking(false);
    }
  }, [data]);

  return {
    data,
    isChecking,
    lastCheck,
    checkStatus,
    updateItemStatus
  };
};

export default useStatusCheck;
