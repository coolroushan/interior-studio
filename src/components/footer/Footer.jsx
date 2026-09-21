
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Studio",
      href: "#studio",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Journal",
      href: "#journal",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer className="bg-[#171714] px-0 pb-6 text-white">
      <div className="container-interior">

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <div className="h-px bg-white/10" />

        {/* =====================================================
            MAIN FOOTER
            ===================================================== */}

        <div
          className="
            grid
            gap-12
            py-12
            sm:py-16
            lg:grid-cols-[1.3fr_1fr_1fr]
            lg:gap-20
            lg:py-20
          "
        >
          {/* ===================================================
              BRAND
              =================================================== */}

          <motion.div
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
              duration: 0.7,
            }}
          >
            <a
              href="#hero"
              className="
                inline-block
                text-2xl
                font-semibold
                tracking-[-0.05em]
              "
            >
              ATELIER
            </a>

            <p
              className="
                mt-4
                max-w-[280px]
                text-sm
                leading-[1.7]
                text-white/45
              "
            >
              Interior architecture and design
              creating considered spaces for
              modern living.
            </p>
          </motion.div>

          {/* ===================================================
              NAVIGATION
              =================================================== */}

          <motion.div
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
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <p className="eyebrow mb-6 text-white/35">
              Explore
            </p>

            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.3}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* ===================================================
              SOCIAL
              =================================================== */}

          <motion.div
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
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <p className="eyebrow mb-6 text-white/35">
              Follow
            </p>

            <div className="flex gap-3">

              {/* ============================
                  INSTAGRAM
                  ============================ */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-white/50
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    h-[17px]
                    w-[17px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* ============================
                  LINKEDIN
                  ============================ */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white/60
                  transition-all
                  duration-300
                  hover:border-white/50
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    h-[17px]
                    w-[17px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {/* LinkedIn rounded square */}

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  {/* i */}

                  <path
                    d="M7.5 10V16.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="7.5"
                    cy="7.5"
                    r="0.9"
                    fill="currentColor"
                  />

                  {/* n */}

                  <path
                    d="M11 16.5V10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />

                  <path
                    d="M11 13C11 11.34 12.1 10 13.7 10C15.3 10 16.5 11.2 16.5 13V16.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>

            {/* EMAIL */}

            <a
              href="mailto:hello@atelierstudio.com"
              className="
                mt-6
                block
                text-sm
                text-white/60
                transition-colors
                hover:text-white
              "
            >
              hello@atelierstudio.com
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM
            ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            py-6
            text-[9px]
            uppercase
            tracking-[0.16em]
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © 2026 Atelier Studio
          </span>

          <span>
            Interior Architecture · India
          </span>

          <a
            href="#hero"
            className="
              transition-colors
              hover:text-white
            "
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

