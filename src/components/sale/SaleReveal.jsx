import React, { useEffect, useState } from 'react';

export default function SaleReveal({ onComplete }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Slight delay to allow fade-in
    const t1 = setTimeout(() => setShowText(true), 50);
    
    // Hold the text for a bit, then fade out
    const t2 = setTimeout(() => {
      setShowText(false);
    }, 1200);

    // Call onComplete after fade out finishes
    const t3 = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className={`transition-all duration-300 ${showText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase font-display text-center">
          Decrypted.<br/><span className="text-yellow-500">Private Drop Unlocked.</span>
        </h3>
        <p className="text-gray-400 text-lg md:text-xl text-center font-medium">
          The price just changed.<br />
          Your 15-minute window starts now.
        </p>
      </div>
    </div>
  );
}
