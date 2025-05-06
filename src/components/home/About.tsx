import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'Support Rural development',
    'Tax assessment Surveys',
    'Improve land records, land disputes',
    'Empower rural Households',
    'Manpower Services in various departments',
    'DGPS, Topographical & Geotechnical Surveys'
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Team" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
                <p className="text-sm text-slate-200">Experts in GIS and technical services</p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 rounded-lg shadow-xl overflow-hidden border-4 border-white hidden md:block">
              <img 
                src="https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="GIS Technology" 
                className="w-full h-40 object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              About <span className="text-orange-400">Bluewave</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
            We are a leading provider of GIS consultation, surveying services, and manpower solutions. Our in-house capabilities cover the full spectrum of GIS work, delivered by a dedicated team committed to achieving excellence and meeting project goals with precision.
With extensive experience in the GIS domain, we excel in offering both skilled and unskilled manpower, as well as qualified professionals across various management levels. Our strength lies in understanding organizational needs and delivering candidates with the right skills and relevant experience.
Our mission is to recruit responsible, capable individuals aligned with the specific requirements of each vacancy and organization we serve.</p> 
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;