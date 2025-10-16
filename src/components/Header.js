'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header({ currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getLinkClass = (page) => {
    const baseClass = "text-gray-700 hover:text-primary-blue font-semibold transition duration-150 whitespace-nowrap";
    const activeClass = "text-primary-blue border-b-2 border-primary-blue font-bold";
    
    if (page === currentPage) {
      return `${baseClass} ${activeClass}`;
    }
    return baseClass;
  };

  const getMobileLinkClass = (page) => {
    const baseClass = "block px-4 py-3 text-gray-700 hover:bg-bg-light transition duration-100";
    const activeClass = "block px-4 py-3 text-primary-blue font-bold bg-bg-light transition duration-100";
    
    if (page === currentPage) {
      return activeClass;
    }
    return baseClass;
  };

  return (
    <header className="bg-white shadow-trust sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo/Brand (Circular Image + Family Hospital Text) */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Circular Logo Icon */}
          <div className="w-9 h-9 rounded-full bg-accent-cyan flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Simple Heart/Health icon */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          {/* Hospital Name (smaller size as requested) */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Cheema<span className="text-primary-blue font-extrabold ml-0.5">Hospital</span>Complex
          </h1>
        </Link>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-700 hover:text-primary-blue rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition duration-150"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center text-sm lg:text-base">
          <Link href="/" className={getLinkClass('home')}>Home</Link>
          <Link href="/about" className={getLinkClass('about')}>About Us</Link>
          <Link href="/services" className={getLinkClass('services')}>Care & Services</Link>
          {/* <Link href="#" className="text-gray-700 hover:text-primary-blue font-semibold transition duration-150 whitespace-nowrap">Patient & Families</Link>
          <Link href="#" className="text-gray-700 hover:text-primary-blue font-semibold transition duration-150 whitespace-nowrap">Medical Center</Link> */}
          {/* <Link href="#" className="text-gray-700 hover:text-primary-blue font-semibold transition duration-150 whitespace-nowrap">Career</Link> */}
          <Link href="/contact" className={getLinkClass('contact')}>Contact Us</Link>
          {/* Optional Portal Link */}
          {/* <Link href="/appointment" className="text-primary-blue border-2 border-primary-blue px-4 py-2 rounded-full hover:bg-primary-blue hover:text-white transition duration-150 font-bold whitespace-nowrap">Portal</Link> */}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 py-2 shadow-inner`}>
        <Link href="/" className={getMobileLinkClass('home')}>Home</Link>
        <Link href="/about" className={getMobileLinkClass('about')}>About Us</Link>
        <Link href="/services" className={getMobileLinkClass('services')}>Care & Services</Link>
        {/* <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-bg-light transition duration-100">Patient & Families</Link>
        <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-bg-light transition duration-100">Medical Center</Link> */}
        {/* <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-bg-light transition duration-100">Career</Link> */}
        <Link href="/contact" className={getMobileLinkClass('contact')}>Contact Us</Link>
        <Link href="/appointment" className="block text-white bg-primary-blue mx-4 my-3 py-3 rounded-full text-center font-bold shadow-md">Book Appointment</Link>
      </div>
    </header>
  );
}
