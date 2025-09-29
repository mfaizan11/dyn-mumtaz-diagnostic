import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Menu,
  X,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import logoImage from "figma:asset/5a465bdc7b340d504a55722982a68a02806df3cc.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-[#007ec3] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <a href="https://maps.app.goo.gl/jQozzHkT5EBX24Wm8">
              <span className="text-xs sm:text-sm">
                South Circular Road, Near Faqeerni Gate, Dera Ismail Khan
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>0966-719999</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>0330-2719999</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Facebook className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-pink-200 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logoImage}
                  alt="Mumtaz Diagnostic Center"
                  className="h-12 sm:h-16 w-auto transition-opacity duration-300 hover:opacity-80"
                />
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                to="/"
                className={`transition-colors font-medium ${
                  isActiveLink("/")
                    ? "text-[#007ec3] border-b-2 border-[#007ec3] pb-1"
                    : "text-[#201e1f] hover:text-[#007ec3]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors font-medium ${
                  isActiveLink("/about")
                    ? "text-[#007ec3] border-b-2 border-[#007ec3] pb-1"
                    : "text-[#201e1f] hover:text-[#007ec3]"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`transition-colors font-medium ${
                  isActiveLink("/services")
                    ? "text-[#007ec3] border-b-2 border-[#007ec3] pb-1"
                    : "text-[#201e1f] hover:text-[#007ec3]"
                }`}
              >
                Services
              </Link>
              <Link
                to="/how-we-work"
                className={`transition-colors font-medium ${
                  isActiveLink("/how-we-work")
                    ? "text-[#007ec3] border-b-2 border-[#007ec3] pb-1"
                    : "text-[#201e1f] hover:text-[#007ec3]"
                }`}
              >
                How We Work
              </Link>
              <Link
                to="/contact"
                className={`transition-colors font-medium ${
                  isActiveLink("/contact")
                    ? "text-[#007ec3] border-b-2 border-[#007ec3] pb-1"
                    : "text-[#201e1f] hover:text-[#007ec3]"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button className="hidden sm:flex bg-[#ec3237] hover:bg-[#d42b30] text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Book Test
                </Button>
              </Link>

              {/* Mobile menu button */}
              <button className="lg:hidden p-2" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#201e1f]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#201e1f]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
              {/* <div className="bg-gradient-to-r from-[#007ec3] to-[#005a8a] px-4 py-3">
                <div className="flex items-center gap-3 text-white text-sm">
                  <Phone className="w-4 h-4" />
                  <span>0966-719999</span>
                  <span className="mx-2">|</span>
                  <FaWhatsapp className="w-4 h-4" />
                  <span>0330-2719999</span>
                </div>
              </div> */}
              <nav className="px-4 py-6 space-y-2">
                <Link
                  to="/"
                  className={`block transition-all font-medium py-3 px-4 rounded-lg border-l-4 ${
                    isActiveLink("/")
                      ? "text-[#007ec3] bg-[#007ec3]/10 border-[#007ec3]"
                      : "text-[#201e1f] hover:text-[#007ec3] hover:bg-gray-50 border-transparent hover:border-[#007ec3]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block transition-all font-medium py-3 px-4 rounded-lg border-l-4 ${
                    isActiveLink("/about")
                      ? "text-[#007ec3] bg-[#007ec3]/10 border-[#007ec3]"
                      : "text-[#201e1f] hover:text-[#007ec3] hover:bg-gray-50 border-transparent hover:border-[#007ec3]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className={`block transition-all font-medium py-3 px-4 rounded-lg border-l-4 ${
                    isActiveLink("/services")
                      ? "text-[#007ec3] bg-[#007ec3]/10 border-[#007ec3]"
                      : "text-[#201e1f] hover:text-[#007ec3] hover:bg-gray-50 border-transparent hover:border-[#007ec3]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/how-we-work"
                  className={`block transition-all font-medium py-3 px-4 rounded-lg border-l-4 ${
                    isActiveLink("/how-we-work")
                      ? "text-[#007ec3] bg-[#007ec3]/10 border-[#007ec3]"
                      : "text-[#201e1f] hover:text-[#007ec3] hover:bg-gray-50 border-transparent hover:border-[#007ec3]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How We Work
                </Link>
                <Link
                  to="/contact"
                  className={`block transition-all font-medium py-3 px-4 rounded-lg border-l-4 ${
                    isActiveLink("/contact")
                      ? "text-[#007ec3] bg-[#007ec3]/10 border-[#007ec3]"
                      : "text-[#201e1f] hover:text-[#007ec3] hover:bg-gray-50 border-transparent hover:border-[#007ec3]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-[#ec3237] to-[#d42b30] hover:from-[#d42b30] hover:to-[#c22327] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg">
                      Book Test Now
                    </Button>
                  </Link>
                </div>
                <div className="pt-4 border-t border-gray-200 mt-6 flex justify-center gap-4">
                  <Facebook className="w-6 h-6 text-gray-400 hover:text-[#007ec3] cursor-pointer transition-colors" />
                  <Instagram className="w-6 h-6 text-gray-400 hover:text-[#007ec3] cursor-pointer transition-colors" />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
