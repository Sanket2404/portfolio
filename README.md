# Sanket Jain — Developer Portfolio

A premium, production-ready portfolio for **Sanket Jain**, Frontend & Mobile Application Developer.
Dark "Aurora" theme inspired by Linear, Vercel, Stripe and Framer — glassmorphism, subtle gradients,
smooth scroll, magnetic buttons, a custom cursor and scroll-driven animations.

## ✨ Tech Stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | React 18 + TypeScript                    |
| Build tool     | Vite 5 (code-splitting, tree-shaking)    |
| Styling        | Tailwind CSS 3 + shadcn-style primitives |
| Animation      | Framer Motion + GSAP                     |
| Smooth scroll  | Lenis                                    |
| Icons          | react-icons + lucide-react               |

## 📁 Project Structure

```
portfolio/
├── index.html              # SEO meta, Open Graph, JSON-LD structured data
├── public/
│   ├── Sanket_Jain_Resume.pdf
│   ├── favicon.svg
│   ├── og-image.svg
│   └── robots.txt
├── src/
│   ├── main.tsx
│   ├── App.tsx             # Layout, lazy-loaded sections, scroll progress
│   ├── index.css           # Tailwind layers + glass/aurora utilities
│   ├── data/
│   │   └── portfolio.ts    # ← Single source of truth for ALL content
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   ├── useMagnetic.ts
│   │   └── useTypewriter.ts
│   ├── lib/
│   │   └── utils.ts        # cn() helper
│   └── components/
│       ├── ui/             # shadcn-style Button, Card, Badge
│       ├── common/         # Reveal, Cursor, TiltCard, CountUp, Magnetic…
│       ├── layout/         # Navbar, Footer
│       └── sections/       # Hero, About, Skills, Experience, Projects,
│                           #   Achievements, Testimonials, Contact
├── tailwind.config.ts
└── vite.config.ts
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server  →  http://localhost:5173
npm run dev

# 3. Production build  →  /dist
npm run build

# 4. Preview the production build locally
npm run preview
```

## ✏️ Editing Content

Everything you'd want to change lives in **`src/data/portfolio.ts`** — profile, socials,
stats, skills, experience, projects, achievements and testimonials. No component edits needed.

- **Resume:** replace `public/Sanket_Jain_Resume.pdf`.
- **Colors:** tweak the `accent` palette in `tailwind.config.ts`.
- **Domain:** update the canonical/OG URLs in `index.html`.

## ⚡ Performance & Quality

- Route-level **code splitting** + manual vendor chunks (React / Motion / GSAP).
- **Lazy-loaded** below-the-fold sections via `React.lazy` + `Suspense`.
- GPU-composited CSS animations for the background (off the main thread).
- `prefers-reduced-motion` fully respected; custom cursor disabled on touch.
- Semantic HTML, skip-link, focus-visible rings, ARIA labels → strong a11y.
- SEO: descriptive meta, Open Graph, Twitter cards, JSON-LD `Person` schema.
- ATS-friendly: real text content, logical heading order, downloadable resume.

Target: **Lighthouse 90+** across Performance, Accessibility, Best Practices and SEO.

## ☁️ Deployment

### Vercel (recommended)
1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`. Deploy.

### Netlify
- Build command `npm run build`, publish directory `dist`.
- Add a redirect for SPA routing: create `public/_redirects` with `/*  /index.html  200`.

### GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```
(Set `base: "/<repo-name>/"` in `vite.config.ts` if not deploying to a root domain.)

---

Built with care. © Sanket Jain.
