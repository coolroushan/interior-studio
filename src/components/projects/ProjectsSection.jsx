import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="
        overflow-hidden
        bg-[#ebe6de]
        py-20
        text-[#171714]
        sm:py-28
        lg:py-32
      "
    >
      <div className="container-interior">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <div
          className="
            mb-12
            flex
            items-end
            justify-between
            sm:mb-16
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
              02
            </span>

            <span className="eyebrow text-[#716e67]">
              Featured Projects
            </span>
          </motion.div>

          <motion.a
            href="/projects"
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
              duration: 0.8,
            }}
            className="
              group
              hidden
              items-center
              gap-3
              sm:flex
            "
          >
            <span className="eyebrow">
              View all projects
            </span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#171714]/20
                transition-all
                duration-300
                group-hover:bg-[#171714]
                group-hover:text-white
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
              />
            </span>
          </motion.a>
        </div>

        {/* =====================================================
            DESKTOP EDITORIAL GRID
            ===================================================== */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-12
            lg:gap-x-5
            lg:gap-y-16
          "
        >
          {/* LARGE PROJECT */}

          <div className="col-span-7">
            <ProjectCard
              project={projects[0]}
              index={0}
            />
          </div>

          {/* MEDIUM PROJECT */}

          <div className="col-span-5 mt-24">
            <ProjectCard
              project={projects[1]}
              index={1}
            />
          </div>

          {/* SMALL PROJECT */}

          <div className="col-span-4 mt-4">
            <ProjectCard
              project={projects[2]}
              index={2}
            />
          </div>

          {/* SMALL PROJECT OFFSET */}

          <div className="col-span-5 col-start-8 mt-10">
            <ProjectCard
              project={projects[3]}
              index={3}
            />
          </div>
        </div>

        {/* =====================================================
            TABLET / MOBILE GRID
            ===================================================== */}

        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:hidden
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            MOBILE VIEW ALL
            ===================================================== */}

        <motion.a
          href="/projects"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-12
            flex
            items-center
            justify-between
            border-t
            border-[#171714]/15
            pt-5
            sm:hidden
          "
        >
          <span className="eyebrow">
            View all projects
          </span>

          <ArrowUpRight
            size={18}
            strokeWidth={1.4}
          />
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectsSection;