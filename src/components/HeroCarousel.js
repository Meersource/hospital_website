'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1588776856002-c94c92131975?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern Hospital Exterior"
    },
    {
      image: "https://images.unsplash.com/photo-1551076801-09aeef844342?q=80&w=1853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Doctor Patient Consultation"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Operating Room Technology"
    },
    {
      image: "https://images.unsplash.com/photo-1586717791828-3f99a03a4660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hospital Teamwork"
    },
    {
      image: "https://images.unsplash.com/photo-1579684385150-bf47d6e87900?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hospital Patient Care"
    }
  ];

  const showSlide = (index) => {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
    startAutoAdvance();
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
    startAutoAdvance();
  };

  const startAutoAdvance = () => {
    if (intervalId) clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden w-full h-[60vh] md:h-[75vh] shadow-xl mb-12">
      <div className="absolute inset-0">
        
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active-slide' : ''}`}
          >
            <img 
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/1600x900/cccccc/000000?text=Image+Unavailable';
              }}
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center p-4">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight">
                  Welcome to<br />
                  Doctors Hospital & Medical Center
                </h2>
                <p className="text-sm sm:text-base max-w-2xl mx-auto font-medium opacity-90 mt-2">
                  where you can find immediate care, guidance & healthcare services, from routine checkups to emergency surgeries and procedures.
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300 z-30 focus:outline-none focus:ring-4 focus:ring-accent-cyan"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Next Button */}
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300 z-30 focus:outline-none focus:ring-4 focus:ring-accent-cyan"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        
      </div>
    </section>
  );
}
