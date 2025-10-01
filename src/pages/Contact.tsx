import React from 'react';
import ContactSection from '../components/ContactSection';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <div>
        {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Mumtaz Diagnostic Centre</title>
        <meta
          name="description"
          content="Get in touch with Mumtaz Diagnostic Centre for all your healthcare needs. Our team is ready to assist with inquiries, appointments, and more."
        />
        <meta
          name="keywords"
          content="contact us, Mumtaz Diagnostic Centre, healthcare inquiries, appointment, Dera Ismail Khan"
        />
        <meta
          property="og:title"
          content="Contact Us | Mumtaz Diagnostic Centre"
        />
        <meta
          property="og:description"
          content="Reach out to Mumtaz Diagnostic Centre for inquiries or appointments. Our dedicated team is here to help you with your healthcare needs."
        />
        <meta
          property="og:image"
          content="https://mdcdikhan.com/favicon.png"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Contact Us | Mumtaz Diagnostic Centre"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Mumtaz Diagnostic Centre for healthcare services, appointments, and inquiries."
        />
        <meta
          name="twitter:image"
          content="https://mdcdikhan.com/favicon.png" 
        />
      </Helmet>
      <ContactSection />
    </div>
  );
}