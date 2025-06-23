'use client';

import { useEffect, useState } from 'react';

type Skill = {
  name: string;
  percentage: number;
};

const skills: Skill[] = [
  { name: 'Full Stack Web Dev', percentage: 95 },
  { name: 'FinTech', percentage: 80 }, 
  { name: 'Desktop Application', percentage: 90 },
  { name: 'ERP Development', percentage: 90 },
 
 

];

export default function About() {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(prev =>
        prev.map((val, i) =>
          val < skills[i].percentage ? Math.min(val + 1, skills[i].percentage) : val
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col items-center">
        {/* Header */}
        <h2 className="text-3xl font-bold tracking-wide text-center text-[#333] uppercase">
          ABOUT ME
        </h2>
        {/* Double underline */}
        <div className="mt-2 mb-12 flex flex-col items-center space-y-1">
         
          <span className="w-10 h-[2px] bg-[#555]"></span>
           <span className="w-20 h-[2px] bg-[#555]"></span>
        </div>

        {/* Content layout */}
        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Left side */}
          <div>
            <h3 className="text-2xl font-bold text-[#555] mb-4">Howdy!</h3>
          
          <p className="text-gray-600">
            I’m a Software Developer with a strong background in Accounting & Finance. I specialize in building ERP systems,
            financial applications, and automation tools that enhance business operations. Combining my expertise in finance
            and technology, I develop scalable, secure, and efficient solutions that drive digital transformation and improve
            financial decision-making.
          </p><br />
            <button className="bg-[#333] rounded text-white text-xs tracking-[0.3em] px-8 py-4 font-medium hover:bg-black transition uppercase">
              DOWNLOAD MY CV
            </button>
          </div>

          {/* Right side - Progress Bars */}
          <div className="space-y-8">
            {skills.map((skill, idx) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm uppercase tracking-wider text-[#555]">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-[#555]">
                    {animatedValues[idx]}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#e0e0e0] relative">
                  {/* Progress bar */}
                  <div
                    className="h-1.5 bg-[#333] transition-all duration-300"
                    style={{ width: `${animatedValues[idx]}%` }}
                  ></div>
                  {/* Circular thumb */}
                  <div
                    className="absolute top-1/2 w-3 h-3 bg-[#333] shadow-2xl rounded-full -translate-y-1/2 transition-all duration-300"
                    style={{ left: `calc(${animatedValues[idx]}% - 6px)` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}