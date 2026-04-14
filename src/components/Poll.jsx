import React, { useState } from 'react';
import { motion } from 'framer-motion';
import peachImg from '../assets/peach.png';
import emeraldImg from '../assets/emerald.png';

const Poll = () => {
  const [voted, setVoted] = useState(null);

  const options = [
    { id: 'peach', name: 'Peach Floral', image: peachImg, color: '#F8C8B4' },
    { id: 'emerald', name: 'Emerald Green', image: emeraldImg, color: '#046341' }
  ];

  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-8 md:px-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Help Us Build the First Drop</h2>
          <p className="text-brand-charcoal/60 mb-16 max-w-xl mx-auto font-sans font-light">
            We are co-creating our debut collection with our community. Which hue should lead the first delivery?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {options.map((option) => (
            <motion.div
              key={option.id}
              whileHover={{ y: -10 }}
              className={`relative cursor-pointer group rounded-2xl overflow-hidden ${voted === option.id ? 'ring-2 ring-brand-charcoal' : ''}`}
              onClick={() => setVoted(option.id)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 text-left">
                <h3 className="text-brand-offwhite text-2xl font-serif mb-2">{option.name}</h3>
                <div className="flex items-center space-x-2 text-brand-offwhite/80 text-[10px] uppercase tracking-widest font-medium">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: option.color }}></span>
                    <span>Vote for this variant</span>
                </div>
              </div>

              {voted === option.id && (
                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 bg-brand-charcoal text-brand-offwhite w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm italic"
                >
                    +1
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {voted && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-sm italic font-serif text-brand-accent"
          >
            Thank you for being part of our design studio.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Poll;
