import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import centerImage from "../assets/heroimg.webp";

export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-red-50/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#007ec3] to-[#005a8c] py-16 lg:py-20 relative overflow-hidden -mt-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  Trusted Healthcare Partner
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get in Touch for Your
                <br />
                <span className="text-white">Health Needs</span>
              </h1>
              <p className="text-blue-100 text-lg lg:text-xl leading-relaxed mb-8">
                We're here to help you with all your diagnostic needs. Our
                experienced team is available 24/7 to provide exceptional
                healthcare services and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-[#ec3237] hover:bg-[#d42b30] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0330-2719999
                </Button>
                <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={centerImage}
                  alt="Mumtaz Diagnostic Centre - Our Physical Location"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#007ec3]" />
                  <div className="text-sm">
                    <p className="font-semibold text-[#201e1f]">Our Location</p>
                    <p className="text-gray-600">
                      South Circular Road, Near Faqeerni Gate, Dera Ismail Khan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-[#ec3237] to-[#d42b30] rounded-2xl p-6 lg:p-8 mb-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-white font-bold text-xl mb-1">
                  24/7 Emergency Services
                </h3>
                <p className="text-red-100">
                  Always available for your urgent healthcare needs
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0966719999"
                className="bg-white text-[#ec3237] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                PTCL: 0966-719999
              </a>
              <a
                href="tel:03302719999"
                className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Mobile: 0330-2719999
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-[#ec3237] font-semibold text-lg mb-3">
                {/* <MessageCircle className="w-5 h-5" /> */}
                Contact Information
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#201e1f] mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Choose the most convenient way to get in touch with our
                healthcare professionals.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#007ec3] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#201e1f] mb-3">
                        Phone Numbers
                      </h3>
                      <div className="space-y-2">
                        <a
                          href="tel:0966719999"
                          className="block text-gray-600 hover:text-[#007ec3] transition-colors"
                        >
                          PTCL: 0966-719999
                        </a>
                        <a
                          href="tel:03302719999"
                          className="block text-gray-600 hover:text-[#007ec3] transition-colors"
                        >
                          Mobile/WhatsApp: 0330-2719999
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#007ec3] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#201e1f] mb-3">
                        Email Address
                      </h3>
                      <a
                        href="mailto:info@mdcdikhan.com"
                        className="text-gray-600 hover:text-[#007ec3] transition-colors break-all"
                      >
                        info@mdcdikhan.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#007ec3] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#201e1f] mb-3">
                        Our Location
                      </h3>
                      <div className="text-gray-600 leading-relaxed">
                        <p className="font-medium">
                          South Circular Road, Near Faqeerni Gate, Dera Ismail
                          Khan
                        </p>
                      </div>
                      <a href="https://maps.app.goo.gl/jQozzHkT5EBX24Wm8">
                        <Button className="mt-3 bg-[#007ec3] bg-opacity-10 text-[#007ec3] hover:bg-[#007ec3] hover:text-white text-sm px-4 py-2 h-auto transition-all duration-300">
                          <MapPin className="w-4 h-4 mr-1" />
                          Get Directions
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#007ec3] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#201e1f] mb-3">
                        Service Hours
                      </h3>
                      <div className="space-y-1">
                        <p className="text-[#007ec3] font-bold text-lg">
                          Open 24 Hours
                        </p>
                        <p className="text-gray-600">7 Days a Week</p>
                        <p className="text-sm text-[#ec3237] font-semibold bg-red-50 px-2 py-1 rounded-md inline-block mt-2">
                          Emergency Services Always Available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="sticky top-8 shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
              <div className="bg-gradient-to-r from-[#007ec3] to-[#005a8c] p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-blue-100">
                  We'll get back to you within 24 hours
                </p>
              </div>

              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-[#201e1f] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007ec3] focus:border-[#007ec3] transition-all duration-300 hover:shadow-md"
                        placeholder="Haris"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#201e1f] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007ec3] focus:border-[#007ec3] transition-all duration-300 hover:shadow-md"
                        placeholder="Khan"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#201e1f] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007ec3] focus:border-[#007ec3] transition-all duration-300 hover:shadow-md"
                      placeholder="haris@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#201e1f] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007ec3] focus:border-[#007ec3] transition-all duration-300 hover:shadow-md"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#201e1f] mb-2">
                      Service Needed *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007ec3] focus:border-[#007ec3] transition-all duration-300 hover:shadow-md"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="">Select a service</option>
                      <option value="open-mri">Open MRI</option>
                      <option value="dexa-scan">DEXA Scan</option>
                      <option value="xray-opg">X-Ray & OPG</option>
                      <option value="lithotripsy">Lithotripsy</option>
                      <option value="lab-testing">Laboratory Testing</option>
                      <option value="ncs-emg-eeg">NCS / EMG / EEG</option>
                      <option value="home-sampling">Home Sampling</option>
                      <option value="ultrasound">Ultrasound</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#201e1f] mb-2">
                      Preferred Contact Time
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007ec3] focus:border-[#007ec3] transition-all duration-300 hover:shadow-md">
                      <option value="">Any time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 6PM)</option>
                      <option value="evening">Evening (6PM - 10PM)</option>
                      <option value="urgent">Urgent - Call ASAP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#201e1f] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007ec3] focus:border-[#007ec3] transition-all duration-300 hover:shadow-md resize-none"
                      placeholder="Tell us about your requirements or any specific questions..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ec3237] to-[#d42b30] hover:from-[#d42b30] hover:to-[#c02328] text-white py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <div className="text-center pt-2">
                    <p className="text-sm text-gray-500">
                      Or call us directly at{" "}
                      <a
                        href="tel:03302719999"
                        className="text-[#007ec3] font-semibold hover:underline"
                      >
                        0330-2719999
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators - Full Width Below Both Sections */}
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-orange-400 fill-current"
                  />
                ))}
              </div>
              <span className="font-semibold text-[#201e1f]">
                Trusted by 10,000+ Patients
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#007ec3]" />
                <span>Certified Lab</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ec3237]" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
