'use client';

import {
  FaLaptopCode,
  FaChartBar,
  FaCogs,
  FaDatabase,
  FaRobot,
  FaDesktop,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Full Stack Development',
    description:
      'Building scalable, responsive web applications using modern stacks (Next.js, Supabase, Tailwind).',
  },
  {
    icon: <FaDesktop />,
    title: 'Desktop Applications',
    description:
      'Developing powerful desktop solutions using C#, WinForms, and .NET for business-critical tools.',
  },
  {
    icon: <FaChartBar />,
    title: 'FinTech Solutions',
    description:
      'Custom-built tools for budgeting, reporting, and financial analysis with real-world accounting insight.',
  },
  {
    icon: <FaCogs />,
    title: 'ERP Systems',
    description:
      'End-to-end ERP modules for inventory, HR, finance, and procurement tailored for SMEs.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design',
    description:
      'Designing normalized, high-performance relational databases with SQL optimization.',
  },
  {
    icon: <FaRobot />,
    title: 'Automation & Workflows',
    description:
      'Automation of repetitive tasks, document flows, and business processes to save time and improve accuracy.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-100 text-center" id="services">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold uppercase text-[#333]">Services</h2>
        <div className="mt-2 mb-12 flex flex-col items-center space-y-1">
          <span className="w-10 h-[2px] bg-[#555]" />
          <span className="w-20 h-[2px] bg-[#555]" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-gray-400 hover:shadow-xl hover:-translate-y-2 group transition-all duration-300 transform"
            >
              <div className="flex flex-col items-center text-gray-800">
                <div className="bg-gray-100 group-hover:bg-gray-800 transition duration-300 p-4 rounded-full mb-4">
                  {/* Icon with color transition */}
                  <div className="text-3xl text-gray-700 group-hover:text-white transition duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
