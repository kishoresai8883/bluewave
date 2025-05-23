import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
//import Services from './pages/Services';
import GisServices from './pages/GisServices';
import ManpowerServices from './pages/ManpowerServices';
import PropertyTaxServices from './pages/PropertyTaxServices';
import SurveyingServices from './pages/SurveyingServices';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top on page change
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="services/gis" element={<GisServices />}/>
              <Route path='services/manpower' element={<ManpowerServices/>}/>
              <Route path='services/propertytax' element={<PropertyTaxServices/>}/>
              <Route path='services/surveying' element={<SurveyingServices/>}/>
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;