import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CouponCode({ code, isExpired, onCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (isExpired) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    if (onCopy) onCopy();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gray-900/40 border border-gray-800/80 h-full w-full">
      <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest mb-3">
        YOUR DROP CODE
      </span>
      
      <button
        onClick={handleCopy}
        disabled={isExpired}
        className={`w-full max-w-[280px] flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 ${
          isExpired
            ? 'bg-gray-900/50 border-gray-800 text-gray-500 cursor-not-allowed'
            : 'bg-white border-white text-black hover:bg-gray-100 active:scale-[0.98]'
        }`}
      >
        <span className={`text-lg font-bold tracking-widest ${isExpired ? 'line-through opacity-50' : ''}`}>
          {code}
        </span>
        
        <div className={`flex items-center gap-1.5 text-xs font-bold uppercase transition-colors ${copied ? 'text-green-600' : 'text-gray-500 group-hover:text-black'}`}>
          {copied ? (
            <>
              <span>COPIED</span>
              <Check className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>COPY</span>
              <Copy className="w-4 h-4" />
            </>
          )}
        </div>
      </button>
    </div>
  );
}
