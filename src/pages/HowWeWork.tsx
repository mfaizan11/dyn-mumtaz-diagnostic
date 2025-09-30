import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Calendar,
  UserCheck,
  Stethoscope,
  FileText,
  Phone,
  Home,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ArrowRight,
  Users,
  Heart,
  Target,
  Zap,
  MessageCircle,
  MapPin,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function HowWeWork() {
  const mainSteps = [
    {
      step: 1,
      title: "Book Your Appointment",
      description:
        "Schedule your test through phone, online, or walk-in. Our friendly staff will guide you through the process and answer any questions.",
      icon: Calendar,
      details: [
        "Multiple booking options available",
        "Flexible scheduling",
        "Immediate confirmation",
        "Pre-test instructions provided",
      ],
      color: "from-[#007ec3] to-[#005a8c]",
    },
    {
      step: 2,
      title: "Check-in & Preparation",
      description:
        "Arrive at our center where our staff will verify your information and prepare you for the test with clear instructions.",
      icon: UserCheck,
      details: [
        "Quick registration process",
        "Insurance verification",
        "Comfortable waiting area",
        "Test preparation assistance",
      ],
      color: "from-[#007ec3] to-[#005a8c]",
    },
    {
      step: 3,
      title: "Professional Testing",
      description:
        "Our certified technicians perform your test using state-of-the-art equipment while ensuring your comfort and safety.",
      icon: Stethoscope,
      details: [
        "Advanced medical equipment",
        "Certified technicians",
        "Safety protocols followed",
        "Comfortable environment",
      ],
      color: "from-[#007ec3] to-[#005a8c]",
    },
    {
      step: 4,
      title: "Results & Follow-up",
      description:
        "Receive your accurate results promptly with detailed explanations and follow-up support from our medical team.",
      icon: FileText,
      details: [
        "Quick result delivery",
        "Digital and printed reports",
        "Expert interpretation",
        "Follow-up consultation available",
      ],
      color: "from-[#007ec3] to-[#005a8c]",
    },
  ];

  const serviceTypes = [
    {
      title: "Walk-in Services",
      description: "No appointment needed for basic tests",
      icon: Users,
      features: [
        "Immediate service",
        "Basic lab tests",
        "X-ray services",
        "Emergency care",
      ],
    },
    {
      title: "Scheduled Appointments",
      description: "Book in advance for specialized tests",
      icon: Calendar,
      features: [
        "MRI scanning",
        "DEXA scan",
        "Specialized tests",
        "Convenient timing",
      ],
    },
    {
      title: "Home Services",
      description: "We come to your location",
      icon: Home,
      features: [
        "Sample collection",
        "Basic testing",
        "Patient convenience",
        "Safe procedures",
      ],
    },
    {
      title: "Emergency Services",
      description: "24/7 urgent care available",
      icon: Zap,
      features: [
        "Round-the-clock",
        "Emergency tests",
        "Immediate results",
        "Critical care support",
      ],
    },
  ];

  const qualityAssurance = [
    {
      title: "ISO Certified",
      description: "International quality standards",
      icon: Award,
    },
    {
      title: "Expert Team",
      description: "Certified medical professionals",
      icon: Users,
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment",
      icon: Target,
    },
    {
      title: "Patient Safety",
      description: "Comprehensive safety protocols",
      icon: Shield,
    },
  ];

  return (
    <div>
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
              <Target className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                Our Process
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How We Work
              <span className="block text-white/90">For Your Health</span>
            </h1>

            <p className="text-white/80 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Our streamlined process ensures you receive the highest quality
              healthcare with maximum convenience and minimal wait times.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#ec3237] hover:bg-[#d42b30] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("tel:0330-2719999")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: 0330-2719999
              </Button>
              <Link to="/services">
                <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#ec3237] font-semibold text-lg mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#201e1f] mb-6">
              Simple 4-Step Healthcare Journey
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We've designed our process to be straightforward, efficient, and
              patient-focused, ensuring you get the care you need without
              unnecessary complications.
            </p>
          </motion.div>

          <div className="space-y-12">
            {mainSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="shadow-xl bg-white overflow-hidden group rounded-2xl">
                  <div
                    className={`grid lg:grid-cols-2 min-h-[500px] ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className="p-8 lg:p-12 flex flex-col justify-between bg-white">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                          >
                            {step.step}
                          </div>
                          <div>
                            <Badge className="bg-[#007ec3]/10 text-[#007ec3] mb-2">
                              Step {step.step}
                            </Badge>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#201e1f]">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          {step.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-[#007ec3] flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-4">
                        <Link to="/contact">
                          <Button className="bg-[#007ec3] hover:bg-[#005a8c] text-white transition-all duration-300">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div
                      className={`bg-gradient-to-br ${
                        step.color
                      } p-8 lg:p-12 flex flex-col justify-center ${
                        index % 2 === 1 ? "lg:order-first" : ""
                      }`}
                    >
                      <div className="text-center text-white">
                        <div className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
                          <step.icon className="w-12 h-12" />
                        </div>
                        <h4 className="text-xl font-bold mb-4">
                          What to Expect
                        </h4>
                        <p className="text-white/90 leading-relaxed">
                          Our team will guide you through each step, ensuring
                          your comfort and understanding throughout the entire
                          process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
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
              Service Options
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#201e1f] mb-6">
              Choose What Works Best for You
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We offer multiple service options to accommodate your schedule,
              preferences, and healthcare needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8c] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-[#201e1f] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-[#007ec3] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#ec3237] font-semibold text-lg mb-4 block">
              Quality Assurance
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#201e1f] mb-6">
              Excellence in Every Step
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality is reflected in our certifications,
              technology, and the expertise of our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {qualityAssurance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
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

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#201e1f] mb-4">
                  Trusted by Thousands
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 10,000 patients have chosen us for their healthcare
                  needs, making us the most trusted diagnostic center in the
                  region.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#007ec3] mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Satisfied Patients
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-8 h-8 text-[#ec3237] fill-current"
                  />
                ))}
                <span className="ml-2 text-gray-600 font-medium">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#007ec3] to-[#005a8c] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Experience Our Process?
              </h2>
              <p className="text-white/80 text-xl leading-relaxed mb-8">
                Book your appointment today and discover why our streamlined
                process has made us the preferred choice for healthcare in Dera
                Ismail Khan.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-white/80" />
                  <span className="text-lg">
                    0330-2719999 (Mobile/WhatsApp)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-white/80" />
                  <span className="text-lg">0966-719999 (PTCL)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-white/80" />
                  <span className="text-lg">
                    South Circular Road, Near Faqeerni Gate
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Button
                className="w-full bg-[#ec3237] hover:bg-[#d42b30] text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("tel:0330-2719999")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Appointment
              </Button>
              <Link to="/contact" className="w-full">
                <Button className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 py-4 text-lg font-semibold transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </Link>
              {/* <Button
                className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/maps?q=Mumtaz+Diagnostic+Centre+South+Circular+Road+Near+Faqeerni+Gate+Dera+Ismail+Khan"
                  )
                }
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
