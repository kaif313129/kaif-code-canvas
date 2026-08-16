# Kaif Khan Digital

Build a premium, dark-themed personal portfolio website for a Data Science / Machine Learning engineer named Md Kaif Khan. Style reference: sleek, modern, developer-portfolio aesthetic similar to harshwardhansaini.netlify.app — minimal, confident, generous whitespace, smooth scroll-triggered animations, subtle gradient accents, and a strong sense of visual hierarchy. This should feel premium and "sexy" in a restrained way: not flashy or cluttered, but polished, cinematic, and memorable.

GLOBAL DESIGN LANGUAGE
- Dark mode base (near-black background, e.g. #0a0a0f), with a single accent gradient (electric blue → violet, or teal → indigo) used sparingly for highlights, buttons, glowing borders, and section dividers.
- Typography: a bold, modern sans-serif for headings (e.g. Space Grotesk, Clash Display, or Inter Tight) paired with a clean readable sans for body text (Inter or Manrope). Big, confident hero typography.
- Generous negative space, max-width content container (~1200px), consistent section padding.
- Subtle grain/noise texture or soft gradient mesh in the hero background for depth.
- Glassmorphism cards (frosted glass, subtle border glow) for skills, projects, and experience.
- Micro-interactions: hover states with scale/glow, animated underlines on nav links, cursor-aware gradient glow on cards.
- Scroll-triggered fade/slide-up animations (use Framer Motion) for every section as it enters the viewport.
- Fully responsive, mobile-first, with a clean hamburger nav on mobile.
- Smooth scroll navigation with an active-section indicator in the navbar.

TECH STACK
- React + Tailwind CSS + Framer Motion for animations.
- Use lucide-react for icons.
- Component-based structure: Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer.

SITE CONTENT (use exactly this information — do not invent achievements)

1. NAVBAR
Logo/name: "Kaif Khan" — links: About, Skills, Experience, Projects, Education, Contact. Include a prominent "Resume" button (opens CV in new tab) and social icons for GitHub, LinkedIn, and Email.

2. HERO SECTION
Headline: "Md Kaif Khan"
Subheadline (animated typewriter effect cycling through): "Data Scientist" / "Machine Learning Engineer" / "Computer Vision Enthusiast" / "AI/ML Graduate"
Supporting line: "B.Tech CSE graduate (Data Science & AI/ML specialization) from NIIT University, building end-to-end ML pipelines, computer vision systems, and data engineering solutions."
Two CTA buttons: "View Projects" (scrolls to projects) and "Get in Touch" (scrolls to contact).
Include a subtle animated background — floating gradient orbs or a particle/network animation suggesting AI/neural connections.

3. ABOUT SECTION
Short bio: "I'm a 2026 B.Tech Computer Science graduate specializing in Data Science and AI/ML from NIIT University, Neemrana. I've spent the last two years building production-grade data pipelines and deep learning systems — from a multimodal cancer detection model achieving 84% validation accuracy to large-scale web scraping pipelines with 95% extraction accuracy. I care about turning messy, real-world data into reliable systems that make decisions easier."
Include a stat row (animated count-up numbers): "95% Extraction Accuracy" · "84% Validation Accuracy" · "128GB Dataset Processed" · "2+ Years Hands-on ML"

4. SKILLS SECTION
Group into categories, displayed as glassmorphic cards or animated pill/badge grids:
- Languages & Tools: Python, SQL, Git, GitHub
- Computer Vision & Deep Learning: OpenCV, PyTorch, CNNs, ResNet18, DenseNet121, PCA, Stacking Ensembles, Multimodal Late Fusion, Bicubic Interpolation, Image Preprocessing
- Libraries & Frameworks: Scikit-Learn, Pandas, NumPy, BeautifulSoup, ScrapingBee, Matplotlib
- Data Processing & Formats: DICOM Medical Imaging, ETL Pipelines, Web Scraping, Data Cleaning & Validation, Blob Storage

5. EXPERIENCE SECTION (vertical animated timeline)
Data Science Intern — Factacy.ai | Jan 2026 – July 2026
- Built an end-to-end web scraping pipeline for StartupInvestors.AI to extract structured data from company websites at scale, achieving 95% data extraction accuracy.
- Extracted website metadata, About Us content, Privacy Policy pages, company logos, and social media handles using ScrapingBee and BeautifulSoup.
- Performed data cleaning, validation, standardization, and deduplication, converting extracted logo and media assets into Blob URLs for efficient storage and downstream processing.
- Designed and automated the complete ETL workflow from raw URL ingestion to clean, structured datasets using Python and Pandas, reducing manual effort and improving data reliability.

6. PROJECTS SECTION (grid of animated project cards, each expandable or with a "details" hover state)

Card 1 — Computer Vision R&D: Multimodal Cancer Detection | Jan 2025 – May 2025
Tags: Python, PyTorch, ResNet18, DenseNet121, NLP, DICOM
- Engineered a Hierarchical Multimodal Late Fusion model integrating deep learning image classifiers (ResNet18, DenseNet121) and NLP models to improve diagnostic support for rural medical systems.
- Developed a Stacking Ensemble using Logistic Regression on cross-entropy loss functions, boosting validation accuracy to 84% and reducing model variance.
- Preprocessed and parsed a 128GB secondary PET/CT dataset (TCIA) of 356 patients, linking 3D volumetric slice files and annotation masks to Series UIDs via Pandas.
- Managed model training pipelines across 10-epoch iterations (5-hour runtime per model) and designed end-to-end integration pathways for the Ingenious Health Management System (IHMS).

Card 2 — Image Preprocessing & Dimensionality Reduction using PCA | Aug 2024 – Dec 2024
Tags: Python, OpenCV, PyTorch, Scikit-Learn, PCA, CNNs, Bicubic Interpolation
- Designed a computer vision data preprocessing pipeline combining bicubic interpolation and PCA to extract global spatial features while removing high-frequency noise.
- Compressed high-resolution image inputs from ~2MB to ~90KB per file, significantly reducing memory bandwidth and accelerating downstream model training without feature loss.
- Built and evaluated a CNN-based Stacking Ensemble architecture integrating multiple weak learners, achieving over 90% object recognition accuracy across test benchmarks.

Card 3 — End-to-End Credit Risk ML Pipeline
Tags: Python, Scikit-Learn, Pandas, EDA, Model Comparison
- Built a complete end-to-end credit risk ML pipeline on a 5,000-row loan dataset: cleaning, EDA, feature engineering, and a six-model comparison with overfitting analysis.
- Random Forest was the best-performing model, achieving an ROC-AUC of ~0.93.
- Delivered results in a full written report plus a polished, chart-driven executive presentation.

Card 4 — WhatsApp Bot (Meta Cloud API)
Tags: Python, Flask, Meta Cloud API, Webhooks
- Built a WhatsApp bot using Meta's Cloud API with a Flask webhook skeleton, architected for extension via an LLM API for conversational responses.

7. EDUCATION SECTION
NIIT University, Neemrana, Rajasthan — 2022–2026
Bachelor of Technology in Computer Science (Specialization: Data Science)

Indian Public Senior Secondary School (RBSE), Jhunjhunu, Rajasthan — 2020–2021
Class XII — 99.40%

8. LEADERSHIP / EXTRACURRICULARS (optional small section, cards or timeline)
- Peer mentor: taught Calculus and Algebra to juniors for two years at NIIT University.
- Captained cricket teams to multiple tournament wins at the college level.
- Held operational leadership roles in college events and committees.

9. CONTACT SECTION
Heading: "Let's build something together."
Contact details: mdkaif.khan22@st.niituniversity.in | +91 7309396842
Include a contact form (Name, Email, Message) with a glowing gradient submit button, plus direct icon links to LinkedIn, GitHub, and Email.

10. FOOTER
Simple, centered: "Designed & built by Md Kaif Khan" with small social icons and a subtle "back to top" arrow.

INTERACTION DETAILS
- Sticky navbar that shrinks and gains a blurred/glass background on scroll.
- Section reveal animations: fade + slide up, staggered for grids of cards.
- Buttons have gradient hover glow and slight scale-up on hover.
- Add a subtle cursor-follow spotlight/glow effect on the hero section for a premium feel.
- Smooth page-load animation (staggered hero text reveal).

Make it feel like a top 1% developer portfolio — cinematic, confident, and effortless to scroll through.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kaif-code-canvas.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1f5beafe-1b6c-4dd6-bf0b-a7ff2abaeff6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
