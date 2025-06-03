import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Users2, Shield, Layers, Wrench } from 'lucide-react';
import gis1 from '../assets/img1.jpeg';
import gis2 from '../assets/img2.jpg';
import gis3 from '../assets/img3.jpg';
import gis4 from '../assets/gallery-img8.jpg';
import surveying1 from './../assets/gallery-img6.png'
import surveying2 from './../assets/img8.jpg'
import surveying3 from './../assets/gallery-img12.jpg'
import surveying4 from './../assets/img9.png'
import property1 from './../assets/gallery-img4.png'
import property2 from './../assets/img10.jpeg'
import property3 from './../assets/gallery-img9.jpg'
import property4 from './../assets/img12.png'
import ug1 from './../assets/water-img.jpg'
import ug2 from './../assets/water-img1.jpg'
import ug3 from './../assets/water-img2.png'
import ug4 from './../assets/water-img3.jpg'
import sw1 from './../assets/surfacewater-img.webp'
import sw2 from './../assets/surfacewater-img1.jpg'
import sw3 from './../assets/surfacewater-img2.webp'
import sw4 from './../assets/surfacewater-img3.webp'
import manpower1 from './../assets/img4.jpg'
import manpower2 from './../assets/img5.jpg'
import manpower3 from './../assets/img6.jpg'
import manpower4 from './../assets/img7.jpeg'

const serviceCategories = [
  { id: 'gis', name: 'GIS & Geospatial', icon: <Globe className="w-6 h-6 text-blue-600" /> },
  { id: 'surveying', name: 'Surveying & Mapping', icon: <MapPin className="w-6 h-6 text-blue-600" /> },
  { id: 'property', name: 'Property Tax', icon: <Users2 className="w-6 h-6 text-blue-600" /> },
  { id: 'underground', name: 'Underground Water', icon: <Shield className="w-6 h-6 text-blue-600" /> },
  { id: 'surface', name: 'Surface Water', icon: <Layers className="w-6 h-6 text-blue-600" /> },
  { id: 'manpower', name: 'Manpower', icon: <Wrench className="w-6 h-6 text-blue-600" /> },
];

const allServices = [
  {
    categoryId: 'gis',
    title: 'GIS Mapping',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    description: 'Our Core GIS Services focus on the collection, analysis, and visualization of spatial data using advanced geospatial technologies. We specialize in GIS consultation, digital mapping, urban planning, land management, and government initiatives like SVAMITVA and Smart City projects.',
    image: gis1,
    path: '/services/gis',
  },
  {
    categoryId: 'gis',
    title: 'Spatial Data Collection & Integration',
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    description: 'Accurate data is the foundation of GIS. We specialize in collecting, digitizing, and integrating geospatial data from diverse sources including field surveys, drone imagery, and legacy records.',
    image: gis2,
    path: '/services/gis',
  },
  {
    categoryId: 'gis',
    title: 'GIS Application Development & Analysis',
    icon: <Users2 className="w-6 h-6 text-blue-600" />,
    description: 'Our team develops custom GIS tools and platforms for spatial data management, analysis, and visualization, enabling clients to extract insights and automate workflows.',
    image: gis3,
    path: '/services/gis',
  },
  {
    categoryId: 'gis',
    title: 'Surveying & Land Records Management',
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    description: 'We provide end-to-end land surveying and records management services for urban and rural areas. These services support property ownership clarity, boundary demarcation, and legal documentation.',
    image: gis4,
    path: '/services/gis',
  },
  {
    categoryId: 'surveying',
    title: 'Topographical & Geotechnical Surveys',
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    description: 'We conduct topographical and geotechnical surveys to map land features and analyze soil conditions, supporting safe and effective planning for construction, infrastructure, and development projects.',
    image: surveying1,
    path: '/services/surveying',
  },
  {
    categoryId: 'surveying',
    title: 'Drone Surveying',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We offer drone surveying services to capture high-resolution aerial data for accurate mapping, terrain modeling, and large-area assessments, enabling faster and more efficient project planning.',
    image: surveying2,
    path: '/services/surveying',
  },
  {
    categoryId: 'surveying',
    title: 'DGPS & Total Station Surveying',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We use Differential GPS and Total Station tools to deliver precise ground-level spatial data for land development, layout planning, and engineering projects.',
    image: surveying3,
    path: '/services/surveying',
  },
  {
    categoryId: 'surveying',
    title: 'GIS-Based Mapping & Integration',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We develop detailed GIS maps with layered data to support spatial analysis, planning, and decision-making across urban, rural, and industrial applications.',
    image: surveying4,
    path: '/services/surveying',
  },
  {
    categoryId: 'property',
    title: 'Door-to-Door Property Survey',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We conduct door-to-door property surveys to collect accurate data on ownership, property usage, structure, and utilities. This ensures reliable information for tax assessment, urban planning, and municipal record updates.',
    image: property1,
    path: '/services/propertytax',
  },
  {
    categoryId: 'property',
    title: 'Online Tax Assessment System',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Our Online Tax Assessment System streamlines property tax calculation, billing, and management through a centralized digital platform, enabling real-time assessments, self-service options, and improved transparency for both citizens and municipalities.',
    image: property2,
    path: '/services/propertytax',
  },
  {
    categoryId: 'property',
    title: 'Grievance Redressal & Public Notification',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'A transparent process to handle objections, hearings, and public notices during the tax assessment lifecycle.',
    image: property3,
    path: '/services/propertytax',
  },
  {
    categoryId: 'property',
    title: 'Post-Assessment Monitoring & Maintenance',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Continuous updating and maintenance of property records to reflect structural changes, ownership transfer, and new constructions.',
    image: property4,
    path: '/services/propertytax',
  },
  {
    categoryId: 'underground',
    title: 'Groundwater Quality Testing',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'This service focuses on evaluating the chemical, physical, and biological characteristics of underground water to determine its suitability for drinking, irrigation, and industrial use.',
    image: ug1,
    path: '/services/undergroundwater',
  },
  {
    categoryId: 'underground',
    title: 'Hydrogeological Survey',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'A scientific study of underground water conditions, aquifer characteristics, and water table levels to support sustainable groundwater use and recharge planning.',
    image: ug2,
    path: '/services/undergroundwater',
  },
  {
    categoryId: 'underground',
    title: 'Groundwater Recharge Assessment',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Evaluation of recharge capacity, surface infiltration, and aquifer replenishment potential to support water conservation and rainwater harvesting planning.',
    image: ug3,
    path: '/services/undergroundwater',
  },
  {
    categoryId: 'underground',
    title: 'Periodic Monitoring & Reporting',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Ongoing groundwater testing and reporting to monitor changes in quality, quantity, and seasonal trends for regulatory or operational purposes.',
    image: ug4,
    path: '/services/undergroundwater',
  },
  {
    categoryId: 'surface',
    title: 'Surface Water Quality Testing',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Comprehensive testing of lakes, rivers, reservoirs, and ponds to assess their chemical, physical, and biological properties.',
    image: sw1,
    path: '/services/surfacewater',
  },
  {
    categoryId: 'surface',
    title: 'Pollution Source Identification',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Assessment of potential pollution contributors to surface water bodies such as industrial discharge, sewage, and runoff.',
    image: sw2,
    path: '/services/surfacewater',
  },
  {
    categoryId: 'surface',
    title: 'Surface Water Mapping & Monitoring',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Mapping and periodic monitoring of surface water bodies using GIS tools and field surveys for resource management and conservation.',
    image: sw3,
    path: '/services/surfacewater',
  },
  {
    categoryId: 'surface',
    title: 'Water Resource Impact Assessment',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'Evaluation of how developmental or industrial activities affect nearby surface water resources.',
    image: sw4,
    path: '/services/surfacewater',
  },
  {
    categoryId: 'manpower',
    title: 'Skilled Manpower Supply',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We offer technically qualified and experienced professionals across various domains, including GIS, engineering, IT, and surveying. Our skilled manpower ensures efficiency, accuracy, and reliability for both field and office-based projects.',
    image: manpower1,
    path: '/services/manpower',
  },
  {
    categoryId: 'manpower',
    title: 'Unskilled & General Labor Supply',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We provide dependable unskilled and general labor for support tasks across fieldwork, construction, and municipal projects. Our workforce is adaptable, task-ready, and available for both short-term and long-term assignments.',
    image: manpower2,
    path: '/services/manpower',
  },
  {
    categoryId: 'manpower',
    title: 'Government & Institutional Staffing',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We offer staffing solutions for government departments and public institutions, providing trained personnel such as stenographers, data entry operators, and administrative staff. Our services ensure compliance with regulatory standards and seamless integration into public sector workflows.',
    image: manpower3,
    path: '/services/manpower',
  },
  {
    categoryId: 'manpower',
    title: 'Project-Based Staffing Solutions',
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    description: 'We provide flexible, project-specific staffing solutions tailored to the scope, duration, and skill requirements of each assignment. Whether for GIS, surveying, or administrative projects, our workforce is deployed efficiently to meet deadlines and ensure smooth project execution.',
    image: manpower4,
    path: '/services/manpower',
  },
];

  const Services = () => {
  const [activeTab, setActiveTab] = useState('gis');

  const filteredServices = allServices.filter(service => service.categoryId === activeTab);

  return (
    <section className="min-h-screen py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center mt-12 mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
        <p className="text-slate-600 text-lg">Explore our diverse offerings tailored to government and private clients.</p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 rounded-full border transition font-medium text-sm
                ${activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <Link to={service.path} className="inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors">Explore More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
