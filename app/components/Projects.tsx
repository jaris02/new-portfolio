'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaLink, FaSearchPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

const categories = ['ALL', 'WEB', 'Desktop-App', 'ERP-Systems'];

const items = [
  {
    id: 1,
    title: 'Hospital Management System',
    category: 'Desktop-App',
    images: ['/hospital/adduser-admin.png','/hospital/login.png','/hospital/adduser-admin.png', '/hospital/viewuser.png', '/hospital/add-patient.png','/hospital/view-patient.png','/hospital/payment.png','/hospital/diagnose.png','/hospital/additional-diagnose.png','/hospital/viewresult.png'],
    link: 'https://example.com/hospital-system',
  },
  {
    id: 2,
    title: 'Store Inventory App',
    category: 'ERP-Systems',
    images: ['/inventory-admin-dahs.png', '/Add-user.png','/financial-report.png','/incomestatmnet.png','/balancesheet.png','/balancesheet-pdf.png','/cashflow.png','/prod-dashboard.png','/cash.png','/customer.png'],
  },
  {
    id: 3,
    title: 'University Degree System',
    category: 'WEB',
    images: ['/desktopinv.png', '/desktopinv.png'],
    link: 'https://example.com/degree-system',
  }, {
    id: 4,
    title: 'Real Estate Company',
    category: 'WEB',
    images: ['/real-state/realstate-landing.jpg', '/real-state/login.jpg', '/real-state/book-tovisit.jpg','/real-state/preview.jpg'],
    link: 'https://example.com/hospital-system',
  },
  {
    id: 5,
    title: 'KYC(Know Your Customer)',
    category: 'WEB',
    images: ['/kyc/kyc-documentsection1.png', '/kyc/kyc-documentsection2.png','/kyc/kyc-documentsection3.png','/kyc/kyc-documentsection54.png','/kyc/kyc-documentsection4.png','/kyc/kyc-documentsection6.png','/kyc/kyc-documentsection7.png','/kyc/kyc-documentsection8.png','/kyc/kyc-documentsection9.png','/kyc/kyc-documentsection10.png','/kyc/kyc-documentsection11.png','/kyc/kyc-documentsection12.png','/kyc/kyc-documentsection13.png'],
  },
  {
    id: 6,
    title: 'Organick',
    category: 'WEB',
    images: ['/organic/organic1.jpg', '/organic/organic2.jpg', '/organic/organic3.jpg', '/organic/organic4.jpg', '/organic/organic5.jpg', '/organic/organic6.jpg','/organic/organic7.jpg','/organic/organic8.jpg',],
    
  },{
    id: 7,
    title: 'OnCourt',
    category: 'WEB',
    images: ['/oncourt/oncourt1.png', '/oncourt/oncourt2.png', '/oncourt/oncourt3.png', '/oncourt/oncourt4.png', '/oncourt/oncourt5.png','/oncourt/oncourt7.png'],
    link: 'https://oncourt-nu.vercel.app',
  },
];

export default function PortfolioSection() {
  const [selected, setSelected] = useState('ALL');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems =
    selected === 'ALL' ? items : items.filter((item) => item.category.toUpperCase() === selected);

  const openModal = (project: any) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveProject(null);
    setModalOpen(false);
  };

  const nextImage = () => {
    if (!activeProject) return;
    setCurrentImageIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!activeProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio"  className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold uppercase text-[#333]">My Portfolio</h2>
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
              className={`relative text-gray-600 transition duration-300 ${
                selected === cat ? 'text-gray-400' : 'hover:text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className={clsx(
                'relative group overflow-hidden rounded-md shadow-md',
                i % 4 === 0 ? 'row-span-2' : 'row-span-1'
              )}
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <div className="text-white text-center space-y-3">
                  <div className="flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <FaLink className="text-xl hover:text-gray-300 cursor-pointer transition" />
                      </a>
                    )}
                    <FaSearchPlus
                      className="text-xl hover:text-gray-300 cursor-pointer transition"
                      onClick={() => openModal(item)}
                    />
                  </div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-200">{item.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && activeProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full relative p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>

            {/* Image Carousel */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <Image
                src={activeProject.images[currentImageIndex]}
                alt={`Preview ${currentImageIndex + 1}`}
                fill
                className="object-cover rounded-md"
              />
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <FaArrowLeft />
              </button>
              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <FaArrowRight />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {activeProject.images.map((_: string, idx: number) => (
                <span
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentImageIndex === idx ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                />
                ))}
            </div>

            {/* Project Link */}
            {activeProject.link && (
              <div className="mt-6 text-center">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Visit Project
                </a>
              </div>
            )}

            <div className="mt-4 text-gray-700 text-center">{activeProject.category}</div>
          </div>
        </div>
      )}
    </section>
  );
}
