import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Satellite, Layers, Cloud, CheckCircle } from 'lucide-react';
import img from '../assets/surfacewater.jpg';
import img1 from './../assets/surfacewater-img.webp'
import img2 from './../assets/surfacewater-img1.jpg'
import img3 from './../assets/surfacewater-img2.webp'
import img4 from './../assets/surfacewater-img3.webp'

const services = [
  {
    id: 1,
    icon: <Map className="w-10 h-10 text-blue-600" />,
    title: 'Surface Water Quality Testing',
    description: 'Comprehensive testing of lakes, rivers, reservoirs, and ponds to assess their chemical, physical, and biological properties.',
    features: [
      'Analysis of pH, turbidity, TDS, BOD, COD, and dissolved oxygen',
      'Detection of pollutants, heavy metals, and microbial content',
      'Compliance with CPCB, BIS, and WHO guidelines',
      'Suitable for drinking water sources, irrigation, and recreation',
      'Detailed lab-certified water quality reports'
    ],
    image: img1
  },
  {
    id: 2,
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Pollution Source Identification',
    description: 'Assessment of potential pollution contributors to surface water bodies such as industrial discharge, sewage, and runoff.',
    features: [
      'Site inspection and sample collection',
      'Detection of point and non-point pollution sources',
      'Mapping of effluent discharge points',
      'Water sampling upstream and downstream',
      'Recommendations for mitigation and control'
    ],
    image: img2
  },
  {
    id: 3,
    icon: <Satellite className="w-10 h-10 text-blue-600" />,
    title: 'Surface Water Mapping & Monitoring',
    description: 'Mapping and periodic monitoring of surface water bodies using GIS tools and field surveys for resource management and conservation.',
    features: [
      'GIS-based surface water mapping',
      'Monitoring changes in area, volume, and usage patterns',
      'Seasonal water level tracking',
      'Data visualization for planning and reporting',
      'Useful for government and environmental agencies'
    ],
    image: img3
  },
  {
    id: 4,
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: 'Water Resource Impact Assessment',
    description: 'Evaluation of how developmental or industrial activities affect nearby surface water resources.',
    features: [
      'Baseline water quality assessment',
      'Post-project water monitoring',
      'Impact prediction for proposed projects (EIA support)',
      'Ideal for industries, infrastructure projects, and NGOs',
      'Legal compliance documentation'
    ],
    image: img4
  },
];

const SurfaceWater = () => {
  return (
    <>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-slate-500 text-white lg:px-20 pt-32 pb-20 h-[476px] w-full"
    >
        <div className="absolute inset-0 opacity-80">
          <img 
            src={img} 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Surface Water Services</h1>
            <p className="text-xl text-white">
            We offer surface water analysis services to assess the quality and health of rivers, lakes, ponds, and reservoirs. Our testing identifies pollutants, monitors ecological balance, and ensures compliance with environmental standards for safe and sustainable water use.
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

export default SurfaceWater;