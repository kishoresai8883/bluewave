import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Map, 
  Database, 
  Users, 
  LineChart, 
  Globe, 
  BarChart3, 
  Satellite, 
  Layers, 
  Cloud, 
  CheckCircle,
  Building,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const Services = () => {

  const services = {
    gis: [
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
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        image: 'https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        image: 'https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ],
    manpower: [
      {
        id: 1,
        icon: <Users className="w-10 h-10 text-blue-600" />,
        title: 'Technical Staffing',
        description: 'Access highly skilled GIS professionals and technical experts for your project needs with our specialized staffing services.',
        features: [
          'GIS analysts and developers',
          'Database administrators',
          'Remote sensing specialists',
          'Technical project managers'
        ],
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 2,
        icon: <LineChart className="w-10 h-10 text-blue-600" />,
        title: 'Project Management',
        description: 'Our experienced project managers ensure your GIS initiatives are delivered on time, within budget, and to specification.',
        features: [
          'End-to-end project coordination',
          'Resource allocation and scheduling',
          'Risk management and mitigation',
          'Quality assurance and control'
        ],
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 3,
        icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
        title: 'Field Data Collection',
        description: 'Gather accurate geospatial data in the field with our comprehensive collection and validation services.',
        features: [
          'Mobile data collection',
          'GPS/GNSS surveying',
          'Field verification and QA',
          'Data processing and integration'
        ],
        image: 'https://images.pexels.com/photos/9467456/pexels-photo-9467456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 4,
        icon: <Globe className="w-10 h-10 text-blue-600" />,
        title: 'Training & Support',
        description: 'Empower your team with the knowledge and skills they need to leverage GIS technology effectively.',
        features: [
          'Customized GIS training programs',
          'Technical support services',
          'Knowledge transfer',
          'System administration support'
        ],
        image: 'https://images.pexels.com/photos/6321573/pexels-photo-6321573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  };

  const industries = [
    { name: 'Urban Planning', icon: <Building className="w-8 h-8" />, description: 'Smart city planning and development' },
    { name: 'Environmental', icon: <Globe className="w-8 h-8" />, description: 'Environmental monitoring and conservation' },
    { name: 'Utilities', icon: <Cloud className="w-8 h-8" />, description: 'Infrastructure and network management' },
    { name: 'Transportation', icon: <Map className="w-8 h-8" />, description: 'Route optimization and fleet management' },
    { name: 'Agriculture', icon: <Database className="w-8 h-8" />, description: 'Precision farming and crop management' },
    { name: 'Oil & Gas', icon: <BarChart3 className="w-8 h-8" />, description: 'Resource exploration and management' }
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

  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const isEven = index % 2 === 0;
    
    return (
      <motion.div 
        className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl
        `}
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className={`relative h-64 lg:h-full ${!isEven ? 'lg:order-2' : ''}`}>
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                {service.icon}
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>

            </div>
            
            <p className="text-slate-600 mb-6">{service.description}</p>
            
            <motion.div 

              className="overflow-hidden"
            >
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h4 className="font-medium text-slate-800 mb-4">Key Features:</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white pt-32 pb-20 h-[476px]">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg" 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-blue-400 opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive GIS solutions and manpower services tailored to your specific needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          </motion.div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Industry Applications
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our GIS and manpower services are applied across diverse industries to solve complex challenges.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-blue-100">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;