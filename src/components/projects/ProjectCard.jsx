import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      {/* IMAGE */}

      <a
        href={`/projects/${project.id}`}
        className="block"
      >
        <div
          className={`
            media-wrapper
            relative
            overflow-hidden
            bg-[#e5dfd6]
            ${
              project.size === "large"
                ? "aspect-[1.55/1]"
                : project.size === "medium"
                  ? "aspect-[1.2/1]"
                  : "aspect-[1.65/1]"
            }
          `}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{
              scale: 1.08,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.045]
            "
          />

          {/* DARK HOVER OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-colors
              duration-500
              group-hover:bg-black/20
            "
          />

          {/* ARROW */}

          <motion.span
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileHover={{
              opacity: 1,
              scale: 1,
            }}
            className="
              absolute
              right-5
              top-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#171714]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.4}
            />
          </motion.span>

          {/* PROJECT NUMBER */}

          <span
            className="
              absolute
              bottom-4
              left-4
              text-[10px]
              font-medium
              tracking-[0.18em]
              text-white
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          >
            {String(project.id).padStart(2, "0")}
          </span>
        </div>
      </a>

      {/* PROJECT INFO */}

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3
            className="
              text-[1.05rem]
              font-medium
              tracking-[-0.025em]
              text-[#171714]
              sm:text-[1.15rem]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1
              text-xs
              uppercase
              tracking-[0.12em]
              text-[#716e67]
            "
          >
            {project.category}
          </p>
        </div>

        <div
          className="
            text-right
            text-[10px]
            uppercase
            tracking-[0.14em]
            text-[#716e67]
          "
        >
          <p>{project.location}</p>
          <p className="mt-1">{project.year}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;