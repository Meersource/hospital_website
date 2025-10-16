'use client';
import Image from 'next/image';
import TopContactBar from '../components/TopContactBar';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
// import ImageDebug from '../components/ImageDebug';
import Footer from '../components/Footer';
import Link from 'next/link';
import doc_introment from "../../public/Assets/carousel/doc3.webp";
import digital_doc from "../../public/Assets/carousel/digital_doc.webp";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopContactBar />
      <Header currentPage="home" />
      
      <HeroCarousel />
      
    

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

        {/* A. OVERLAP SECTION: Emergency Services & Hours */}
        <section className="
          relative z-10 
          bg-gradient-to-r from-primary-blue to-accent-cyan text-white 
          p-8 sm:p-10 rounded-2xl shadow-2xl 
          w-full lg:w-4/5 lg:mx-auto 
          lg:-mt-24 mb-12 
          grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12
          
        ">
          {/* Left Section: Emergency Services (with Atomic Structure) */}
          <div>
            {/* Heading: Atomic Structure Logo and Text */}
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center">
              {/* NEW: Atomic Structure SVG, color set to white for contrast against the blue gradient */}
              <svg className="w-8 h-8 mr-3 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor"/>
                <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor"/>
              </svg>
              High-Tech Medical Center
            </h2>
            {/* Paragraph */}
            <p className="text-md sm:text-lg opacity-90 mt-4">
              Health crisis waits for no one. Our <strong>24/7 emergency department</strong> provides care to those in need of urgent medical attention. With <strong>advanced technology</strong>, specialist doctors, and trained staff, DHMC provides the immediate, high-tech medical care you need.
            </p>
          </div>

          {/* Right Section: Opening Hours (with a divider on large screens) */}
          <div className="lg:border-l-2 lg:border-white lg:border-opacity-30 lg:pl-12 pt-8 lg:pt-0">
            {/* Heading: Clock Logo and Text */}
            <h3 className="text-3xl font-extrabold mb-4 flex items-center">
              {/* Clock Icon */}
              <svg className="w-8 h-8 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Opening Hours
            </h3>
            {/* Opening Hours Content */}
            <div className="space-y-2 text-md">
              <p className="flex justify-between font-medium">
                <span className="opacity-90">Emergency Care:</span>
                <span className="font-bold text-white">24 Hours / 7 Days</span>
              </p>
              <div className="border-t border-white border-opacity-30 pt-2"></div>
              <p className="flex justify-between">
                <span className="opacity-90">General Clinic:</span>
                <span>Mon - Fri, 9:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="opacity-90">Pharmacy:</span>
                <span>Mon - Sat, 8:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="opacity-90">Specialist Consults:</span>
                <span>By Appointment Only</span>
              </p>
            </div>

            {/* Phone Number Section */}
            <div className="mt-6 pt-4 border-t-2 border-white border-opacity-30">
              <p className="text-xl font-extrabold flex items-center justify-center lg:justify-start">
                {/* Phone Icon */}
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call: <span className="text-white ml-2">(052) 6617877</span>
              </p>
            </div>
          </div>
        </section>

        {/* C. Core Services/Departments Grid (Responsive 2/3/4 column) */}
        <section className="py-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Key Departments
          </h3>
          
          {/* Grid Layout: 2 columns mobile, 3 tablet, 4 desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* Service Card 1: Cardiology */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-primary-blue hover:shadow-xl transition duration-300">
              <div className="text-primary-blue text-4xl mb-3">⚕️</div>
              <p className="font-bold text-lg text-gray-900">Cardiology</p>
              <p className="text-sm text-gray-500 mt-1">Heart health specialists.</p>
            </div>
            
            {/* Service Card 2: Neurology */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-accent-cyan hover:shadow-xl transition duration-300">
              <div className="text-accent-cyan text-4xl mb-3">🧠</div>
              <p className="font-bold text-lg text-gray-900">Neurology</p>
              <p className="text-sm text-gray-500 mt-1">Brain & nervous system care.</p>
            </div>
            
            {/* Service Card 3: Pediatrics */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-primary-blue hover:shadow-xl transition duration-300">
              <div className="text-primary-blue text-4xl mb-3">👶</div>
              <p className="font-bold text-lg text-gray-900">Pediatrics</p>
              <p className="text-sm text-gray-500 mt-1">Dedicated child health.</p>
            </div>
            
            {/* Service Card 4: Orthopedics */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-accent-cyan hover:shadow-xl transition duration-300">
              <div className="text-accent-cyan text-4xl mb-3">🦴</div>
              <p className="font-bold text-lg text-gray-900">Orthopedics</p>
              <p className="text-sm text-gray-500 mt-1">Joint & bone surgery.</p>
            </div>
            
            {/* Service Card 5: Diagnostics */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-primary-blue hover:shadow-xl transition duration-300">
              <div className="text-primary-blue text-4xl mb-3">🔬</div>
              <p className="font-bold text-lg text-gray-900">Diagnostics</p>
              <p className="text-sm text-gray-500 mt-1">Advanced lab services.</p>
            </div>
            
            {/* Service Card 6: General Surgery */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-accent-cyan hover:shadow-xl transition duration-300">
              <div className="text-accent-cyan text-4xl mb-3">🏥</div>
              <p className="font-bold text-lg text-gray-900">General Surgery</p>
              <p className="text-sm text-gray-500 mt-1">Expert surgical team.</p>
            </div>

            {/* Service Card 7: Primary Care */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-primary-blue hover:shadow-xl transition duration-300">
              <div className="text-primary-blue text-4xl mb-3">👨‍⚕️</div>
              <p className="font-bold text-lg text-gray-900">Primary Care</p>
              <p className="text-sm text-gray-500 mt-1">Routine checkups and wellness.</p>
            </div>

            {/* Service Card 8: Surgical Services */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-accent-cyan hover:shadow-xl transition duration-300">
              <div className="text-accent-cyan text-4xl mb-3">🔪</div>
              <p className="font-bold text-lg text-gray-900">Surgical Services</p>
              <p className="text-sm text-gray-500 mt-1">Advanced operating procedures.</p>
            </div>

            {/* Service Card 9: Women's Health */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-primary-blue hover:shadow-xl transition duration-300">
              <div className="text-primary-blue text-4xl mb-3">👩‍🍼</div>
              <p className="font-bold text-lg text-gray-900">Women's Health</p>
              <p className="text-sm text-gray-500 mt-1">Maternity and gynecological care.</p>
            </div>

            {/* Service Card 10: Heart & Vascular Services */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-accent-cyan hover:shadow-xl transition duration-300">
              <div className="text-accent-cyan text-4xl mb-3">🫀</div>
              <p className="font-bold text-lg text-gray-900">Heart & Vascular</p>
              <p className="text-sm text-gray-500 mt-1">Cardiac and blood vessel treatments.</p>
            </div>

            {/* Service Card 11: Gastrointestinal Health */}
            <div className="bg-white p-6 rounded-xl shadow-trust text-center border-t-4 border-primary-blue hover:shadow-xl transition duration-300">
              <div className="text-primary-blue text-4xl mb-3">🍎</div>
              <p className="font-bold text-lg text-gray-900">Gastro Health</p>
              <p className="text-sm text-gray-500 mt-1">Digestive system and nutrition care.</p>
            </div>
            
          </div>
        </section>

        {/* B. Our Impact/Achievement Counters */}
        <section className="py-10">
          {/* Inner div set to 80% width on large screens, centered. Full width on mobile. */}
          <div className="w-full  mx-auto bg-gradient-to-r from-primary-blue to-accent-cyan p-8 rounded-2xl shadow-xl">
            
            <h3 className="text-3xl font-bold text-white text-center mb-10">
              Our Impact
            </h3>
            
            {/* 3-Column Grid: 2 columns mobile/small, 3 columns medium/large */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              {/* Counter 1: Patients Treated */}
              <div className="text-center p-2 rounded-lg"> 
                <p className="text-3xl sm:text-5xl font-extrabold text-white leading-none">200000+</p>
                <p className="text-base text-white mt-2 font-semibold">Patients Treated</p>
              </div>
              
              {/* Counter 2: Surgeries Performed */}
              <div className="text-center p-2 rounded-lg">
                <p className="text-3xl sm:text-5xl font-extrabold text-white leading-none">10000+</p>
                <p className="text-base text-white mt-2 font-semibold">Surgeries Performed</p>
              </div>

              {/* Counter 3: Doctors & Specialists */}
              <div className="text-center p-2 rounded-lg">
                <p className="text-3xl sm:text-5xl font-extrabold text-white leading-none">100+</p>
                <p className="text-base text-white mt-2 font-semibold">Doctors & Specialists</p>
              </div>
              
              {/* Counter 4: Years of Service */}
              <div className=" text-center p-2 rounded-lg">
                <p className="text-3xl sm:text-5xl font-extrabold text-white leading-none">20+</p>
                <p className="text-base text-white mt-2 font-semibold">Years of Trusted Service</p>
              </div>
              
            </div>
          </div>
        </section>
        
        {/* E. Two-Column Feature Section 1 (Image Left, Text Right) */}
        <section className="py-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-10 lg:p-16 rounded-2xl shadow-xl border-t-4 border-accent-cyan">
            
            {/* Left Column: Image */}
            <div>
              <Image 
            src={doc_introment}
                alt="Focused surgeon team in a clean operating room" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = doc_introment;
                }}
              />
            </div>
            
            {/* Right Column: Text Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Excellence in Surgical and Clinical Care
              </h3>
              <p className="text-gray-700 mb-4 text-lg">
                Our commitment to <strong>clinical excellence</strong> is non-negotiable. We combine highly trained surgical teams with the latest robotic and minimally invasive technologies to ensure superior patient outcomes and faster recovery times.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside ml-2">
                <li>Minimally Invasive Surgery Options</li>
                <li>Certified Specialist Physicians</li>
                <li>Rigorous Quality and Safety Standards</li>
              </ul>
              <Link href="/appointment" className="mt-6 inline-block bg-primary-blue text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-opacity-90 transition duration-300">
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* F. Two-Column Feature Section 2 (Text Left, Image Right) */}
        <section className="py-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-10 lg:p-16 rounded-2xl shadow-xl border-t-4 border-primary-blue">
            
            {/* Left Column: Text Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Seamless Care and Digital Accessibility
              </h3>
              <p className="text-gray-700 mb-4 text-lg">
                We believe healthcare should be convenient. Our digital <strong>patient portal</strong> and <strong>telehealth services</strong> bring our experts right to your home, ensuring continuity of care no matter where you are.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside ml-2">
                <li>Manage appointments and prescriptions</li>
                <li>Securely communicate with your care team</li>
                <li>Access lab results and medical records instantly</li>
              </ul>
              <Link href="/appointment" className="mt-6 inline-block bg-accent-cyan text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-opacity-90 transition duration-300">
                Explore Our Digital Services
              </Link>
            </div>

            {/* Right Column: Image */}
            <div className="order-first md:order-last">
              <Image 
                src={digital_doc}
                alt="Telemedicine consultation on a tablet with a doctor" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = {digital_doc};
                }}
              />
            </div>
          </div>
        </section>

        {/* G. Three Pillars of Care */}
        <section className="py-10">
          <div className="w-full bg-white p-10 lg:p-16 rounded-2xl shadow-xl border-t-4 border-primary-blue">
            
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Why Choose Cheema Hospital Complex?
            </h3>
            
            {/* 3-Column Grid: 1 column on mobile/small screens, 3 on medium/large */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Column 1: Patient-Centric Care */}
              <div className="text-center">
                <div className="text-primary-blue text-5xl mb-4">💙</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Patient-Centric Approach</h4>
                <p className="text-gray-600">
                  We treat every patient as family, offering compassionate care and personalized treatment plans tailored to your unique needs and well-being.
                </p>
              </div>

              {/* Column 2: Advanced Technology */}
              <div className="text-center">
                <div className="text-primary-blue text-5xl mb-4">⚙️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Technology</h4>
                <p className="text-gray-600">
                  Our hospital is equipped with the latest diagnostic and surgical equipment, ensuring precision, safety, and the best possible outcomes.
                </p>
              </div>

              {/* Column 3: Expert Medical Staff */}
              <div className="text-center">
                <div className="text-primary-blue text-5xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Renowned Medical Experts</h4>
                <p className="text-gray-600">
                  Benefit from our team of highly qualified and experienced doctors and specialists who are leaders in their respective fields.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* H. Call to Action/Contact Banner */}
        <section className="mt-12 mb-8 bg-primary-blue p-8 rounded-2xl shadow-trust text-white text-center">
          <h4 className="text-3xl font-bold mb-3">Need Immediate Care?</h4>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Our emergency department is open 24/7. Your health is our priority.
          </p>
          <Link href="/appointment" className="bg-accent-cyan text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 transform hover:scale-[1.05]">
            Book Appointment Today
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}