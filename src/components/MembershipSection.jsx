import React from 'react';
import PrivateDrop from './sale/PrivateDrop';
import { motion } from 'framer-motion';

export default function MembershipSection() {
  return (
    <section id="membership" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800/80">
      
      {/* Header aligned to mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center"
      >
        <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] mb-4">
          The Strike Membership
        </span>
        
        <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight font-display leading-none mb-6">
          <span className="text-white block">Membership</span>
          <span className="text-gray-400 block mt-2">Plans</span>
        </h2>
        
        <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          One focused investment in your engineering career.<br/>
          Every course. Present and future. Pay once, learn forever.
        </p>
      </motion.div>

      {/* Cards Layout */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <PrivateDrop />
      </motion.div>

    </section>
  );
}
