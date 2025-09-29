import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGRpYWdub3N0aWMlMjBjZW50cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkxMjc0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007ec3]/90 to-[#007ec3]/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Advanced Diagnostics. Trusted Care.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            At Mumtaz Diagnostic Center, we are committed to delivering
            accurate, reliable, and timely medical testing with the latest
            technology and a team of experienced healthcare professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="bg-[#ec3237] hover:bg-[#d42b30] text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors duration-300">
                Book an Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#007ec3] px-8 py-3 text-lg font-semibold rounded-md transition-colors duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
