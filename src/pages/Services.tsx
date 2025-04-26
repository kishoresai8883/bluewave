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
  Building
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('gis');

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
        image: 'https://images.pexels.com/photos/7108/notebook-math-computer-data.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        image: 'https://images.pexels.com/photos/8132031/pexels-photo-8132031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        image: 'https://images.pexels.com/photos/8391795/pexels-photo-8391795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              Comprehensive GIS solutions and manpower services tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'gis' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveTab('gis')}
            >
              GIS Services
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'manpower' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setActiveTab('manpower')}
            >
              Manpower Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
          >
            {services[activeTab as keyof typeof services].map((service) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 h-64 md:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-50 rounded-full p-3 mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-medium text-slate-800 mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industry Applications</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our GIS and manpower services are applied across diverse industries to solve complex challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Urban Planning', icon: <Building className="w-8 h-8" /> },
              { name: 'Environmental Management', icon: <Globe className="w-8 h-8" /> },
              { name: 'Utilities & Telecom', icon: <Cloud className="w-8 h-8" /> },
              { name: 'Transportation', icon: <Map className="w-8 h-8" /> },
              { name: 'Agriculture', icon: <Database className="w-8 h-8" /> },
              { name: 'Oil & Gas', icon: <BarChart3 className="w-8 h-8" /> }
            ].map((industry, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-slate-400">
                  Customized GIS solutions and technical staffing to address specific challenges in the {industry.name.toLowerCase()} sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;