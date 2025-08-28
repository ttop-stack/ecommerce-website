
import React, { useRef, useEffect, useState } from 'react';

const images = [
  '/fashion1.jpg',
  '/fashion2.jpg',
  '/fashion3.jpg',
];

interface ShowcaseProps {
  visible: boolean;
  onClose: () => void;
}

const Showcase: React.FC<ShowcaseProps> = ({ visible, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (visible && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setFadeIn(true);
    }
  }, [visible]);

  // Snap scroll logic for accessibility
  useEffect(() => {
    if (!visible) return;
    const container = ref.current;
    if (!container) return;
    const handleScroll = () => {
      const sections = Array.from(container.querySelectorAll('section'));
      const vh = window.innerHeight;
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        const rect = (sections[i] as HTMLElement).getBoundingClientRect();
        if (rect.top <= vh / 2 && rect.bottom > vh / 2) {
          idx = i;
          break;
        }
      }
      setActiveIndex(idx);
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 50);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [visible]);


  const handleHome = () => {
    onClose();
  };

  return (
    <div
      ref={ref}
      className={`w-full h-screen fixed inset-0 z-50 bg-white/95 overflow-y-auto snap-y snap-mandatory ${visible ? '' : 'hidden'}`}
      style={{ position: 'fixed' }}
    >
      {/* Home/Back button */}
      <button
        onClick={handleHome}
        aria-label="Back to Home"
        className="fixed top-6 left-6 z-50 bg-white/60 text-black px-3 py-2 rounded-full shadow-md opacity-60 hover:opacity-90 transition-opacity backdrop-blur border border-neutral-200 flex items-center justify-center"
        style={{ fontWeight: 600, fontSize: '1.5rem' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      {images.map((src, i) => (
        <section
          key={src}
          className="min-h-screen w-full flex flex-col items-center justify-center bg-white snap-start relative overflow-hidden"
          style={{ zIndex: 10 - i }}
        >
          {/* Previous images as background overlays */}
          {i > 0 && (
            <img
              src={images[i - 1]}
              alt="background design"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none select-none"
              style={{ zIndex: 1 }}
            />
          )}
          {/* Main image with slow fade-in */}
          <img
            src={src}
            alt={`Fashion work ${i + 1}`}
            className={`object-cover w-full max-w-2xl h-[70vh] rounded-3xl shadow-2xl transition-opacity duration-[1800ms] ${fadeIn && activeIndex === i ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: 2, animationDelay: `${0.2 + i * 0.2}s` }}
          />
        </section>
      ))}
    </div>
  );
};

export default Showcase;
