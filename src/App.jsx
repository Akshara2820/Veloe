import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SizeFluidInteractive from './components/SizeFluidInteractive';
import Philosophy from './components/Philosophy';
import Poll from './components/Poll';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

import Moodboard from './components/Moodboard';

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-beige selection:text-brand-charcoal">
      <Navbar />
      <main>
        <Hero />
        <SizeFluidInteractive />
        <Moodboard />
        <Philosophy />
        <Poll />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
