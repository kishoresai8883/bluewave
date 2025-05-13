import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/bluewave-logo.png';
import '../../index.css';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <NavLink to="/" className="flex items-center mb-4">
              <img src={logo} alt="logo"  className="w-12 h-12 text-blue-500 mr-2" />
              <span className="text-xl font-bold logo-name">BLUEWAVE</span>
            </NavLink>
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
              <a href="https://www.instagram.com/bluewave.pvt.ltd" target='_blank' className="text-slate-300 hover:text-blue-500 transition-colors">
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
                <Link to="/services/gis" className="text-slate-300 hover:text-blue-500 transition-colors">GIS Mapping</Link>
              </li>
              <li>
                <Link to="/services/manpower" className="text-slate-300 hover:text-blue-500 transition-colors">Manpower & Staffing</Link>
              </li>
              <li>
                <Link to="/services/surveying" className="text-slate-300 hover:text-blue-500 transition-colors">Surveying & Mapping</Link>
              </li>
              <li>
                <Link to="/services/propertytax" className="text-slate-300 hover:text-blue-500 transition-colors">Property Tax Assessment</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">Office no. 14, 2nd Floor, Shreehari Safalya Complex Phule Chauk, Aurangpura, Chh. Sambhajinagar</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">+91 9029500358</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">bluewavesams@gmail.com</span>
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