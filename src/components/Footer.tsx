import React from "react";
import { Facebook, AtSign, Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/images/Handyman_Logo.png"
                alt="Handyman Wannabe"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400">
                Professional handyman services for all your home improvement
                needs.
              </p>
              <p className="text-gray-400 mt-2">
                72 N Main St, Doylestown, PA 18901
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61557752266865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/103988226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@HandymanWannabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
              <a
                href="https://client.housecallpro.com/customer_portal/request-link?token=a723826f09b6469fb06bd0ddb961381b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary/90 transition-colors"
              >
                Customer Portal
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/carpentry"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Carpentry
                </Link>
              </li>
              <li>
                <Link
                  to="/services/electrical"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Electrical
                </Link>
              </li>
              <li>
                <Link
                  to="/services/plumbing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Plumbing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/painting-drywall"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Painting & Drywall
                </Link>
              </li>
              <li>
                <Link
                  to="/services/smart-homes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Smart Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services/home-security"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-lg font-bold mb-6">Packages</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/packages?package=basic"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Basic Handyman Package
                </Link>
              </li>
              <li>
                <Link
                  to="/packages?package=standard"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Standard Home Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/packages?package=premium"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Premium Services
                </Link>
              </li>
              <li>
                <Link
                  to="/packages?package=seasonal-maintenance"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Seasonal Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/packages?package=newhome"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  New Home Setup
                </Link>
              </li>
              <li>
                <Link
                  to="/packages?package=new-pet"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  New Pet Package
                </Link>
              </li>
            </ul>
          </div>

          {/* Site Structure */}
          <div className="w-full sm:w-auto">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/meet-the-team"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/service-area"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="text-lg font-bold">(267) 635-7598</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Visit Us</p>
                <p className="text-lg font-bold">Doylestown, PA</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <a
                  href="mailto:info@handymanwannabe.com"
                  className="text-lg font-bold hover:text-white"
                >
                  info@handymanwannabe.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Handyman Wannabe. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mt-4 md:mt-0">
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Accessibility Statement
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/disclaimer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Disclaimer
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
