# Tran Chi Tho — Portfolio Website

<div align="center">

[![Deploy to GitHub Pages](https://github.com/trchitho/portfolio_website/actions/workflows/deploy.yml/badge.svg)](https://github.com/trchitho/portfolio_website/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?logo=github)](https://trchitho.github.io/portfolio_website/)
[![Vercel](https://img.shields.io/badge/Also%20on-Vercel-black?logo=vercel)](https://portfolio-website-five-gamma-53.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)

A modern, responsive portfolio built with React, TypeScript, Three.js, and Tailwind CSS.  
Features a **dark / light theme toggle**, 3D tech sphere, scroll-reveal animations, and full CI/CD via GitHub Actions.

**[🌐 Live Demo](https://trchitho.github.io/portfolio_website/)** · **[📧 Contact](mailto:tranchitho160704@gmail.com)**

</div>

---

## ✨ Features

- **Dark / Light theme** — toggle button in the navbar; respects `prefers-color-scheme` on first visit, persists to `localStorage`
- **3D Tech Sphere** — interactive globe built with Three.js / React Three Fiber showing my core technologies
- **Scroll-reveal animations** — Intersection Observer–based entrance animations with staggered delays
- **Motion-Driven design** — smooth hover states, floating particles, ambient glow orbs
- **Responsive** — mobile-first, tested at 375 / 768 / 1024 / 1440 px
- **Calendly integration** — schedule a call directly from the Contact section
- **Accessibility** — WCAG AA contrast ratios, keyboard navigation, `prefers-reduced-motion` support

---

## 🚀 Tech Stack

| Layer | Technologies |
|---|---|
| Framework | React 18, TypeScript 5 |
| Styling | Tailwind CSS 3, shadcn/ui, CSS Custom Properties |
| 3D | Three.js, React Three Fiber, @react-three/drei |
| Build | Vite 5, SWC |
| Icons | Lucide React |
| State | React Context (theme), TanStack Query |
| Routing | React Router DOM v6 |
| CI/CD | GitHub Actions → GitHub Pages |

---

## 🗂️ Project Structure

```
src/
├── assets/
│   ├── icons/           # SVG tech icons (React, Java, Spring, etc.)
│   └── images/          # Project screenshots
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── Navigation.tsx   # Navbar with theme toggle
│   ├── Hero.tsx         # Hero section + particles
│   ├── HeroTechSphere.tsx  # Three.js 3D sphere
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── contexts/
│   └── ThemeContext.tsx  # Dark/light theme provider
├── hooks/
│   ├── useScrollReveal.ts  # Intersection Observer hook
│   └── use-*.ts
├── pages/
│   └── Index.tsx
└── index.css            # Design system — all CSS variables
```

---

## 🛠️ Getting Started

```bash
# Clone
git clone https://github.com/trchitho/portfolio_website.git
cd portfolio_website

# Install
npm install

# Dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🔄 CI/CD — GitHub Actions

Every push to `main` automatically:

1. Checks out the repo
2. Installs dependencies with `npm ci`
3. Builds with `vite build` (sets `base: /portfolio_website/`)
4. Deploys `dist/` to GitHub Pages via `actions/deploy-pages`

**Setup steps (one-time):**

1. Go to **Settings → Pages** in your GitHub repo
2. Set **Source** → `GitHub Actions`
3. Push to `main` — the workflow runs automatically

Live URL: `https://trchitho.github.io/portfolio_website/`

---

## 🎨 Design System

All colors are CSS custom properties in `src/index.css`.  
Two complete token sets — `:root` (light) and `.dark` — cover every component.  
No hardcoded color values in components.

Key tokens:

```css
--surface-page       /* page background */
--surface-card       /* card background */
--text-body          /* body text */
--text-overline      /* section labels */
--badge-bg/border/text
--btn-ghost-*
--gradient-primary   /* violet → purple gradient */
--card-shadow / --card-shadow-hover
--sphere-icon-bg     /* Three.js icon chip */
```

---

## 📂 Featured Projects

| Project | Stack | Links |
|---|---|---|
| **FoodHub** — Food Delivery Marketplace | Java 21, Spring Boot, React, MySQL, Redis | [Code](https://github.com/trchitho/Food-Delivery-Project) · [Demo](https://food-delivery-project-chi-six.vercel.app/) |
| **Chat App** — Real-time MERN Chat | React, Socket.IO, Node.js, MongoDB | [Code](https://github.com/trchitho/FullStack-Chat-App) |
| **AI Career** — Recommendation System | FastAPI, React, PostgreSQL, pgvector | [Code](https://github.com/trchitho/AI-Based-Career-Recommendation-System) |
| **Portfolio** — This site | React, TypeScript, Three.js, Tailwind | [Code](https://github.com/trchitho/portfolio_website) · [Demo](https://trchitho.github.io/portfolio_website/) |

---

## 📬 Contact

| Channel | Link |
|---|---|
| Email | [tranchitho160704@gmail.com](mailto:tranchitho160704@gmail.com) |
| GitHub | [@trchitho](https://github.com/trchitho) |
| Facebook | [chitho.tran.777](https://www.facebook.com/chitho.tran.777) |
| Schedule a call | [Calendly](https://calendly.com/tranchitho160704) |

---

## 📄 License

[MIT](LICENSE) © 2024 Tran Chi Tho
