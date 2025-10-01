import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Brain,
  Bone,
  Camera,
  Zap,
  FlaskConical,
  Activity,
  Home,
  Stethoscope,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Helmet } from 'react-helmet-async';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Open MRI",
      subtitle: "Advanced Magnetic Resonance Imaging",
      description:
        "State-of-the-art Open MRI technology providing detailed internal body imaging with enhanced patient comfort. Ideal for patients with claustrophobia or larger body frames.",
      features: [
        "High-resolution imaging",
        "Comfortable open design",
        "Faster scan times",
        "Expert radiologist analysis",
      ],
      benefits:
        "Non-invasive, detailed soft tissue imaging for accurate diagnosis",
      duration: "30-60 minutes",
      preparation: "Minimal preparation required",
      slug: "open-mri",
    },
    {
      icon: Bone,
      title: "DEXA Scan",
      subtitle: "Bone Density Measurement",
      description:
        "Comprehensive bone density scanning using dual-energy X-ray absorptiometry to assess bone health and diagnose osteoporosis with precision.",
      features: [
        "Precise bone density measurement",
        "Osteoporosis screening",
        "Low radiation exposure",
        "Quick and painless procedure",
      ],
      benefits: "Early detection of bone loss and fracture risk assessment",
      duration: "15-30 minutes",
      preparation: "No special preparation needed",
      slug: "dexa-scan",
    },
    {
      icon: Camera,
      title: "X-Ray & OPG",
      subtitle: "Digital Radiography Services",
      description:
        "Digital X-ray and Orthopantomogram (OPG) services providing clear, detailed images for accurate diagnosis with minimal radiation exposure.",
      features: [
        "Digital X-ray technology",
        "Panoramic dental imaging (OPG)",
        "Immediate results",
        "High image quality",
      ],
      benefits:
        "Fast, accurate imaging for bones, teeth, and internal structures",
      duration: "5-15 minutes",
      preparation: "Remove metal objects",
      slug: "xray-opg",
    },
    {
      icon: Zap,
      title: "Lithotripsy",
      subtitle: "Non-invasive Stone Treatment",
      description:
        "Advanced extracorporeal shock wave lithotripsy (ESWL) for breaking down kidney stones without surgery, providing effective non-invasive treatment.",
      features: [
        "Non-surgical treatment",
        "Outpatient procedure",
        "High success rate",
        "Minimal recovery time",
      ],
      benefits: "Safe, effective kidney stone removal without surgery",
      duration: "45-60 minutes",
      preparation: "Fasting and pre-treatment consultation",
      slug: "lithotripsy",
    },
    {
      icon: FlaskConical,
      title: "Laboratory Testing",
      subtitle: "Comprehensive Lab Services",
      description:
        "Complete range of laboratory tests including blood work, biochemistry, hematology, microbiology, and specialized diagnostic tests with quick turnaround times.",
      features: [
        "Comprehensive test menu",
        "Quick result turnaround",
        "Quality assurance",
        "Digital reports",
      ],
      benefits: "Accurate diagnostic testing for informed medical decisions",
      duration: "5-10 minutes",
      preparation: "Varies by test type",
      slug: "lab-testing",
    },
    {
      icon: Activity,
      title: "NCS / EMG / EEG",
      subtitle: "Neurological Testing",
      description:
        "Specialized neurological testing including Nerve Conduction Studies, Electromyography, and Electroencephalography for comprehensive nervous system evaluation.",
      features: [
        "Nerve function assessment",
        "Muscle activity testing",
        "Brain wave monitoring",
        "Expert neurological analysis",
      ],
      benefits: "Detailed neurological diagnosis and treatment planning",
      duration: "60-90 minutes",
      preparation: "Avoid lotions and medications as advised",
      slug: "ncs-emg-eeg",
    },
    {
      icon: Home,
      title: "Home Sampling",
      subtitle: "Convenient Healthcare at Home",
      description:
        "Professional sample collection services at your doorstep, ensuring convenient access to laboratory testing without visiting the clinic.",
      features: [
        "Doorstep sample collection",
        "Trained phlebotomists",
        "Safe sample handling",
        "Scheduled appointments",
      ],
      benefits: "Convenient, safe, and reliable home healthcare services",
      duration: "15-20 minutes",
      preparation: "Follow test-specific instructions",
      slug: "home-sampling",
    },
    {
      icon: Stethoscope,
      title: "Ultrasound",
      subtitle: "Real-time Imaging",
      description:
        "Advanced ultrasound imaging services for abdomen, pelvis, pregnancy monitoring, and other diagnostic applications using modern equipment.",
      features: [
        "Real-time imaging",
        "Multiple applications",
        "Safe and non-invasive",
        "Immediate consultation",
      ],
      benefits: "Safe, real-time visualization of internal organs and tissues",
      duration: "20-45 minutes",
      preparation: "Varies by examination type",
      slug: "ultrasound",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control measures ensure accurate and reliable results every time.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock emergency services and convenient appointment scheduling.",
    },
    {
      icon: Award,
      title: "Expert Team",
      description:
        "Experienced healthcare professionals and certified technicians provide exceptional care.",
    },
    {
      icon: CheckCircle,
      title: "Modern Equipment",
      description:
        "State-of-the-art medical technology for precise diagnosis and treatment.",
    },
  ];

  return (
    <div>
       <Helmet>
              <title>Services | Mumtaz Diagnostic Centre</title>
              <meta
                name="description"
                content="Get in touch with Mumtaz Diagnostic Centre for all your healthcare needs. Our team is ready to assist with inquiries, appointments, and more."
              />
              <meta
                name="keywords"
                content="Services, Mumtaz Diagnostic Centre, healthcare inquiries, appointment, Dera Ismail Khan"
              />
              <meta
                property="og:title"
                content="Services | Mumtaz Diagnostic Centre"
              />
              <meta
                property="og:description"
                content="Explore the comprehensive healthcare services offered by Mumtaz Diagnostic Centre. From advanced diagnostic tests to 24/7 emergency care, our expert team is dedicated to your health and well-being."
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
                content="Explore the comprehensive healthcare services offered by Mumtaz Diagnostic Centre. From advanced diagnostic tests to 24/7 emergency care, our expert team is dedicated to your health and well-being."
              />
              <meta
                name="twitter:image"
                content="https://mdcdikhan.com/favicon.png" // Use a relevant image URL
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Stethoscope className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                Our Medical Services
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Healthcare
              <span className="block text-white">Services</span>
            </h1>

            <p className="text-blue-100 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              From advanced diagnostic imaging to specialized testing, we offer
              a complete range of medical services using cutting-edge technology
              and expert care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#ec3237] hover:bg-[#d42b30] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#201e1f] mb-6">
              Advanced Diagnostic Solutions
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of medical services designed to
              provide accurate diagnosis and exceptional patient care.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8c] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#201e1f] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-[#007ec3] font-semibold mb-3">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-[#201e1f] mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-[#007ec3] flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-[#201e1f]">
                            Duration:{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            {service.duration}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-[#201e1f]">
                            Preparation:{" "}
                          </span>
                          <span className="text-sm text-gray-600">
                            {service.preparation}
                          </span>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm text-[#007ec3] font-medium">
                            {service.benefits}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/contact?service=${service.slug}`}
                        className="flex-1"
                      >
                        <Button className="bg-[#007ec3] hover:bg-[#005a8c] text-white w-full transition-all duration-300">
                          <Phone className="w-4 h-4 mr-2" />
                          Book Now
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-[#007ec3] text-[#007ec3] hover:bg-[#007ec3] hover:text-white transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#201e1f] mb-6">
              Excellence in Every Service
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality, innovation, and patient satisfaction
              sets us apart as the preferred healthcare provider in the region.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50 group">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8c] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#201e1f] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="py-16 bg-gradient-to-r from-[#ec3237] to-[#d42b30]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                24/7 Emergency Services
              </h2>
            </div>
            <p className="text-red-100 text-xl mb-8 max-w-3xl mx-auto">
              Medical emergencies don't wait for business hours. Our
              round-the-clock services ensure you get the care you need, when
              you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#ec3237] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("tel:0330-2719999")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: 0330-2719999
              </Button>
              <Link to="/services">
                <Button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
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
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Schedule your appointment today and discover why thousands of
              patients trust Mumtaz Diagnostic Centre for their healthcare
              needs.
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
