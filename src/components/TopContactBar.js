import Link from 'next/link';

export default function TopContactBar() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-sm">
        
        {/* Left Side: Timing, Email, Phone (in one row) */}
        <div className="flex space-x-6 text-gray-700">
          {/* Timing */}
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-medium">Mon - Sat: 9:00 AM - 5:00 PM (Emergency 24/7)</span>
          </span>
          {/* Email */}
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            info@cheemahospitalcomplex.com
          </span>
          {/* Phone */}
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            (052) 6617877
          </span>
        </div>
        
        {/* Right Side: Appointment Button */}
        <Link href="/appointment" className="text-white bg-accent-cyan px-4 py-1 rounded-full hover:bg-opacity-80 transition duration-150 shadow-md font-semibold">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
