# Garage

An interactive 3D car brand showroom built with Three.js — inspired by the multi-team garage layout of Formula 1.

Each brand occupies its own bay in the garage. Visitors navigate between brands and explore models by category (sedans, SUVs, performance variants, etc.) through a camera-driven 3D experience.

---

## Concept

The experience is structured like an F1 pit lane:

```
Garage
├── Bay 1 — Mercedes-Benz
│   ├── Sedans (C-Class, E-Class, S-Class)
│   ├── SUVs   (GLC, GLE, GLS)
│   └── AMG    (AMG GT, C 63)
├── Bay 2 — BMW
│   ├── Sedans  (3, 5, 7 Series)
│   ├── SAVs    (X3, X5, X7)
│   └── M Series (M3, M5, M8)
└── Bay 3 — Ferrari
    ├── Grand Tourers (Roma, Portofino M)
    ├── Supercars     (SF90, 296 GTB, F8)
    └── Purosangue
```

Selecting a brand transitions the camera to that bay. Selecting a category reveals the models within it.

---

## Tech Stack

| Layer | Tool |
|---|---|
| 3D rendering | [Three.js](https://threejs.org) |
| Animation | [GSAP](https://gsap.com) |
| Build | [Vite](https://vitejs.dev) |
| 3D models | GLTF/GLB (to be added) |

---

## Project Structure

```
src/
├── main.js                  Entry point — wires scene, brands, UI
├── scene/
│   ├── GarageScene.js       Three.js renderer, camera, loop
│   ├── lights.js            Key / fill / bounce lighting rig
│   └── environment.js       Floor, fog, background
├── brands/
│   ├── BrandRegistry.js     Aggregates all brand definitions
│   ├── mercedes/index.js
│   ├── bmw/index.js
│   └── ferrari/index.js
├── ui/
│   └── UIController.js      Brand nav, category pills, model cards
└── styles/
    └── main.css
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Roadmap

- [ ] Load GLTF car models per brand bay
- [ ] GSAP camera transitions between bays
- [ ] Per-brand garage environment (lighting accent, floor color)
- [ ] Model detail panel with specs
- [ ] Mobile-friendly touch/swipe navigation
- [ ] HDR environment maps for realistic reflections
- [ ] Sound design (engine start on brand select)
