import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, Users, Database, LineChart, Globe, BarChart3, ArrowRight } from 'lucide-react';
import img from '../../assets/service.jpg'
import img1 from '../../assets/service1.jpeg'
import img2 from '../../assets/service2.webp'
import img3 from '../../assets/service5.jpg'
import img4 from '../../assets/service3.jpeg'
import img5 from '../../assets/service4.jpg'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Map className="w-10 h-10 text-blue-600" />,
      title: 'GIS Mapping',
      description: 'Create detailed interactive maps with accurate spatial data representation.',
      image: img,
      link: '/services/gis'
    },
    {
      id: 2,
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: 'Drone Surveying',
      description: 'Extract meaningful insights from geographical data with advanced analysis.',
      image: img1,
      link: '/services/surveying'
    },
    {
      id: 3,
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: 'Groundwater Quality Testing',
      description: 'The quality of groundwater can affect not only our health also society and economy.',
      image: img2,
      link: '/services/groundwater'
    },
    {
      id: 4,
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Geo Tagging',
      description: 'It is the process of adding geographic information about digital content.',
      image: img3,
      link: '/services/surveying'
    },
    {
      id: 5,
      icon: <LineChart className="w-10 h-10 text-blue-600" />,
      title: 'DGPS Surveying',
      description: 'End-to-end management of complex GIS projects with timely delivery.',
      image: img4,
      link: '/services/surveying'
    },
    {
      id: 6,
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: 'Manpower',
      description: 'Utilize satellite imagery and remote data collection for comprehensive information.',
      image: img5,
      link: '/services/manpower'
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
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id='service' className="py-20 bg-slate-50">
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
              className="bg-gradient-to-r from-[#f4f5f5] to-[#f1f7ed] rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              variants={itemVariants} 
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-full h-44 flex rounded-t-lg overflow-hidden items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <img src={service.image} className='w-full h-full object-cover' alt="service" />
              </div>
              <div className="px-8 py-3 flex flex-col flex-grow justify-between">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
              </div>
              <div className='pb-6 flex justify-center'>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    View More
                  <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;