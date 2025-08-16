import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOHead from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import photo1 from "@/assets/photos/hotel-jose-room-finished.jpg";
import photo2 from "@/assets/photos/private-house.jpg";
import photo3 from "@/assets/photos/interior-hotel-finishing-wall.jpg";
import photo4 from "@/assets/photos/hotel-room-renovated.jpg";
import photo5 from "@/assets/photos/interior-finishing.jpg";
import photo6 from "@/assets/photos/interior-work.jpg";
import photo7 from "@/assets/photos/exterior-wall-finishing.jpg";
import photo8 from "@/assets/photos/exterior-house-finishing.jpg";
import photo9 from "@/assets/photos/exterior-finishing-and-painting.jpg";
import photo10 from "@/assets/photos/exterior-house-finishing-2.jpg";
import photo11 from "@/assets/photos/exterior-finishing-in-progress.jpg";
import photo12 from "@/assets/photos/interior-house-wall-finished.jpg";
import videoPoster1 from "@/assets/photos/video_poster_1.jpg";
import videoPoster2 from "@/assets/photos/video_poster_2.jpg";
const videoPosters = [videoPoster1, videoPoster2];

// import photo7 from "@/assets/photos/interior-hotel-finishing-wall.jpg";
import video1 from "@/assets/videos/1.mp4";
import video2 from "@/assets/videos/2.mp4";

const GalleryPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", label: t('gallery.categories.all') },
    { id: "interior", label: t('gallery.categories.interior') },
    { id: "exterior", label: t('gallery.categories.exterior') },
    { id: "renovation", label: t('gallery.categories.renovation') },
    { id: "videos", label: t('gallery.videos.title') },
  ];

  const projects = [
    {
      id: 1,
      title: t('gallery.projects.modernApartment.title'),
      category: "interior",
      image: photo1,
      description: t('gallery.projects.modernApartment.desc'),
      details: t('gallery.projects.modernApartment.details', { defaultValue: "Complete interior renovation including custom carpentry, premium flooring, and modern lighting solutions." }),
      location: "Hotel Jose, Blankenberge, Belgium",
      year: "2025"
    },
    {
      id: 2,
      title: t('gallery.projects.privateHouse.title'),
      category: "exterior",
      image: photo2,
      description: t('gallery.projects.privateHouse.desc'),
      details: t('gallery.projects.privateHouse.details', { defaultValue: "Full thermal insulation system with high-performance materials meeting Belgian energy standards." }),
      location: "Hotel Jose, Blankenberge, Belgium",
      year: "2025"
    },
    {
      id: 3,
      title: t('gallery.projects.hotelJose.title'),
      category: "interior",
      image: photo3,
      description: t('gallery.projects.hotelJose.desc'),
      details: t('gallery.projects.hotelJose.details', { defaultValue: "Luxury bathroom transformation with premium tiles, modern fixtures, and custom vanity." }),
      location: "Belgium",
      year: "2025"
    },
    {
      id: 4,
      title: t('gallery.projects.modernLiving.title'),
      category: "interior",
      image: photo4,
      description: t('gallery.projects.modernLiving.desc'),
      details: t('gallery.projects.modernLiving.details', { defaultValue: "Contemporary living space design with open-plan layout and premium finishes." }),
      location: "Hotel Jose, Blankenberge, Belgium",
      year: "2025"
    },
    {
      id: 5,
      title: t('gallery.projects.renovatedFacade.title'),
      category: "interior",
      image: photo5,
      description: t('gallery.projects.renovatedFacade.desc'),
      details: t('gallery.projects.renovatedFacade.details', { defaultValue: "Complete facade renovation with weather-resistant materials and improved insulation." }),
      location: "Zonnebeke, Belgium",
      year: "2025"
    },
    {
      id: 6,
      title: t('gallery.projects.wallpaperInstalation.title'),
      category: "renovation",
      image: photo6,
      description: t('gallery.projects.wallpaperInstalation.desc'),
      details: t('gallery.projects.wallpaperInstalation.details', { defaultValue: "Minimalist bathroom design with clean lines and modern functionality." }),
      location: "Zonnebeke, Belgium",
      year: "2025"
    },
    {
      id: 7,
      title: t('gallery.projects.exteriorRenovation.title'),
      category: "exterior",
      image: photo7,
      description: t('gallery.projects.exteriorRenovation.desc'),
      details: t('gallery.projects.exteriorRenovation.details', { defaultValue: "Minimalist bathroom design with clean lines and modern functionality." }),
      location: "Belgium",
      year: "2025"
    },
    {
      id: 8,
      title: t('gallery.projects.exteriorHouseFinishing.title'),
      category: "exterior",
      image: photo8,
      description: t('gallery.projects.exteriorHouseFinishing.desc'),
      details: t('gallery.projects.exteriorHouseFinishing.details', { defaultValue: "Minimalist bathroom design with clean lines and modern functionality." }),
      location: "Belgium",
      year: "2025"
    },
    {
      id: 9,
      title: t('gallery.projects.exteriorFinishinGPainting.title'),
      category: "exterior",
      image: photo9,
      description: t('gallery.projects.exteriorFinishinGPainting.desc'),
      details: t('gallery.projects.exteriorFinishinGPainting.details', { defaultValue: "Minimalist bathroom design with clean lines and modern functionality." }),
      location: "Belgium",
      year: "2025"
    },
    {
      id: 10,
      title: t('gallery.projects.exteriorHouseFinishing2.title'),
      category: "exterior",
      image: photo10,
      description: t('gallery.projects.exteriorHouseFinishing2.desc'),
      details: t('gallery.projects.exteriorHouseFinishing2.details', { defaultValue: "Minimalist bathroom design with clean lines and modern functionality." }),
      location: "Belgium",
      year: "2025"
    },
    {
      id: 11,
      title: t('gallery.projects.exteriorFinishinGInProgress.title'),
      category: "exterior",
      image: photo11,
      description: t('gallery.projects.exteriorFinishinGInProgress.desc'),
      details: t('gallery.projects.exteriorFinishinGInProgress.details', { defaultValue: "Minimalist bathroom design with clean lines and modern functionality." }),
      location: "Belgium",
      year: "2025"
    },
    {
      id: 12,
      title: t('gallery.projects.interiorHouseWallFinished.title'),
      category: "interior",
      image: photo12,
      description: t('gallery.projects.interiorHouseWallFinished.desc'),
      details: t('gallery.projects.interiorHouseWallFinished.details', { defaultValue: "Minimalist bathroom design with clean lines and modern functionality." }),
      location: "Belgium",
      year: "2025"
    }
  ];

  const videos = [
    {
      id: 1,
      title: t('gallery.videos.video_1.title'),
      category: "videos",
      video: video1,
      description: t('gallery.videos.video_1.des'),
      location: t('gallery.videos.video_1.location'),
      year: t('gallery.videos.video_1.date')
    },
    {
      id: 2,
      title: t('gallery.videos.video_2.title'),
      category: "videos",
      video: video1,
      description: t('gallery.videos.video_2.des'),
      location: t('gallery.videos.video_2.location'),
      year: t('gallery.videos.video_2.date')
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : activeCategory === "videos" 
    ? []
    : projects.filter(project => project.category === activeCategory);

  const filteredVideos = activeCategory === "all" || activeCategory === "videos" ? videos : [];
  const allItems = [...filteredProjects, ...filteredVideos];

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1);
    } else {
      setSelectedImage(currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      < Navbar />
      <SEOHead page="gallery" />
      
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="pt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('gallery.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('gallery.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          {/* Videos Section */}
          {(activeCategory === "all" || activeCategory === "videos") && filteredVideos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t('gallery.videos.title')}
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                {t('gallery.videos.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredVideos.map((video, index) => (
                    <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative">
                        <video 
                          className="w-full h-64 object-cover"
                          controls
                              poster={videoPosters[index]} 
                        >
                          <source src={video.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                        <p className="text-muted-foreground mb-4">{video.description}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{video.location}</span>
                          <span>{video.year}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          {filteredProjects.length > 0 && (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                      onClick={() => openModal(index)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Zoom Icon */}
                        <div className="absolute top-4 right-4 opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <ZoomIn className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        
                        {/* Project Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                          <p className="text-sm opacity-90 mb-2">{project.description}</p>
                          <div className="flex items-center justify-between text-xs opacity-75">
                            <span>{project.location}</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              {t('gallery.results', { 
                defaultValue: "Showing {{count}} items", 
                count: allItems.length 
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image */}
              <div className="relative bg-white rounded-lg overflow-hidden">
                <img
                  src={filteredProjects[selectedImage].image}
                  alt={filteredProjects[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Project Details */}
                <div className="p-6 bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {filteredProjects[selectedImage].title}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {filteredProjects[selectedImage].description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {filteredProjects[selectedImage].details}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{filteredProjects[selectedImage].location}</div>
                      <div>{filteredProjects[selectedImage].year}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {selectedImage + 1} of {filteredProjects.length}
                    </div>
                    <div className="px-3 py-2">
                <a
                    href="https://wa.me/+32485982509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4"
                    >
                    <Button
                        style={{ backgroundColor: "#25D366", color: "#fff" }}
                        className="flex items-center gap-2"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.37-1.67A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.09-1.39l-.36-.21-3.78 1 1-3.67-.24-.38A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.19 2.09 3.19 5.07 4.34.71.24 1.26.38 1.69.49.71.18 1.36.16 1.87.1.57-.07 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
                        </svg>
                        {t('nav.getQuote')}
                    </Button>
                    </a>
              </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;