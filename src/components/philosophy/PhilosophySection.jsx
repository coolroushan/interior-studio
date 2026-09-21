import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const PhilosophySection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * Image moves slightly vertically while scrolling.
   */
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"]
  );

  /*
   * Subtle image scaling.
   */
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1, 1.08]
  );

  /*
   * Content movement.
   */
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[75svh]
        min-h-[560px]
        overflow-hidden
        bg-[#171714]
        text-white
        sm:h-[80svh]
        lg:h-[85svh]
      "
    >
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="
          absolute
          -inset-[8%]
          overflow-hidden
        "
      >
        <img
          src="/images/philosophy-interior.png"
          alt="Warm architectural interior"
          className="
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>

      {/* =====================================================
          IMAGE OVERLAY
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/40
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/65
          via-black/20
          to-black/10
        "
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <motion.div
        style={{
          y: contentY,
        }}
        className="
          relative
          z-10
          flex
          h-full
          items-end
        "
      >
        <div
          className="
            container-interior
            flex
            w-full
            flex-col
            justify-end
            pb-10
            sm:pb-14
            lg:pb-16
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1fr_220px]
              lg:items-end
            "
          >
            {/* =================================================
                LEFT CONTENT
                ================================================= */}

            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-white/60" />

                <span className="eyebrow text-white/70">
                  Our Philosophy
                </span>
              </motion.div>

              <div className="reveal-mask max-w-[1000px]">
                <motion.h2
                  initial={{
                    y: "100%",
                  }}
                  whileInView={{
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    text-[clamp(2.8rem,6vw,6.5rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.06em]
                  "
                >
                  Architecture is a dialogue
                  between people and place.
                </motion.h2>
              </div>

              <motion.a
                href="#studio"
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
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.7,
                }}
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                    transition-all
                    duration-500
                    group-hover:bg-white
                    group-hover:text-[#171714]
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
                  Our approach
                </span>
              </motion.a>
            </div>

            {/* =================================================
                RIGHT KEYWORDS
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="
                flex
                flex-row
                gap-5
                lg:flex-col
                lg:gap-2
                lg:text-right
              "
            >
              {[
                "People",
                "Places",
                "Materials",
                "Stories",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    eyebrow
                    text-white/65
                  "
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PhilosophySection;