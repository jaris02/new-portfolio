'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaLink, FaSearchPlus } from 'react-icons/fa';
import clsx from 'clsx';

const categories = ['ALL', 'WEB', 'Desktop-App', 'ERP-Systems'];

const items = [
  {
    id: 1,
    title: 'Hospital Management System',
    category: 'Desktop-App',
    image: '/your-photo.jpg',
  },
  {
    id: 2,
    title: 'Store Inventory App',
    category: 'ERP-Systems',
    image: '/your-photo.jpg',
  },
  {
    id: 3,
    title: 'University Degree System',
    category: 'WEB',
    image: '/your-photo.jpg',
  },
  {
    id: 4,
    title: 'FinTech UI Design',
    category: 'WEB',
    image: '/your-photo.jpg',
  },
  {
    id: 5,
    title: 'Finance Dashboard',
    category: 'ERP-Systems',
    image: '/your-photo.jpg',
  },
  {
    id: 6,
    title: 'Finance Dashboard',
    category: 'ERP-Systems',
    image: '/your-photo.jpg',
  },
  {
    id: 7,
    title: 'Finance Dashboard',
    category: 'ERP-Systems',
    image: '/your-photo.jpg',
  }
];

export default function PortfolioSection() {
  const [selected, setSelected] = useState('ALL');

  const filteredItems =
    selected === 'ALL' ? items : items.filter((item) => item.category.toUpperCase() === selected);

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold uppercase text-[#333]">My Portfolio</h2>

        {/* Double Underline */}
        <div className="mt-2 mb-8 flex flex-col items-center space-y-1">
          <span className="w-10 h-[2px] bg-[#555]" />
          <span className="w-20 h-[2px] bg-[#555]" />
        </div>

        {/* Filter Buttons */}
       <div className="flex justify-center flex-wrap gap-6 mb-12 text-sm font-medium">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelected(cat)}
      className={`relative text-gray-600 transition duration-300 
        ${selected === cat ? 'text-gray-400' : 'hover:text-gray-400'}`}
    >
      <span
        className={`relative inline-block after:absolute  after:top-1/2 after:h-[1px] after:bg-gray-400 after:transition-all after:duration-300
          ${selected === cat
            ? 'after:w-full after:left-0 '
            : 'after:w-0 hover:after:left-0 hover:after:w-full'}`}
      >
        {cat}
      </span>
    </button>
  ))}
</div>


        {/* 3-Column Grid with Masonry Style */}
        <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className={clsx(
                'relative group overflow-hidden rounded-md shadow-md',
                // Alternate rectangle/tall styles
                i % 4 === 0 ? 'row-span-2' : 'row-span-1'
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <div className="text-white text-center space-y-3">
                  <div className="flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    <FaLink className="text-xl hover:text-gray-300 cursor-pointer transition" />
                    <FaSearchPlus className="text-xl hover:text-gray-300 cursor-pointer transition" />
                  </div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-200">{item.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
