import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Wrench,
  Paintbrush,
  Zap,
  Droplet,
  Hammer,
  Ruler,
  Scissors,
  Shovel,
  Lightbulb,
  Power,
  Plug,
  Fan,
  BookOpen,
  DoorOpen,
  PenTool as Tool,
  Sofa,
  Lock,
  Home,
  Shield,
  Waves,
  Car,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Interior",
    image: "/images/living-Room.avif",
    items: [
      { name: "Electrical", time: "1-2 hours", icon: Zap },
      { name: "Plumbing", time: "30-60 mins", icon: Droplet },
      { name: "Carpentry", time: "4-6 hours", icon: Hammer },
      { name: "Smart Home", time: "2-3 hours", icon: Home },
      { name: "Painting & Drywall", time: "1-2 hours", icon: Paintbrush },
      { name: "Flooring", time: "1-2 hours", icon: Ruler },
      { name: "Home Security", time: "1-3 hours", icon: Shield },
      { name: "Furniture Assembly", time: "2-4 hours", icon: Sofa },
    ],
  },
  {
    category: "Exterior",
    image: "/images/home.avif",
    items: [
      { name: "Windows & Doors", time: "2-4 hours", icon: DoorOpen },
      { name: "Garage Doors", time: "3-4 hours", icon: Car },
      { name: "Landscaping", time: "1-3 hours", icon: Shovel },
      { name: "Powerwashing", time: "1-2 hours", icon: Waves },
      { name: "Pools & Spas", time: "2-3 hours", icon: Droplet },
      { name: "Holiday Lighting", time: "4-6 hours", icon: Lightbulb },
      { name: "Locksmithing", time: "3-4 hours", icon: Lock },
      { name: "Property Management", time: "1-2 hours", icon: Tool },
    ],
  },
];

const getServiceUrl = (name: string) => {
  if (name === "Property Management") {
    return "/services/management-companies";
  }
  if (name === "Smart Home") {
    return "/services/smart-homes";
  }
  // Convert service name to URL-friendly format
  const slug = name
    .toLowerCase()
    .replace(/\s+&\s+|-/g, "-")
    .replace(/\s+/g, "-");
  return `/services/${slug}`;
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Interior");
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <h2 className="text-center mb-12">Our Services</h2>

      <div className="flex flex-wrap max-w-6xl mx-auto">
        {" "}
        {/* Added max-width for better layout */}
        {services.map((service) => (
          <div
            key={service.category}
            className="w-full md:w-1/2 relative cursor-pointer group"
            onClick={() => setSelectedCategory(service.category)}
            onMouseEnter={() => setHoveredService(service.category)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="relative h-[300px] mx-auto">
              {" "}
              {/* Reduced height and centered image */}
              {/* Image with overlay */}
              <div className="absolute inset-0 mx-auto w-[90%]">
                {" "}
                {/* Contained image width */}
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-full object-cover rounded-lg mt-4 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Category label */}
              <div className="absolute bottom-0 left-[8%] right-[8%] p-6 text-white z-10">
                {" "}
                {/* Adjusted label position */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{service.category}</h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      selectedCategory === service.category ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              {/* Hover overlay - removed */}
            </div>
          </div>
        ))}
      </div>

      {/* Service Details Dropdown */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    {selectedCategory} Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services
                      .find((s) => s.category === selectedCategory)
                      ?.items.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative bg-gray-50 rounded-lg p-6 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="bg-white rounded-full p-3 shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                              <item.icon className="w-6 h-6" />
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                              {item.time}
                            </div>
                          </div>
                          <h4 className="text-lg font-bold mb-4 text-gray-900">
                            {item.name}
                          </h4>
                          <Link
                            to={getServiceUrl(item.name)}
                            className="w-full bg-white border-2 border-primary text-primary font-medium py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group-hover:shadow-md block text-center"
                            aria-label={`Learn more about ${item.name} services`}
                          >
                            Learn More!
                          </Link>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;