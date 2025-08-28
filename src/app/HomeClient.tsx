"use client";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('../sections/Hero'), { ssr: false });
const Showcase = dynamic(() => import('../sections/Showcase'), { ssr: false });
const About = dynamic(() => import('../sections/About'), { ssr: false });

import React, { useState } from 'react';

export default function HomeClient() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleViewWork = () => setShowPortfolio(true);
  const handleCloseShowcase = () => setShowPortfolio(false);

  return (
    <>
      <Navbar />
  <main className="pt-20 snap-y snap-mandatory overflow-y-auto h-screen">
  <Hero onViewWork={handleViewWork} />
  <Showcase visible={showPortfolio} onClose={handleCloseShowcase} />
  <About />
  {/* Contact section will go here */}
      </main>
    </>
  );
}
