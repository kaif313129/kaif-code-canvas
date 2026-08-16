import { Code2, Cpu, Library, Database } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    title: "Languages & Tools",
    Icon: Code2,
    items: ["Python", "SQL", "Git", "GitHub"],
  },
  {
    title: "Computer Vision & Deep Learning",
    Icon: Cpu,
    items: [
      "OpenCV",
      "PyTorch",
      "CNNs",
      "ResNet18",
      "DenseNet121",
      "PCA",
      "Stacking Ensembles",
      "Multimodal Late Fusion",
      "Bicubic Interpolation",
      "Image Preprocessing",
    ],
  },
  {
    title: "Libraries & Frameworks",
    Icon: Library,
    items: ["Scikit-Learn", "Pandas", "NumPy", "BeautifulSoup", "ScrapingBee", "Matplotlib"],
  },
  {
    title: "Data Processing & Formats",
    Icon: Database,
    items: [
      "DICOM Medical Imaging",
      "ETL Pipelines",
      "Web Scraping",
      "Data Cleaning & Validation",
      "Blob Storage",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the pipelines"
          description="From raw ingestion to trained models — the stack I reach for every day."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-border bg-secondary/40 p-2.5 text-primary">
                    <g.Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/30 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}