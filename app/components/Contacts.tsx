'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xqabgbda', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset(); // clear form
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert(error+'Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#333]">GET IN TOUCH</h2>
          <div className="w-10 h-[2px] bg-[#333] mt-2 mb-1"></div>
          <div className="w-20 h-[2px] bg-[#333] mb-6"></div>
          <p className="text-[#333] mb-10 leading-relaxed max-w-md">
            There are many variations of passages of Lorem Ipsum available, but in some form, by
          </p>
          <div className="space-y-6">
            {[
              { icon: <Phone size={20} />, label: 'Phone', value: '+2519 8359 6151' },
              { icon: <Mail size={20} />, label: 'Email', value: 'zizuasmat@gmail.com' },
              { icon: <MapPin size={20} />, label: 'Our Location', value: 'Dessie City, Here.Ethiopia' },
            ].map(({ icon, label, value }, i) => (
              <div key={i} className="flex items-center space-x-4 group">
                <div className="w-12 h-12 border rounded-full flex items-center justify-center text-[#333] transition duration-200 group-hover:bg-[#333] group-hover:text-white group-hover:scale-105">
                  {icon}
                </div>
                <div>
                  <p className="text-lg font-medium text-[#333]">{label}</p>
                  <p className="text-sm text-[#333]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Section */}
        {submitted ? (
          <div className="flex items-center justify-center flex-col text-center py-10">
            <h3 className="text-2xl font-semibold text-[#333] mb-2">Thank you!</h3>
            <p className="text-[#555] max-w-md">Your message has been sent successfully. I will get back to you soon.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="border-b border-gray-300 bg-transparent focus:outline-none py-2 px-1 text-sm text-[#333]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border-b border-gray-300 bg-transparent focus:outline-none py-2 px-1 text-sm text-[#333]"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 focus:outline-none px-3 py-2 h-40 text-sm text-[#333]"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#333] hover:bg-gray-700 text-white px-6 py-2 text-sm uppercase tracking-wider"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
