import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: 95, suffix: "%", label: "Extraction Accuracy" },
  { value: 84, suffix: "%", label: "Validation Accuracy" },
  { value: 128, suffix: "GB", label: "Dataset Processed" },
  { value: 2, suffix: "+ Yrs", label: "Hands-on ML" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient sm:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="Turning messy data into reliable systems" />
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            I'm a 2026 B.Tech Computer Science graduate specializing in Data Science and AI/ML from
            NIIT University, Neemrana. I've spent the last two years building production-grade data
            pipelines and deep learning systems — from a multimodal cancer detection model achieving
            84% validation accuracy to large-scale web scraping pipelines with 95% extraction
            accuracy. I care about turning messy, real-world data into reliable systems that make
            decisions easier.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="glass glass-hover h-full p-7">
                <CountUp value={s.value} suffix={s.suffix} />
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}