<div align="center">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Modern Next.js Portfolio</h3>
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

A modern, professional portfolio built with Next.js 14, featuring interactive 3D elements powered by Three.js, smooth animations with Framer Motion, and responsive design using Tailwind CSS. This portfolio showcases professional projects, certifications, work experience, and technical skills through an engaging and visually compelling interface.

## <a name="tech-stack">Tech Stack</a>

- **Next.js 14.1.4** - React framework with App Router and SSR
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics and interactive globe
- **Framer Motion** - Smooth animations and transitions
- **lottie-react** - Animation library for JSON-based animations
- **Tailwind CSS** - Utility-first styling framework
- **Aceternity UI** - Modern UI component library

## <a name="features">Features</a>

**Hero Section**: Captivating introduction featuring a spotlight effect and dynamic background with animated text generation.

**Bento Grid**: Modern layout presenting personal information using cutting-edge CSS design techniques with Lottie animations.

**Interactive 3D Globe**: GitHub-style globe with arcs, points, and rings visualization built with THREE.js and validated data handling.

**Recent Projects**: Project showcase with 3D pin effects and hover interactions displaying technology stacks and links.

**Professional Certifications**: Dedicated certifications section featuring:
- Card hover effects with smooth animations
- Company logos (Meta, IBM, Udemy)
- Certification details including skills and dates
- Direct links to credential verification

**Work Experience**: Timeline-style display of professional background with moving border effects.

**Testimonials**: Client testimonials with infinite scrolling card animations.

**Canvas Effects**: HTML5 canvas for visually striking reveal effects in the approaches section.

**Mobile Responsive**: Fully optimized for all devices with responsive navigation and adaptive layouts.

**Performance Optimized**: 
- SSR-compatible with proper client-side rendering for browser-dependent features
- Lazy loading and dynamic imports for optimal bundle size
- Validated data handling to prevent rendering errors 

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MuhammadAli7896/Portfolio-Main.git
cd Portfolio-Main
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

**Building for Production**

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio-Main/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Main home page
│   └── provider.tsx         # Theme provider
├── components/
│   ├── Approach.tsx         # Canvas reveal effect section
│   ├── Certifications.tsx   # Professional certifications showcase
│   ├── Clients.tsx          # Company logos with infinite scroll
│   ├── Experience.tsx       # Work experience timeline
│   ├── Footer.tsx           # Footer with social links
│   ├── Grid.tsx             # Bento grid layout
│   ├── Hero.tsx             # Hero section with spotlight
│   ├── RecentProjects.tsx   # Projects showcase
│   └── ui/                  # Reusable UI components
│       ├── BentoGrid.tsx    # Grid with Lottie animations
│       ├── FloatingNavbar.tsx # Responsive navigation
│       ├── Globe.tsx        # 3D interactive globe
│       └── ...              # More UI components
├── data/
│   ├── index.ts             # Central data store
│   ├── confetti.json        # Lottie animation data
│   └── globe.json           # Globe visualization data
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets (logos, images)
```

## Key Components

**Hero Section** (`components/Hero.tsx`)
- Spotlight effect with Framer Motion
- Text generation animation
- 3D globe integration
- Responsive layout

**Certifications** (`components/Certifications.tsx`)
- Card hover effect from Aceternity UI
- AnimatePresence for smooth transitions
- Company logos and credential links
- Skills tags with modern styling

**Floating Navbar** (`components/ui/FloatingNavbar.tsx`)
- Auto-hide on scroll
- Mobile responsive with breakpoints
- Smooth animations
- Active section highlighting

**3D Globe** (`components/ui/Globe.tsx`)
- THREE.js with three-globe library
- Validated data handling
- Interactive arcs and points
- Performance optimized

## Technologies & Libraries

- **@react-three/fiber** & **@react-three/drei** - React renderer for Three.js
- **three-globe** - Globe visualization
- **lottie-react** - Lottie animations
- **framer-motion** / **motion/react** - Animation library
- **clsx** & **tailwind-merge** - Utility for className management
- **@tabler/icons-react** - Icon library
- **@sentry/nextjs** - Error monitoring (optional)

## Environment Setup

No environment variables required for basic functionality. Optional configurations:

- **Sentry**: Add Sentry DSN for error tracking
- **Analytics**: Add analytics provider of choice

## Deployment

This project can be deployed on various platforms:

**Vercel** (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

**Netlify**
- Already configured with `netlify.toml`
- Connect your GitHub repository to Netlify
- Automatic deployments on push

**Other Platforms**
- Build the project: `npm run build`
- Deploy the `.next` folder and `public` directory

## Contact

For questions or collaboration opportunities, feel free to reach out:

- **LinkedIn**: [Muhammad Ali](https://www.linkedin.com/in/muhammad-ali-a772a025b/)
- **Email**: [muhammadali30804@gmail.com](mailto:muhammadali30804@gmail.com)
- **Portfolio**: [Live Site](https://muhammad-aliportfolio.netlify.app/)

