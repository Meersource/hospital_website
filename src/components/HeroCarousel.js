'use client';
// import Image from "next/image";
import Slider from "react-slick";
import dynamic from "next/dynamic";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel() {
  const slides = [
    { image: "/Assets/carousel/doctors.webp", alt: "Modern Hospital Exterior" },
    { image: "/Assets/carousel/doc_introment.webp", alt: "Doctor Patient Consultation" },
    { image: "/Assets/carousel/energency.webp", alt: "Operating Room Technology" },
    { image: "/Assets/carousel/doc3.webp", alt: "Hospital Teamwork" },
    { image: "/Assets/carousel/doc2.webp", alt: "Hospital Patient Care" },
  ];

  const imagePaths = [
    "/Assets/carousel/doctors.webp",
    "/Assets/carousel/doc_introment.webp", 
    "/Assets/carousel/energency.webp",
    "/Assets/carousel/doc3.webp",
    "/Assets/carousel/doc2.webp"
  ];

  // Debug: Log the slide data

  const overlayColorRgba = "rgba(43, 84, 145, 0.6)";
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {     
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  };

  return (
    <section className="relative overflow-hidden w-full h-[60vh] md:h-[80vh] shadow-xl mb-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[60vh] md:h-[80vh] bg-gray-300">
<img
  src={slide.image}
  alt={slide.alt}
  className="w-full h-full object-cover"
  onLoad={() => console.log("Loaded:", slide.image)}
  onError={(e) => {
    console.error("Image failed to load:", slide.image);
    e.target.src = "https://placehold.co/1600x900?text=Image+Not+Found";
  }}
/>

            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center p-4"
              style={{ backgroundColor: overlayColorRgba }}
            >
              <div className="text-center text-white max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight">
                  Welcome to
                  <br />
                  Doctors Hospital & Medical Center
                </h2>
                <p className="text-sm sm:text-base max-w-2xl mx-auto font-medium opacity-90 mt-2">
                  where you can find immediate care, guidance & healthcare
                  services, from routine checkups to emergency surgeries and
                  procedures.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

// Custom arrow components
function CustomPrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300 z-30"
      aria-label="Previous slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300 z-30"
      aria-label="Next slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

