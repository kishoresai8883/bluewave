import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Satellite, Layers, Cloud, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Map className="w-10 h-10 text-blue-600" />,
    title: 'GIS Mapping',
    description: 'Our custom GIS mapping services create detailed, interactive maps that visualize complex spatial data in intuitive ways.',
    features: [
      'Custom map creation and design',
      'Interactive web maps and applications',
      'Thematic mapping and visualization',
      'High-resolution map production'
    ],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
  },
  {
    id: 2,
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Spatial Analysis',
    description: 'Transform raw geospatial data into actionable intelligence with our comprehensive spatial analysis services.',
    features: [
      'Proximity and buffer analysis',
      'Spatial statistics and pattern detection',
      'Network and routing analysis',
      'Site suitability modeling'
    ],
    image: 'https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg'
  },
  {
    id: 3,
    icon: <Satellite className="w-10 h-10 text-blue-600" />,
    title: 'Remote Sensing',
    description: 'Access critical insights from satellite and aerial imagery with our advanced remote sensing capabilities.',
    features: [
      'Satellite imagery acquisition and analysis',
      'Land use and land cover classification',
      'Change detection and monitoring',
      'Environmental assessment'
    ],
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
  },
  {
    id: 4,
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: 'Data Integration',
    description: 'Seamlessly combine multiple data sources into a coherent geospatial framework for comprehensive analysis.',
    features: [
      'Multi-source data integration',
      'Spatial database development',
      'ETL processes for geospatial data',
      'Legacy system integration'
    ],
    image: 'https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg'
  },
  {
    id: 5,
    icon: <Cloud className="w-10 h-10 text-blue-600" />,
    title: 'GIS Cloud Solutions',
    description: 'Deploy and manage scalable cloud-based GIS infrastructure for efficient data handling and application hosting.',
    features: [
      'Cloud GIS architecture design',
      'SaaS GIS implementation',
      'Performance optimization',
      'Secure data storage and access'
    ],
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
  }
];

const SurveyingServices = () => {
  return (
    <>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-slate-500 text-white pt-32 pb-20 h-[476px] w-full"
    >
        <div className="absolute inset-0 opacity-80">
          <img 
            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15866.jpg" 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Surveying & Mapping Services</h1>
            <p className="text-xl text-white">
            We are the Leading provider of GIS Consultation, Surveying Service
            Company, also provides Manpower services..
            </p>
          </div>
        </div>
      </motion.section>
      <motion.div className='px-6 py-12 mx-auto max-w-7xl'>
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Surveying Services</h1>
      <div className="space-y-12">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative h-64 lg:h-full ${!isEven ? 'lg:order-2' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-medium text-slate-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
    </>
  );
};

export default SurveyingServices;