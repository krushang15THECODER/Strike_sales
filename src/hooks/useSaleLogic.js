import { useState, useEffect, useCallback } from 'react';

export function useSaleLogic(durationSeconds = 864000) { // Default 10 days
  const [status, setStatus] = useState('loading');
  
  const checkStatus = useCallback(() => {
    const storedStatus = localStorage.getItem('strike_sale_status');
    const storedEndTime = localStorage.getItem('strike_sale_end');

    if (storedStatus === 'dismissed') {
      setStatus('dismissed');
      return;
    }

    if (storedEndTime) {
      const end = parseInt(storedEndTime, 10);
      const now = Date.now();
      if (now >= end) {
        setStatus('expired');
        localStorage.setItem('strike_sale_status', 'expired');
      } else {
        setStatus(storedStatus === 'active' ? 'active' : 'hidden');
      }
    } else {
      setStatus('hidden');
    }
  }, []);

  useEffect(() => {
    checkStatus();

    const handleUpdate = () => checkStatus();
    window.addEventListener('strike_sale_update', handleUpdate);
    
    // Fallback polling just in case, though CountdownTimer handles the exact ticking
    const interval = setInterval(checkStatus, 5000);

    return () => {
      window.removeEventListener('strike_sale_update', handleUpdate);
      clearInterval(interval);
    };
  }, [checkStatus]);

  const revealSale = () => {
    let end = localStorage.getItem('strike_sale_end');
    if (!end) {
      end = Date.now() + durationSeconds * 1000;
      localStorage.setItem('strike_sale_end', end.toString());
    }
    localStorage.setItem('strike_sale_status', 'active');
    setStatus('active');
    window.dispatchEvent(new Event('strike_sale_update'));
  };

  const dismissSale = () => {
    localStorage.setItem('strike_sale_status', 'dismissed');
    setStatus('dismissed');
    window.dispatchEvent(new Event('strike_sale_update'));
  };

  return { status, revealSale, dismissSale };
}
