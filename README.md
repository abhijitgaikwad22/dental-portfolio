# 🦷 Gayatri Pandurang Chavan — Dental Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-24A898?style=for-the-badge&logo=netlify&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### 🌐 [gayatri-dental-portfolio.netlify.app](https://gayatri-dental-portfolio.netlify.app)

*A cinematic, premium dental student portfolio — built with AI-assisted development*

</div>

---

## ✨ Overview

A luxury, dark-themed portfolio website for **Gayatri Pandurang Chavan**, a first-year Bachelor of Dental Surgery (BDS) student at **Maharashtra University of Health Sciences (MUHS), Nashik**. The site blends Apple-level design aesthetics with interactive 3D medical visualization and smooth cinematic animations.

---

## 🎯 Features

| Feature | Description |
|---|---|
| 🎬 **Cinematic Hero** | SVG ECG waveforms + particle canvas + staggered text reveal |
| 🖱️ **Custom Cursor** | Circular dot with lagging ring and hover expansion effects |
| 🎞️ **Film Grain Overlay** | Subtle animated noise across the entire site |
| 🌊 **Smooth Scrolling** | Lenis 1.3 with eased momentum scrolling |
| 👁️ **Scroll Reveal** | IntersectionObserver fade-up + blur-in animations |
| 🏷️ **Infinite Marquee** | Dual-row animated tag strip (forward + reverse) |
| 📊 **Animated Skill Bars** | Bars animate on viewport entry |
| 🦷 **3D Tooth Viewer** | Interactive Three.js tooth model with layer isolation |
| 📬 **Contact Form** | Glass-card form with submit state |
| 📱 **Fully Responsive** | Mobile, tablet and desktop optimised |

---

## 🛠️ Tech Stack

```
Framework        →  Next.js 15.2.6 (App Router)
Language         →  TypeScript 5.8.3
Styling          →  Tailwind CSS 3.4.17
Animation        →  Motion 12.35.2 (formerly Framer Motion)
3D Rendering     →  Three.js 0.173.0
3D Framework     →  React Three Fiber 9.5.0 + Drei 10.7.7
Smooth Scroll    →  Lenis 1.3.18
Icons            →  Lucide React 0.577.0
Fonts            →  Playfair Display + Inter + DM Mono
Deployment       →  Netlify
```

---

## 📁 Project Structure

```
dental-portfolio/
├── app/
│   ├── globals.css              # Design tokens, grain, cursor, animations
│   ├── layout.tsx               # Root layout — fonts, metadata, providers
│   └── page.tsx                 # Main page — assembles all sections
│
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Cinematic hero with SVG waveforms
│   │   ├── MarqueeSection.tsx   # Infinite scrolling tag strip
│   │   ├── AboutSection.tsx     # Two-column story + values cards
│   │   ├── AcademicSection.tsx  # Education + specialisation banner
│   │   ├── SkillsSection.tsx    # Animated skill bars + curriculum
│   │   ├── ToothViewerSection.tsx  # 3D viewer wrapper
│   │   ├── ContactSection.tsx   # Contact form + links
│   │   └── Footer.tsx           # Minimal footer
│   │
│   ├── three/
│   │   └── ToothViewer.tsx      # Interactive 3D tooth — click layers
│   │
│   └── ui/
│       ├── CustomCursor.tsx     # Dot + lagging ring cursor
│       ├── GrainOverlay.tsx     # Animated film grain
│       ├── Navbar.tsx           # Blur-on-scroll navigation
│       └── SmoothScroll.tsx     # Lenis smooth scroll provider
│
├── lib/
│   ├── useScrollReveal.ts       # IntersectionObserver hook
│   └── utils.ts                 # cn() utility
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/abhijitgaikwad22/dental-portfolio.git
cd dental-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 🎨 Design System

```css
Background    →  #0A0A0A   (Deep black)
Foreground    →  #E8E3DB   (Warm white)
Teal Accent   →  #1A7A6E   (Primary brand colour)
Teal Light    →  #24A898   (Hover states)
Gold Accent   →  #B89A4A   (Secondary highlights)
Gold Light    →  #D4B866   (Gold hover)
```

---

## 🦷 3D Tooth Anatomy Viewer

The interactive tooth model is built with **React Three Fiber** and features:

- **4 clickable layers** — Enamel, Dentin, Pulp, Root
- **Layer isolation** — click any layer to highlight and read its description
- **Free rotation** — drag to orbit around the model
- **Zoom** — scroll to zoom in and out
- **Auto-rotate** — spins slowly when idle, stops on interaction

---

## 📖 About the Developer

**Gayatri Pandurang Chavan** is a first-year BDS student at Maharashtra University of Health Sciences (MUHS), Nashik. With a deep interest in Oral & Maxillofacial Surgery, she combines scientific rigour with genuine patient empathy. This portfolio was built to showcase her academic journey and passion for clinical dentistry.

---

## 🤝 Connect

- 🌐 **Portfolio** → [gayatri-dental-portfolio.netlify.app](https://gayatri-dental-portfolio.netlify.app)
- 💼 **LinkedIn** → [linkedin.com/in/gayatri-chavan](https://linkedin.com)
- 📧 **Email** → gayatri@example.com

---

## 📄 License

This project is personal and not open for redistribution. All content and design belong to Gayatri Pandurang Chavan.

---

<div align="center">

*Built with AI-assisted development using Claude by Anthropic*

**Precision. Empathy. Science. Dentistry.**

</div>
