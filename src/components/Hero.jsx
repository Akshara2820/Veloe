import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col md:flex-row overflow-hidden pt-20">
      {/* Left Side: Content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-20 z-10 bg-brand-offwhite">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-brand-accent mb-4 block font-light">
            Size-Fluid Essentials
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-serif">
            Designed to <br />
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="italic font-light"
            >
              Fit You.
            </motion.span>
          </h1>
          <p className="max-w-md text-brand-charcoal/70 font-sans font-light leading-relaxed mb-6 uppercase tracking-[0.2em] text-[10px]">
            VELOÉ — Adjustable fashion for modern women.
          </p>
          <p className="max-w-md text-brand-charcoal/50 font-sans font-light leading-relaxed mb-10">
            Because your body is a masterpiece in constant evolution. We build garments that grow, contract, and breathe with you. Not the other way around.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center space-x-4"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium">Explore the Drops</span>
            <div className="w-12 h-[1px] bg-brand-charcoal group-hover:w-20 transition-all duration-500"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Right Side: Image with Mask Animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden"
      >
        <img 
          src={heroImg} 
          alt="Premium Minimalist Fashion" 
          className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-brand-charcoal/5 pointer-events-none"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
