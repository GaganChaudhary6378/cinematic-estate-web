"use client";

import React from "react";
import { Magnetic } from "@/components/ui/Magnetic";

export function LocationSection() {
    return (
        <section
            id="location"
            className="relative z-10 bg-brand-bg-primary py-40 px-8 md:px-16 overflow-hidden"
        >
            {/* Radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(201,168,106,0.12) 0%, transparent 70%)",
                }}
            />

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10 relative">
                <p className="text-brand-gold uppercase tracking-[0.3em] text-sm">
                    Location & Contact
                </p>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                    Marine Drive Skyline, <br />
                    <span className="italic text-brand-gold">Mumbai, India</span>
                </h2>
                <p className="text-brand-text text-lg max-w-xl leading-relaxed">
                    Positioned directly on the Queen's Necklace beachfront. A statement address on one of the world's most celebrated coastal boulevards.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Magnetic strength={30}>
                        <button className="px-10 py-4 bg-brand-gold text-[#0B0B0C] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300 shadow-2xl">
                            Book a Private Tour
                        </button>
                    </Magnetic>
                    <Magnetic strength={15}>
                        <button className="px-10 py-4 bg-transparent border border-white/20 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300">
                            Download Brochure
                        </button>
                    </Magnetic>
                </div>

                <div className="grid grid-cols-3 gap-12 w-full max-w-lg mt-4 pt-12 border-t border-white/10">
                    {[
                        { val: "2028", label: "Completion" },
                        { val: "₹ 7.2Cr", label: "Starting From" },
                        { val: "RERA", label: "Registered" },
                    ].map((s) => (
                        <div key={s.label} className="flex flex-col items-center">
                            <span className="text-2xl font-serif text-brand-gold">{s.val}</span>
                            <span className="text-brand-text text-xs uppercase tracking-wider mt-1">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
