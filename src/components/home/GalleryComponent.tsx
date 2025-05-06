import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

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
      src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Urban Mapping Project',
      category: 'mapping',
      description: 'Comprehensive urban mapping solution for city planning and development.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Geospatial Data Analysis',
      category: 'analysis',
      description: 'Advanced spatial analysis for identifying development patterns and trends.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Remote Sensing Application',
      category: 'remote-sensing',
      description: 'Satellite imagery analysis for environmental monitoring and assessment.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Technical Team Collaboration',
      category: 'team',
      description: 'Our expert team working together on complex GIS solutions.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Data Visualization Dashboard',
      category: 'analysis',
      description: 'Interactive dashboard for visualizing complex geospatial data.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/7412111/pexels-photo-7412111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      {/* Gallery */}
      <section className="py-16">
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