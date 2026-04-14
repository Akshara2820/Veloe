import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sketchImg from '../assets/sketch_edit.png';
import gardenImg from '../assets/garden_edit.png';

const Poll = () => {
  const [voted, setVoted] = useState(null);

  const options = [
    { id: 'sculptural', name: 'The Sculptural Edit', image: sketchImg, theme: 'Avant-Garde & Architectural' },
    { id: 'garden', name: 'The Garden Edit', image: gardenImg, theme: 'Soft, Fluid & Cottagecore' }
  ];

  return (
    <section className="py-24 bg-brand-offwhite border-t border-brand-beige/30">
      <div className="container mx-auto px-8 md:px-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Which Vibe Should Lead Our Debut?</h2>
          <p className="text-brand-charcoal/60 mb-16 max-w-xl mx-auto font-sans font-light">
            VELOÉ is a conversation between two worlds. We want our community to decide which design direction we should drop first.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {options.map((option) => (
            <motion.div
              key={option.id}
              whileHover={{ y: -10 }}
              className={`relative cursor-pointer group rounded-2xl overflow-hidden border ${voted === option.id ? 'border-brand-charcoal ring-1 ring-brand-charcoal' : 'border-transparent'}`}
              onClick={() => setVoted(option.id)}
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-beige/10">
                <img 
                  src={option.image} 
                  alt={option.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                <h3 className="text-brand-offwhite text-2xl font-serif mb-1">{option.name}</h3>
                <p className="text-brand-offwhite/60 text-[10px] uppercase tracking-widest font-medium mb-4">{option.theme}</p>
                <div className="text-brand-offwhite/80 text-[10px] uppercase tracking-widest font-medium border-t border-brand-offwhite/20 pt-4">
                    Vote for this Aesthetic
                </div>
              </div>

              {voted === option.id && (
                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 bg-brand-charcoal text-brand-offwhite w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm italic z-20"
                >
                    +1
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {voted && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-brand-charcoal inline-block px-12 py-5 text-brand-offwhite rounded-full shadow-2xl"
          >
            <p className="text-sm italic font-serif">
              You've voted for <span className="text-brand-accent">{voted === 'sculptural' ? 'Architecture' : 'Nature'}</span>. Thank you for co-creating with us.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Poll;
