import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Contact" title="Let's build something together." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass h-full p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open to Data Science and Machine Learning roles, collaborations, and interesting
                data problems.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:mdkaif.khan22@st.niituniversity.in"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-primary" />
                  mdkaif.khan22@st.niituniversity.in
                </a>
                <a
                  href="tel:+917309396842"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-primary" />
                  +91 7309396842
                </a>
              </div>
              <div className="mt-8 flex gap-3">
                {[
                  { href: "https://www.linkedin.com/in/md-kaif-khan-709776304/", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com/kaif313129", Icon: Github, label: "GitHub" },
                  { href: "mailto:mdkaif.khan22@st.niituniversity.in", Icon: Mail, label: "Email" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-full border border-border p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Thanks for reaching out — I'll get back to you soon.");
                setForm({ name: "", email: "", message: "" });
              }}
              className="glass space-y-5 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105"
              >
                Send Message <Send className="size-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
