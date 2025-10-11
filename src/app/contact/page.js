'use client';

import { useState } from 'react';
import TopContactBar from '../../components/TopContactBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatusMessage('');
    setErrorMessage('');
    setIsSubmitting(true);
    
    // Simulate an API call or message processing time
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.1; // 90% chance of success

      if (isSuccessful) {
        // Success: Show message and reset form
        setStatusMessage("Thank you for your message! We will be in touch soon.");
        e.target.reset();
      } else {
        // Failure: Show error message
        setErrorMessage("There was an error sending your message. Please check your network and try again.");
      }
      
      setIsSubmitting(false);
    }, 1000); // 1 second delay
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopContactBar />
      <Header currentPage="contact" />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero/Breadcrumb Banner */}
        <section className="hero-banner h-[30vh] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white p-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">Contact Us</h2>
            <p className="text-lg opacity-90">We are here to help and answer any questions you may have.</p>
          </div>
        </section>

        {/* Contact Box Section (Form and Information) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl border-t-8 border-primary-blue">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-10 border-b pb-4">
              Get in Touch
            </h3>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* 1. Contact Information Grid (Full Width) */}
              <div className="lg:col-span-3 space-y-8">
                
                {/* Contact Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Detail 1: Emergency */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl border-l-4 border-accent-cyan bg-bg-light shadow-md">
                    <div className="text-3xl text-accent-cyan">🚨</div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">Emergency 24/7</p>
                      <p className="text-primary-blue font-extrabold text-xl">(042) 111 223 377</p>
                      <p className="text-sm text-gray-600">For life-threatening situations.</p>
                    </div>
                  </div>
                  
                  {/* Detail 2: General Inquiries */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl border-l-4 border-primary-blue bg-bg-light shadow-md">
                    <div className="text-3xl text-primary-blue">📞</div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">General Information</p>
                      <p className="text-primary-blue font-extrabold text-xl">(123) 456-7890</p>
                      <p className="text-sm text-gray-600">For general inquiries and departments.</p>
                    </div>
                  </div>
                  
                  {/* Detail 3: Address */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl border-l-4 border-primary-blue bg-bg-light shadow-md">
                    <div className="text-3xl text-primary-blue">📍</div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">Our Location</p>
                      <p className="text-gray-700 font-semibold text-base">
                        123 Medical Avenue, Block A, City, State 10001
                      </p>
                      <p className="text-sm text-gray-600">Find us easily on the map below.</p>
                    </div>
                  </div>
                  
                  {/* Detail 4: Email */}
                  <div className="flex items-start space-x-4 p-4 rounded-xl border-l-4 border-accent-cyan bg-bg-light shadow-md">
                    <div className="text-3xl text-accent-cyan">📧</div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">Email Us</p>
                      <p className="text-gray-700 font-semibold text-base">info@healthcare.com</p>
                      <p className="text-sm text-gray-600">We aim to reply within 24 hours.</p>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* 2. Contact Form (Full Width, on a new line) */}
              <div className="lg:col-span-3 mt-10 p-6 bg-bg-light rounded-xl shadow-lg border-t-4 border-accent-cyan">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h4>
                
                <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" id="name" name="name" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition duration-150 shadow-sm"
                      placeholder="John Doe" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input type="email" id="email" name="email" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition duration-150 shadow-sm"
                      placeholder="email@example.com" />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" id="subject" name="subject" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition duration-150 shadow-sm"
                      placeholder="Inquiry about billing/services" />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea id="message" name="message" rows="4" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition duration-150 shadow-sm"
                      placeholder="Type your message here..."></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-primary-blue text-white font-bold py-3 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {/* Success Message */}
                  {statusMessage && (
                    <div className="text-center mt-3 text-sm font-medium text-green-600">
                      {statusMessage}
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {errorMessage && (
                    <div className="text-center mt-3 text-sm font-medium text-red-600">
                      {errorMessage}
                    </div>
                  )}
                </form>
              </div>
              
              {/* 3. Map Embed (Full Width, at the end) */}
              <div className="lg:col-span-3 mt-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Find Us on the Map</h4>
                {/* The container enforces the height and responsive width */}
                <div className="w-full h-80 rounded-xl shadow-xl border-2 border-primary-blue/30 overflow-hidden">
                  {/* Actual Google Maps Embed for a generic medical center location */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.923869279768!2d-73.98779608459468!3d40.74844077932889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f4164b8e7%3A0xc3f6a297e2c9f53e!2sNew%20York%20Presbyterian%20Hospital!5e0!3m2!1sen!2sus!4v1632345678901!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hospital Location Map"
                  >
                  </iframe>
                </div>
              </div>

            </div>
          </div>
          
        </section>

      </main>

      <Footer />
    </div>
  );
}
