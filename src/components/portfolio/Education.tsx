import { GraduationCap, Trophy, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const education = [
  {
    school: "NIIT University, Neemrana, Rajasthan",
    period: "2022–2026",
    detail: "Bachelor of Technology in Computer Science (Specialization: Data Science)",
  },
  {
    school: "Indian Public Senior Secondary School (RBSE), Jhunjhunu, Rajasthan",
    period: "2020–2021",
    detail: "Class XII — 99.40%",
  },
];

const leadership = [
  {
    Icon: Users,
    text: "Peer mentor: taught Calculus and Algebra to juniors for two years at NIIT University.",
  },
  { Icon: Trophy, text: "Captained cricket teams to multiple tournament wins at the college level." },
  { Icon: GraduationCap, text: "Held operational leadership roles in college events and committees." },
];

export function Education() {
  return (
    <section id="education" className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1}>
              <div className="glass glass-hover h-full p-8">
                <span className="rounded-xl border border-border bg-secondary/40 p-2.5 text-primary inline-flex">
                  <GraduationCap className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{e.school}</h3>
                <p className="mt-1 text-sm text-primary">{e.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-20 font-display text-2xl font-bold">Leadership & Extracurriculars</h3>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {leadership.map((l, i) => (
            <Reveal key={l.text} delay={i * 0.08}>
              <div className="glass glass-hover flex h-full gap-4 p-7">
                <l.Icon className="size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}