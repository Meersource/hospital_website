import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo/Mission */}
        <div className="col-span-2 md:col-span-1">
          <h5 className="text-2xl font-extrabold text-primary-blue mb-4">Family<span className="text-accent-cyan">Hospital</span></h5>
          <p className="text-sm text-gray-400">
            Committed to providing high-quality, patient-centered healthcare services with integrity and respect.
          </p>
        </div>
        
        {/* Column 2: Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-gray-400 hover:text-white transition duration-150">Home</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white transition duration-150">Careers</Link></li>
            <li><Link href="/appointment" className="text-gray-400 hover:text-white transition duration-150">Patient Portal</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Departments */}
        <div>
          <h5 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Top Services</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-gray-400 hover:text-white transition duration-150">General Medicine</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white transition duration-150">Emergency Care</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white transition duration-150">Maternity Services</Link></li>
          </ul>
        </div>
        
        {/* Column 4: Contact */}
        <div>
          <h5 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h5>
          <p className="text-sm text-gray-400 space-y-2">
            <p>123 Medical Ave, City, State</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@healthcare.com</p>
          </p>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="mt-8 pt-6 border-t border-gray-700 text-center">
        <p className="text-xs text-gray-500">&copy; 2025 HealthCare App. All rights reserved.</p>
      </div>
    </footer>
  );
}
