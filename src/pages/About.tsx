import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  Heart,
  Stethoscope,
  Target,
  Eye,
  Building,
  Calendar,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import centerImage from "figma:asset/e197f0937dfc1fac2bac9c88871cbd4e85d8d5d0.png";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Every decision we make is guided by what's best for our patients' health and well-being.",
    },
    {
      icon: Shield,
      title: "Quality & Safety",
      description:
        "We maintain the highest standards of medical excellence and patient safety in all our services.",
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description:
        "Our advanced technology and skilled professionals ensure accurate and reliable diagnostic results.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description:
        "We understand the importance of quick diagnosis and provide efficient, 24/7 healthcare services.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Patients Served", icon: Users },
    { number: "15+", label: "Years Experience", icon: Calendar },
    { number: "24/7", label: "Service Hours", icon: Clock },
    { number: "8+", label: "Specialized Services", icon: Stethoscope },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description:
        "Mumtaz Diagnostic Centre was established with a vision to provide quality healthcare services to Dera Ismail Khan.",
    },
    {
      year: "2012",
      title: "Technology Upgrade",
      description:
        "Introduced advanced diagnostic equipment including Open MRI and modern laboratory facilities.",
    },
    {
      year: "2016",
      title: "Service Expansion",
      description:
        "Added specialized services like Lithotripsy, NCS/EMG/EEG, and comprehensive home sampling.",
    },
    {
      year: "2020",
      title: "24/7 Operations",
      description:
        "Became the first diagnostic center in the region to offer round-the-clock emergency services.",
    },
  ];

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Mumtaz Diagnostic Centre | Trusted Healthcare</title>
        <meta
          name="description"
          content="Learn about Mumtaz Diagnostic Centre, a trusted healthcare provider in Dera Ismail Khan offering advanced medical technology, 24/7 services, and patient-centered care."
        />
        <meta
          name="keywords"
          content="healthcare, diagnostic centre, Dera Ismail Khan, medical services, patient care, advanced diagnostics"
        />
        <meta
          property="og:title"
          content="About Mumtaz Diagnostic Centre | Trusted Healthcare"
        />
        <meta
          property="og:description"
          content="Mumtaz Diagnostic Centre provides trusted healthcare services in Dera Ismail Khan, including advanced diagnostics, 24/7 services, and compassionate patient care."
        />
        <meta
          property="og:image"
          content="https://mdcdikhan.com/favicon.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Mumtaz Diagnostic Centre | Trusted Healthcare"
        />
        <meta
          name="twitter:description"
          content="Mumtaz Diagnostic Centre provides trusted healthcare services in Dera Ismail Khan, offering advanced diagnostics and compassionate care."
        />
        <meta
          name="twitter:image"
          content="https://mdcdikhan.com/favicon.png"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#007ec3] via-[#005a8c] to-[#004070] py-20 relative overflow-hidden -mt-1">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  About Our Medical Center
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Trusted Healthcare
                <span className="block text-white">Since 2008</span>
              </h1>

              <p className="text-blue-100 text-xl leading-relaxed mb-8">
                At Mumtaz Diagnostic Centre, we're committed to providing
                exceptional healthcare services with compassion, precision, and
                the latest medical technology to serve our community better.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/services">
                  <Button className="bg-[#ec3237] hover:bg-[#d42b30] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={centerImage}
                  alt="Mumtaz Diagnostic Centre Building"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8c] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#201e1f] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#ec3237] font-semibold text-lg mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#201e1f] mb-6">
              Journey of Excellence in Healthcare
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              From our humble beginnings to becoming a trusted healthcare
              provider, our journey has been guided by an unwavering commitment
              to excellence and patient care.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#201e1f] mb-6">
                Serving Dera Ismail Khan with Dedication
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2008, Mumtaz Diagnostic Centre began with a simple
                yet powerful mission: to provide world-class diagnostic services
                to the people of Dera Ismail Khan and surrounding areas. What
                started as a small clinic has grown into a comprehensive medical
                facility equipped with state-of-the-art technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our commitment to continuous improvement has led us to invest in
                advanced medical equipment, skilled healthcare professionals,
                and innovative treatment approaches. Today, we're proud to be a
                trusted name in healthcare, serving thousands of patients with
                compassion and excellence.
              </p>

              <div className="space-y-4">
                {[
                  "Advanced Medical Technology",
                  "Experienced Healthcare Professionals",
                  "24/7 Emergency Services",
                  "Comprehensive Diagnostic Solutions",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#007ec3] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-[#007ec3] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="bg-[#007ec3] text-white px-3 py-1 rounded-lg font-bold text-sm">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#201e1f] mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#ec3237] font-semibold text-lg mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#201e1f] mb-6">
              What Guides Us Every Day
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our core values shape everything we do, from patient interactions
              to medical procedures, ensuring we deliver the highest standard of
              healthcare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 group">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8c] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#201e1f] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[#007ec3] to-[#005a8c] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <Eye className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                To be the leading healthcare provider in the region, recognized
                for our commitment to excellence, innovation, and compassionate
                patient care. We envision a future where advanced medical
                technology and human touch work together to create healing
                experiences that transform lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <Target className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                To provide comprehensive, accessible, and high-quality
                diagnostic services that empower patients and healthcare
                providers with accurate information for better health outcomes.
                We are dedicated to continuous improvement, community service,
                and maintaining the trust placed in us by our patients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#201e1f] mb-6">
              Experience Healthcare Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Join thousands of satisfied patients who trust Mumtaz Diagnostic
              Centre for their healthcare needs. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#ec3237] hover:bg-[#d42b30] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="border border-[#007ec3] text-white hover:bg-[#007ec3] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
