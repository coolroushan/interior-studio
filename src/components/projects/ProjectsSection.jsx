import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';

const materials = [
  { name: 'Oak', hex: '#B08D57' },
  { name: 'Travertine', hex: '#D8CFC0' },
  { name: 'Brass', hex: '#A38244' },
  { name: 'Linen', hex: '#EDE8DD' },
];

const stats = [
  { value: '12', label: 'Years practicing' },
  { value: '84', label: 'Projects delivered' },
  { value: '6', label: 'Countries built in' },
];

const ProjectSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section ref={containerRef} className="relative bg-[#F9F8F6] w-full pt-10 md:pt-14">

      {/* Header & View All Link */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="block text-[10px] tracking-[0.25em] uppercase text-[#7A7A7A] mb-2 font-medium">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A]">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/projects"
          className="group inline-flex items-center text-xs uppercase tracking-widest text-[#1A1A1A] font-medium hover:text-[#7A7A7A] transition-colors"
        >
          View All Projects
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>

      {/* Stacking Scroll Area */}
      <div className="relative h-[450vh] md:h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden items-center">

          {/* LEFT SIDE: STUDIO PANEL */}
          <div className="w-full md:w-1/2 h-[35%] md:h-full bg-[#F3F1EC] border-b md:border-b-0 md:border-r border-[#E5E2DA] z-30 overflow-hidden">
            <div className="relative h-full w-full flex items-center justify-center px-6 md:px-12 lg:px-16">

              {/* faint architectural line motif */}
              <svg
                className="absolute -right-16 -bottom-16 w-72 h-72 opacity-[0.06] pointer-events-none hidden md:block"
                viewBox="0 0 200 200"
                fill="none"
              >
                <rect x="20" y="20" width="160" height="160" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="#1A1A1A" strokeWidth="1" />
                <circle cx="100" cy="100" r="55" stroke="#1A1A1A" strokeWidth="1" />
              </svg>

              <div className="relative w-full max-w-[420px] py-8 md:py-0">

                <span className="block text-[10px] tracking-[0.3em] uppercase text-[#A38244] mb-4 font-semibold">
                  Studio Philosophy
                </span>

                <h3 className="text-2xl md:text-[2.5rem] leading-[1.15] font-serif font-light text-[#1A1A1A] mb-5">
                  Spaces shaped by light and form
                </h3>

                <p className="text-[#5A5A5A] text-sm leading-relaxed font-light max-w-[38ch] mb-8">
                  Every commission begins with how a room holds daylight and how a body moves through it. The work that follows is restraint applied to material, not decoration applied to structure.
                </p>

                <div className="h-px w-full bg-[#E5E2DA] mb-6" />

                {/* Material palette */}
                <div className="mb-7">
                  <span className="block text-[10px] tracking-[0.25em] uppercase text-[#8A8A8A] mb-3 font-medium">
                    Material Palette
                  </span>
                  <div className="flex gap-3">
                    {materials.map((m) => (
                      <div key={m.name} className="flex flex-col items-start gap-2">
                        <div
                          className="w-9 h-9 md:w-11 md:h-11 rounded-sm border border-[#E5E2DA] shadow-sm"
                          style={{ backgroundColor: m.hex }}
                        />
                        <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A]">
                          {m.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-[#E5E2DA] mb-6" />

                {/* Studio stats */}
                <div className="flex items-start justify-between gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="text-2xl md:text-3xl font-serif font-light text-[#1A1A1A]">
                        {s.value}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-1 max-w-[9ch]">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex items-center gap-2 mt-10 text-[#A38244]">
                  <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to explore</span>
                  <span className="text-base leading-none">↓</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: STACKING CARDS DECK */}
          <div className="w-full md:w-1/2 h-[65%] md:h-full relative flex items-center justify-center bg-[#F9F8F6]">
            {featuredProjects.map((project, i) => (
              <StackCard
                key={project.id}
                index={i}
                project={project}
                progress={smoothProgress}
                total={featuredProjects.length}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const StackCard = ({ index, project, progress, total }) => {
  const isFirstCard = index === 0;

  const start = index / total;
  const end = (index + 0.85) / total;

  const x = useTransform(progress, [start, end], [isFirstCard ? "0%" : "110%", "0%"]);
  const scale = useTransform(progress, [end, (index + 1) / total], [1, 0.95]);
  const opacity = useTransform(progress, [start, start + 0.08], [0, 1]);

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity: isFirstCard ? 1 : opacity,
        zIndex: index + 10
      }}
      className="absolute w-[90%] md:w-[82%] max-w-[380px] md:max-w-[420px] h-[380px] md:h-[500px] bg-[#FFFFFF] p-4 md:p-5 rounded-sm shadow-2xl border border-[#E5E2DA]"
    >
      <Link to={`/projects/${project.slug}`} className="block h-full flex flex-col group cursor-pointer">
        {/* Card Image */}
        <div className="relative overflow-hidden w-full h-[58%] bg-[#EAE8E3] rounded-sm">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-3 right-3 bg-[#1A1A1A] text-white text-[9px] font-medium px-2.5 py-1 uppercase tracking-widest">
            0{index + 1}
          </div>
        </div>

        {/* Card Metadata */}
        <div className="py-4 px-2 flex flex-col justify-between flex-grow">
          <div>
            <h4 className="text-[#1A1A1A] font-serif font-light text-xl md:text-2xl mb-1 group-hover:text-[#7A7A7A] transition-colors">
              {project.title}
            </h4>
            <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest mb-2 font-medium">
              {project.location} <span className="mx-1">·</span> {project.category} <span className="mx-1">·</span> {project.year}
            </p>
            <p className="text-[#5A5A5A] text-xs font-light line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="inline-flex items-center text-[11px] uppercase tracking-widest font-medium text-[#1A1A1A] pt-2">
            View Project <ArrowRight className="ml-2 w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSection;