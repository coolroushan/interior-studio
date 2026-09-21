import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
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
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#f3f0ea]/95 text-[#171714] backdrop-blur-md"
              : "bg-transparent text-white"
          }
        `}
      >
        <div
          className={`
            container-interior
            flex h-[82px] items-center justify-between
            transition-all duration-500
            ${scrolled ? "h-[70px]" : "h-[82px]"}
          `}
        >
          {/* LOGO */}
          <a
            href="/"
            className="relative z-10 flex items-center gap-3"
            onClick={closeMenu}
          >
            <span className="text-[17px] font-semibold tracking-[-0.04em]">
              ATELIER
            </span>

            <span
              className={`
                hidden text-[9px] uppercase tracking-[0.18em]
                opacity-60 sm:inline
                ${
                  scrolled
                    ? "text-[#716e67]"
                    : "text-white"
                }
              `}
            >
              Interior Studio
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                scrolled={scrolled}
              />
            ))}

            <NavLink
              item={{
                label: "Contact",
                href: "#contact",
              }}
              scrolled={scrolled}
              arrow
            />
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`
              relative z-10
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border
              transition-all duration-300
              md:hidden
              ${
                scrolled || menuOpen
                  ? "border-[#171714]/20"
                  : "border-white/40"
              }
            `}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu closeMenu={closeMenu} />
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================================
   DESKTOP NAV LINK
   ========================================================= */

const NavLink = ({
  item,
  scrolled,
  arrow = false,
}) => {
  return (
    <motion.a
      href={item.href}
      whileHover="hover"
      className="group relative flex items-center gap-1.5 py-2"
    >
      <span className="eyebrow !text-[9px]">
        {item.label}
      </span>

      {arrow && (
        <ArrowUpRight
          size={12}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}

      <motion.span
        variants={{
          hover: {
            scaleX: 1,
          },
        }}
        initial={{ scaleX: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          absolute bottom-0 left-0 h-px w-full
          origin-left
          ${
            scrolled
              ? "bg-[#171714]"
              : "bg-white"
          }
        `}
      />
    </motion.a>
  );
};

/* =========================================================
   MOBILE MENU
   ========================================================= */

const MobileMenu = ({ closeMenu }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
      }}
      animate={{
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
      }}
      exit={{
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed inset-0 z-40
        flex flex-col
        bg-[#f3f0ea]
        text-[#171714]
        md:hidden
      "
    >
      {/* TOP SPACING FOR NAVBAR */}
      <div className="h-[82px]" />

      <div className="container-interior flex flex-1 flex-col justify-between pb-8 pt-10">
        <nav className="flex flex-col">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              initial={{
                y: 35,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.08 + index * 0.07,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                border-b border-[#171714]/10
                py-5
                text-[clamp(2.4rem,12vw,4rem)]
                font-medium
                leading-none
                tracking-[-0.05em]
              "
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            onClick={closeMenu}
            initial={{
              y: 35,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.36,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex items-center justify-between
              border-b border-[#171714]/10
              py-5
              text-[clamp(2.4rem,12vw,4rem)]
              font-medium
              leading-none
              tracking-[-0.05em]
            "
          >
            Contact

            <ArrowUpRight
              size={28}
              strokeWidth={1.3}
            />
          </motion.a>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="eyebrow text-[#9a8064]">
              Interior Architecture
            </p>

            <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-[#716e67]">
              Creating considered spaces through
              material, light and proportion.
            </p>
          </div>

          <span className="eyebrow text-[#716e67]">
            © 2026
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;