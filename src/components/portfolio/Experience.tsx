import { Briefcase } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const roles = [
  {
    role: "Data Science Intern",
    company: "Factacy.ai",
    period: "Jan 2026 – July 2026",
    points: [
      "Built an end-to-end web scraping pipeline for StartupInvestors.AI to extract structured data from company websites at scale, achieving 95% data extraction accuracy.",
      "Extracted website metadata, About Us content, Privacy Policy pages, company logos, and social media handles using ScrapingBee and BeautifulSoup.",
      "Performed data cleaning, validation, standardization, and deduplication, converting extracted logo and media assets into Blob URLs for efficient storage and downstream processing.",
      "Designed and automated the complete ETL workflow from raw URL ingestion to clean, structured datasets using Python and Pandas, reducing manual effort and improving data reliability.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Where I've shipped" />
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-accent opacity-40 sm:left-2" />
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-8 top-8 grid size-7 place-items-center rounded-full border border-border bg-background text-primary sm:-left-[2.6rem]">
                  <Briefcase className="size-3.5" />
                </span>
                <div className="glass glass-hover p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold">
                      {r.role} —{" "}
                      <span className="text-gradient">{r.company}</span>
                    </h3>
                    <span className="text-sm text-muted-foreground">{r.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}