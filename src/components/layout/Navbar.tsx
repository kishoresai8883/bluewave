import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/bluewave-logo.webp';
import '../../index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

const handleMouseEnter = () => {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  setServicesOpen(true);
};

const handleMouseLeave = () => {
  const timeout = setTimeout(() => {
    setServicesOpen(false);
  }, 200);
  setHoverTimeout(timeout);
};

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/about',
    dropdown: [
      { name: 'Geospatial & GIS Services', path: '/services/gis' },
      { name: 'Surveying & Mapping Services', path: '/services/surveying' },
      { name: 'Property Tax Assessment Solutions', path: '/services/propertytax' },
      { name: 'Underground Water Services', path: '/services/undergroundwater' },
      { name: 'Surface Water Services', path: '/services/surfacewater' },
      { name: 'Manpower & Staffing Services', path: '/services/manpower' },
    ]
  },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' }
];

return (
  <header 
    className={`fixed w-full lg:px-12 top-0 z-50 transition-all shadow-sm duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-2'
    }`}
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-between items-center">
        <div className='flex flex-col'>
          <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className={`w-12 h-12 lg:w-14 lg:h-14 ${scrolled ? 'text-blue-600' : 'text-blue-600'} transition-colors mr-2`} />
          <div className="flex flex-col">
            <span className={`text-xl lg:text-2xl logo-name-bold ${scrolled ? 'text-blue-900' : 'text-blue-900'} transition-colors`}>
              BLUEWAVE
            </span>
            <span className={`text-md md:text-lg lg:text-xl logo-name-bold ${scrolled ? 'text-slate-800' : 'text-black'} transition-colors`}>
              GIS & Manpower Solutions Pvt Ltd
            </span>
          </div>
        </NavLink>
          <p className='slogan text-center flex-shrink-0 text-md md:text-md font-bold'>The Solutions of all Real-World Problems</p>
        </div>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 flex-wrap">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div 
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center cursor-pointer">
                  <NavLink to="/services">
                    <span className={`text-lg font-medium transition-colors ${
                    scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-700 hover:text-blue-600'
                  }`}>
                    Services
                  </span>
                  </NavLink>
                  
                  <ChevronDown className={`w-4 h-4 ml-1 ${
                    scrolled ? 'text-slate-700' : 'text-slate-700'
                  }`} />
                </div>
              
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-100 rounded-lg shadow-lg py-2 z-50">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setServicesOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive 
                        ? scrolled ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-700 border-b-2 border-white'
                        : scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-700 hover:text-blue-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none transition-colors text-slate-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile menu */}
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-lg absolute w-full top-full left-0"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col">
        {navLinks.map((link) => (
        <div key={link.name} className="w-full">
          {link.dropdown ? (
            <>
              <NavLink to="/services"
                className="flex justify-between items-center w-full py-3 px-4 text-sm font-medium text-slate-700"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </NavLink>
              {servicesOpen && (
                <div className="pl-6">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="block py-2 text-sm text-slate-600 hover:text-blue-600"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </>
          ) : (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block py-3 px-4 text-sm font-medium ${
                  isActive ? 'text-blue-600' : 'text-slate-700'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          )}
        </div>
        ))}
        </div>
      </motion.div>
    )}
  </header>
);
};

export default Navbar;