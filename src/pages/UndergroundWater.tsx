import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Satellite, Layers, CheckCircle } from 'lucide-react';
import img from '../assets/underground.webp';
import img1 from './../assets/water-img.webp'
import img2 from './../assets/water-img1.webp'
import img3 from './../assets/water-img2.webp'
import img4 from './../assets/water-img3.webp'

const services = [
  {
    id: 1,
    icon: <Map className="w-10 h-10 text-blue-600" />,
    title: 'Groundwater Quality Testing',
    description: 'This service focuses on evaluating the chemical, physical, and biological characteristics of underground water to determine its suitability for drinking, irrigation, and industrial use.',
    features: [
      'Testing for pH, TDS, hardness, fluoride, nitrate, iron, etc.',
      'Microbiological contamination checks',
      'Comparison with BIS/WHO standards',
      'Water classification (potable, agricultural, industrial)',
      'Detailed lab analysis reports'
    ],
    image: img1
  },
  {
    id: 2,
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Hydrogeological Survey',
    description: 'A scientific study of underground water conditions, aquifer characteristics, and water table levels to support sustainable groundwater use and recharge planning.',
    features: [
      'Aquifer identification and mapping',
      'Water table depth analysis',
      'Borewell siting and recharge feasibility',
      'Seasonal fluctuation monitoring',
      'Ideal for water resource planning and infrastructure'
    ],
    image: img2
  },
  {
    id: 3,
    icon: <Satellite className="w-10 h-10 text-blue-600" />,
    title: 'Groundwater Recharge Assessment',
    description: 'Evaluation of recharge capacity, surface infiltration, and aquifer replenishment potential to support water conservation and rainwater harvesting planning.',
    features: [
      'Permeability and infiltration testing',
      'Recharge zone mapping',
      'Analysis of existing recharge structures',
      'Recommendations for artificial recharge',
      'Useful for municipalities and CSR water projects'
    ],
    image: img3
  },
  {
    id: 4,
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: 'Periodic Monitoring & Reporting',
    description: 'Ongoing groundwater testing and reporting to monitor changes in quality, quantity, and seasonal trends for regulatory or operational purposes.',
    features: [
      'Scheduled water quality sampling (monthly/quarterly)',
      'Comparative trend analysis',
      'Alert reports for critical parameters',
      'Long-term water health records',
      'Support for compliance with environmental authorities'
    ],
    image: img4
  },
];

const UndergroundWater = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ground Water Analysis Services</h1>
            <p className="text-xl text-white">
            We provide underground water analysis services to assess the quality, safety, and usability of groundwater. Our testing identifies contaminants, supports sustainable usage, and ensures compliance with environmental standards for drinking, agriculture, and industrial applications.
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

export default UndergroundWater;