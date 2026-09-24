import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const journalStories = [
  {
    id: 1,
    category: "Materials",
    title: "The quiet language of natural materials",
    description:
      "A closer look at stone, timber, light and texture, and how restraint gives a room its character.",
    image: "https://images.unsplash.com/photo-1749137011102-a784db7a274e?auto=format&fit=crop&q=80&w=1600",
    readTime: "6 min read",
    navLabel: "Material and light",
    room: "Living room",
    light: "Soft north daylight",
    finish: "Honed, matte, oiled",
    palette: [
      { name: "Travertine", color: "#D9CFBE" },
      { name: "Smoked oak", color: "#7A5C43" },
      { name: "Lime plaster", color: "#E8E3DA" },
      { name: "Raw linen", color: "#C4B8A2" },
    ],
  },
  {
    id: 2,
    category: "Design",
    title: "The architecture of calm",
    description:
      "How proportion, light and restraint create spaces that feel effortless.",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&q=80&w=1600",
    readTime: "5 min read",
    navLabel: "The quiet home",
    room: "Living room",
    light: "Wide window, even daylight",
    finish: "Brushed, woven, limewashed",
    palette: [
      { name: "Chalk white", color: "#EFEBE3" },
      { name: "Clay", color: "#B9967A" },
      { name: "Bleached ash", color: "#CBBFAE" },
      { name: "Charcoal wool", color: "#4A4640" },
    ],
  },
  {
    id: 3,
    category: "Process",
    title: "Inside the making of a space",
    description:
      "From the first sketch to the final detail, an exploration of our design process.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1600",
    readTime: "7 min read",
    navLabel: "Inside the process",
    room: "Full residence",
    light: "Mapped through the day",
    finish: "Specified per room",
    palette: [
      { name: "Pale birch", color: "#DDD0B8" },
      { name: "Slate", color: "#6B6F70" },
      { name: "Brass", color: "#A88A4E" },
      { name: "Bone", color: "#EAE4D8" },
    ],
  },
  {
    id: 4,
    category: "Living",
    title: "Objects, rituals and everyday life",
    description:
      "The small details that transform a designed room into a place that feels truly lived in.",
    image: "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?auto=format&fit=crop&q=80&w=1600",
    readTime: "4 min read",
    navLabel: "Objects and rituals",
    room: "Reading corner",
    light: "Warm lamplight",
    finish: "Glazed, patinated, hand-turned",
    palette: [
      { name: "Stoneware", color: "#BFB2A0" },
      { name: "Walnut", color: "#5B4433" },
      { name: "Olive", color: "#6D7050" },
      { name: "Cream glaze", color: "#F0EADB" },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1];
const SLIDE_SECONDS = 3;

const imageVariants = {
  enter: (d) => ({ clipPath: d > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)', scale: 1.04 }),
  center: { clipPath: 'inset(0 0 0 0)', scale: 1, transition: { duration: 0.8, ease } },
  exit: { opacity: 0, transition: { duration: 0.5, ease } },
};

const boardVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function PremiumJournalSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const autoplay = !reduceMotion;

  const story = journalStories[index];
  const total = journalStories.length;

  const go = (next) => {
    const n = (next + total) % total;
    if (n === index) return;
    setDirection(n > index ? 1 : -1);
    setIndex(n);
  };

  // Preload the next photo so the wipe never reveals a blank frame
  useEffect(() => {
    const img = new Image();
    img.src = journalStories[(index + 1) % total].image;
  }, [index, total]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  const details = [
    { label: "Room", value: story.room },
    { label: "Light", value: story.light },
    { label: "Finish", value: story.finish },
  ];

  return (
    <section
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="w-full bg-[#ECE9E3] text-[#2A2622] py-16 md:py-24 selection:bg-[#2A2622] selection:text-[#ECE9E3]"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        @keyframes journalFill { from { width: 0%; } to { width: 100%; } }
        .tabs-scroll::-webkit-scrollbar { display: none; }
        .tabs-scroll { scrollbar-width: none; }
      `}} />

      <div className="font-body max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14">
          <div>
            <p className="text-sm text-[#2A2622]/60 mb-4">Journal</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Stories that shape the way we live
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-sm tabular-nums text-[#2A2622]/60" aria-live="polite">
              {index + 1} of {total}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous story"
                className="w-11 h-11 grid place-items-center rounded-full border border-[#2A2622]/25 hover:bg-[#2A2622] hover:text-[#ECE9E3] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next story"
                className="w-11 h-11 grid place-items-center rounded-full border border-[#2A2622]/25 hover:bg-[#2A2622] hover:text-[#ECE9E3] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Stage: image + material board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[560px] overflow-hidden bg-[#D9D4CA]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={story.id}
                  src={story.image}
                  alt={story.title}
                  custom={direction}
                  variants={reduceMotion ? undefined : imageVariants}
                  initial={reduceMotion ? false : "enter"}
                  animate="center"
                  exit={reduceMotion ? undefined : "exit"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Material board */}
          <div className="lg:col-span-5 flex flex-col lg:h-[560px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={story.id}
                variants={reduceMotion ? undefined : boardVariants}
                initial={reduceMotion ? false : "enter"}
                animate="center"
                exit={reduceMotion ? undefined : "exit"}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-3 text-sm text-[#2A2622]/60 mb-5">
                  <span className="px-3 py-1 rounded-full border border-[#2A2622]/20 text-[#2A2622]">
                    {story.category}
                  </span>
                  <span>{story.readTime}</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl leading-[1.1] mb-4">
                  {story.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#2A2622]/70 max-w-md mb-8">
                  {story.description}
                </p>

                {/* Palette: the one distinctive element */}
                <div className="mb-8">
                  <p className="text-sm text-[#2A2622]/60 mb-3">Material palette</p>
                  <ul className="grid grid-cols-4 gap-3">
                    {story.palette.map((m) => (
                      <li key={m.name}>
                        <div
                          className="aspect-square w-full border border-[#2A2622]/10"
                          style={{ backgroundColor: m.color }}
                          role="img"
                          aria-label={`${m.name} swatch`}
                        />
                        <p className="text-xs mt-2 leading-tight text-[#2A2622]/80">{m.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <dl className="border-t border-[#2A2622]/15">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="grid grid-cols-[88px_1fr] gap-4 py-3 border-b border-[#2A2622]/15 text-sm"
                    >
                      <dt className="text-[#2A2622]/55">{d.label}</dt>
                      <dd>{d.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#"
                  className="group mt-8 lg:mt-auto self-start inline-flex items-center gap-3 bg-[#2A2622] text-[#ECE9E3] pl-6 pr-5 py-3.5 text-sm font-medium hover:bg-[#4A4238] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]"
                >
                  Read the story
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* Story selector */}
        <div
          role="tablist"
          aria-label="Journal stories"
          className="tabs-scroll mt-10 md:mt-14 flex lg:grid lg:grid-cols-4 gap-4 lg:gap-8 overflow-x-auto snap-x"
        >
          {journalStories.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={active}
                onClick={() => go(i)}
                className="group relative snap-start shrink-0 w-[72%] sm:w-[45%] lg:w-auto text-left flex items-center gap-4 pt-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]"
              >
                {/* track + progress line */}
                <span className="absolute top-0 left-0 right-0 h-px bg-[#2A2622]/15" />
                {active && (
                  <span
                    key={s.id}
                    className="absolute top-0 left-0 h-[2px] bg-[#2A2622]"
                    style={
                      autoplay
                        ? {
                            width: '0%',
                            animation: `journalFill ${SLIDE_SECONDS}s linear forwards`,
                            animationPlayState: paused ? 'paused' : 'running',
                          }
                        : { width: '100%' }
                    }
                    onAnimationEnd={() => go(index + 1)}
                  />
                )}

                <span className="w-14 h-[72px] shrink-0 overflow-hidden bg-[#D9D4CA]">
                  <img
                    src={s.image.replace('w=1600', 'w=240')}
                    alt=""
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      active ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'
                    }`}
                  />
                </span>
                <span className="min-w-0">
                  <span
                    className={`block font-display text-xl leading-tight transition-colors duration-300 ${
                      active ? 'text-[#2A2622]' : 'text-[#2A2622]/55 group-hover:text-[#2A2622]'
                    }`}
                  >
                    {s.navLabel}
                  </span>
                  <span className="block text-xs text-[#2A2622]/55 mt-1">{s.room}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}