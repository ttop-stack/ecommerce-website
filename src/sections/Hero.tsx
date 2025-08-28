import React from 'react';
import { Button } from '../components/Button';
import { AnimatedText } from '../components/AnimatedText';

interface HeroProps {
  onViewWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork }) => (
  <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-neutral-100">
    <AnimatedText
      text="Taylor Topa"
      className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-black"
    />
    <AnimatedText
      text="Designing the future of fashion."
      className="text-xl md:text-2xl font-light mb-8 text-neutral-700"
    />
    <Button className="mt-2 shadow-lg" onClick={onViewWork}>
      View My Work
    </Button>
  </section>
);

export default Hero;
