import React from 'react';
import { navLinks } from '../data/membershipData';
import { Globe, Share2, Video, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/80 pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-900">
        
        {/* Brand info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center group">
            <span className="text-2xl font-black tracking-widest text-white uppercase italic" style={{ fontFamily: "'Fira Sans', system-ui, sans-serif" }}>
              STRIKE
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Powered by Coder Army. Interactive learning platform for Data Structures, Algorithms, Web Development, and System Design.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a href="#" className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <Video className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Platform */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
            Platform & Legal
          </h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} STRIKE (Coder Army). All rights reserved.</p>

      </div>
    </footer>
  );
}
