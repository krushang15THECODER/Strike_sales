import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function SaleTrigger({ onActivate }) {
  return (
    <motion.button
      onClick={onActivate}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3 bg-[#0a0a0a]/90 backdrop-blur-md border border-yellow-500/50 px-4 py-3 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all cursor-pointer"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-20"></div>
        <Gift className="w-5 h-5 text-yellow-500" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-white text-xs font-bold uppercase tracking-wider">Secret Drop</span>
        <span className="text-yellow-500/80 text-[10px] font-medium tracking-widest">Click to decrypt</span>
      </div>
    </motion.button>
  );
}
