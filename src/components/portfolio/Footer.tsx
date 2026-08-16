import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-x flex flex-col items-center gap-6 text-center">
        <div className="flex gap-3">
          {[
            { href: "https://github.com/", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/", Icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:mdkaif.khan22@st.niituniversity.in", Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">Designed &amp; built by Md Kaif Khan</p>
        <a
          href="#hero"
          aria-label="Back to top"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowUp className="size-4" /> Back to top
        </a>
      </div>
    </footer>
  );
}