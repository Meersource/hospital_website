'use client';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopContactBar from '../../components/TopContactBar';
import { services } from '../../data/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopContactBar />
      <Header currentPage="services" />

      <main className="flex-grow">
        {/* Hero/Breadcrumb Banner (like About page) */}
        <section className="hero-banner h-[30vh] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white p-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">Care & Services</h2>
            <p className="text-lg opacity-90">Explore our comprehensive medical services for every stage of life.</p>
          </div>
        </section>

        {/* Content Container */}
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Intro Card */}
          <div className="bg-white rounded-2xl shadow-trust border-t-4 border-primary-blue p-6 sm:p-10 mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Departments & Specialties</h1>
            <p className="text-gray-600 mt-3 text-base sm:text-lg">
              From preventive care to advanced surgery, our teams deliver compassionate, high-quality care.
            </p>
          </div>

          {/* Services Grid - Mobile-first */}
          <div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-xl border-t-4 border-primary-blue hover:border-accent-cyan shadow-trust hover:shadow-xl transition duration-300 p-5 flex flex-col"
                >
                  <div className="text-4xl mb-3">
                    <span aria-hidden>{service.emoji}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">{service.name}</h2>
                  <p className="text-sm text-gray-600 mt-1 flex-1">{service.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center text-primary-blue font-semibold group-hover:text-accent-cyan">
                    Learn more
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


