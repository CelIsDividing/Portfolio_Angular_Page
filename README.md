# Portfolio — CelIsDividing (Angular Edition)

A retro terminal / pixel-art portfolio web application built with **Angular (Standalone Components, TypeScript, Reactive Forms, Router)**.

## Features

- **Retro Terminal Aesthetic**: VT323 pixel font, ASCII headers, glowing links, custom pixel banners and icons.
- **Dynamic Typewriter Animations**: Typewriter effects with syntax color coding for technologies and animated terminal cursor.
- **Projects Showcase**: 7 detailed projects with screenshots, tech stacks, download links, and GitHub links.
- **Skills Matrix**: Visual representation of core programming, design/art, and systems skills.
- **Interactive Contact Terminal**: Integrated reactive contact form powered by Web3Forms with real-time feedback and direct social links (Discord, LinkedIn, GitHub).
- **Single Page Application**: Angular Router for navigation across Main Menu (`/`), About (`/about`), Skills (`/skills`), Projects (`/projects`), and Contact (`/contact`).

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Development Server
Run the local dev server:
```bash
npm start
```
or
```bash
npx ng serve
```
Navigate to `http://localhost:4200/`. The app reloads automatically when changes are made.

### Building for Production
To build the production-ready distribution:
```bash
npm run build
```
Output files will be generated in `dist/portfolio-app/browser`.

### Running Unit Tests
To run unit tests:
```bash
npm test
```

## Legacy Static Files
The original static HTML/JS files are safely archived in the `legacy_static/` folder for reference.

