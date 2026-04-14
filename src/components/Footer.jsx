import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-offwhite py-20 border-t border-brand-beige">
      <div className="container mx-auto px-8 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-serif tracking-[0.2em] uppercase mb-8">
              VELOÉ
            </div>
            <p className="max-w-xs text-brand-charcoal/50 text-sm font-sans font-light leading-relaxed">
              VELOÉ — Designed to fit you, not the other way around. Based in Mumbai, crafting the future of adjustable fashion.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-sans font-light text-brand-charcoal/70">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">The Lab</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8">Connect</h4>
            <ul className="space-y-4 text-sm font-sans font-light text-brand-charcoal/70">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-beige text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-light">
          <p>© 2026 VELOÉ Studios. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-charcoal">Privacy</a>
            <a href="#" className="hover:text-brand-charcoal">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
