import React, { useEffect, useState } from 'react';
import { Clock, RotateCcw } from 'lucide-react';

export default function CountdownTimer({ onExpire, onResetTest }) {
  const STORAGE_KEY = "strike_sale_end";

  const [remainingSeconds, setRemainingSeconds] = useState(() => {
    const expiry = localStorage.getItem(STORAGE_KEY);
    if (!expiry) return 0;
    return Math.max(0, Math.floor((Number(expiry) - Date.now()) / 1000));
  });

  useEffect(() => {
    if (remainingSeconds <= 0) {
      onExpire();
      return;
    }

    const interval = setInterval(() => {
      const expiry = localStorage.getItem(STORAGE_KEY);
      if (!expiry) return;
      const rem = Math.max(0, Math.floor((Number(expiry) - Date.now()) / 1000));
      setRemainingSeconds(rem);

      if (rem <= 0) {
        clearInterval(interval);
        onExpire();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onExpire]);

  const formatTime = (totalSec) => {
    const d = Math.floor(totalSec / (3600 * 24));
    const h = Math.floor((totalSec % (3600 * 24)) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    
    if (d > 0) {
      return `${d}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
    }
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-5 rounded-2xl bg-gray-900/40 border border-gray-800/80 h-full w-full transition-all duration-300 hover:bg-gray-800/60 hover:border-gray-700/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]">
      
      {onResetTest && (
        <button
          onClick={onResetTest}
          className="absolute top-2 right-2 p-1.5 text-gray-600 hover:text-white transition-colors rounded hover:bg-gray-800"
          title="Dev Helper: Expire Timer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      )}

      <div className="flex items-center gap-1.5 text-gray-400 mb-2">
        <Clock className="w-3.5 h-3.5" />
        <span className="text-[11px] font-semibold uppercase tracking-widest">Offer ends in</span>
      </div>
      <div className="text-3xl md:text-4xl font-light text-white tracking-widest tabular-nums leading-none">
        {formatTime(remainingSeconds)}
      </div>
    </div>
  );
}
