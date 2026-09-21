import { motion } from "framer-motion";

import { services } from "../../data/services";
import ServiceRow from "./ServiceRow";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="
        overflow-hidden
        bg-[#f3f0ea]
        py-20
        text-[#171714]
        sm:py-28
        lg:py-32
      "
    >
      <div className="container-interior">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div
          className="
            mb-14
            flex
            items-start
            justify-between
            sm:mb-20
          "
        >
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
            className="flex items-center gap-3"
          >
            <span className="text-xs text-[#9a8064]">
              03
            </span>

            <span className="eyebrow text-[#716e67]">
              Our Services
            </span>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="
              hidden
              max-w-[280px]
              text-right
              text-sm
              leading-[1.7]
              text-[#716e67]
              md:block
            "
          >
            From the first sketch to the final
            detail, we create considered spaces
            from the inside out.
          </motion.p>
        </div>

        {/* =====================================================
            INTRO HEADING
            ===================================================== */}

        <div className="mb-16 max-w-[900px] sm:mb-20 lg:mb-24">
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
                heading-lg
              "
            >
              Every detail has
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
                heading-lg
                text-[#9a8064]
              "
            >
              a reason.
            </motion.h2>
          </div>
        </div>

        {/* =====================================================
            SERVICE LIST
            ===================================================== */}

        <div>
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;