import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Mumtaz Diagnostic Centre | Healthcare & Diagnostics in D.I. Khan
        </title>
        <meta
          name="description"
          content="Welcome to Mumtaz Diagnostic Centre, providing trusted healthcare and advanced diagnostic services in Dera Ismail Khan since 2008. Your health, our priority."
        />
        <meta
          name="keywords"
          content="healthcare, diagnostics, medical tests, lab services, MRI, CT scan, Dera Ismail Khan"
        />
        <link rel="canonical" href="https://mdcdikhan.com/" />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Mumtaz Diagnostic Centre | Healthcare & Diagnostics in D.I. Khan"
        />
        <meta
          property="og:description"
          content="Trusted healthcare and diagnostics with modern facilities in D.I. Khan since 2008."
        />
        <meta property="og:url" content="https://mdcdikhan.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mdcdikhan.com/favicon.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mumtaz Diagnostic Centre | Healthcare & Diagnostics in D.I. Khan"
        />
        <meta
          name="twitter:description"
          content="Trusted healthcare and diagnostics with modern facilities in D.I. Khan since 2008."
        />
        <meta
          name="twitter:image"
          content="https://mdcdikhan.com/favicon.png"
        />
      </Helmet>

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
