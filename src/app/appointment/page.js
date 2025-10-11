'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function AppointmentPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const showCustomMessage = (title, message, type) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const captchaInput = form.querySelector('#captcha');
    const captchaError = form.querySelector('#captcha-error');

    // Simple validation for 5 + 7 = 12
    if (captchaInput.value.trim() === '12' || captchaInput.value.trim().toLowerCase() === 'twelve') {
      if (captchaError) captchaError.classList.add('hidden');
      
      // Show success message
      showCustomMessage(
        `Thank You, ${data.full_name}!`, 
        `Your appointment request has been successfully submitted. We will contact you at ${data.phone} to confirm the date and time.`,
        'success'
      );
        
      form.reset(); // Clear the form
    } else {
      if (captchaError) captchaError.classList.remove('hidden');
      captchaInput.focus();
      showCustomMessage("Error", "Please correct the security check (5 + 7) before submitting.", 'error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header (Simple and Focused) */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-accent-cyan flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Online<span className="text-primary-blue font-extrabold ml-0.5">Booking</span>
            </h1>
          </Link>
        </div>
      </header>
      
      {/* MAIN APPOINTMENT CONTENT */}
      <div id="appointment-view" className="view flex-grow">
        <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
          {/* Form Container and Header */}
          <div className="lg:w-4/5 mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl border-t-8 border-accent-cyan">
            
            {/* Header Text */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-blue mb-2">
              Online Appointment Request
            </h2>
            <p className="text-lg text-gray-600 mb-8 pb-4 border-b border-gray-200">
              Please fill out the form below to schedule your consultation. Our team will contact you to confirm the booking within 24 hours.
            </p>

            {/* Appointment Form */}
            <form id="appointment-form" className="space-y-8" onSubmit={handleSubmit}>
              
              {/* Section 1: Appointment Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                  <svg className="w-6 h-6 mr-2 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  1. Select Service and Doctor
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Specialty/Department Dropdown */}
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 required">Preferred Department</label>
                    <select id="specialty" name="specialty" required className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm rounded-lg border shadow-sm transition duration-150">
                      <option value="" disabled defaultValue>Select a specialty</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="neurology">Neurology</option>
                      <option value="surgery">General Surgery</option>
                      <option value="primary">Primary Care</option>
                    </select>
                  </div>

                  {/* Doctor Dropdown (Dependent on Specialty) */}
                  <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Preferred Doctor (Optional)</label>
                    <select id="doctor" name="doctor" className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm rounded-lg border shadow-sm transition duration-150">
                      <option value="" disabled defaultValue>Select a doctor</option>
                      <option value="any">No preference</option>
                      <option value="smith">Dr. Alex Smith (Cardiology)</option>
                      <option value="jones">Dr. Maya Jones (Pediatrics)</option>
                    </select>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 required">Preferred Date</label>
                    <input type="date" id="date" name="date" required className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent-cyan focus:border-accent-cyan sm:text-sm transition duration-150" />
                  </div>

                  {/* Time Slot/Session Input */}
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 required">Preferred Time Slot</label>
                    <select id="time" name="time" required className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm rounded-lg border shadow-sm transition duration-150">
                      <option value="" disabled defaultValue>Select a time</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Patient Information */}
              <div className="space-y-6 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                  <svg className="w-6 h-6 mr-2 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  2. Patient Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 required">Full Name</label>
                    <input type="text" id="full_name" name="full_name" required placeholder="John Doe" className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent-cyan focus:border-accent-cyan sm:text-sm transition duration-150" />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 required">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required placeholder="(123) 456-7890" className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent-cyan focus:border-accent-cyan sm:text-sm transition duration-150" />
                  </div>
                  
                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 required">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent-cyan focus:border-accent-cyan sm:text-sm transition duration-150" />
                  </div>

                  {/* Patient Status (New/Existing) */}
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 required">Patient Status</label>
                    <select id="status" name="status" required className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm rounded-lg border shadow-sm transition duration-150">
                      <option value="" disabled defaultValue>Select status</option>
                      <option value="new">New Patient</option>
                      <option value="existing">Existing Patient</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Notes and Captcha */}
              <div className="space-y-6 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                  <svg className="w-6 h-6 mr-2 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  3. Additional Information & Security
                </h3>

                {/* Message/Notes Area */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Reason for Appointment / Notes (Optional)</label>
                  <textarea id="message" name="message" rows="4" placeholder="Briefly describe your reason for seeking an appointment." className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent-cyan focus:border-accent-cyan sm:text-sm transition duration-150"></textarea>
                </div>

                {/* Simple Captcha Mockup */}
                <div className="p-4 bg-bg-light border border-gray-300 rounded-lg">
                  <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 required">Security Check</label>
                  <p className="text-primary-blue font-bold text-lg mt-1 mb-2">What is 5 + 7 ?</p>
                  <input type="text" id="captcha" name="captcha" required placeholder="Enter the result here" className="block w-full max-w-xs py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent-cyan focus:border-accent-cyan sm:text-sm transition duration-150" />
                  <p id="captcha-error" className="text-red-500 text-xs mt-1 hidden">Please enter the correct answer.</p>
                </div>
              </div>

              {/* Submission Button */}
              <div className="pt-6">
                <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-lg text-lg font-bold rounded-full text-white bg-accent-cyan hover:bg-primary-blue focus:outline-none focus:ring-4 focus:ring-accent-cyan focus:ring-opacity-50 transition duration-300 transform hover:scale-[1.01]">
                  Submit Appointment Request
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  *By submitting this form, you agree to be contacted by our staff to confirm the details.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm transform transition-all duration-300 scale-100">
            <div className={`flex items-center space-x-4 p-3 rounded-lg ${modalType === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
              <svg className={`w-6 h-6 flex-shrink-0 ${modalType === 'success' ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {modalType === 'success' 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                }
              </svg>
              <h4 className={`text-xl font-bold ${modalType === 'success' ? 'text-green-600' : 'text-red-600'}`}>{modalTitle}</h4>
            </div>
            <p className="mt-4 text-gray-700 text-sm">{modalMessage}</p>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-primary-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition duration-150 shadow-md"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
