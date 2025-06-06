import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import bgimg from '../../assets/BG-8.webp';

const CTA = () => {
  return (
    <section className="py-20 lg:px-20 bg-cover text-white" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
              Mapping Precision. Powering Progress.
            </h2>
            <p className="text-lg text-white mb-8 max-w-2xl">
              Our team of GIS specialists and technical experts are ready to help you unlock the potential of your spatial data and provide the skilled workforce you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Schedule a Consultation
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-all"
              >
                Browse Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative hidden lg:block"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative z-10">
              <img 
                src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Collaborative GIS Work" 
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div className="absolute w-full h-full top-4 left-4 bg-blue-500 rounded-lg -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;