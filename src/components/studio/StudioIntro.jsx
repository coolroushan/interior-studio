import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Verified, high-quality premium interior images
const slides = [
  {
    id: 1,
    main: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    sub: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Contemporary living space with natural light"
  },
  {
    id: 2,
    main: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    sub: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Warm minimalist interior architecture"
  },
  {
    id: 3,
    main: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", 
    sub: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Luxury residential material details"
  }
];

const StudioIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Unhurried auto-play
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5500); 
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const premiumEasing = [0.16, 1, 0.3, 1];

  const textFadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: premiumEasing } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  return (
    <section 
      className="relative w-full bg-[#F9F8F6] text-[#1A1A1A] py-14 md:py-20 lg:py-24 overflow-hidden"
      aria-label="Studio Introduction"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col z-20"
          >
            <motion.span variants={textFadeUp} className="block tracking-[0.25em] text-[11px] font-medium uppercase text-[#666666] mb-4 lg:mb-6">
              The Studio
            </motion.span>

            <motion.h2 variants={textFadeUp} className="text-3xl md:text-4xl lg:text-[3.25rem] leading-[1.1] font-serif font-light text-[#1A1A1A] tracking-tight mb-5">
              We design spaces <br className="hidden lg:block"/>
              with a sense of place.
            </motion.h2>

            <motion.p variants={textFadeUp} className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed max-w-[400px] mb-7">
              Our studio brings together architecture, interiors, materials and craftsmanship to create spaces that are personal, functional and enduring.
            </motion.p>

            <motion.div variants={textFadeUp}>
              <a href="#discover" className="group inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] border-b border-[#1A1A1A] pb-1.5 hover:text-[#666666] hover:border-[#666666] transition-colors duration-300">
                Discover Our Studio
                <ArrowRight className="ml-3 w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Editorial Crossfade */}
          <div 
            className="lg:col-start-6 lg:col-span-7 relative w-full h-[360px] sm:h-[400px] md:h-[460px] lg:h-[520px] mt-8 lg:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Primary Image Container */}
            <div className="absolute top-0 right-0 w-[82%] h-[82%] bg-[#EAE8E3] overflow-hidden">
              <AnimatePresence>
                <motion.img 
                  key={`main-${slides[currentIndex].id}`}
                  src={slides[currentIndex].main}
                  alt={slides[currentIndex].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Secondary Overlapping Image Container */}
            <div className="absolute bottom-10 left-0 z-10 w-[55%] md:w-[48%] h-[50%] bg-[#DCD8D3] overflow-hidden border-[6px] md:border-[8px] border-[#F9F8F6]">
              <AnimatePresence>
                <motion.img 
                  key={`sub-${slides[currentIndex].id}`}
                  src={slides[currentIndex].sub}
                  alt={`Detail of ${slides[currentIndex].alt}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, delay: 0.1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Minimalist Carousel Controls (Arrows Only) */}
            <div className="absolute bottom-0 right-0 flex items-center space-x-2 z-20 bg-[#F9F8F6] pt-3 pl-4">
              <button 
                onClick={handlePrev} 
                className="p-2 text-[#1A1A1A] hover:text-[#8A8A8A] transition-colors duration-300 focus:outline-none"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
              </button>
              <button 
                onClick={handleNext} 
                className="p-2 text-[#1A1A1A] hover:text-[#8A8A8A] transition-colors duration-300 focus:outline-none"
                aria-label="Next image"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Row: Disciplines */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={textFadeUp}
          className="mt-12 lg:mt-16 pt-6 border-t border-[#E5E5E5]"
        >
          <ul className="flex flex-row items-center gap-6 md:gap-12 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#8A8A8A]">
            <li className="hover:text-[#1A1A1A] transition-colors duration-300 cursor-default">Residential</li>
            <li className="hover:text-[#1A1A1A] transition-colors duration-300 cursor-default">Commercial</li>
            <li className="hover:text-[#1A1A1A] transition-colors duration-300 cursor-default">Hospitality</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default StudioIntro;