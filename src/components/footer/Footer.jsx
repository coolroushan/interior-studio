import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];
const STUDIO = "Atelier";

// Replace with your real details
const EMAIL = "hello@atelierstudio.com";
const PHONE = "+00 000 000 0000";

/* Sample board: materials drawn with CSS only, nothing to load */
const swatches = [
  { name: "Travertine", note: "Honed", dark: false,
    bg: "repeating-linear-gradient(0deg,#D9CFBE 0 6px,#D0C5B1 6px 7px,#DDD3C2 7px 15px)" },
  { name: "Smoked oak", note: "Oiled", dark: true,
    bg: "repeating-linear-gradient(90deg,#7A5C43 0 5px,#6C4E38 5px 6px,#83654B 6px 12px,#735540 12px 13px)" },
  { name: "Lime plaster", note: "Hand troweled", dark: false,
    bg: "radial-gradient(circle at 30% 25%,#F1EDE5,#E1DBCF)" },
  { name: "Raw linen", note: "Woven", dark: false,
    bg: "repeating-linear-gradient(45deg,rgba(255,255,255,.14) 0 1px,transparent 1px 4px),repeating-linear-gradient(-45deg,rgba(0,0,0,.07) 0 1px,transparent 1px 4px),#C7BBA5" },
  { name: "Brushed brass", note: "Aged", dark: false,
    bg: "linear-gradient(100deg,#8F7440,#CDB273 38%,#A88A4E 62%,#8B703D)" },
  { name: "Olive wool", note: "Deep pile", dark: true,
    bg: "radial-gradient(circle at 70% 20%,#7C8058,#5B5E40)" },
  { name: "Slate", note: "Riven", dark: true,
    bg: "linear-gradient(135deg,#565A5C,#7B7F81 55%,#5F6365)" },
  { name: "Terracotta", note: "Unglazed", dark: false,
    bg: "radial-gradient(circle at 25% 30%,#C9A489,#B08A6E)" },
];

const columns = [
  { title: "Studio", links: [["About", "#about"], ["Projects", "#projects"], ["Journal", "#journal"], ["Contact", "#contact"]] },
  { title: "Services", links: [["Residential", "#"], ["Commercial", "#"], ["Renovation", "#"], ["Styling", "#"]] },
];

const social = ["Instagram", "Pinterest", "Houzz"];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

export default function Footer() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    // TODO: connect to your newsletter provider
    setSent(true);
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <footer className="bg-[#2A2622] text-[#ECE9E3] pt-10 md:pt-14 selection:bg-[#ECE9E3] selection:text-[#2A2622]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .f-link { background: linear-gradient(currentColor, currentColor) left bottom / 0% 1px no-repeat;
                  transition: background-size .5s cubic-bezier(.16,1,.3,1), color .3s; padding-bottom: 2px; }
        .f-link:hover, .f-link:focus-visible { background-size: 100% 1px; color: #B9967A; outline: none; }
      `}} />

      <div className="font-body max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Slim sample board */}
        <motion.div
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="flex h-14 sm:h-20 gap-1 sm:gap-1.5 mb-10 md:mb-12"
          onMouseLeave={() => setActive(null)}
          role="group"
          aria-label="Materials we use. Hover or tap a swatch."
        >
          {swatches.map((s, i) => {
            const on = active === i;
            return (
              <motion.button
                key={s.name}
                type="button"
                aria-label={`${s.name}, ${s.note}`}
                aria-pressed={on}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(on ? null : i)}
                variants={{
                  hidden: { clipPath: "inset(100% 0 0 0)" },
                  show: { clipPath: "inset(0% 0 0 0)", transition: { duration: 0.8, ease } },
                }}
                style={{ background: s.bg }}
                className={`relative basis-0 min-w-0 overflow-hidden text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ECE9E3] ${
                  on ? "grow-[4]" : "grow"
                } ${i > 5 ? "hidden sm:block" : ""}`}
              >
                <span
                  className={`absolute left-2.5 sm:left-3 bottom-2 sm:bottom-2.5 flex items-baseline gap-2 whitespace-nowrap transition-all duration-500 ${
                    on ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-2"
                  } ${s.dark ? "text-[#F4F0E8]" : "text-[#2A2622]"}`}
                >
                  <span className="text-xs sm:text-sm font-medium">{s.name}</span>
                  <span className="hidden sm:inline text-xs opacity-70">{s.note}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Main columns */}
        <motion.div
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-9 pb-10 md:pb-12"
        >
          {/* Brand + newsletter */}
          <motion.div variants={item} className="col-span-2 md:col-span-4 lg:col-span-5 lg:pr-10">
            <p className="font-display text-3xl mb-2">{STUDIO}</p>
            <p className="text-sm leading-relaxed text-[#ECE9E3]/60 max-w-xs mb-5">
              Calm, considered interiors made with natural materials and honest craft.
            </p>

            <form onSubmit={subscribe} className="max-w-sm">
              <label htmlFor="f-email" className="sr-only">Email address for studio notes</label>
              {sent ? (
                <p role="status" className="py-2 text-sm text-[#B9967A]">Thank you. See you in your inbox.</p>
              ) : (
                <div className="group relative flex items-center border-b border-[#ECE9E3]/25">
                  <input
                    id="f-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Notes from the studio: your email"
                    className="flex-1 min-w-0 bg-transparent py-2 text-sm placeholder:text-[#ECE9E3]/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="w-8 h-8 shrink-0 grid place-items-center rounded-full hover:bg-[#ECE9E3] hover:text-[#2A2622] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ECE9E3]"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="pointer-events-none absolute left-0 -bottom-px h-[2px] w-full origin-left scale-x-0 bg-[#B9967A] transition-transform duration-500 group-focus-within:scale-x-100" />
                </div>
              )}
            </form>
          </motion.div>

          {/* Link columns */}
          {columns.map((c) => (
            <motion.nav variants={item} key={c.title} aria-label={c.title} className="md:col-span-1 lg:col-span-2">
              <h3 className="text-xs text-[#ECE9E3]/45 mb-3">{c.title}</h3>
              <ul className="space-y-2 text-sm">
                {c.links.map(([label, href]) => (
                  <li key={label}><a href={href} className="f-link">{label}</a></li>
                ))}
              </ul>
            </motion.nav>
          ))}

          {/* Visit */}
          <motion.div variants={item} className="col-span-2 md:col-span-2 lg:col-span-3">
            <h3 className="text-xs text-[#ECE9E3]/45 mb-3">Visit the studio</h3>
            <address className="not-italic text-sm leading-relaxed text-[#ECE9E3]/80 mb-3">
              12 Gallery Lane, Your City<br />
              <span className="text-[#ECE9E3]/55">Mon to Sat, 10:00 to 18:00</span>
            </address>
            <div className="flex flex-wrap sm:flex-col gap-x-6 gap-y-1.5 text-sm items-start">
              <a href={`mailto:${EMAIL}`} className="f-link">{EMAIL}</a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="f-link">{PHONE}</a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#ECE9E3]/15 py-4 flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 text-xs sm:text-sm text-[#ECE9E3]/55">
          <p>&copy; {new Date().getFullYear()} {STUDIO} Studio. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {social.map((s) => (
              <a key={s} href="#" className="f-link inline-flex items-center gap-1">
                {s}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
            <a href="#" className="f-link">Privacy</a>
            <a href="#" className="f-link">Terms</a>
            <button
              onClick={toTop}
              aria-label="Back to top"
              className="group ml-auto md:ml-1 w-9 h-9 grid place-items-center rounded-full border border-[#ECE9E3]/25 text-[#ECE9E3] hover:bg-[#ECE9E3] hover:text-[#2A2622] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ECE9E3]"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}