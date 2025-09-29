import React from 'react';
import { Microscope, Scan, Heart, FileText, Clock, Shield, Zap, Home, Activity, Dna } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

export default function ServicesSection() {
  const services = [
    {
      icon: Scan,
      title: 'Open MRI',
      description: 'State-of-the-art open MRI technology providing comfortable, anxiety-free diagnostic imaging with superior clarity and precision for comprehensive medical evaluation.',
      image: 'https://images.unsplash.com/photo-1631507623121-eaaba8d4e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwTVJJJTIwbWFjaGluZSUyMG1lZGljYWx8ZW58MXx8fHwxNzU5MTI3OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Dna,
      title: 'DEXA Scan',
      description: 'Advanced dual-energy X-ray absorptiometry for precise bone density measurement, early osteoporosis detection, and fracture risk assessment with minimal radiation exposure.',
      image: 'https://images.unsplash.com/photo-1677948854686-c6b9f3739ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxERVhBJTIwc2NhbiUyMGJvbmUlMjBkZW5zaXR5fGVufDF8fHx8MTc1OTEyNzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Zap,
      title: 'Lithotripsy',
      description: 'Revolutionary non-invasive kidney stone treatment using focused shock wave technology to safely break down stones without surgery or hospitalization.',
      image: 'https://images.unsplash.com/photo-1691934286325-ef264d70ff7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRob3RyaXBzeSUyMG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5MTI3OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: FileText,
      title: 'X-Ray & OPG',
      description: 'High-resolution digital X-ray and panoramic orthopantomography for comprehensive dental and skeletal diagnostics with instant results and detailed reporting.',
      image: 'https://images.unsplash.com/photo-1758691461957-13aff0c37c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4LXJheSUyMG1lZGljYWwlMjBpbWFnaW5nfGVufDF8fHx8MTc1OTEyNzQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Microscope,
      title: 'Laboratory Testing',
      description: 'Comprehensive laboratory services including complete blood counts, biochemistry panels, pathology testing, and specialized diagnostic panels with rapid, accurate results.',
      image: 'https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVzdCUyMHR1YmVzJTIwYmxvb2QlMjBzYW1wbGVzfGVufDF8fHx8MTc1OTEyNzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Activity,
      title: 'NCS / EMG / EEG',
      description: 'Advanced neurological testing including nerve conduction studies, electromyography, and electroencephalography for comprehensive neurological assessment and diagnosis.',
      image: 'https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFRUclMjBicmFpbiUyMHNjYW4lMjBtZWRpY2FsfGVufDF8fHx8MTc1OTEyNzk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Home,
      title: 'Home Sampling',
      description: 'Convenient doorstep sample collection service with trained phlebotomists ensuring safe, hygienic collection and timely delivery to our laboratory.',
      image: 'https://images.unsplash.com/photo-1638929935038-94137b62f315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwbWVkaWNhbCUyMHNhbXBsaW5nJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NTkxMjc5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Heart,
      title: 'Ultrasound',
      description: 'Advanced ultrasound imaging for comprehensive diagnostic evaluation.',
      image: 'https://images.unsplash.com/photo-1706065264583-55f1a8549769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdWx0cmFzb3VuZCUyMHNjYW5uZXJ8ZW58MXx8fHwxNzU5MTI3NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock emergency services'
    },
    {
      icon: Shield,
      title: 'Latest Technology',
      description: 'Advanced medical equipment'
    },
    {
      icon: FileText,
      title: 'Experienced Team',
      description: 'Qualified doctors & technicians'
    },
    {
      icon: Heart,
      title: 'Affordable Services',
      description: 'Quality healthcare for everyone'
    },
    {
      icon: Microscope,
      title: 'Trusted by Patients',
      description: 'Reliable and accurate results'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#ec3237] font-semibold text-lg">Our Services</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#201e1f] mt-2 mb-4">
            Comprehensive Diagnostic Solutions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto px-4">
            We offer a complete range of diagnostic services with state-of-the-art technology 
            and experienced medical professionals to ensure accurate results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#007ec3] p-2.5 rounded-lg shadow-lg">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#201e1f] mb-3">Why Choose Mumtaz Diagnostic Center?</h3>
            <p className="text-gray-600">We are committed to providing the best diagnostic services with:</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#007ec3] to-[#005a8a] p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-[#201e1f] mb-2 text-sm sm:text-base">{feature.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}