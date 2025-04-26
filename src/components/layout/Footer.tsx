import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Clock 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="w-7 h-7 text-blue-500 mr-2" />
              <span className="text-xl font-bold">Bluewave</span>
            </div>
            <p className="text-slate-300 mb-4">
              Leading provider of innovative GIS solutions and expert manpower services, delivering excellence since 2015.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-blue-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-500 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/clients" className="text-slate-300 hover:text-blue-500 transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-blue-500 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-500 transition-colors">GIS Mapping</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-500 transition-colors">Spatial Analysis</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-500 transition-colors">Remote Sensing</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-500 transition-colors">Technical Staffing</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-500 transition-colors">Project Management</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-blue-500 transition-colors">Data Collection</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">123 GIS Center, Tech Park, Silicon Valley, CA 94024</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">+91 0123456789</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">info@geoexcel.com</span>
              </li>
              <li className="flex">
                <Clock className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; 2025 Bluewave. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;