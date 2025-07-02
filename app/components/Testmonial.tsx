'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    id: 1,
    name: 'LOUIS MORRISON',
    title: 'REGAL THEME',
    image: '/testmonial-sample.jpg', // Replace with your image path
    quote:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    id: 2,
    name: 'SARAH JOHNSON',
    title: 'CREATIVE STUDIO',
    image: '/testmonial-sample.jpg',
    quote:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    id: 3,
    name: 'JAMES CARTER',
    title: 'DEV CORP',
    image: '/testmonial-sample.jpg',
    quote:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.',
  },
];

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 24,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold uppercase text-[#333]">TESTIMONIAL</h2>

      <div className="mt-2 mb-12 flex flex-col items-center space-y-1">
        <span className="w-10 h-[2px] bg-[#555]" />
        <span className="w-20 h-[2px] bg-[#555]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="keen-slider__slide">
              {/* Avatar positioned absolutely above the card */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2  z-10">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Card with extra top padding to accommodate the avatar */}
              <div className="bg-[#f5f5f5] pt-16 pb-10 px-10 rounded-md shadow-md mt-12">
                <h3 className="text-xl font-semibold text-[#333] uppercase">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.title}</p>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="mt-8 flex justify-center gap-3">
          {[...Array(testimonials.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}