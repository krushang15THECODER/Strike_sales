import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function SaleReveal({ onComplete }) {
  const [phase, setPhase] = useState('flash'); // flash -> text -> complete

  useEffect(() => {
    // Phase 1: White Flash (0 - 150ms)
    const t1 = setTimeout(() => setPhase('text'), 150);
    
    // Phase 2: Show Text & Rumble (150ms - 1500ms)
    const t2 = setTimeout(() => {
      setPhase('fade');
    }, 1500);

    // Phase 3: Complete
    const t3 = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <>
      <style>
        {`
          @keyframes rumble {
            0% { transform: translate(2px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(0px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(2px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(2px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
          .animate-rumble {
            animation: rumble 0.15s infinite;
          }
        `}
      </style>
      
      <div 
        className={`fixed inset-0 z-[150] flex flex-col items-center justify-center transition-all duration-300 ${
          phase === 'flash' ? 'bg-white' : 'bg-black animate-rumble'
        } ${phase === 'fade' ? 'opacity-0' : 'opacity-100'}`}
      >
        {phase !== 'flash' && (
          <div className="flex flex-col items-center text-center animate-in zoom-in duration-300">
             <Zap className="w-24 h-24 text-yellow-400 mb-6 drop-shadow-[0_0_30px_rgba(250,204,21,0.8)] animate-pulse" />
             <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase font-display">
              <span className="text-yellow-500">STRIKE</span> INITIATED.
            </h3>
            <p className="text-gray-400 text-lg md:text-xl font-medium tracking-widest uppercase">
              Decrypting Flash Sale Pricing...
            </p>
          </div>
        )}
      </div>
    </>
  );
}
