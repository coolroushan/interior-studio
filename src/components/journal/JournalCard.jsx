import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const JournalCard = ({ post, index }) => {
  return (
    <motion.a
      href={`/journal/${post.id}`}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        grid
        grid-cols-[120px_1fr]
        gap-5
        border-t
        border-[#171714]/15
        py-6
        sm:grid-cols-[180px_1fr]
        sm:gap-7
        sm:py-7
        lg:grid-cols-[220px_1fr]
        lg:gap-10
      "
    >
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <div
        className="
          media-wrapper
          aspect-[1.35/1]
          overflow-hidden
          bg-[#e5dfd6]
        "
      >
        <img
          src={post.image}
          alt={post.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1000ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-105
          "
        />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          flex
          min-w-0
          flex-col
          justify-between
          gap-6
          sm:flex-row
          sm:items-center
        "
      >
        <div>
          {/* DATE */}

          <p
            className="
              mb-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-[#9a8064]
            "
          >
            {post.date}
          </p>

          {/* TITLE */}

          <h3
            className="
              max-w-[620px]
              text-[clamp(1.5rem,3vw,3rem)]
              font-medium
              leading-[0.98]
              tracking-[-0.04em]
              transition-transform
              duration-500
              group-hover:translate-x-2
            "
          >
            {post.title}
          </h3>

          {/* CATEGORY */}

          <p
            className="
              mt-3
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[#716e67]
            "
          >
            {post.category}
          </p>
        </div>

        {/* ARROW */}

        <span
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            self-end
            rounded-full
            border
            border-[#171714]/20
            transition-all
            duration-500
            group-hover:bg-[#171714]
            group-hover:text-white
            sm:self-center
          "
        >
          <ArrowUpRight
            size={15}
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
    </motion.a>
  );
};

export default JournalCard;