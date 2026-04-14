import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import yellowImg from '../assets/yellow.png';
import blackImg from '../assets/black.png';

const PollCard = ({ option, isVoted, onClick }) => {
  const containerRef = useRef(null);
  
  // Use smoother spring settings for that "luxury oil" feel
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  // Subtle rotation - luxury is understated
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Parallax for text and background
  const textX = useTransform(mouseXSpring, [-0.5, 0.5], ["15px", "-15px"]);
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], ["15px", "-15px"]);
  const imgScale = useTransform(mouseYSpring, [-0.5, 0.5], [1.05, 1.1]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(option.id)}
      className="relative h-[650px] w-full cursor-pointer perspective-[1500px] group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={`relative w-full h-full rounded-[2.5rem] overflow-hidden transition-shadow duration-500 ${
          isVoted ? 'shadow-[0_0_50px_rgba(142,128,106,0.2)]' : 'shadow-2xl'
        }`}
      >
        {/* Main Image Layer */}
        <motion.div 
            style={{ scale: imgScale, transformStyle: "preserve-3d" }}
            className="absolute inset-0 select-none"
        >
          <img
            src={option.image}
            alt={option.name}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:filter group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/10 transition-colors duration-700" />
        </motion.div>
        
        {/* Dynamic Highlight/Shine (Follows mouse) */}
        <motion.div 
            style={{
                background: useTransform(
                    [mouseXSpring, mouseYSpring],
                    ([x, y]) => `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                )
            }}
            className="absolute inset-0 pointer-events-none z-10"
        />

        {/* Content Layer (Floating) */}
        <motion.div 
          style={{ 
            x: textX, 
            y: textY,
            transformZ: "60px",
            transformStyle: "preserve-3d"
          }}
          className="absolute inset-0 p-12 flex flex-col justify-end z-20"
        >
          <motion.div className="flex flex-col items-start backdrop-blur-[2px] bg-black/10 p-6 rounded-2xl border border-white/10">
            <span className="text-brand-accent text-[11px] uppercase tracking-[0.5em] mb-3 font-semibold translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                {option.theme}
            </span>
            <h3 className="text-brand-offwhite text-4xl font-serif mb-6 leading-none italic capitalize">
                {option.name}
            </h3>
            <div className="h-[1px] w-8 group-hover:w-full bg-brand-offwhite/40 transition-all duration-1000 mb-6" />
            <div className="flex items-center space-x-4">
                <span className="text-brand-offwhite/50 text-[10px] uppercase tracking-[0.3em] font-light">View Silhouette</span>
                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* Selection State */}
        <AnimatePresence>
            {isVoted && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-brand-accent/20 backdrop-blur-md flex items-center justify-center z-30"
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-brand-offwhite text-brand-charcoal px-10 py-5 rounded-full font-serif italic text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    >
                        Reservation Confirmed
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Poll = () => {
  const [voted, setVoted] = useState(null);

  const options = [
    { id: 'yellow', name: 'The Solar Eyelet', image: yellowImg, theme: 'ARCHIVE 0.1' },
    { id: 'black', name: 'The Pearl Nocturne', image: blackImg, theme: 'EVENING 0.1' }
  ];

  return (
    <section className="py-40 bg-brand-offwhite overflow-hidden perspective-[2000px]">
      <div className="container mx-auto px-8 md:px-20">
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-end">
           <div className="lg:col-span-8">
                <span className="text-xs uppercase tracking-[0.6em] text-brand-accent mb-6 block font-bold">Concept Selection</span>
                <h2 className="text-6xl md:text-8xl font-serif leading-[1] text-brand-charcoal">Vote for our <br/>Debut Heirloom</h2>
           </div>
           <div className="lg:col-span-4 pb-4">
                <p className="border-l-2 border-brand-accent pl-8 text-brand-charcoal/60 text-sm font-sans font-light leading-relaxed">
                    VELOÉ pieces are heirlooms in the making. Your community vote dictates our inaugural production run. Choose the vibe that resonates.
                </p>
           </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 max-w-7xl mx-auto">
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
