import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#171714]
        py-24
        text-white
        sm:py-32
        lg:py-40
      "
    >
      {/* Subtle decorative circle */}

      <motion.div
        initial={{
          scale: 0.7,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-white/[0.06]
          sm:h-[650px]
          sm:w-[650px]
        "
      />

      <div className="container-interior relative z-10">

        {/* =====================================================
            SECTION LABEL
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
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
          className="mb-14 flex items-center gap-3 sm:mb-20"
        >
          <span className="text-xs text-[#b59a78]">
            05
          </span>

          <span className="eyebrow text-white/50">
            Contact
          </span>
        </motion.div>

        {/* =====================================================
            MAIN HEADING
            ===================================================== */}

        <div className="max-w-[1100px]">
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
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[clamp(3.2rem,8vw,9rem)]
                font-medium
                leading-[0.85]
                tracking-[-0.07em]
              "
            >
              Let's create
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
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[clamp(3.2rem,8vw,9rem)]
                font-medium
                leading-[0.85]
                tracking-[-0.07em]
                text-[#b59a78]
              "
            >
              something meaningful.
            </motion.h2>
          </div>
        </div>

        {/* =====================================================
            DESCRIPTION + CTA
            ===================================================== */}

        <div
          className="
            mt-12
            grid
            gap-10
            sm:mt-16
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          <motion.p
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
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              max-w-[430px]
              text-sm
              leading-[1.8]
              text-white/55
              sm:text-base
            "
          >
            Have a project in mind? Tell us about your
            space, your ideas and what you want it to
            become. We'd love to hear from you.
          </motion.p>

          <motion.a
            href="mailto:hello@atelierstudio.com"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.45,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group
              flex
              w-fit
              items-center
              gap-5
            "
          >
            <span
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                transition-all
                duration-500
                group-hover:bg-white
                group-hover:text-[#171714]
                sm:h-20
                sm:w-20
              "
            >
              <ArrowUpRight
                size={22}
                strokeWidth={1.2}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </span>

            <span className="eyebrow text-white">
              Get in touch
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;