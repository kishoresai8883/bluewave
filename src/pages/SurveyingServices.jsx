import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Satellite, Layers, Cloud, CheckCircle } from 'lucide-react';
import img from '../assets/surveying.jpg';
import img1 from './../assets/gallery-img6.png'
import img2 from './../assets/img8.jpg'
import img3 from './../assets/gallery-img12.jpg'
import img4 from './../assets/img9.png'
import { i } from 'framer-motion/client';

const services = [
  {
    id: 1,
    icon: <Map className="w-10 h-10 text-blue-600" />,
    title: 'Topographical & Geotechnical Surveys',
    description: 'We conduct topographical and geotechnical surveys to map land features and analyze soil conditions, supporting safe and effective planning for construction, infrastructure, and development projects.',
    features: [
      'Contour and elevation mapping',
      'Soil testing and borehole logging',
      'Infrastructure suitability analysis',
      'Slope, drainage, and terrain features',
      'Essential for civil engineering and development planning'
    ],
    image: img1
  },
  {
    id: 2,
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Drone Surveying',
    description: 'We offer drone surveying services to capture high-resolution aerial data for accurate mapping, terrain modeling, and large-area assessments, enabling faster and more efficient project planning.',
    features: [
      'Aerial data capture using UAVs',
      'Ortho-rectified imagery',
      'Cost-effective for large-scale areas',
      'Ideal for urban planning, agriculture, and infrastructure projects'
    ],
    image: img2
  },
  {
    id: 3,
    icon: <Satellite className="w-10 h-10 text-blue-600" />,
    title: 'DGPS & Total Station Surveying',
    description: 'We use Differential GPS and Total Station tools to deliver precise ground-level spatial data for land development, layout planning, and engineering projects.',
    features: [
      'High-accuracy ground positioning',
      'Real-time kinematic (RTK) corrections',
      'Boundary and parcel measurements',
      'Infrastructure layout and road alignment',
      'Ideal for cadastral and construction surveys'
    ],
    image: img3
  },
  {
    id: 4,
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: 'GIS-Based Mapping & Integration',
    description: 'We develop detailed GIS maps with layered data to support spatial analysis, planning, and decision-making across urban, rural, and industrial applications.',
    features: [
      'Layered thematic mapping (land use, utilities, etc.)',
      'Integration of drone, survey, and legacy data',
      'Web GIS and dashboard-ready outputs',
      'Supports real-time monitoring and updates'
    ],
    image: img4
  },
];

const SurveyingServices = () => {
  return (
    <>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-slate-500 text-white px-20 pt-32 pb-20 h-[476px] w-full"
    >
        <div className="absolute inset-0 opacity-80">
          <img 
            src={img} 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-800 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Surveying & Mapping Services</h1>
            <p className="text-xl text-white">
              We deliver accurate surveying and mapping services using DGPS, drones, and GIS tools to support land assessment, boundary marking, and infrastructure planning.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.div className='px-6 py-12 mx-auto max-w-7xl'>
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Our Services</h1>
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