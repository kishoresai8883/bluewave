import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Satellite, Layers, Cloud, CheckCircle } from 'lucide-react';
import img1 from './../assets/img1.jpeg';
import img2 from './../assets/img2.jpg';
import img3 from './../assets/img3.jpg';
import img4 from './../assets/gallery-img8.jpg';

const services = [
  {
    id: 1,
    icon: <Map className="w-10 h-10 text-blue-600" />,
    title: 'GIS Mapping',
    description: 'Our Core GIS Services focus on the collection, analysis, and visualization of spatial data using advanced geospatial technologies. We specialize in GIS consultation, digital mapping, cadastral and legacy data integration, as well as high-precision feature extraction to support urban planning, land management, and government initiatives like SVAMITVA and Smart City projects.',
    features: [
      'GIS Consultation',
      'GIS-based Mapping',
      'Cadastral Mapping',
      'Data Digitization & Integration',
      'GIS Visualization (SVAMITVA, Smart City Projects)',
    ],
    image: img1
  },
  {
    id: 2,
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Spatial Data Collection & Integration',
    description: 'Accurate data is the foundation of GIS. We specialize in collecting, digitizing, and integrating geospatial data from diverse sources including field surveys, drone imagery, and legacy records.',
    features: [
      'Ground truthing and field data capture',
      'Legacy map digitization and integration',
      'Geo-referencing and transformation of spatial datasets',
      'Ground Control Point (GCP) collection using DGPS',
      'Data layering from multiple government and private sources'
    ],
    image: img2
  },
  {
    id: 3,
    icon: <Satellite className="w-10 h-10 text-blue-600" />,
    title: 'GIS Application Development & Analysis',
    description: 'Our team develops custom GIS tools and platforms for spatial data management, analysis, and visualization, enabling clients to extract insights and automate workflows.',
    features: [
      'GIS-based mobile and web application development',
      'Spatial analysis and modeling (e.g., terrain, risk, accessibility)',
      'Integration with external systems (e.g., MIS, ERP, tax systems)',
      'Custom dashboards and reporting tools',
      'Real-time data analytics and location intelligence'
    ],
    image: img3
  },
  {
    id: 4,
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: 'Surveying & Land Records Management',
    description: 'We provide end-to-end land surveying and records management services for urban and rural areas. These services support property ownership clarity, boundary demarcation, and legal documentation.',
    features: [
      'DGPS and drone-based land surveys',
      'Boundary fixation and cadastral verification',
      'SVAMITVA scheme implementation',
      'Property card (Sanad) generation and distribution'
    ],
    image: img4
  },
];

const GISServices = () => {
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
            src="https://img.freepik.com/free-photo/businessman-using-laptop-mobile-phone_1421-526.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-800 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Geospatial & GIS Services</h1>
            <p className="text-xl text-slate-300">
            Our Geospatial and GIS Services offer end-to-end solutions for capturing, analyzing, and visualizing spatial data, Using advanced GIS technologies.
            </p>
          </div>
        </div>
    </motion.section>
      
    <motion.div className="max-w-7xl mx-auto px-6 py-12">
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

export default GISServices;