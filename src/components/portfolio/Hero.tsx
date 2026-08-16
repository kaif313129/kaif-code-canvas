import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Computer Vision Enthusiast",
  "AI/ML Graduate",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index];
    const done = !deleting && text === full;
    const cleared = deleting && text === "";
    let delay = deleting ? 45 : 85;
    if (done) delay = 1600;
    if (cleared) delay = 250;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-primary align-middle" />
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const [spot, setSpot] = useState({ x: 50, y: 40 });

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setSpot({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      className="noise relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-[background] duration-200"
        style={{
          background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, color-mix(in oklab, var(--accent-from) 18%, transparent), transparent 60%)`,
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-10 size-[28rem] rounded-full bg-gradient-accent opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-[24rem] rounded-full bg-gradient-accent opacity-15 blur-[140px]" />

      <div className="container-x relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl"
        >
          {[
            <div
              key="badge"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
            >
              <Sparkles className="size-3.5 text-primary" /> Available for Data Science & ML roles
            </div>,
            <h1 key="h1" className="mt-8 text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
              Md Kaif <span className="text-gradient">Khan</span>
            </h1>,
            <p key="type" className="mt-6 font-display text-2xl font-medium sm:text-3xl">
              <Typewriter />
            </p>,
            <p key="sub" className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              B.Tech CSE graduate (Data Science & AI/ML specialization) from NIIT University,
              building end-to-end ML pipelines, computer vision systems, and data engineering
              solutions.
            </p>,
            <div key="cta" className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-accent px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-7 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                Get in Touch
              </a>
            </div>,
          ].map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          Scroll <ArrowDown className="size-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}