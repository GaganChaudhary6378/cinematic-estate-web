# Real Estate Web Experience (Proof of Concept)

This is a premium, high-performance real estate web application proof of concept. It leverages modern web technologies, 3D visualization, and advanced animations to deliver an immersive, cutting-edge user experience.

## ✨ Technology Stack & Rationale

### Core Framework & UI
* **[Next.js (v16)](https://nextjs.org/)**: The React framework used for robust routing, server-side rendering, and optimal performance.
* **[Tailwind CSS (v4)](https://tailwindcss.com/)**: A utility-first CSS framework for rapid and maintainable styling. We use `clsx` and `tailwind-merge` to handle dynamic class compositions smoothly.
* **[Shadcn UI](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)**: Provide accessible, headless, and easily customizable foundational UI components without the bloat of traditional component libraries.

### Animation & Motion
* **[GSAP](https://gsap.com/) & `@gsap/react`**: The industry standard for high-performance web animations. Used for complex timelines, staggering elements, and advanced scroll-triggered visual effects that require precise control.
* **[Framer Motion](https://www.framer.com/motion/)**: Used for declarative, physics-based (spring) animations. It excels at component-level micro-interactions, layout transitions, and state-driven animations within the React ecosystem.

### WebGL & 3D Rendering
* **[Three.js](https://threejs.org/)**: The premier JavaScript 3D library. Used to render rich, interactive 3D environments and architectural models directly in the browser, providing a luxurious feel to the property showcases.
* **[OGL](https://github.com/oframe/ogl)**: A minimal and lightweight WebGL library. It is utilized alongside or instead of Three.js for specific, highly optimized rendering tasks and custom shader effects (like fluid image distortions) where low overhead is critical.

### Scroll Handling
* **[Lenis](https://lenis.darkroom.engineering/)**: An elegant smooth scrolling library. Essential for creating a premium "scrollytelling" experience. It prevents native scroll jitter and allows us to perfectly synchronize the scroll progress with our GSAP animations and WebGL camera updates.

## 🚀 Getting Started

First, install the dependencies (if you haven't already):

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable React components (UI elements, sections, WebGL canvases).
- `src/components/ui/`: Primitive UI components (buttons, typography, etc.).
- `src/components/sections/`: Major page sections containing their respective GSAP/Motion animations.
