import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];
const INK = "#2A2622";
const CLAY = "#B9967A";

/* ---------- Data ---------- */

// Room rectangles on the floor plan (plan units)
const ROOMS = [
  { id: "living",  label: "Living room", x: 20,  y: 20,  w: 280, h: 210 },
  { id: "kitchen", label: "Kitchen",     x: 300, y: 20,  w: 170, h: 210 },
  { id: "study",   label: "Study",       x: 470, y: 20,  w: 150, h: 210 },
  { id: "bedroom", label: "Bedroom",     x: 20,  y: 230, w: 280, h: 180 },
  { id: "bath",    label: "Bathroom",    x: 300, y: 230, w: 120, h: 180 },
  { id: "dining",  label: "Dining",      x: 420, y: 230, w: 200, h: 180 },
];

// The chosen feeling tints the selected rooms on the plan
const STYLES = [
  { label: "Warm and earthy",  accent: "#B9967A", swatches: ["#B9967A", "#7A5C43", "#E8E3DA"] },
  { label: "Calm and minimal", accent: "#9AA595", swatches: ["#E8E3DA", "#CBBFAE", "#9AA595"] },
  { label: "Rich and layered", accent: "#6D7050", swatches: ["#5B4433", "#6D7050", "#A88A4E"] },
];

// Replace with your real studio details
const EMAIL = "hello@atelierstudio.com";
const PHONE = "+00 000 000 0000";

/* ---------- Line-drawing helpers ---------- */

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (d = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.3, ease, delay: d }, opacity: { duration: 0.01, delay: d } },
  }),
};

const Line = ({ as = "path", d = 0, w = 1.3, o = 0.55, ...p }) => {
  const C = motion[as];
  return <C variants={draw} custom={d} fill="none" stroke={INK} strokeOpacity={o} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" {...p} />;
};

/* ---------- Furniture (drawn as architectural symbols) ---------- */

function Furniture() {
  const b = 0.9; // base delay: furniture draws after the walls
  return (
    <g style={{ pointerEvents: "none" }}>
      {/* Living */}
      <Line as="rect" d={b} x="50" y="70" width="190" height="110" rx="2" o={0.25} />
      <Line as="rect" d={b + 0.1} x="70" y="140" width="120" height="40" rx="8" />
      <Line d={b + 0.15} d2="" />
      <Line as="rect" d={b + 0.2} x="95" y="95" width="70" height="30" rx="4" />
      <Line as="rect" d={b + 0.25} x="205" y="100" width="34" height="34" rx="9" />
      <Line as="circle" d={b + 0.3} cx="270" cy="50" r="14" />
      <Line as="circle" d={b + 0.35} cx="270" cy="50" r="6" />
      {/* Kitchen */}
      <Line as="rect" d={b + 0.1} x="310" y="30" width="150" height="24" />
      <Line as="rect" d={b + 0.2} x="330" y="34" width="34" height="16" rx="3" />
      <Line as="circle" d={b + 0.25} cx="420" cy="42" r="6" />
      <Line as="circle" d={b + 0.3} cx="442" cy="42" r="6" />
      <Line as="rect" d={b + 0.3} x="335" y="120" width="100" height="44" rx="3" />
      <Line as="circle" d={b + 0.4} cx="355" cy="182" r="7" />
      <Line as="circle" d={b + 0.42} cx="385" cy="182" r="7" />
      <Line as="circle" d={b + 0.44} cx="415" cy="182" r="7" />
      {/* Study */}
      <Line as="rect" d={b + 0.2} x="490" y="40" width="110" height="34" rx="2" />
      <Line as="circle" d={b + 0.3} cx="545" cy="96" r="13" />
      <Line as="rect" d={b + 0.35} x="600" y="110" width="14" height="90" />
      {/* Bedroom */}
      <Line as="rect" d={b + 0.3} x="60" y="258" width="130" height="110" rx="4" />
      <Line as="rect" d={b + 0.35} x="70" y="266" width="48" height="22" rx="7" />
      <Line as="rect" d={b + 0.4} x="132" y="266" width="48" height="22" rx="7" />
      <Line d={b + 0.42} d2="" />
      <Line as="rect" d={b + 0.45} x="36" y="262" width="18" height="18" />
      <Line as="rect" d={b + 0.47} x="196" y="262" width="18" height="18" />
      <Line as="rect" d={b + 0.5} x="250" y="245" width="40" height="130" />
      {/* Bathroom */}
      <Line as="rect" d={b + 0.4} x="310" y="242" width="44" height="110" rx="18" />
      <Line as="circle" d={b + 0.5} cx="388" cy="305" r="13" />
      <Line as="ellipse" d={b + 0.55} cx="392" cy="372" rx="9" ry="12" />
      <Line as="rect" d={b + 0.58} x="385" y="344" width="14" height="10" rx="2" />
      {/* Dining */}
      <Line as="rect" d={b + 0.5} x="470" y="285" width="100" height="62" rx="31" />
      <Line as="circle" d={b + 0.6} cx="495" cy="268" r="8" />
      <Line as="circle" d={b + 0.62} cx="545" cy="268" r="8" />
      <Line as="circle" d={b + 0.64} cx="495" cy="364" r="8" />
      <Line as="circle" d={b + 0.66} cx="545" cy="364" r="8" />
    </g>
  );
}

/* ---------- Interactive floor plan ---------- */

function FloorPlan({ selected, toggle, accent, reduce }) {
  const onKey = (id) => (e) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(id); }
  };

  return (
    <motion.svg
      viewBox="0 -16 640 436"
      className="w-full h-auto"
      role="group"
      aria-label="Floor plan. Select the rooms you would like designed."
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Clickable rooms (beneath the drawing) */}
      {ROOMS.map((r) => {
        const on = selected.includes(r.id);
        return (
          <g
            key={r.id}
            className="plan-room"
            role="checkbox"
            aria-checked={on}
            aria-label={r.label}
            tabIndex={0}
            onClick={() => toggle(r.id)}
            onKeyDown={onKey(r.id)}
          >
            <rect
              className={`plan-hit ${on ? "on" : ""}`}
              x={r.x} y={r.y} width={r.w} height={r.h}
              style={on ? { fill: accent, fillOpacity: 0.3 } : undefined}
            />
          </g>
        );
      })}

      {/* Walls */}
      <Line as="rect" x="20" y="20" width="600" height="390" w={5} o={0.9} style={{ pointerEvents: "none" }} />
      <Line d={0.3} w={2} o={0.8} style={{ pointerEvents: "none" }}
        d2=""
        pathD="" />
      <Line d={0.3} w={2} o={0.8} style={{ pointerEvents: "none" }}
        {...{ d: 0.3 }}
      />
      <InnerWalls />

      {/* Door openings + swings */}
      <g style={{ pointerEvents: "none" }}>
        <rect x="201" y="227" width="38" height="6" fill="#fff" />
        <rect x="297" y="100" width="6" height="50" fill="#fff" />
        <rect x="467" y="100" width="6" height="50" fill="#fff" />
        <rect x="373" y="227" width="36" height="6" fill="#fff" />
        <rect x="431" y="227" width="38" height="6" fill="#fff" />
        <rect x="561" y="406" width="36" height="8" fill="#fff" />
        <Line d={1.0} w={1} o={0.5} d2="" />
      </g>
      <Doors />

      {/* Dimension line */}
      <Line d={0.2} w={1} o={0.4} pathD="" style={{ pointerEvents: "none" }} />
      <g style={{ pointerEvents: "none" }} opacity="0.5">
        <path d="M20 4 H620 M20 0 V8 M620 0 V8" stroke={INK} strokeWidth="1" fill="none" />
        <text x="320" y="-5" textAnchor="middle" fontSize="11" fill={INK} className="font-body">12.0 m</text>
      </g>

      <Furniture />

      {/* Labels + selection badges (above the drawing) */}
      <g style={{ pointerEvents: "none" }}>
        {ROOMS.map((r) => {
          const on = selected.includes(r.id);
          return (
            <g key={r.id}>
              <text
                x={r.x + 14} y={r.y + r.h - 14}
                fontSize="16"
                className="font-body"
                fill={INK}
                fillOpacity={on ? 1 : 0.6}
                fontWeight={on ? 600 : 500}
                style={{ transition: "fill-opacity .4s" }}
              >
                {r.label}
              </text>
              <AnimatePresence>
                {on && (
                  <g transform={`translate(${r.x + r.w - 24} ${r.y + 24})`}>
                    <motion.g
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 20 }}
                      style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    >
                      <circle r="11" fill={INK} />
                      <path d="M-4.5 0 L-1.2 3.6 L4.8 -3.8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.g>
                  </g>
                )}
              </AnimatePresence>
            </g>
          );
        })}
      </g>
    </motion.svg>
  );
}

function InnerWalls() {
  return (
    <Line
      d={0.35}
      w={2}
      o={0.8}
      style={{ pointerEvents: "none" }}
      // vertical + horizontal partition walls
      pathData="M300 20 V230 M470 20 V230 M20 230 H620 M300 230 V410 M420 230 V410"
    />
  );
}

function Doors() {
  return (
    <g style={{ pointerEvents: "none" }}>
      {/* living to bedroom */}
      <Line d={1.0} w={1} o={0.5} pathData="M201 230 V192 M201 192 A38 38 0 0 1 239 230" />
      {/* bathroom */}
      <Line d={1.05} w={1} o={0.5} pathData="M409 230 V268 M409 268 A38 38 0 0 1 371 230" />
      {/* entrance */}
      <Line d={1.1} w={1} o={0.5} pathData="M561 410 V372 M561 372 A38 38 0 0 1 599 410" />
    </g>
  );
}

/* ---------- Small pieces ---------- */

const inputClass = "w-full bg-transparent py-2 text-[15px] text-[#2A2622] placeholder:text-[#2A2622]/35 focus:outline-none";

function Field({ label, id, children }) {
  return (
    <div className="group relative">
      <label htmlFor={id} className="block text-[13px] text-[#2A2622]/55">{label}</label>
      <div className="relative border-b border-[#2A2622]/20">
        {children}
        <span className="pointer-events-none absolute left-0 -bottom-px h-[2px] w-full origin-left scale-x-0 bg-[#2A2622] transition-transform duration-500 group-focus-within:scale-x-100" />
      </div>
    </div>
  );
}

function Swap({ k, children }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={k}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25 }}
        className="block"
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

/* ---------- Section ---------- */

export default function ContactSection() {
  const reduce = useReducedMotion();
  const [rooms, setRooms] = useState([]);
  const [style, setStyle] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const accent = (STYLES.find((s) => s.label === style) || {}).accent || CLAY;
  const toggleRoom = (id) => setRooms((r) => (r.includes(id) ? r.filter((x) => x !== id) : [...r, id]));
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const roomNames = ROOMS.filter((r) => rooms.includes(r.id)).map((r) => r.label);
  const summary =
    rooms.length === 0 ? "Tap the plan to choose"
    : rooms.length === ROOMS.length ? "Whole home"
    : roomNames.join(", ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const payload = { ...form, rooms: roomNames, style };
      // TODO: send `payload` to your backend, EmailJS, Formspree, etc.
      await new Promise((r) => setTimeout(r, 700));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const line = (text, delay = 0) => (
    <div className="overflow-hidden pb-1">
      <motion.h2
        initial={reduce ? false : { y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease, delay }}
        className="font-display text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.02] tracking-[-0.02em]"
      >
        {text}
      </motion.h2>
    </div>
  );

  return (
    <section id="contact" className="bg-white text-[#2A2622] py-16 md:py-24 selection:bg-[#2A2622] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Manrope', system-ui, sans-serif; }
        .plan-room { cursor: pointer; outline: none; }
        .plan-hit { fill: transparent; transition: fill .5s, fill-opacity .5s; }
        .plan-room:hover .plan-hit:not(.on) { fill: #F5F1EA; }
        .plan-room:focus-visible .plan-hit { stroke: #2A2622; stroke-width: 3; }
      `}} />

      <div className="font-body max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left: the plan */}
          <div>
            <p className="text-sm text-[#2A2622]/60 mb-3">Tap the rooms you would like us to design</p>
            <FloorPlan selected={rooms} toggle={toggleRoom} accent={accent} reduce={reduce} />

            {/* Room chips for small screens, where plan labels are tiny */}
            <div className="lg:hidden flex flex-wrap gap-2 mt-4" role="group" aria-label="Rooms">
              {ROOMS.map((r) => {
                const on = rooms.includes(r.id);
                return (
                  <button
                    key={r.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleRoom(r.id)}
                    className={`px-4 py-2 text-sm rounded-full border transition-colors ${on ? "bg-[#2A2622] text-white border-[#2A2622]" : "border-[#2A2622]/20"}`}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>

            {/* Drawing title block: live summary of the brief */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_auto] border border-[#2A2622]/70 text-sm">
              <div className="p-3.5 sm:border-r border-b sm:border-b-0 border-[#2A2622]/30 min-w-0">
                <p className="text-xs text-[#2A2622]/50 mb-1">Rooms</p>
                <Swap k={summary}>{summary}</Swap>
              </div>
              <div className="p-3.5 sm:border-r border-b sm:border-b-0 border-[#2A2622]/30">
                <p className="text-xs text-[#2A2622]/50 mb-1">Feeling</p>
                <Swap k={style || "none"}>{style || "Not chosen yet"}</Swap>
              </div>
              <div className="p-3.5 flex items-center gap-4">
                <button type="button" onClick={() => setRooms(ROOMS.map((r) => r.id))} className="underline underline-offset-4 hover:text-[#7A5C43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]">
                  Select all
                </button>
                <button type="button" onClick={() => setRooms([])} className="underline underline-offset-4 text-[#2A2622]/60 hover:text-[#2A2622] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]">
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Right: heading + form */}
          <div>
            <div className="mb-6">
              {line("Let's plan")}
              {line("your home.", 0.08)}
            </div>

            {status === "sent" ? (
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} role="status" className="py-4">
                <motion.span
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
                  className="w-12 h-12 rounded-full bg-[#2A2622] text-white grid place-items-center mb-5"
                >
                  <Check className="w-5 h-5" />
                </motion.span>
                <h3 className="font-display text-3xl mb-2">Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.</h3>
                <p className="text-[15px] leading-relaxed text-[#2A2622]/65 max-w-sm mb-2">
                  We have your brief{rooms.length ? ` for ${summary.toLowerCase()}` : ""}. Expect a reply within two working days.
                </p>
                <button
                  onClick={() => { setForm({ name: "", email: "", message: "" }); setRooms([]); setStyle(""); setStatus("idle"); }}
                  className="mt-4 text-sm underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]"
                >
                  Start another brief
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={container}
                initial={reduce ? "show" : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6"
              >
                <motion.div variants={item} role="group" aria-labelledby="c-style">
                  <p id="c-style" className="text-[13px] text-[#2A2622]/55 mb-2.5">The feeling you are after</p>
                  <div className="flex flex-wrap gap-2">
                    {STYLES.map((s) => {
                      const on = style === s.label;
                      return (
                        <button
                          key={s.label}
                          type="button"
                          aria-pressed={on}
                          onClick={() => setStyle(on ? "" : s.label)}
                          className={`flex items-center gap-2.5 pl-3 pr-4 py-2 text-sm rounded-full border transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622] ${
                            on ? "bg-[#2A2622] text-white border-[#2A2622]" : "border-[#2A2622]/20 hover:border-[#2A2622]"
                          }`}
                        >
                          <span className="flex -space-x-1.5" aria-hidden="true">
                            {s.swatches.map((c) => (
                              <span key={c} className="w-4 h-4 rounded-full ring-2 ring-white" style={{ backgroundColor: c }} />
                            ))}
                          </span>
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>

                <motion.div variants={item} className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  <Field label="Name" id="c-name">
                    <input id="c-name" required autoComplete="name" value={form.name} onChange={set("name")} placeholder="Your full name" className={inputClass} />
                  </Field>
                  <Field label="Email" id="c-email">
                    <input id="c-email" type="email" required autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputClass} />
                  </Field>
                </motion.div>

                <motion.div variants={item}>
                  <Field label="Anything else we should know?" id="c-message">
                    <textarea id="c-message" rows={2} value={form.message} onChange={set("message")} placeholder="Size, timeline, what is not working today" className={`${inputClass} resize-none`} />
                  </Field>
                </motion.div>

                {status === "error" && (
                  <p role="alert" className="text-sm text-[#8A3B2E]">Something went wrong. Please try again or email us directly.</p>
                )}

                <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#2A2622] text-white pl-7 pr-6 py-4 text-sm font-medium disabled:opacity-60 disabled:cursor-wait focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2622]"
                  >
                    <span className="absolute inset-0 translate-y-full bg-[#B9967A] transition-transform duration-500 group-hover:translate-y-0" />
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-[#2A2622]">
                      {status === "sending" ? "Sending..." : "Send my brief"}
                    </span>
                    <ArrowUpRight className="relative z-10 w-4 h-4 transition-all duration-500 group-hover:text-[#2A2622] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-sm text-[#2A2622]/55">Reply within two working days.</p>
                </motion.div>

                <motion.p variants={item} className="pt-5 border-t border-[#2A2622]/15 text-sm text-[#2A2622]/65 flex flex-wrap gap-x-6 gap-y-1">
                  <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 decoration-[#2A2622]/25 hover:decoration-[#2A2622] transition-colors">{EMAIL}</a>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="underline underline-offset-4 decoration-[#2A2622]/25 hover:decoration-[#2A2622] transition-colors">{PHONE}</a>
                </motion.p>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}