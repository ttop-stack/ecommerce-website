import React from 'react';


const About: React.FC = () => (
  <section id="about" className="max-w-3xl mx-auto py-20 px-4 text-center flex flex-col items-center font-sans">
    <div className="w-full rounded-2xl bg-white/80 shadow-lg p-8 md:p-12 backdrop-blur-sm">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black font-sans tracking-tight">About Me</h2>
      <p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed font-sans">
        Hi, I’m Taylor Topa—a creative technologist and designer passionate about the intersection of fashion and technology. I’m building this site to showcase my web development and design skills, with the goal of attracting leading fashion houses and brands. My background spans both creative and technical fields, and I’m always seeking new ways to blend innovation with style.
      </p>
      <p className="text-base md:text-lg text-neutral-600 mb-4 font-sans">
        My experience includes roles in digital design, creative direction, and hands-on development. I’m currently volunteering with Runway7 for NYFW 2025, further immersing myself in the world of high fashion and live events. I believe in the power of great design to tell stories and create memorable experiences—both online and on the runway.
      </p>
      <p className="text-base md:text-lg text-neutral-600 font-sans">
        For a full overview of my skills and experience, please see my CV or reach out to connect. I’m excited to collaborate with forward-thinking brands and teams.
      </p>
    </div>
  </section>
);

export default About;
