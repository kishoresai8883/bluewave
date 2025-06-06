import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Satellite, Layers, CheckCircle } from 'lucide-react';
import img from '../assets/propertytax.webp';
import img1 from './../assets/gallery-img4.webp'
import img2 from './../assets/img10.webp'
import img3 from './../assets/gallery-img9.webp'
import img4 from './../assets/img12.webp'

const services = [
  {
    id: 1,
    icon: <Map className="w-10 h-10 text-blue-600" />,
    title: 'Door-to-Door Property Survey',
    description: 'We conduct door-to-door property surveys to collect accurate data on ownership, property usage, structure, and utilities. This ensures reliable information for tax assessment, urban planning, and municipal record updates.',
    features: [
      'Owner and occupant information capture',
      'Floor-wise carpet and built-up area measurement',
      'Water, drainage, and utility data collection',
      'Photographic documentation of property',
      'Mobile survey application integration'
    ],
    image: img1
  },
  {
    id: 2,
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Online Tax Assessment System',
    description: 'Our Online Tax Assessment System streamlines property tax calculation, billing, and management through a centralized digital platform, enabling real-time assessments, self-service options, and improved transparency for both citizens and municipalities.',
    features: [
      'Real-time tax assessment and billing',
      'Carpet-area-based tax calculation engine',
      'Owner login for self-assessment and updates',
      'API support for third-party software and portals'
    ],
    image: img2
  },
  {
    id: 3,
    icon: <Satellite className="w-10 h-10 text-blue-600" />,
    title: 'Grievance Redressal & Public Notification',
    description: 'A transparent process to handle objections, hearings, and public notices during the tax assessment lifecycle.',
    features: [
      'Public display of draft assessment list',
      'Hearing schedule management and case recording',
      'ULB review panel and correction workflows',
      'Final demand register creation and publishing'
    ],
    image: img3
  },
  {
    id: 4,
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: 'Post-Assessment Monitoring & Maintenance',
    description: 'Continuous updating and maintenance of property records to reflect structural changes, ownership transfer, and new constructions.',
    features: [
      'Annual property tax database update',
      'Property number renumbering and sequence mapping',
      'Tax collection tracking through Android applications',
      'Ongoing field verification',
      'Mapping of new buildings and modifications'
    ],
    image: img4
  },
];

const PropertyTaxServices = () => {
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
        <div className="absolute inset-0 bg-slate-800 opacity-80"></div>
      </div> 
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Property Tax Assessment Services</h1>
          <p className="text-xl text-white">
          We are the Leading provider of GIS Consultation, Surveying Service
          Company, also provides Manpower services..
          </p>
        </div>
      </div>
    </motion.section>
    <motion.div className="px-6 py-12 mx-auto max-w-7xl">
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

export default PropertyTaxServices;