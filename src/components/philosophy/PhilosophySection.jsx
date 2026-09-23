import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const philosophies = [
  {
    id: "01",
    label: "Core Belief",
    title: "Design is not decoration.",
    description:
      "It is the way a space makes you feel. Our work begins with understanding how people live, move, gather, and experience a room before a single material is chosen.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    label: "Materiality",
    title: "We let materials speak.",
    description:
      "Wood, stone, metal, and glass. We believe in the tactile quality of natural textures that give a space its enduring character and warmth.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    label: "Atmosphere",
    title: "Light shapes the experience.",
    description:
      "From the first morning sun to the soft evening shadows. We treat natural and artificial light as foundational architectural elements, not afterthoughts.",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "04",
    label: "Timelessness",
    title: "Designed for living.",
    description:
      "We prioritize proportion, functionality, and true craftsmanship over fleeting trends to create spaces meant to be truly lived in for generations.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function PhilosophySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Increased interval to 4.5 seconds for better readability
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % philosophies.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-stone-50 py-20 md:py-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase mb-4">
            Our Philosophy
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight">
            We believe a space should <br className="hidden md:block" />
            feel as good as it looks.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[650px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`absolute inset-0 flex flex-col ${
                currentIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 md:gap-20 items-center`}
            >
              
              {/* Image Side - Takes up 55% of width on desktop */}
              <div className="w-full md:w-[55%] h-[320px] md:h-full relative rounded-3xl overflow-hidden shadow-xl">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 4.5, ease: "linear" }} // Subtle zoom during the slide's duration
                  src={philosophies[currentIndex].image}
                  alt={philosophies[currentIndex].title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text Side - Takes up 45% of width on desktop */}
              <div className="w-full md:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-stone-400 font-serif text-xl italic">
                    {philosophies[currentIndex].id}
                  </span>
                  <div className="h-px w-12 bg-stone-300"></div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-stone-500">
                    {philosophies[currentIndex].label}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                  {philosophies[currentIndex].title}
                </h3>
                
                <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-md">
                  {philosophies[currentIndex].description}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots Indicator */}
        <div className="flex justify-center items-center gap-3 mt-12 md:mt-20">
          {philosophies.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "w-8 bg-stone-800"
                  : "w-2 bg-stone-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}