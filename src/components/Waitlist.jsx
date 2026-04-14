import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-32 bg-brand-beige/20 relative">
      <div className="container mx-auto px-8 md:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-charcoal">Join the Inner Circle</h2>
                <p className="text-brand-charcoal/60 mb-12 font-sans font-light leading-relaxed">
                  Be the first to know when our size-fluid collection drops. Members receive early access and exclusive co-creation invites.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full md:w-96 bg-transparent border-b border-brand-charcoal/30 py-4 px-2 focus:border-brand-charcoal outline-none transition-all font-sans font-light text-center md:text-left"
                  />
                  <button 
                    type="submit"
                    className="w-full md:w-auto flex items-center justify-center space-x-3 bg-brand-charcoal text-brand-offwhite px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-brand-accent transition-all duration-500 group"
                  >
                    <span>Request Access</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-brand-charcoal/40">
                  Quiet Luxury, No Noise. We respect your inbox.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                className="py-12"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0.5 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-block mb-8"
                >
                  <CheckCircle2 size={64} className="text-brand-accent" strokeWidth={1} />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">Welcome to VELOÉ</h2>
                <p className="text-brand-charcoal/60 font-sans font-light">
                  Your invitation has been registered. <br /> Check your inbox for the welcome manifest.
                </p>
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="h-[1px] bg-brand-accent/30 max-w-[200px] mx-auto mt-12"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
