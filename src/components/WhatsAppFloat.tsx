import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const whatsappNumber = "923302719999"; // Pakistan format
  const message =
    "Hello! I would like to book a diagnostic test at Mumtaz Diagnostic Center.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      onClick={handleWhatsAppClick}
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
        <FaWhatsapp className="w-6 h-6" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
