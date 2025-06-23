'use client';

import React from 'react';

const experiences = [
  {
    company: 'Wollo University',
    role: 'Full-Stack Developer',
    date: '2024 – Present',
    description:
      'Building a degree document processing system to streamline academic administration and validation.',
  },
  {
    company: 'Hospital Desktop App',
    role: 'Software Developer',
    date: '2023',
    description:
      'Developed a complete hospital management system for desktop, handling patients, appointments, billing, and HR.',
  },
  {
    company: 'SME Inventory + IFRS',
    role: 'System Analyst / Developer',
    date: '2022',
    description:
      'Designed a desktop-based inventory and store management system aligned with IFRS for SMEs.',
  },
  {
    company: 'Passion Projects',
    role: 'Indie Developer',
    date: 'Ongoing',
    description:
      'Created various self-driven apps like dashboards, UIs, and automations with modern stacks.',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-wide text-center text-[#333] uppercase">
          My Experience
        </h2>

        {/* Double underline */}
        <div className="mt-2 mb-12 flex flex-col items-center space-y-1">
          <span className="w-10 h-[2px] bg-[#555]" />
          <span className="w-20 h-[2px] bg-[#555]" />
        </div>

        <div className="relative grid md:grid-cols-2 gap-10">
          {/* This is the full-height vertical dotted line */}
         

          {experiences.map((exp, idx) => (
           <div className="relative pl-10">
  {/* Timeline Dot */}
  <div className="absolute left-[-10px] top-1 w-6 h-6 text-white font-black bg-[#333] rounded-full flex items-center justify-center z-10">
    ✓
  </div>

  {/* Timeline Connector (only if not the last item) */}
  {idx < experiences.length - 2 && (
    <div className="absolute left-0 top-6 h-[130%] w-[2px] border-l-2 border-dotted border-gray-300 z-0" />
  )}

  <h3 className="text-xl font-semibold text-[#333] mb-3">{exp.role}</h3>
  <p className="text-gray-600 text-sm mb-1">
    {exp.company} — {exp.date}
  </p>
  <p className="text-gray-500">{exp.description}</p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
