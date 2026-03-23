"use client";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollSequence } from "@/components/ScrollSequence";
import { Overlays } from "@/components/sections/Overlays";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { InteriorStack } from "@/components/sections/InteriorStack";
import { ModelSection } from "@/components/sections/ModelSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { Footer } from "@/components/layout/Footer";
import { GhostCursorWrapper } from "@/components/GhostCursorWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg-primary selection:bg-brand-gold/30 relative">
      {/* Premium ghost cursor — global effect */}
      <GhostCursorWrapper />

      <Navbar />

      {/* ── Cinematic Scroll Sequence ── */}
      <ScrollSequence>
        {(scrollYProgress) => <Overlays scrollYProgress={scrollYProgress} />}
      </ScrollSequence>

      {/* ── Residences: Philosophy + ScrollReveal ── */}
      <PhilosophySection />

      {/* ── Architecture: Interior ScrollStack ── */}
      <InteriorStack />

      {/* ── Lifestyle: 3D Model Viewer ── */}
      <ModelSection />

      {/* ── Amenities: Icon grid ── */}
      <AmenitiesSection />

      {/* ── Gallery: Circular OGL Gallery ── */}
      <GallerySection />

      {/* ── Location & CTA ── */}
      <LocationSection />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
