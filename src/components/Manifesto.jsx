import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <section className="py-40 bg-brand-charcoal text-brand-offwhite overflow-hidden border-y border-brand-offwhite/5">
      <div className="container mx-auto px-8 md:px-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-brand-accent font-semibold mb-8 block">The VELOÉ Standard</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] mb-12 italic">
               “At VELOÉ, we’re redefining what it means to fit.”
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-[1px] bg-brand-offwhite/10 mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] leading-[2] font-light max-w-3xl"
          >
            No more chasing sizes or standards—your body is not the problem. 
            Clothing should adapt to you.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
