import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.querySelector("#projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#171714]
        text-white
      "
    >
      {/* =====================================================
          VIDEO
          ===================================================== */}

      <motion.video
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/interior-hero-poster.jpeg"
        className="hero-video"
      >
        <source
          src="/videos/interior-hero.mp4"
          type="video/mp4"
        />

        Your browser does not support video.
      </motion.video>

      {/* =====================================================
          CINEMATIC OVERLAY
          ===================================================== */}

      <div className="hero-overlay" />

      {/* Additional subtle gradient */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/30
          via-transparent
          to-black/10
        "
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          relative z-10
          flex min-h-[100svh]
          flex-col
          justify-end
        "
      >
        <div className="container-interior pb-10 pt-32 sm:pb-14 lg:pb-16">
          {/* Eyebrow */}

          <motion.div
            initial={{
              y: 25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-white/60" />

            <span className="eyebrow text-white/80">
              Interior Architecture & Design
            </span>
          </motion.div>

          {/* Main Heading */}

          <div className="reveal-mask max-w-[1100px]">
            <motion.h1
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[clamp(4rem,11vw,10.5rem)]
                font-medium
                leading-[0.82]
                tracking-[-0.075em]
              "
            >
              Spaces
            </motion.h1>
          </div>

          <div className="reveal-mask max-w-[1100px]">
            <motion.h1
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[clamp(4rem,11vw,10.5rem)]
                font-medium
                leading-[0.82]
                tracking-[-0.075em]
              "
            >
              with soul.
            </motion.h1>
          </div>

          {/* Bottom information */}

          <div
            className="
              mt-9
              flex
              flex-col
              gap-8
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            {/* Description */}

            <motion.p
              initial={{
                y: 25,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-[390px]
                text-sm
                leading-[1.7]
                text-white/75
                sm:text-base
              "
            >
              Thoughtful interiors shaped by material,
              light and the way people live.
            </motion.p>

            {/* Explore button */}

            <motion.button
              initial={{
                y: 25,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={scrollToProjects}
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                text-left
              "
            >
              <span
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-full
                  border border-white/50
                  transition-all duration-500
                  group-hover:bg-white
                  group-hover:text-[#171714]
                "
              >
                <ArrowDown
                  size={17}
                  strokeWidth={1.4}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-y-1
                  "
                />
              </span>

              <span className="eyebrow text-white">
                Explore projects
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM RIGHT LOCATION / YEAR
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 1,
        }}
        className="
          absolute
          bottom-6
          right-6
          z-10
          hidden
          items-center
          gap-4
          text-white/60
          lg:flex
        "
      >
        <span className="eyebrow">
          Patna · India
        </span>

        <span className="h-px w-8 bg-white/30" />

        <span className="eyebrow">
          2026
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;