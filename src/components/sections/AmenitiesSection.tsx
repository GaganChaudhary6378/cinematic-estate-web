"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import { Compass, Key, GlassWater, Waves, Shield, Star } from "lucide-react";

const amenities = [
    { icon: Compass, title: "Panoramic Views", desc: "Unobstructed ocean and skyline views from floor-to-ceiling architectural glass." },
    { icon: Key, title: "Private Elevators", desc: "Direct secure access leading straight into your expansive private foyer." },
    { icon: GlassWater, title: "5-Star Services", desc: "24/7 concierge, private chef capabilities, and infinity wellness pools." },
    { icon: Waves, title: "Infinity Pools", desc: "Three sky-level infinity pools with temperature-controlled ocean water." },
    { icon: Shield, title: "Secured Residences", desc: "Biometric entry, 24/7 security detail, and private underground parking." },
    { icon: Star, title: "Premium Spa", desc: "A 12,000 sq ft spa with thermal suites, cryotherapy, and treatment rooms." },
];

export function AmenitiesSection() {
    return (
        <section
            id="amenities"
            className="py-24 border-y border-white/5 bg-brand-bg-secondary relative z-10"
        >
            <div className="max-w-7xl mx-auto px-8 md:px-16">
                <div className="text-center mb-20">
                    <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-6">
                        World Class Living
                    </p>
                    <BlurText
                        text="Every amenity. Curated to perfection."
                        delay={60}
                        animateBy="words"
                        direction="bottom"
                        className="text-3xl md:text-5xl font-serif text-white leading-tight"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="group flex flex-col space-y-4 p-8 border border-white/5 rounded-2xl bg-[#0B0B0C]/60 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                                    <Icon className="w-5 h-5 text-brand-gold stroke-[1.5]" />
                                </div>
                                <h3 className="text-xl font-serif text-white">{item.title}</h3>
                                <p className="text-brand-text text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
