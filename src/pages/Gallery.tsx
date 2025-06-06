import { useState } from 'react';
import { motion } from 'framer-motion';
import gallery from '../assets/gallery-img.webp';
import img from '../assets/gallery-img9.webp';
import img1 from '../assets/gallery-img10.webp';
import img2 from '../assets/gallery-img5.webp';
import img3 from '../assets/gallery-img12.webp';
import img4 from '../assets/gallery-img13.webp';
import img5 from '../assets/gallery-img14.webp';
import img6 from '../assets/gallery-img15.webp';
import img7 from '../assets/gallery-img16.webp';
import img8 from '../assets/DRONE_IMAGE.webp';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
  }>(null);

  const galleryItems = [
    {
      id: 1,
      src: img5,
      title: 'Urban Mapping Project',
      category: 'mapping',
      description: 'Comprehensive urban mapping solution for city planning and development.'
    },
    {
      id: 2,
      src: img1,
      title: 'Geospatial Data Analysis',
      category: 'analysis',
      description: 'Advanced spatial analysis for identifying development patterns and trends.'
    },
    {
      id: 3,
      src: img2,
      title: 'Remote Sensing Application',
      category: 'remote-sensing',
      description: 'Satellite imagery analysis for environmental monitoring and assessment.'
    },
    {
      id: 4,
      src: img3,
      title: 'Technical Team Collaboration',
      category: 'team',
      description: 'Our expert team working together on complex GIS solutions.'
    },
    {
      id: 5,
      src: img4,
      title: 'Data Visualization Dashboard',
      category: 'analysis',
      description: 'Interactive dashboard for visualizing complex geospatial data.'
    },
    {
      id: 6,
      src: img,
      title: 'Field Data Collection',
      category: 'field-work',
      description: 'On-site data collection for accurate geographic information.'
    },
    {
      id: 7,
      src: img6,
      title: 'Field Data Collection',
      category: 'field-work',
      description: 'On-site data collection for accurate geographic information.'
    },
    {
      id: 8,
      src: img7,
      title: 'Field Data Collection',
      category: 'field-work',
      description: 'On-site data collection for accurate geographic information.'
    },
    {
      id: 9,
      src: img8,
      title: 'Field Data Collection',
      category: 'field-work',
      description: 'On-site data collection for accurate geographic information.'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mapping', name: 'Mapping' },
    { id: 'analysis', name: 'Spatial Analysis' },
    { id: 'remote-sensing', name: 'Remote Sensing' },
    { id: 'team', name: 'Our Team' },
    { id: 'field-work', name: 'Field Work' },
    { id: 'database', name: 'Database' }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative bg-slate-700 text-white lg:px-20 pt-32 pb-20 h-[476px]">
        <div className="absolute inset-0 opacity-80">
          <img 
            src={gallery}
            alt="Gallery Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-600 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-slate-300">
              Explore our portfolio of GIS projects and technical solutions across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:px-20">
        <div className="container mx-auto px-4 md:px-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No projects found matching your criteria. Try adjusting your filters.</p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredItems.map(item => (
                <motion.div 
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                  variants={itemVariants}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;