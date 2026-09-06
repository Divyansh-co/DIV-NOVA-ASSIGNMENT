# NOVA — AI Productivity Platform

> **"Build Better. Work Smarter."**  
> A fully responsive, modern, production-quality SaaS landing page for NOVA — built with **React 18**, **Vite**, and **Tailwind CSS** featuring a **Tropical Jade Sunrise** aesthetic.
>
> **Crafted & Built by Divyansh Mishra**

---

## 🎨 Theme: Tropical Jade Sunrise

- **Lush Tropical Jade**: Vibrant Emerald Jade (`#10B981` / `#059669`) and Seafoam Teal (`#14B8A6`) accents.
- **Deep Tropical Obsidian**: Rich dark canvas (`#061510`), forest surfaces (`#0B2019`), and elevated cards (`#0E271F`).
- **Warm Golden Sunrise**: Golden amber accents (`#F59E0B`, `#F97316`) for pulse badges, 20% discount highlights, and CTA glows.
- **Typography**: Inter & Outfit from Google Fonts with smooth multi-stop gradients (`.text-gradient`).

---

## 🚀 Features & All 13 Required Sections

1. **Navigation Bar** (`Navbar.jsx`): Sticky on scroll with glass blur, brand logo monogram, 6 working anchor links, dark/light mode toggle, mobile hamburger drawer, and CTA button.
2. **Hero Section** (`Hero.jsx`): Tagline "Build Better. Work Smarter.", 2 action CTAs, interactive SaaS dashboard mockup with real-time prompt-to-PR execution diff (`SessionManager.ts`), 14/14 CI status, telemetry, and human governance sign-off.
3. **Trusted By** (`TrustedBy.jsx`): 7 text-based company logotypes (*Vertex Labs, NexusFlow, Synapse AI, HyperScale, OmniOS, PulseWave, Chrono Data*) with jade/amber hover highlights.
4. **Features** (`Features.jsx`): 6 cards with Lucide icons, badges, titles, descriptions, metrics, and hover lift/glow effects in a responsive 3/2/1 grid.
5. **Product / About Section** (`AboutProduct.jsx`): Split narrative layout explaining why traditional tools fail vs NOVA, 3 key benefits with icons, and interactive multi-agent reasoning trace with Tech Lead approval gate.
6. **How It Works** (`HowItWorks.jsx`): 4 numbered steps (*01 Connect Your Stack, 02 Define Goals, 03 Autonomous Execution, 04 Review & Ship*) with connecting roadmap on desktop and vertical stack on mobile.
7. **Statistics** (`Statistics.jsx`): 4 animated counter cards (`10,000+ Teams`, `40% Faster Delivery`, `99.99% Uptime`, `4.2M+ Weekly Actions`) powered by `IntersectionObserver`.
8. **Solutions / Use Cases** (`Solutions.jsx`): Tabbed persona switcher (*Startups, Agencies, Enterprise, Remote Teams*) with tailored headlines, metrics, feature checklists, and simulated sandbox preview.
9. **Testimonials** (`Testimonials.jsx`): Smooth carousel with auto-play (5s), pause on hover, next/previous buttons, dot indicators, verified customer badges, and 5-star ratings.
10. **Pricing** (`Pricing.jsx`): 3 tiers (*Starter, Pro with "Most Popular" badge, Enterprise*) with dynamic Monthly/Annual toggle (20% discount).
11. **FAQ** (`FAQ.jsx`): Accessible single-open accordion with smooth height animation and `aria-expanded` attributes.
12. **Final CTA** (`FinalCTA.jsx`): High-contrast Tropical Jade Sunrise closing card with quick email trial initiation and guarantee badges.
13. **Footer** (`Footer.jsx`): Brand logo, tagline, 4 categorized link columns (*Product, Company, Resources, Legal*), social links, weekly newsletter signup with inline email regex validation, copyright, and creator watermark attribution.

### Bonus Features Included
- **Watermark Badge** (`Watermark.jsx`): Floating glass pill at bottom-left and signature in footer (*"Designed & Built by Divyansh Mishra"*).
- **Dark / Light Mode**: Instant toggle with persistence in `localStorage`.
- **Demo Modal** (`DemoModal.jsx`): Interactive simulation walkthrough with terminal trace and play/pause/reset controls.
- **Back to Top** (`BackToTop.jsx`): Floating button appearing smoothly after scrolling past the hero.
- **Newsletter Validation**: Inline regex verification with immediate feedback.

---

## 💻 Code Quality Standard

Built with **moderate, clean, and intermediate-friendly React code**:
- Only standard React hooks (`useState`, `useEffect`, `useRef`).
- No convoluted math, no complex reducers, no over-engineered abstractions.
- Clean Tailwind CSS utility classes and intuitive JSX.
- Separated data structures in `/src/data/`.

---

## 📂 Project Structure

```
nova-ai/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── navigation.js
    │   ├── trustedBy.js
    │   ├── features.js
    │   ├── about.js
    │   ├── howItWorks.js
    │   ├── stats.js
    │   ├── solutions.js
    │   ├── testimonials.js
    │   ├── pricing.js
    │   ├── faq.js
    │   └── footerLinks.js
    └── components/
        ├── ui/
        │   ├── Button.jsx
        │   └── Card.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── TrustedBy.jsx
        ├── Features.jsx
        ├── AboutProduct.jsx
        ├── HowItWorks.jsx
        ├── Statistics.jsx
        ├── Solutions.jsx
        ├── Testimonials.jsx
        ├── Pricing.jsx
        ├── FAQ.jsx
        ├── FinalCTA.jsx
        ├── Footer.jsx
        ├── BackToTop.jsx
        ├── DemoModal.jsx
        └── Watermark.jsx
```

---

## 🛠️ Quickstart & Local Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
