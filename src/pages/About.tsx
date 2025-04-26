import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Globe, BarChart3, Building } from 'lucide-react';

const About = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-blue-600" />,
      count: '15+',
      label: 'Team Members'
    },
    {
      id: 2,
      icon: <Building className="w-10 h-10 text-blue-600" />,
      count: '100+',
      label: 'Clients Served'
    },
    {
      id: 3,
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      count: '5+',
      label: 'Countries Reached'
    },
    {
      id: 4,
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      count: '150+',
      label: 'Projects Completed'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in every project we undertake.',
      icon: <Award className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver exceptional solutions.',
      icon: <Globe className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our relationships.',
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to achieve shared goals and success.',
      icon: <Users className="w-10 h-10 text-blue-600" />
    }
  ];

  const team = [
    {
      name: 'Dr. Robert Chen',
      title: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Sarah Johnson',
      title: 'GIS Technical Lead',
      image: 'https://images.pexels.com/photos/3783958/pexels-photo-3783958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Head of Staffing Services',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Emily Wu',
      title: 'Project Management Director',
      image: 'https://images.pexels.com/photos/3727474/pexels-photo-3727474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bluewave</h1>
            <p className="text-xl text-slate-300">
            We are the Leading provider of GIS Consultation, Surveying Service
            Company, also provides Manpower services..
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum praesentium esse est tenetur magnam harum voluptatum, numquam ad fuga nemo similique ducimus quae ea, explicabo debitis quam quidem porro minus?
              </p>
              <p className="text-slate-600 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti illo laboriosam, ipsam temporibus nisi explicabo dolore quos rerum quisquam fuga quaerat repellat libero, id consequatur quam quis maxime deserunt perferendis.
              </p>
              <p className="text-slate-600 mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dolore, reprehenderit provident vero ea ex nobis rerum similique voluptate laboriosam ipsam! Dolor accusantium incidunt laborum maiores reiciendis saepe eveniet quis.
              </p>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam doloribus ducimus rerum sequi et eligendi, alias est dicta. Fugiat vitae tempore mollitia maiores quo. Nihil est eum sunt architecto impedit.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="GeoExcel Journey" 
                  className="w-full h-96 object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <p className="text-4xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-slate-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-1">{stat.count}</p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These principles guide our work and define our approach to serving clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Meet the experts who drive our vision and lead our talented team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-slate-400">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;