import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-beige/20"
    >
      <div className="text-2xl font-serif tracking-widest uppercase text-brand-charcoal">
        VELOÉ
      </div>
      
      <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-sans font-light">
        <a href="#adjustable" className="hover:text-brand-accent transition-colors">The Fit</a>
        <a href="#philosophy" className="hover:text-brand-accent transition-colors">Philosophy</a>
        <a href="#waitlist" className="hover:text-brand-accent transition-colors">Inner Circle</a>
      </div>

      <button className="px-6 py-2 border border-brand-charcoal text-xs uppercase tracking-[0.2em] hover:bg-brand-charcoal hover:text-brand-offwhite transition-all duration-500">
        Discover
      </button>
    </motion.nav>
  );
};

export default Navbar;
