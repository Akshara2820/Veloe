import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 bg-brand-charcoal text-brand-offwhite relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] select-none pointer-events-none flex flex-col justify-between items-center py-20">
        <span className="text-9xl font-serif">FLUIDITY</span>
        <span className="text-9xl font-serif">ADAPTATION</span>
        <span className="text-9xl font-serif">BALANCE</span>
      </div>

      <div className="container mx-auto px-8 md:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-brand-beige mb-12 block"
          >
            The Manifest
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif leading-relaxed italic mb-16"
          >
            "Why should your favorite dress <br /> stop fitting when your body <br /> 
            <span className="text-brand-accent not-italic">does its job?</span>"
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 text-left border-t border-brand-offwhite/10 pt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif mb-6 text-brand-beige">The Fluctuation Reality</h3>
              <p className="font-sans font-light leading-relaxed text-brand-offwhite/70">
                In India, a woman's body navigates complex rhythms—from hormonal shifts and postpartum transitions to the natural ebb and flow of a busy lifestyle. Yet, the fashion industry demands we stay "fixed."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-xl font-serif mb-6 text-brand-beige">The Veloe Solution</h3>
              <p className="font-sans font-light leading-relaxed text-brand-offwhite/70">
                We believe in size-fluidity. Our garments don't just "stretch"; they are mathematically engineered to scale. We use seams that breathe and silhouettes that drape intelligently, so you never feel restricted by a number on a tag.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 inline-block px-12 py-6 border border-brand-beige/30 text-xs uppercase tracking-[0.3em] hover:bg-brand-offwhite hover:text-brand-charcoal transition-all cursor-pointer"
          >
            Read Our Whitepaper on Fluid Design
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
