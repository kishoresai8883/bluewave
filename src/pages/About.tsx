import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Globe, BarChart3, Building } from 'lucide-react';
import img1 from '../assets/bluewave-team-img1.png';
import img2 from '../assets/bluewave-team-img2.png';
import img3 from '../assets/bluewave-team-img3.png';
import img4 from '../assets/bluewave-team-img4.png';

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
      name: 'Dr. Sachin J. Gharde',
      title: 'Director',
      image: img1
    },
    {
      name: 'Shruti H. Wasnik',
      title: 'Director',
      image: img3
    },
    {
      name: 'Kavita Jalgaonkar',
      title: 'Project Manager',
      image: img2},
    {
      name: 'Sayyed Sofiya Anjum',
      title: 'GIS Operation Manager',
      image: img4}
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative bg-slate-400 text-white lg:px-20 pt-32 pb-20 h-[476px]">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15866.jpg" 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-800 opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bluewave</h1>
            <p className="text-xl text-white">
            We are the Leading provider of GIS Consultation, Surveying Service
            Company, also provides Manpower services..
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:px-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4">
              Bluewave GIS & Manpower Solutions Pvt. Ltd. is a trusted leader in GIS consultation, GIS mapping, and surveying services. 
              Our team of experienced professionals is equipped to handle the full spectrum of GIS work with efficiency and a commitment to achieving client goals.
              Since 2015, we have been actively providing Manpower services across various departments, offering both skilled and unskilled professionals tailored to diverse organizational needs. 
              We have proudly contributed to several high-impact projects, including: DGPS, Topographical, and Geotechnical Surveys
              Active involvement in the SVAMITVA Project with the Land Records Department since 2021
              Successfully conducting Property Tax Assessment Surveys for municipal councils
              At Bluewave, our mission is to provide dependable professionals and cutting-edge GIS solutions that support the development goals of both government and private sector organizations.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg" 
                  alt="GeoExcel Journey" 
                  className="w-full h-96 object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <p className="text-4xl font-bold text-blue-600">10+</p>
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
      <section className="py-20 lg:px-20">
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
      <section className="py-20 lg:px-20 bg-slate-50 text-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
                    className="w-full h-full object-fill transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
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