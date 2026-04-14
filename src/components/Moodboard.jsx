import React from 'react';
import { motion } from 'framer-motion';
import yellowImg from '../assets/yellow.png';
import pinkImg from '../assets/pink.png';
import creamImg from '../assets/cream.png';
import blackImg from '../assets/black.png';
import heroImg from '../assets/hero.png';

const Moodboard = () => {
  const images = [
    { src: heroImg, span: 'col-span-2 row-span-2' },
    { src: pinkImg, span: 'col-span-1 row-span-1' },
    { src: yellowImg, span: 'col-span-1 row-span-1' },
    { src: blackImg, span: 'col-span-1 row-span-2' },
    { src: creamImg, span: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-24 bg-brand-offwhite overflow-hidden">
      <div className="container mx-auto px-8 md:px-20 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-brand-accent mb-4 block">Archive</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">The VELOÉ Muse</h2>
        </div>
        <p className="max-w-xs text-brand-charcoal/50 text-xs font-sans font-light leading-relaxed uppercase tracking-widest">
           A curation of specific silhouettes including our signature Yellow Eyelet and Black Pearl Cocktail.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 container mx-auto px-8 md:px-20 h-[600px] md:h-[800px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`overflow-hidden rounded-xl bg-brand-beige/20 ${img.span}`}
          >
            <img 
              src={img.src} 
              alt="Moodboard item" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Moodboard;
