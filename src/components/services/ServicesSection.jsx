import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import services from '../../data/services';

const EASE = [0.16, 1, 0.3, 1];

const ServicesSection = () => {
  // Set to null so no card is expanded by default
  const [activeIndex, setActiveIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Our services" className="relative w-full bg-[#F9F8F6] text-[#1A1A1A] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#A38244]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#A38244]/5 blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A38244]">
            What We Do
          </span>
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Spaces designed around the way you live.
          </h2>
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-[#5A5A5A] sm:text-base">
            From first concept to final details, we craft thoughtful interiors balancing functionality, materiality, and character.
          </p>
        </div>

        {/* ================= UNIFIED SPLIT REVEAL ================= */}
        <div 
          className="flex flex-col md:flex-row h-[75vh] md:h-[60vh] w-full gap-2 md:gap-3 transition-all duration-700 ease-in-out"
          onMouseLeave={() => setActiveIndex(null)} // Reset to equal sizes when mouse leaves
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isNoneActive = activeIndex === null;
            
            return (
              <div
                key={service.number || index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) overflow-hidden cursor-pointer shadow-lg rounded-xl flex-shrink-0
                  ${isNoneActive ? 'flex-1' : isActive ? 'flex-[4] md:flex-[5]' : 'flex-[0.8] md:flex-1'}
                  ${!isNoneActive && !isActive ? 'brightness-[0.6] hover:brightness-[0.8]' : 'brightness-100'}
                `}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms]"
                  style={{ transform: isActive ? 'scale(1.05)' : 'scale(1.1)' }}
                />

                {/* Closed State Label (Horizontal on mobile, Rotated on desktop) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black/20
                  ${isActive ? 'opacity-0' : 'opacity-100'}
                `}>
                  <p className="whitespace-nowrap text-white/90 text-xs sm:text-sm uppercase tracking-[0.4em] font-medium md:-rotate-90 transition-transform">
                    {service.title}
                  </p>
                </div>

                {/* Expanded Content Detail */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 transition-all duration-700 delay-100
                  ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                `}>
                  <div className="space-y-2 md:space-y-4 max-w-lg">
                    <span className="text-[#A38244] font-bold text-[10px] uppercase tracking-[0.3em] block">
                      {service.number || `0${index + 1}`}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white font-light leading-none">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed line-clamp-2 md:line-clamp-3">
                      {service.description}
                    </p>
                    
                    <Link to="/contact" className="mt-4 md:mt-6 flex items-center gap-3 text-white border-b border-white/30 pb-2 hover:border-[#A38244] hover:text-[#A38244] transition-all group/btn w-fit">
                      <span className="text-white/80 text-[10px] uppercase tracking-widest font-bold">Inquire Now</span>
                      <ArrowUpRight className="bg-white/30 rounded-full w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Decorative Background Number */}
                <div className={`absolute -top-10 -left-6 pointer-events-none transition-opacity duration-700 hidden sm:block
                   ${isActive ? 'opacity-10' : 'opacity-0'}
                `}>
                  <span className="text-[8rem] md:text-[12rem] font-serif italic text-white font-bold leading-none select-none">
                    {service.number ? service.number.replace(/^0+/, '') : index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator Bar */}
        <div className="hidden md:flex mt-8 justify-center gap-4">
          {services.map((_, i) => (
            <div 
              key={i} 
              className={`h-[2px] transition-all duration-500 ${activeIndex === i ? 'w-12 bg-[#A38244]' : 'w-4 bg-[#E5E2DA]'}`}
            />
          ))}
        </div>

        {/* ================= CALL TO ACTION ================= */}
        <div className="mt-16 md:mt-24 border-t border-[#E5E2DA] pt-12 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: EASE }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <h3 className=" font-serif text-2xl md:text-3xl font-light text-[#1A1A1A] mb-1">
                Have a space in mind?
              </h3>
              <p className="text-xs md:text-sm font-light text-[#5A5A5A]">
                Let&apos;s create something considered, personal, and enduring.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-gray px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-all hover:bg-[#A38244]"
            >
              Start a Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;