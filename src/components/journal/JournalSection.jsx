import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { journalPosts } from "../../data/journal";
import JournalCard from "./JournalCard";

const JournalSection = () => {
  return (
    <section
      id="journal"
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
            mb-12
            flex
            items-center
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
              04
            </span>

            <span className="eyebrow text-[#716e67]">
              Journal
            </span>
          </motion.div>

          <motion.a
            href="/journal"
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <span className="eyebrow">
              View all
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
            INTRO
            ===================================================== */}

        <div className="mb-14 max-w-[650px] sm:mb-20">
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
              className="heading-md"
            >
              Thoughts on
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
                heading-md
                text-[#9a8064]
              "
            >
              design & living.
            </motion.h2>
          </div>
        </div>

        {/* =====================================================
            ARTICLES
            ===================================================== */}

        <div>
          {journalPosts.map((post, index) => (
            <JournalCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}

          {/* Bottom border */}

          <div className="h-px bg-[#171714]/15" />
        </div>
      </div>
    </section>
  );
};

export default JournalSection;