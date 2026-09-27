import React from 'react';
import { Lock, RefreshCw } from 'lucide-react';

export default function ExpiredOffer({ onResetDemo }) {
  return (
    <div className="relative p-8 rounded-2xl bg-gray-950 border border-gray-800 text-center flex flex-col items-center justify-center min-h-[150px] w-full">
      
      {onResetDemo && (
        <button
          onClick={onResetDemo}
          className="absolute top-2 right-2 p-1.5 text-gray-600 hover:text-white transition-colors rounded hover:bg-gray-800"
          title="Dev Helper: Reset Offer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      )}

      <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 mb-3">
        <Lock className="w-5 h-5" />
      </div>
      <h4 className="text-lg font-bold text-gray-200">
        Offer Expired
      </h4>
      <p className="text-gray-400 mt-1 text-sm">
        This promotion is no longer available.
      </p>
    </div>
  );
}
