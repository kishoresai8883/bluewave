import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, Users, Database, LineChart, Globe, BarChart3, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Map className="w-10 h-10 text-blue-600" />,
      title: 'GIS Mapping',
      description: 'Create detailed interactive maps with accurate spatial data representation.',
      link: '/services'
    },
    {
      id: 2,
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: 'Drone Surveying',
      description: 'Extract meaningful insights from geographical data with advanced analysis tools.',
      link: '/services'
    },
    {
      id: 3,
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: 'Manpower',
      description: 'Utilize satellite imagery and remote data collection for comprehensive information.',
      link: '/services'
    },
    {
      id: 4,
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Technical Staffing',
      description: 'Access skilled GIS professionals and technical experts for your project needs.',
      link: '/services'
    },
    {
      id: 5,
      icon: <LineChart className="w-10 h-10 text-blue-600" />,
      title: 'DGPS Surveying',
      description: 'End-to-end management of complex GIS projects with timely delivery.',
      link: '/services'
    },
    {
      id: 6,
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: 'Geo Tagging',
      description: 'Comprehensive field data collection and validation services for accurate results.',
      link: '/services'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Specialized Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive GIS solutions and manpower services tailored to meet the needs of diverse industries and projects.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow group"
              variants={itemVariants}
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;