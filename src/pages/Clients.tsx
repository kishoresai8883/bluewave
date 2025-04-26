import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, Building } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Director of Urban Development',
      company: 'GIS Services Pvt Ltd',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, dicta architecto quos fugit officia illo unde suscipit, quisquam, odit quaerat rem vel enim hic nulla similique natus commodi dolore.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      companyLogo: 'Urban Planning'
    },
    {
      id: 2,
      name: 'Michael Wei',
      title: 'CTO',
      company: 'GIS Services Pvt Ltd.',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, dicta architecto quos fugit officia illo unde suscipit, quisquam, odit quaerat rem vel enim hic nulla similique natus commodi dolore.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      companyLogo: 'EnviroTech'
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      title: 'Project Manager',
      company: 'GIS Services Pvt Ltd',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, dicta architecto quos fugit officia illo unde suscipit, quisquam, odit quaerat rem vel enim hic nulla similique natus commodi dolore.',
      rating: 4,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      companyLogo: 'GlobalTech'
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Head of Operations',
      company: 'GIS Services Pvt Ltd',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, dicta architecto quos fugit officia illo unde suscipit, quisquam, odit quaerat rem vel enim hic nulla similique natus commodi dolore.',
      rating: 5,
      image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      companyLogo: 'TeleMap'
    },
    {
      id: 5,
      name: 'Laura Chen',
      title: 'Environmental Scientist',
      company: 'GIS Services Pvt Ltd',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, dicta architecto quos fugit officia illo unde suscipit, quisquam, odit quaerat rem vel enim hic nulla similique natus commodi dolore.',
      rating: 4,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      companyLogo: 'EcoSpatial'
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'Director of Engineering',
      company: 'GIS Services Pvt Ltd',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, dicta architecto quos fugit officia illo unde suscipit, quisquam, odit quaerat rem vel enim hic nulla similique natus commodi dolore.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      companyLogo: 'UrbanInfra'
    }
  ];

  const clientLogos = [
    'EnviroTech', 'GlobalMap Solutions', 'UrbanPlan', 'DataSpatial', 
    'TechGIS', 'SpaceSense Analytics', 'GeoSystems Inc.', 'MapCore',
    'EcoSpatial', 'TeleMap', 'UrbanInfra', 'SpatialFlow'
  ];

  const caseStudies = [
    {
      title: 'Urban Development Planning',
      client: 'City of Westlake',
      description: 'Comprehensive GIS mapping and analysis to support sustainable urban expansion.',
      results: [
        'Created detailed land use maps for 5,000 acres',
        'Identified optimal locations for public facilities',
        'Reduced planning timeline by 40%',
        'Enabled data-driven decision making for city council'
      ],
      image: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Telecom Infrastructure Mapping',
      client: 'Connected Networks Inc.',
      description: 'Enterprise GIS solution for managing national fiber optic network infrastructure.',
      results: [
        'Mapped 15,000+ miles of fiber optic cables',
        'Reduced service response time by 65%',
        'Streamlined maintenance scheduling',
        'Improved resource allocation efficiency'
      ],
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Environmental Impact Assessment',
      client: 'GreenEarth Foundation',
      description: 'Remote sensing and spatial analysis to monitor forest cover changes and assess conservation efforts.',
      results: [
        'Analyzed 10 years of satellite imagery',
        'Identified critical conservation areas',
        'Quantified reforestation success rates',
        'Created interactive dashboard for stakeholders'
      ],
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

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
            src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Clients Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-slate-300">
              Trusted by organizations across diverse industries to deliver exceptional GIS and manpower solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-800">Trusted By Industry Leaders</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-white shadow-sm rounded-lg p-6 flex items-center justify-center h-24"
              >
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-slate-700">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real-world examples of how our GIS and manpower solutions have helped organizations achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded inline-block mb-2">
                    {study.client}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{study.title}</h3>
                  <p className="text-slate-600 mb-4">{study.description}</p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-2">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-slate-800 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="mb-6 text-yellow-400">
                  <Quote className="w-10 h-10 opacity-30 absolute right-6" />
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`w-5 h-5 ${
                          index < testimonial.rating ? 'fill-yellow-400' : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 mb-6 italic relative z-10">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.title}</p>
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Clients;