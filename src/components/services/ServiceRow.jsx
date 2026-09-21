import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceRow = ({ service, index }) => {
  return (
    <motion.a
      href="#contact"
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        service-row
        group
        relative
        block
        border-t
        border-[#171714]/15
        py-7
        sm:py-9
        lg:py-10
      "
    >
      {/* =====================================================
          DESKTOP HOVER IMAGE
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 20,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/2
          z-20
          hidden
          h-48
          w-64
          -translate-y-1/2
          overflow-hidden
          lg:block
        "
      >
        <img
          src={service.image}
          alt=""
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* =====================================================
          ROW CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          grid
          gap-5
          lg:grid-cols-[80px_1fr_300px_60px]
          lg:items-center
        "
      >
        {/* NUMBER */}

        <span
          className="
            text-xs
            font-medium
            tracking-[0.12em]
            text-[#9a8064]
          "
        >
          {service.id}
        </span>

        {/* TITLE */}

        <div>
          <h3
            className="
              text-[clamp(2rem,4vw,4rem)]
              font-medium
              leading-[0.95]
              tracking-[-0.045em]
              transition-transform
              duration-500
              group-hover:translate-x-2
            "
          >
            {service.title}
          </h3>

          {/* MOBILE DESCRIPTION */}

          <p
            className="
              mt-4
              max-w-[480px]
              text-sm
              leading-[1.7]
              text-[#716e67]
              lg:hidden
            "
          >
            {service.description}
          </p>
        </div>

        {/* DESKTOP DESCRIPTION */}

        <div className="hidden lg:block">
          <p
            className="
              max-w-[270px]
              text-sm
              leading-[1.7]
              text-[#716e67]
            "
          >
            {service.description}
          </p>

          <span
            className="
              mt-3
              block
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#9a8064]
            "
          >
            {service.category}
          </span>
        </div>

        {/* ARROW */}

        <span
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#171714]/20
            transition-all
            duration-500
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
      </div>

      {/* BOTTOM BORDER */}

      {index === 3 && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#171714]/15" />
      )}
    </motion.a>
  );
};

export default ServiceRow;