import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Paintbrush,
  Shield,
  ThumbsUp,
  Phone,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  UserCheck,
  Calendar,
  ChevronRight,
  Brush,
  Ruler,
  Palette,
  Eraser,
  Wallpaper,
  Droplet,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import services data
import servicesData from "../data/services.json";

// Filter painting and drywall services
const paintingDrywallServices = servicesData.filter(
  (service) => service.category === "Painting & Drywall",
);

// Group services by subcategory
const groupedServices = paintingDrywallServices.reduce(
  (acc, service) => {
    if (!acc[service.subcategory]) {
      acc[service.subcategory] = [];
    }
    acc[service.subcategory].push(service);
    return acc;
  },
  {} as Record<string, typeof paintingDrywallServices>,
);

const PaintingDrywallPage = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Map subcategories to display names and icons
  const subcategoryInfo = {
    "interior-painting": {
      title: "Interior Painting",
      description:
        "Professional interior painting services for a fresh, new look.",
      icon: Paintbrush,
    },
    "exterior-painting-touchups": {
      title: "Exterior Painting & Touch-Ups",
      description:
        "Enhance your home's curb appeal with expert exterior painting.",
      icon: Brush,
    },
    "surface-prep-repairs": {
      title: "Surface Preparation & Minor Repairs",
      description:
        "Ensure smooth, long-lasting paint jobs with proper preparation.",
      icon: Eraser,
    },
    "specialty-painting": {
      title: "Specialty Painting Services",
      description:
        "Add unique finishes and specialty coatings to elevate your space.",
      icon: Palette,
    },
    "drywall-repair-installation": {
      title: "Drywall Repair & Installation",
      description:
        "Expert drywall repairs and installations for a flawless finish.",
      icon: Ruler,
    },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/wood-worker.avif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1B4332]/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Painting & Drywall Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Expert painting and drywall services for homes and businesses.
            Whether you need a fresh coat of paint, wall repairs, or complete
            drywall installation, our skilled professionals deliver smooth and
            flawless results.
          </motion.p>
          <motion.button
            className="bg-primary text-white font-bold text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-lg hover:bg-primary/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get an Instant Quote
          </motion.button>
        </div>

        {/* Wave transition section */}
        <div className="absolute -bottom-1 left-0 right-0 z-0">
          <svg
            className="w-full relative"
            style={{ height: "120px", color: "#ebd5c1" }}
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M 0,70 C 300,70 300,50 600,50 C 900,50 900,70 1200,70 L 1200,120 L 0,120 Z" />
          </svg>
        </div>

        {/* Background color section */}
        <div
          className="absolute -bottom-32 left-0 right-0 h-32 z-0"
          style={{ backgroundColor: "#ebd5c1" }}
        ></div>
      </section>

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: "#ebd5c1" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8"
              >
                <img 
                  src="/images/Handyman_Logo.png" 
                  alt="Handyman Wannabe Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#1B4332]">
                  Expert Painting & Drywall Services
                </h2>
                <p className="text-xl text-gray-800 mb-6">
                  Handyman Wannabe provides professional painting and drywall
                  services to refresh, repair, and enhance your space. From
                  detailed wall prep to expert finishing touches, our team
                  ensures top-quality results with attention to detail.
                </p>
                <p className="text-lg text-gray-700">
                  With skilled professionals and premium materials, we deliver
                  lasting results that transform your space with precision and
                  care.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Painting & Drywall Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our specially designed packages to get your painting and drywall projects completed efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2 Rooms Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">2 Rooms Package</h3>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-primary">$399</span>
                  <span className="text-gray-500 ml-2">for 4 hours</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Professional painting of 2 rooms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Minor drywall repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Basic prep work included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Standard paint included</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="https://book.housecallpro.com/book/Handyman-Wannabe-LLC/15e9785faf164524b7cad4c718a9ea32"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white text-center font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Rooms Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">4 Rooms Package</h3>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-primary">$799</span>
                  <span className="text-gray-500 ml-2">for 8 hours</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Professional painting of 4 rooms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Medium drywall repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Thorough prep work included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Premium paint options available</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="https://book.housecallpro.com/book/Handyman-Wannabe-LLC/15e9785faf164524b7cad4c718a9ea32"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white text-center font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* 8 Rooms Package */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">8 Rooms Package</h3>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-bold text-primary">$1599</span>
                  <span className="text-gray-500 ml-2">for 16 hours</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Professional painting of 8 rooms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Extensive drywall repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Complete prep and cleanup included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Custom color consultation included</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a
                    href="https://book.housecallpro.com/book/Handyman-Wannabe-LLC/15e9785faf164524b7cad4c718a9ea32"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white text-center font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Painting & Drywall Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(groupedServices).map(
              ([subcategory, services], index) => {
                const info =
                  subcategoryInfo[subcategory as keyof typeof subcategoryInfo];
                if (!info) return null;

                return (
                  <Link
                    key={subcategory}
                    to={`/service-directory?category=${subcategory}`}
                    className="block"
                  >
                    <motion.div
                      className="bg-gray-50 rounded-xl overflow-hidden shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative h-48">
                        <img
                          src={
                            services[0]?.image ||
                            "public/images/wood-worker.avif"
                          }
                          alt={info.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                          {info.title}
                        </h3>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-gray-600 mb-4">{info.description}</p>
                        <ul className="space-y-2 mb-6 flex-grow">
                          {services.slice(0, 4).map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start">
                              <Star className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                              <span>{service.features[0]}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-primary/10 p-4 rounded-lg mt-auto">
                          <p className="text-sm font-medium text-primary">
                            Available Services:
                          </p>
                          <p className="text-gray-700">
                            {services.length} services in this category
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get your painting and drywall projects done in just a few simple
              steps. Professional service, guaranteed satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: ClipboardList,
                title: "Request a Quote",
                description:
                  "Describe your project and get a detailed estimate.",
              },
              {
                icon: UserCheck,
                title: "Get Matched",
                description:
                  "Connect with a professional handyman for your needs.",
              },
              {
                icon: Calendar,
                title: "Schedule & Complete",
                description:
                  "Pick a convenient time and get the job done right.",
              },
              {
                icon: Star,
                title: "Review & Repeat",
                description: "Share your experience and book again with ease.",
              },
            ].map((step, index, array) => (
              <React.Fragment key={index}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 relative border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white text-secondary rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="mb-4 text-white">
                    <step.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/80">{step.description}</p>

                  {/* Add arrow after each step except the last one */}
                  {index < array.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-8 h-8 text-white" />
                    </div>
                  )}
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Do I need to move furniture before painting?",
                answer:
                  "We recommend moving small items, but we can cover and protect large furniture during painting. Our team will ensure all surfaces are properly protected before beginning work.",
              },
              {
                question: "How long does interior paint take to dry?",
                answer:
                  "Most paints dry to the touch in 2-4 hours, but full curing may take up to 30 days. We'll provide specific guidance based on the type of paint used and environmental conditions.",
              },
              {
                question: "Can you match my existing paint color?",
                answer:
                  "Yes, we can match most existing colors with professional color-matching techniques. We use advanced color-matching technology to ensure an accurate match.",
              },
              {
                question:
                  "How do I know if my drywall needs repair or replacement?",
                answer:
                  "Minor dents and cracks can be patched, but large holes or water-damaged drywall may need replacement. We'll assess the damage and recommend the most cost-effective solution.",
              },
              {
                question: "Do you offer exterior painting during all seasons?",
                answer:
                  "We recommend painting in mild weather, avoiding extreme heat, cold, or rain for the best results. Our team will help schedule your project during optimal conditions.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert painting and drywall services from our skilled
            professionals. Contact us today for a free quote!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://carpet-quote-pro-ctierney1.replit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold text-xl px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get an Instant Quote
            </a>
            <a
              href="tel:7193156628"
              className="flex items-center text-2xl font-bold hover:text-white/90 transition-colors"
            >
              <Phone className="w-6 h-6 mr-2" />
              (719) 315-6628
            </a>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50">
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PaintingDrywallPage;