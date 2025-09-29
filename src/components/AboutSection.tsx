import React from "react";
import {
  CheckCircle,
  Award,
  Users,
  Clock,
  Shield,
  Activity,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NTkxMjg2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Medical Laboratory Equipment"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <motion.div
              className="md:absolute hidden -bottom-8 -right-8 bg-gradient-to-br from-[#007ec3] via-[#0088cc] to-[#005a8a] text-white p-8 rounded-2xl shadow-2xl border-4 border-white"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Shield className="w-10 h-10 mb-3" />
              <p className="font-bold text-xl">ISO Certified</p>
              <p className="text-sm opacity-90">Quality Assured</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.span
                className="inline-block text-[#ec3237] font-semibold text-lg bg-red-50 px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.span>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201e1f] mt-4 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                State-of-the-Art Diagnostic Facility
              </motion.h2>
              <motion.p
                className="text-gray-700 text-lg leading-relaxed mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Mumtaz Diagnostic Center is a state-of-the-art facility
                providing a wide range of diagnostic and medical testing
                services under one roof. Located at South Circular Road, near
                Faqeerni Gate, Dera Ismail Khan, our center operates 24/7 to
                ensure that quality healthcare is always within your reach.
              </motion.p>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Our mission is to support doctors and patients with precise
                results and compassionate service, helping you take timely
                decisions for better health outcomes.
              </motion.p>
            </div>

            {/* <motion.div 
              className="grid sm:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8a] p-3 rounded-xl shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201e1f] mb-2 text-lg">24/7 Availability</h4>
                  <p className="text-gray-600">Round-the-clock diagnostic services for emergency needs</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8a] p-3 rounded-xl shadow-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201e1f] mb-2 text-lg">Latest Medical Technology</h4>
                  <p className="text-gray-600">Advanced equipment for accurate and reliable results</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8a] p-3 rounded-xl shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201e1f] mb-2 text-lg">Experienced Team</h4>
                  <p className="text-gray-600">Qualified doctors and technicians you can trust</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8a] p-3 rounded-xl shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#201e1f] mb-2 text-lg">Affordable Services</h4>
                  <p className="text-gray-600">Quality healthcare accessible to everyone</p>
                </div>
              </motion.div>
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl shadow-2xl p-10 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-[#007ec3] via-[#0088cc] to-[#005a8a] p-6 rounded-3xl w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#201e1f] mb-3">24/7</h3>
              <p className="text-gray-700 font-semibold text-lg">
                Service Available
              </p>
              <p className="text-gray-600 mt-2">
                Round-the-clock diagnostic services
              </p>
            </motion.div>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-[#007ec3] via-[#0088cc] to-[#005a8a] p-6 rounded-3xl w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#201e1f] mb-3">Latest</h3>
              <p className="text-gray-700 font-semibold text-lg">Technology</p>
              <p className="text-gray-600 mt-2">
                State-of-the-art medical equipment
              </p>
            </motion.div>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-[#007ec3] via-[#0088cc] to-[#005a8a] p-6 rounded-3xl w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#201e1f] mb-3">
                Trusted
              </h3>
              <p className="text-gray-700 font-semibold text-lg">by Patients</p>
              <p className="text-gray-600 mt-2">
                Reliable and accurate results
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
