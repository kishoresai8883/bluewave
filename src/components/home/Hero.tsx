import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../../assets/bw-img1.jpg'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-700 via-teal-700 to-blue-900 text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Leading <span className="text-orange-400">GIS</span> surveying & manpower services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            We provide expert GIS consultation, surveying, and manpower services with a focus on quality and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium flex items-center justify-center transition-colors group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-6 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={img} 
                alt="GIS Data Visualization" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Geographic Excellence</h3>
                <p className="text-sm text-slate-300">Empowering Progress Through GIS & People</p>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-56 h-48 rounded-lg shadow-xl overflow-hidden border-4 border-white">
              <img 
                src="https://www.worldstarmanpower.ae/wp-content/uploads/2022/09/construction-manpower-dubai.jpg" 
                alt="Professional Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;