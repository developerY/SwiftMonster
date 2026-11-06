# SwiftMonster Hydrofoils ⚡

> **Prismatic Hydrodynamics & Oceanic Soft Pastel Marine Lab**  
> Next-generation aerodynamic hydrofoils, packable downwind parawings, and real-time marine telemetry engineered for extreme hydrodynamic efficiency, frictionless lift, and perpetual ocean momentum.

---

## 🌊 Overview

**SwiftMonster** researches, designs, and manufactures aerospace-grade hydrofoil equipment born from deep Pacific ocean swells. Built with **Toray T1100 High-Modulus Carbon Fiber** and **Grade 5 Titanium**, the fleet achieves sub-planing early takeoff (6.8 kts), class-leading glide ratios (14.8:1), and race-proven speed ceilings exceeding 38.4 knots.

The application is built on **React 19 + Vite** with TypeScript, React Router 7, and Tailwind CSS v4. It is specifically architected for seamless out-of-the-box deployment to **Cloudflare Pages**.

---

## ☁️ Cloudflare Pages Compatibility

Cloudflare Pages automatically detects and builds this project with zero manual overrides needed:

- **Root Entry Point (`index.html`)**: Located directly at the root of the repository as required by Vite and Cloudflare Pages.
- **Predictable Output Folder (`dist/`)**: Vite compiles the entire client application into a clean, flat `/dist` directory (avoiding Angular's complex nested `/dist/app/browser` subfolders that cause 404s on Cloudflare).
- **SPA Client-Side Routing (`public/_redirects`)**: Contains `/* /index.html 200` to guarantee smooth, persistent URL routing across all 6 pages (`/products`, `/hydrodynamics`, `/creed`, `/quiver`, `/community`, `/`).

---

## 🧭 Multi-Page Navigation & Features

### 1. **Fleet Overview / Home (`/`)**
- **Next-Gen Aerodynamics 2025 Fleet Reveal**: Highlighting our latest autoclave composite advancements.
- **Bioluminescent Flight Aero-Telemetry Console**: Interactive digital dashboard with prototype switcher (*Hawk-X 850cm²*, *Apex-Pro 1050cm²*, *HydroSpeed GT 620cm²*), real-time buoy swell wave simulation, aspect ratio readouts, and drag minimization telemetry.
- **Key Performance Metrics Strip**: Four high-contrast pastel telemetry cards for Takeoff Threshold, Glide Ratio, Pre-preg HM Carbon (T1100), and GPS Speed Record.
- **Creed & Lab Launchpads**: Fast links to deep-dive research pages.

### 2. **Fleet Lineup (`/products`)**
- **Strict Tier Architecture**:
  1. **Parawing Gen-4 (Tier 01)** — Ultralight, boomless packable downwind propulsion with 1.4-liter waist harness stowage, Teijin 28g Ripstop, and Dyneema SK99 bridles.
  2. **Wing Foil Pro Complete (Tier 02)** — High-aspect dihedral wing geometries with Toray M40J monocoque carbon masts (85cm/92cm) and rigid carbon handles.
  3. **Kite Foil GT Race (Tier 03)** — Speed ceiling of 38.4 kts with titanium micro-sleeve fuselages (0.014 Cd) and 102cm race taper masts.
- **Composite Materials Science**: Autoclave curing at 7 bars and real-time conditions across premier Pacific swell corridors (Hawaii 3.4m swell, Hood River 32kt thermal, Cape Town 38kt gale).
- **Universal Pre-Order Integration**: Direct triggers for factory build slot reservation.

### 3. **Hydrodynamics Lab (`/hydrodynamics`)**
- **Interactive Towing Tank Flume Analysis**: Dynamic CFD drag coefficient comparison chart with interactive speed filters (*15 kts*, *20 kts*, *28 kts*, *35 kts*) comparing SwiftMonster T1100 to Gen-2 carbon, 1st-Gen carbon, and extruded 6061 aluminum.
- **Hydrodynamic Comparison Matrix**: Quantitative verification of stall speed (6.2 kts vs 11.8 kts alloy), torsional mast rigidity (1.2°/100Nm), and pump loop persistence (48s vs 14s).
- **Raw Dataset Export (CSV)**: One-click in-browser download of the towing tank CFD dataset (`SwiftMonster_T1100_Hydrodynamics_CFD_Data.csv`).
- **Research Whitepaper Abstract**: Academic citations and sub-cavitation boundary layer control documentation.

### 4. **Sea Dragons Creed & Ethos (`/creed`)**
- **The Sacred Poetic Triad**:
  - *“We live in the ocean, under the sun.”* — Dawn patrol thermal wind dynamics.
  - *“We play in the ocean, under the kelp forest.”* — Biomimetic tubercle leading edges inspired by humpback flippers.
  - *“We sleep in the ocean, under the stars and the moon.”* — Lunar spring tides and Polynesian celestial wayfinding.
- **1% For Kelp Restoration Pledge**: Active giant kelp reforestation initiatives across California, the Pacific Northwest, and Tasmania.

### 5. **Quiver Calculator & Tuner (`/quiver`)**
- **Dual-Slider Hydrodynamic Tuning Engine**:
  - **Rider Body Weight**: 50 kg to 115 kg with instant metric-to-imperial conversion (lbs).
  - **Wind & Swell State**: 8 kts to 40 kts with real-time ocean condition descriptors (*Light Glass*, *Breezy Rolling Waves*, *Moderate Ocean Swell*, *Heavy Gale*).
- **Computed Hydrofoil Prescription**: Instant recommendation for front wing area (cm²), mast length (cm), model name, projected glide ratio, and custom handling notes.
- **Direct Build Checkout**: Seamlessly passes custom dimensions into the pre-order modal.

### 6. **Community & Ocean Aviators (`/community`)**
- **Verified Watermen Endorsements**: Testimonials from M2O channel record holders, aerodynamics pilots, and speed world cup contenders.
- **Worldwide Test Center Network**: Outposts in *Maui North Shore*, *The Gorge Hatchery*, and *Bloubergstrand Big Bay (Cape Town)*.
- **Tour Partners Ticker**: Defi Du Vent, Hydrofoil Pro Tour, Gorge Downwind, and Molokai 2 Oahu.

---

## 🛠 Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (Browser routing with SPA fallback via `public/_redirects`)
- **State Management**: React Context (`FleetContext`) powering live buoy simulation, quiver calculations, and pre-order state
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Iconography & Typography**: Space Grotesk, JetBrains Mono, and Google Material Symbols
- **Cloudflare Pages Ready**:
  - Root `index.html` entry point
  - Output folder: `dist/`
  - Build command: `npm run build`

---

## 🚀 Getting Started

### Prerequisites
- Node.js `20.x` or higher
- npm `10.x` or higher

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
The dev server binds to `http://0.0.0.0:3000`.

### Production Build
```bash
npm run build
```
Generates the optimized static distribution files in `dist/`.

---

## 📜 License & Environmental Pledge

© 2025 SwiftMonster Hydrofoils. Sea Dragons Marine Labs Inc. All rights reserved.  
1% of all gross revenue is dedicated directly to Marine Kelp Restoration.
