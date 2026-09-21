import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const StudioIntro = () => {
  return (
    <section
      id="studio"
     className="
  overflow-hidden
  bg-[#f3f0ea]
  pb-20
  pt-14
  text-[#171714]
  sm:pb-28
  sm:pt-18
  lg:pb-32
  lg:pt-20
"
    >
      <div className="container-interior">

        {/* =====================================================
            TOP ROW
            ===================================================== */}

        <div className="mb-10 flex items-center justify-between sm:mb-14 lg:mb-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-3"
          >
            <span className="text-xs text-[#9a8064]">
              01
            </span>

            <span className="eyebrow text-[#716e67]">
              The Studio
            </span>
          </motion.div>

          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="eyebrow hidden text-[#716e67] sm:block"
          >
            Interior Architecture · 2026
          </motion.span>
        </div>

        {/* =====================================================
            MAIN CONTENT
            ===================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* ===================================================
              LEFT — LARGE HEADING
              =================================================== */}

          <div>
            <div className="reveal-mask">
              <motion.h2
                initial={{
                  y: "100%",
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  heading-xl
                  max-w-[850px]
                "
              >
                We create spaces
              </motion.h2>
            </div>

            <div className="reveal-mask">
              <motion.h2
                initial={{
                  y: "100%",
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: 0.08,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  heading-xl
                  max-w-[850px]
                "
              >
                that feel as good
              </motion.h2>
            </div>

            <div className="reveal-mask">
              <motion.h2
                initial={{
                  y: "100%",
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: 0.16,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  heading-xl
                  text-[#9a8064]
                "
              >
                as they look.
              </motion.h2>
            </div>

            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-12 max-w-[530px] sm:mt-16"
            >
              <p className="text-base leading-[1.8] text-[#716e67] sm:text-lg">
                Our approach begins with understanding
                how people move, live and feel within a
                space. We combine architecture, material,
                light and craftsmanship to create interiors
                that feel considered rather than designed.
              </p>
            </motion.div>

            {/* =================================================
                LINK
                ================================================= */}

            <motion.a
              href="#contact"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-[#171714]/25
                  transition-all duration-500
                  group-hover:bg-[#171714]
                  group-hover:text-white
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>

              <span className="eyebrow">
                Discover our studio
              </span>
            </motion.a>
          </div>

          {/* ===================================================
              RIGHT — IMAGE
              =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
  relative
  mt-2
  lg:mt-16
"
          >
            <div
              className="
                media-wrapper
                aspect-[4/5]
                bg-[#ebe6de]
              "
            >
              <motion.img
                initial={{
                  scale: 1.15,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                src="/images/studio-interior.png"
                alt="Minimal contemporary interior"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Image label */}

            <div className="mt-4 flex items-center justify-between">
              <span className="eyebrow text-[#716e67]">
                Material / Light / Form
              </span>

              <span className="eyebrow text-[#716e67]">
                01
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudioIntro;