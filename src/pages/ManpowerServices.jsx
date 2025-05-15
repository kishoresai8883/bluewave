import React from 'react';
import { motion } from 'framer-motion';
import { Map, Database, Satellite, Layers, Cloud, CheckCircle } from 'lucide-react';
import img from '../assets/manpower.webp';
import img1 from './../assets/img4.jpg'
import img2 from './../assets/img5.jpg'
import img3 from './../assets/img6.jpg'
import img4 from './../assets/img7.jpeg'

const services = [
  {
    id: 1,
    icon: <Map className="w-10 h-10 text-blue-600" />,
    title: 'Skilled Manpower Supply',
    description: 'We offer technically qualified and experienced professionals across various domains, including GIS, engineering, IT, and surveying. Our skilled manpower ensures efficiency, accuracy, and reliability for both field and office-based projects.',
    features: [
      'Engineers (GIS, Civil, Surveying, etc.)',
      'CAD/GIS Technicians and Operators',
      'Technical Field Staff',
      'Industry-specific skilled roles'
    ],
    image: img1
  },
  {
    id: 2,
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Unskilled & General Labor Supply',
    description: 'We provide dependable unskilled and general labor for support tasks across fieldwork, construction, and municipal projects. Our workforce is adaptable, task-ready, and available for both short-term and long-term assignments.',
    features: [
      'Field assistants and helpers',
      'Ground survey support staff',
      'Utility and maintenance workers',
      'Flexible workforce for short-term or long-term projects',
      'Quick onboarding and deployment'
    ],
    image: img2
  },
  {
    id: 3,
    icon: <Satellite className="w-10 h-10 text-blue-600" />,
    title: 'Government & Institutional Staffing',
    description: 'We offer staffing solutions for government departments and public institutions, providing trained personnel such as stenographers, data entry operators, and administrative staff. Our services ensure compliance with regulatory standards and seamless integration into public sector workflows.',
    features: [
      'Document verification and data entry operators',
      'ULB (Urban Local Body) support personnel',
      'Compliance with labor laws and government regulations',
      'Experience with schemes like SVAMITVA and municipal projects',
      'Stenographers and clerical staff for tribunals and administrative offices'
    ],
    image: img3
  },
  {
    id: 4,
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: 'Project-Based Staffing Solutions',
    description: 'We provide flexible, project-specific staffing solutions tailored to the scope, duration, and skill requirements of each assignment. Whether for GIS, surveying, or administrative projects, our workforce is deployed efficiently to meet deadlines and ensure smooth project execution.',
    features: [
      'Custom team composition based on project requirements',
      'On-site coordination and supervision',
      'Flexible staffing durations (short/long term)',
      'Performance tracking and reporting',
      'GIS, survey, and IT project support'
    ],
    image: img4
  },
];

const ManpowerServices = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Manpower & Staffing Services</h1>
            <p className="text-xl text-white">
            We provide skilled, unskilled, and professional manpower tailored to your project needs, ensuring timely deployment and quality support for both government and private sector operations.
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

export default ManpowerServices;