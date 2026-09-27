import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/membershipData';
import { ArrowRight, Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add extra background blur/shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`w-full max-w-6xl rounded-full transition-all duration-300 border ${
          scrolled 
            ? 'bg-[#050505]/60 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          
          {/* STRIKE Logo */}
          <a href="#home" className="flex items-center group relative z-10">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase italic" style={{ fontFamily: "'Fira Sans', system-ui, sans-serif" }}>
              STRIKE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1 px-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  idx === 0
                    ? 'text-white bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center space-x-3 relative z-10">
            {/* The Secret Lightning Strike Trigger */}
            <button 
              onClick={() => window.dispatchEvent(new Event('strike_sale_trigger_reveal'))}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/50 bg-yellow-900/20 text-yellow-500 hover:text-yellow-400 hover:bg-yellow-900/40 hover:border-yellow-400 transition-all hover:scale-105 group/zap relative hover:shadow-[0_0_25px_rgba(234,179,8,0.25)]"
              title="Activate Flash Sale"
            >
              <Zap className="w-4 h-4 fill-yellow-500/20 group-hover/zap:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
              <span className="text-xs font-bold tracking-widest uppercase">Unlock All Courses</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover/zap:animate-[shimmer_2s_infinite]"></div>
            </button>

            <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full text-gray-300 hover:text-white transition-colors ${mobileMenuOpen ? 'bg-white/10' : ''}`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-3xl border-t border-white/10 rounded-b-[2rem]"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      idx === 0 ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
