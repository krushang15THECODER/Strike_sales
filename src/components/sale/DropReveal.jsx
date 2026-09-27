import React, { useEffect } from 'react';

export default function DropReveal({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="p-8 rounded-2xl bg-gray-950 border border-gray-800 flex flex-col items-center justify-center min-h-[340px] text-center">
      <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin mb-4" />
      <span className="text-xs text-gray-400 font-medium tracking-wide">
        Loading offer details...
      </span>
    </div>
  );
}
