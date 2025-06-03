/*import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../../assets/bw-img1.jpg'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-700 via-teal-700 to-blue-900 text-white lg:px-20 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
 
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className='text-orange-400 logo-name-bold'>Bluewave</span> is a Leading GIS Surveying & Manpower services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            We provide expert GIS consultation, surveying, and manpower services with a focus on quality and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium flex items-center justify-center transition-colors group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-6 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={img} 
                alt="GIS Data Visualization" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Geographic Excellence</h3>
                <p className="text-sm text-slate-300">Empowering Progress Through GIS & People</p>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-56 h-48 rounded-lg shadow-xl overflow-hidden border-4 border-white">
              <img 
                src="https://www.worldstarmanpower.ae/wp-content/uploads/2022/09/construction-manpower-dubai.jpg" 
                alt="Professional Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe2, Users2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import img from '../../assets/DRONE_IMAGE.jpg'

const carouselSlides = [
  {
    image: "https://images.pexels.com/photos/5302804/pexels-photo-5302804.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Delivering Precision Mapping for Informed Decisions.",
    description: "Accurate land surveying and mapping solutions using advanced tools like DGPS, drones, and GIS for reliable planning and development.",
    buttons: [
      { label: "Get In Touch", link: "/contact", primary: true },
      { label: "Learn More", link: "/about" }
    ]
  },
  {
    image: img,
    title: "Transforming GIS with Precision",
    description: "We deliver smart GIS solutions that transform spatial data into actionable insights for better planning and decision-making.",
    buttons: [
      { label: "Explore More", link: "/about", primary: true },
      { label: "Our Team", link: "/about" }
    ]
  },
  {
    image: "https://images.pexels.com/photos/4175028/pexels-photo-4175028.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "bluewave is a Leading GIS Surveying & Manpower services",
    description: "We provide skilled, unskilled, and professional workforce tailored to project needs across diverse sectors.",
    buttons: [
      { label: "Get Started", link: "/contact", primary: true },
      { label: "See Projects", link: "/gallery" }
    ]
  }
];


const features = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "GIS Solutions",
    description: "Advanced geographic information systems"
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Expert Team",
    description: "Skilled professionals at your service"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Precision Mapping",
    description: "Accurate surveying and mapping"
  }
];

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const imageIndex = Math.abs(page % carouselSlides.length);
  const currentSlide = carouselSlides[imageIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, page]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.8, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 w-full h-full"
            onHoverStart={() => setIsAutoPlaying(false)}
            onHoverEnd={() => setIsAutoPlaying(true)}
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transform"
              style={{ 
              backgroundImage: `url(${currentSlide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm text-white z-20 transition-all"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm text-white z-20 transition-all"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {currentSlide.title}
              </h1>
              <p className="text-center text-lg md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
                {currentSlide.description}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                {currentSlide.buttons.map((btn, idx) => (
              <Link
                key={idx}
                to={btn.link}
                className={`px-8 py-4 rounded-full font-semibold flex items-center transition-all transform hover:scale-105 ${
                btn.primary
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
              >
                {btn.label}
                {btn.primary && <ArrowRight className="ml-2" />}
              </Link>
          ))}
      </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index - imageIndex])}
              className={`w-3 h-3 rounded-full transition-all ${
                imageIndex === index 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

/*
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Sample carousel images - replace with your actual images
const carouselImages = [
  "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1600", // Surveying equipment
  "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1600", // Land survey
  "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1600"  // Construction site with workers
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white lg:px-20 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Carousel background images *}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }}
            />
            {/* Overlay gradient to ensure text readability *}
            <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 via-teal-700/70 to-blue-900/80"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel indicators *}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Abstract background shapes with reduced opacity *}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className='text-orange-400 logo-name-bold'>Bluewave</span> is a Leading GIS Surveying & Manpower services
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
              We provide expert GIS consultation, surveying, and manpower services with a focus on quality and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium flex items-center justify-center transition-colors group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-6 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe2, Users2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/4491446/pexels-photo-4491446.jpeg?auto=compress&cs=tinysrgb&w=1600"
];

const features = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "GIS Solutions",
    description: "Advanced geographic information systems"
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Expert Team",
    description: "Skilled professionals at your service"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Precision Mapping",
    description: "Accurate surveying and mapping"
  }
];

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const imageIndex = Math.abs(page % carouselImages.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, page]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Carousel *
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full"
            onHoverStart={() => setIsAutoPlaying(false)}
            onHoverEnd={() => setIsAutoPlaying(true)}
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${carouselImages[imageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons *}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm text-white z-20 transition-all"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm text-white z-20 transition-all"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content *}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-orange-400">Bluewave</span> GIS & Manpower Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Transforming landscapes with precision surveying and expert workforce solutions
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-all transform hover:scale-105">
                  Start Project
                  <ArrowRight className="ml-2" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators *}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index - imageIndex])}
              className={`w-3 h-3 rounded-full transition-all ${
                imageIndex === index 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

*/