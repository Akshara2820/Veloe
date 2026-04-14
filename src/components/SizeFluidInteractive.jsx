import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import adjustableImg from '../assets/adjustable.png';

const sizes = ['S', 'M', 'L', 'XL'];

const SizeFluidInteractive = () => {
  const [sizeIndex, setSizeIndex] = useState(1); // Default to M

  // Calculate scale based on size
  const getScale = (index) => {
    return 1 + (index * 0.05); // Subtle scale up for larger sizes
  };

  return (
    <section id="adjustable" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-8 md:px-20 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Interactive Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            One Garment. <br />Infinite Forms.
          </h2>
          <p className="text-brand-charcoal/70 mb-12 max-w-sm font-sans font-light">
            Slide to see how our unique fabric architecture expands and contracts without losing its silhouette. From Size S to XL, our garments are built to fluctuate with you.
          </p>

          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-accent">Current Fit</span>
              <motion.span 
                key={sizeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-serif italic"
              >
                Size {sizes[sizeIndex]}
              </motion.span>
            </div>

            <div className="relative pt-4">
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1"
                value={sizeIndex}
                onChange={(e) => setSizeIndex(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-4 text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/40 font-medium">
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
                <span>Extra Large</span>
              </div>
            </div>

            <p className="text-[11px] leading-relaxed text-brand-charcoal/50 uppercase tracking-widest font-light mt-12 bg-brand-beige/20 p-4 border-l border-brand-accent">
              * Fabric technology features 4-way micro-elasticity blended with natural linen for maximum breathability and structural integrity.
            </p>
          </div>
        </motion.div>

        {/* Right: Visual Feedback */}
        <div className="order-1 md:order-2 flex justify-center relative bg-brand-beige/10 py-12 rounded-full aspect-square md:aspect-auto">
          <motion.div 
            className="relative w-full max-w-md overflow-hidden rounded-3xl"
            animate={{ 
              scale: getScale(sizeIndex),
              filter: `brightness(${1 - sizeIndex * 0.02})` // Subtle shadow/depth change
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img 
              src={adjustableImg} 
              alt="Adjustable Fashion Piece" 
              className="w-full h-auto object-cover"
            />
            
            {/* Overlay indicators - like measurement lines */}
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 border-[1px] border-brand-charcoal/20 m-8 flex items-center justify-center pointer-events-none"
              >
                <div className="w-full h-[0.5px] bg-brand-charcoal/10 absolute top-1/4"></div>
                <div className="w-full h-[0.5px] bg-brand-charcoal/10 absolute bottom-1/4"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          <div className="absolute -bottom-4 right-8 bg-brand-charcoal text-brand-offwhite p-4 rounded-full shadow-2xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeFluidInteractive;
