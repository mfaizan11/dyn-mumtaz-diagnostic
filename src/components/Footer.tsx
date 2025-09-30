import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "figma:asset/5a465bdc7b340d504a55722982a68a02806df3cc.png";

export default function Footer() {
  return (
    <footer className="bg-white text-[#201e1f] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src={logoImage}
                alt="Mumtaz Diagnostic Center"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              State-of-the-art diagnostic facility providing comprehensive
              medical testing services 24/7 in Dera Ismail Khan. Your health is
              our priority.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-[#007ec3] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-500 hover:text-[#007ec3] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-500 hover:text-[#007ec3] cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-500 hover:text-[#007ec3] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#201e1f]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/how-we-work"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#201e1f]">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact?service=open-mri"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  Open MRI
                </Link>
              </li>
              <li>
                <Link
                  to="/contact?service=dexa-scan"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  DEXA Scan
                </Link>
              </li>
              <li>
                <Link
                  to="/contact?service=xray-opg"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  X-Ray & OPG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact?service=lithotripsy"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  Lithotripsy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact?service=lab-testing"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  Laboratory Testing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact?service=ncs-emg-eeg"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  NCS / EMG / EEG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact?service=home-sampling"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  Home Sampling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#201e1f]">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#007ec3] flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.28.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                </svg>
                <a
                  href="tel:+92966719999"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  0966-719999
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaWhatsapp className="w-5 h-5 text-[#007ec3] flex-shrink-0 mt-1" />
                <a
                  href="https://wa.me/923302719999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#007ec3] transition-colors"
                >
                  0330-2719999
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#007ec3] flex-shrink-0 mt-1" />
                <p className="text-gray-600">info@mdcdikhan.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#007ec3] flex-shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/jQozzHkT5EBX24Wm8">
                  <p className="text-gray-600">
                    South Circular Road, Near Faqeerni Gate, Dera Ismail Khan
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mumtaz Diagnostic Center. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-[#007ec3] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#007ec3] text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#007ec3] text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
