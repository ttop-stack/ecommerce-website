import React, { useRef, useEffect } from 'react';

const images = [
  '/fashion1.jpg',
  '/fashion2.jpg',
  '/fashion3.jpg',
];

export const Portfolio: React.FC<{ visible: boolean }> = ({ visible }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visible]);

  return (
    <section
      ref={ref}
      id="portfolio"
      className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex flex-col items-center justify-center min-h-[60vh] py-16 bg-white`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black animate-fade-in-up">Fashion Design Portfolio</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center">
        {images.map((src, i) => (
          <div
            key={src}
            className="overflow-hidden rounded-2xl shadow-lg w-64 h-80 bg-neutral-100 animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.2}s` }}
          >
            <img
              src={src}
              alt={`Fashion work ${i + 1}`}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
