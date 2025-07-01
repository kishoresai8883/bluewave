import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe2, Users2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import img from '../../assets/DRONE_IMAGE.webp'

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
    title: "Bluewave is a Leading GIS Surveying & Manpower services",
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
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm text-white z-20 transition-all"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 py-8 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto text-center text-white"
            >
              <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                {currentSlide.title}
              </h1>
              <p className="text-center text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
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