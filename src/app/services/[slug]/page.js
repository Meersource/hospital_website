'use client';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import TopContactBar from '../../../components/TopContactBar';
import Link from 'next/link';
import { getServiceBySlug } from '../../../data/services';

export default function ServiceDetailPage({ params }) {
  const { slug } = params || {};
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <TopContactBar />
      <Header currentPage="services" />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <section className="bg-white rounded-2xl shadow-trust border-t-4 border-accent-cyan p-6 sm:p-10 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl sm:text-5xl" aria-hidden>{service.emoji}</div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{service.name}</h1>
              <p className="text-gray-600 mt-3 text-base sm:text-lg">{service.heroDescription}</p>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/appointment" className="inline-block bg-primary-blue text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-opacity-90 transition duration-300">
              Book an Appointment
            </Link>
          </div>
        </section>

        {/* Image Left / Text Right Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl shadow-trust border-t-4 border-primary-blue">
            <div>
              <img
                src="/Assets/carousel/doc_introment.webp"
                alt={`${service.name} illustration`}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x500/0082c3/ffffff?text=Family+Hospital';
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Comprehensive {service.name}</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
                {service.heroDescription}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our experienced team combines compassionate care with modern technology to deliver safe and
                effective treatment plans tailored to your needs. From first consultation to recovery, we’re
                with you at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        {Array.isArray(service.highlights) && service.highlights.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-trust border-t-4 border-primary-blue p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What we offer</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-bg-light rounded-xl p-4">
                    <span className="text-primary-blue mt-0.5">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQs */}
        {Array.isArray(service.faqs) && service.faqs.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-trust border-t-4 border-accent-cyan p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
              <div className="divide-y divide-gray-100">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="py-4">
                    <p className="font-semibold text-gray-900">{faq.q}</p>
                    <p className="text-gray-700 mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="text-center">
          <Link href="/services" className="inline-flex items-center text-primary-blue font-semibold hover:text-accent-cyan">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Back to all services
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}


