'use client';

import TopContactBar from '../../components/TopContactBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopContactBar />
      <Header currentPage="about" />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero/Breadcrumb Banner */}
        <section className="hero-banner h-[30vh] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white p-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">About Us</h2>
            <p className="text-lg opacity-90">Learn more about Cheema Hospital Complex and our commitment to healthcare excellence.</p>
          </div>
        </section>

        {/* About Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl border-t-8 border-primary-blue">
            
            {/* Mission Statement */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h3>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                At Cheema Hospital Complex, we are committed to providing exceptional healthcare services with compassion, 
                integrity, and excellence. Our mission is to improve the health and well-being of our community 
                through accessible, high-quality medical care that puts patients and their families at the center 
                of everything we do.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              
              {/* Value 1: Compassion */}
              <div className="text-center p-6 bg-bg-light rounded-xl shadow-md">
                <div className="text-primary-blue text-5xl mb-4">💙</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Compassion</h4>
                <p className="text-gray-600">
                  We treat every patient with empathy, understanding, and genuine care, recognizing that healing 
                  involves both physical and emotional support.
                </p>
              </div>

              {/* Value 2: Excellence */}
              <div className="text-center p-6 bg-bg-light rounded-xl shadow-md">
                <div className="text-primary-blue text-5xl mb-4">⭐</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600">
                  We maintain the highest standards of medical practice, continuously improving our services 
                  and staying at the forefront of healthcare innovation.
                </p>
              </div>

              {/* Value 3: Integrity */}
              <div className="text-center p-6 bg-bg-light rounded-xl shadow-md">
                <div className="text-primary-blue text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
                <p className="text-gray-600">
                  We conduct ourselves with honesty, transparency, and ethical principles in all our 
                  interactions and medical practices.
                </p>
              </div>
            </div>

            {/* History Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our History</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Cheema Hospital Complex was established over two decades ago with a simple yet profound vision: 
                    to create a healthcare facility that treats every patient like family. What started as a 
                    small community clinic has grown into a comprehensive medical center serving thousands of 
                    patients annually.
                  </p>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Throughout our journey, we have remained committed to our founding principles while 
                    embracing new technologies and medical advances. Today, we stand as a trusted healthcare 
                    partner in our community, known for our compassionate care and medical excellence.
                  </p>
                  <Link href="/appointment" className="inline-block bg-primary-blue text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-opacity-90 transition duration-300">
                    Schedule Your Visit
                  </Link>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Cheema Hospital Complex building exterior" 
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/600x400/0082c3/ffffff?text=Cheema+Hospital+Complex';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Leadership Team */}
            {/* <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
               
                <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
                  <div className="w-24 h-24 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">JS</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Jane Smith</h4>
                  <p className="text-accent-cyan font-semibold mb-3">Chief Medical Officer</p>
                  <p className="text-gray-600 text-sm">
                    Board-certified physician with over 15 years of experience in internal medicine 
                    and healthcare administration.
                  </p>
                </div>

              
                <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
                  <div className="w-24 h-24 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">MJ</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Michael Johnson</h4>
                  <p className="text-accent-cyan font-semibold mb-3">Director of Surgery</p>
                  <p className="text-gray-600 text-sm">
                    Renowned surgeon specializing in minimally invasive procedures with over 20 years 
                    of surgical experience.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
                  <div className="w-24 h-24 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">SW</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sarah Williams</h4>
                  <p className="text-accent-cyan font-semibold mb-3">Chief Nursing Officer</p>
                  <p className="text-gray-600 text-sm">
                    Experienced nursing leader dedicated to patient care excellence and nursing staff 
                    development.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Our Doctors (Cards with image + hover animation) */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Doctor Card 1 */}
                <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop"
                      alt="Dr. Ayesha Khan"
                      className="w-full h-80 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/800x500/0082c3/ffffff?text=Doctor';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-900">Dr. Ayesha Khan</h4>
                    <p className="text-accent-cyan font-semibold mb-2">Consultant Cardiologist</p>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      Specializes in interventional cardiology with a focus on patient-centered preventive care.
                    </p>
                  </div>
                </div>

                {/* Doctor Card 2 */}
                <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2069&auto=format&fit=crop"
                      alt="Dr. Omar Farooq"
                      className="w-full h-80 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/800x500/0082c3/ffffff?text=Doctor';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-900">Dr. Omar Farooq</h4>
                    <p className="text-accent-cyan font-semibold mb-2">Orthopedic Surgeon</p>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      Expert in minimally invasive joint procedures and sports injury management.
                    </p>
                  </div>
                </div>

                {/* Doctor Card 3 */}
                <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2069&auto=format&fit=crop"
                      alt="Dr. Sara Qureshi"
                      className="w-full h-80 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/800x500/0082c3/ffffff?text=Doctor';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-900">Dr. Sara Qureshi</h4>
                    <p className="text-accent-cyan font-semibold mb-2">Pediatrician</p>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      Dedicated to child wellness and preventive pediatrics for infants to adolescents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary-blue to-accent-cyan p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Care?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of satisfied patients who trust Cheema Hospital Complex with their healthcare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/appointment" className="bg-white text-primary-blue font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300">
                  Book Appointment
                </Link>
                <Link href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary-blue transition duration-300">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
