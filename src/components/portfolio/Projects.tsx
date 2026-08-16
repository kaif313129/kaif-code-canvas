import { useState } from "react";
import { ChevronDown, FolderGit2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    title: "Computer Vision R&D: Multimodal Cancer Detection",
    period: "Jan 2025 – May 2025",
    tags: ["Python", "PyTorch", "ResNet18", "DenseNet121", "NLP", "DICOM"],
    points: [
      "Engineered a Hierarchical Multimodal Late Fusion model integrating deep learning image classifiers (ResNet18, DenseNet121) and NLP models to improve diagnostic support for rural medical systems.",
      "Developed a Stacking Ensemble using Logistic Regression on cross-entropy loss functions, boosting validation accuracy to 84% and reducing model variance.",
      "Preprocessed and parsed a 128GB secondary PET/CT dataset (TCIA) of 356 patients, linking 3D volumetric slice files and annotation masks to Series UIDs via Pandas.",
      "Managed model training pipelines across 10-epoch iterations (5-hour runtime per model) and designed end-to-end integration pathways for the Ingenious Health Management System (IHMS).",
    ],
  },
  {
    title: "Image Preprocessing & Dimensionality Reduction using PCA",
    period: "Aug 2024 – Dec 2024",
    tags: ["Python", "OpenCV", "PyTorch", "Scikit-Learn", "PCA", "CNNs", "Bicubic Interpolation"],
    points: [
      "Designed a computer vision data preprocessing pipeline combining bicubic interpolation and PCA to extract global spatial features while removing high-frequency noise.",
      "Compressed high-resolution image inputs from ~2MB to ~90KB per file, significantly reducing memory bandwidth and accelerating downstream model training without feature loss.",
      "Built and evaluated a CNN-based Stacking Ensemble architecture integrating multiple weak learners, achieving over 90% object recognition accuracy across test benchmarks.",
    ],
  },
  {
    title: "End-to-End Credit Risk ML Pipeline",
    period: "",
    tags: ["Python", "Scikit-Learn", "Pandas", "EDA", "Model Comparison"],
    points: [
      "Built a complete end-to-end credit risk ML pipeline on a 5,000-row loan dataset: cleaning, EDA, feature engineering, and a six-model comparison with overfitting analysis.",
      "Random Forest was the best-performing model, achieving an ROC-AUC of ~0.93.",
      "Delivered results in a full written report plus a polished, chart-driven executive presentation.",
    ],
  },
  {
    title: "WhatsApp Bot (Meta Cloud API)",
    period: "",
    tags: ["Python", "Flask", "Meta Cloud API", "Webhooks"],
    points: [
      "Built a WhatsApp bot using Meta's Cloud API with a Flask webhook skeleton, architected for extension via an LLM API for conversational responses.",
    ],
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  return (
    <Reveal delay={index * 0.08}>
      <div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setGlow({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
          });
        }}
        className="glass glass-hover relative h-full overflow-hidden p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, color-mix(in oklab, var(--accent-to) 14%, transparent), transparent 65%)`,
          }}
        />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-xl border border-border bg-secondary/40 p-2.5 text-primary">
              <FolderGit2 className="size-5" />
            </span>
            {project.period ? (
              <span className="text-xs text-muted-foreground">{project.period}</span>
            ) : null}
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-snug">{project.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            {open ? "Hide details" : "View details"}
            <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-5">
                  {project.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-accent" />
                      {p}
                    </li>
                  ))}
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Research-grade computer vision, production ETL, and applied machine learning."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}