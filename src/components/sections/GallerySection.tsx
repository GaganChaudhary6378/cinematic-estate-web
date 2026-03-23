"use client";

import React from "react";
import CircularGallery from "@/components/CircularGallery";

const galleryItems = [
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90", text: "Living Room" },
    { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=90", text: "Master Suite" },
    { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=90", text: "Exterior View" },
    { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=90", text: "Kitchen" },
    { image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=90", text: "Lounge" },
    { image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=90", text: "Bathroom" },
    { image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=90", text: "Poolside" },
    { image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=90", text: "Penthouse Entry" },
];

export function GallerySection() {
    return (
        <section
            id="gallery"
            className="w-full bg-brand-bg-primary relative z-10 py-24"
        >
            <div className="max-w-7xl mx-auto px-8 md:px-16 mb-10 flex justify-between items-end">
                <div>
                    <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">
                        Visual Journal
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                        The Gallery
                    </h2>
                </div>
                <p className="text-brand-text text-sm hidden md:block max-w-xs text-right leading-relaxed">
                    Drag or scroll to explore. Each frame captures a moment of architectural mastery.
                </p>
            </div>

            {/* Circular Gallery */}
            <div className="w-full" style={{ height: "70vh" }}>
                <CircularGallery
                    items={galleryItems}
                    bend={2}
                    textColor="#C9A86A"
                    borderRadius={0.08}
                    scrollSpeed={2.5}
                    scrollEase={0.06}
                    font="bold 24px Playfair Display"
                />
            </div>
        </section>
    );
}
