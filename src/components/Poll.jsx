import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import yellowImg from '../assets/yellow.png';
import blackImg from '../assets/black.png';

const PollCard = ({ option, isVoted, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(option.id)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-[600px] w-full rounded-3xl cursor-pointer group transition-all duration-500 ${isVoted ? 'ring-2 ring-brand-charcoal ring-offset-8' : ''}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 rounded-3xl bg-brand-beige/20 overflow-hidden shadow-2xl"
      >
        <motion.img
          src={option.image}
          alt={option.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Text Details */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-start text-left"
        >
          <motion.span 
            className="text-brand-accent text-[10px] uppercase tracking-[0.4em] mb-2 font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0"
          >
            {option.theme}
          </motion.span>
          <h3 className="text-brand-offwhite text-3xl font-serif mb-6 group-hover:tracking-wider transition-all duration-700 lowercase italic">
            {option.name}
          </h3>
          <div className="w-0 group-hover:w-full h-[1px] bg-brand-offwhite/30 transition-all duration-1000 mb-6" />
          <button className="text-brand-offwhite/80 text-[10px] uppercase tracking-[0.3em] font-light group-hover:text-brand-accent transition-colors">
            Cast Selection
          </button>
        </div>

        {/* Vote Animation Overlay */}
        <AnimatePresence>
            {isVoted && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-[2px] flex items-center justify-center z-20"
                >
                    <motion.div 
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="bg-brand-offwhite text-brand-charcoal px-8 py-4 rounded-full font-serif italic text-lg shadow-2xl"
                    >
                        Selected +1
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Poll = () => {
  const [voted, setVoted] = useState(null);

  const options = [
    { id: 'yellow', name: 'The Solar Eyelet', image: yellowImg, theme: 'COLLECTION 01' },
    { id: 'black', name: 'The Pearl Nocturne', image: blackImg, theme: 'EVENING SERIES' }
  ];

  return (
    <section className="py-32 bg-brand-offwhite overflow-hidden perspective-[1000px]">
      <div className="container mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
           <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.4em] text-brand-accent mb-4 block">Community Co-Creation</span>
                <h2 className="text-5xl md:text-6xl font-serif leading-tight text-brand-charcoal">Vote for our Debut Heirloom</h2>
           </div>
           <p className="max-w-xs text-brand-charcoal/50 text-[11px] uppercase tracking-[0.2em] leading-relaxed">
             Which silhouette defines the VELOÉ launch? Your choice will determine the first piece we bring to life.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
          {options.map((option) => (
            <PollCard 
                key={option.id} 
                option={option} 
                isVoted={voted === option.id} 
                onClick={setVoted} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Poll;
