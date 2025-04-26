import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const ClientsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Urban Planning Associates',
      content: 'GeoExcel delivered exceptional GIS mapping services for our urban development project. Their attention to detail and technical expertise were instrumental in our success.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Michael Wei',
      company: 'Enviro Systems Inc.',
      content: 'We\'ve been working with GeoExcel for over 3 years for our technical staffing needs. They consistently provide qualified professionals who integrate seamlessly with our team.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      company: 'GlobalTech Solutions',
      content: 'Their spatial analysis capabilities helped us identify optimal locations for our new facilities. GeoExcel\'s insights saved us both time and resources in our expansion.',
      rating: 4,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const clients = [
    'EnviroTech', 'GlobalMap Solutions', 'UrbanPlan', 'DataSpatial', 
    'TechGIS', 'SpaceSense Analytics', 'GeoSystems Inc.', 'MapCore'
  ];

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our clients rely on our expertise to transform their geospatial challenges into opportunities for growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-slate-800 rounded-lg p-6 shadow-lg"
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">Trusted by Companies Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {clients.map((client, index) => (
              <div key={index} className="font-medium text-slate-300 bg-slate-800 py-4 px-2 rounded">
                {client}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/clients" 
            className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            View All Client Stories
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;