import React from 'react';
import { Tag } from 'lucide-react';

export default function SaleSignal({ onActivate }) {
  return (
    <button
      onClick={onActivate}
      className="w-full mb-4 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700/80 hover:border-gray-500 text-left transition-all flex items-center justify-between group active:scale-[0.99]"
    >
      <div className="flex items-center space-x-2 text-xs text-gray-300 font-medium">
        <Tag className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
        <span>Limited Offer Available</span>
      </div>

      <span className="text-[11px] text-gray-400 group-hover:text-white font-medium underline underline-offset-2">
        View Offer ↗
      </span>
    </button>
  );
}
