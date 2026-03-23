"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function Overlays({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // All percentages are now relative to the 500vh ScrollSequence container (0→1)

    // HERO: fully visible at 0–15%, exits completely by 20%
    const heroOpacity = useTransform(scrollYProgress, [0, 0.12, 0.20], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.20], [0, -60]);

    // ARCHITECTURE: enters at 22%, exits at 40%
    const archOpacity = useTransform(scrollYProgress, [0.22, 0.30, 0.36, 0.42], [0, 1, 1, 0]);
    const archY = useTransform(scrollYProgress, [0.22, 0.30, 0.42], [50, 0, -50]);

    // LIFESTYLE: enters at 45%, exits at 63%
    const lifeOpacity = useTransform(scrollYProgress, [0.45, 0.52, 0.58, 0.63], [0, 1, 1, 0]);
    const lifeY = useTransform(scrollYProgress, [0.45, 0.52, 0.63], [50, 0, -50]);

    // BUILDING REVEAL: enters at 66%, exits at 82%
    const revealOpacity = useTransform(scrollYProgress, [0.66, 0.73, 0.78, 0.82], [0, 1, 1, 0]);
    const revealY = useTransform(scrollYProgress, [0.66, 0.73, 0.82], [50, 0, -50]);

    // FINAL: enters at 85%, stays at 100%
    const finalOpacity = useTransform(scrollYProgress, [0.85, 0.94, 1], [0, 1, 1]);
    const finalY = useTransform(scrollYProgress, [0.85, 0.94], [50, 0]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-center items-center px-6 md:px-20 z-20">

            {/* 1. HERO — plain text (no SplitText) so Framer opacity is fully respected */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
                    A New Standard<br />
                    <span className="text-[#C9A86A] italic">of Luxury Living</span>
                </h1>
                <p className="text-lg md:text-xl font-sans text-white/65 max-w-2xl mt-4 mx-auto tracking-wide">
                    Where architecture, light, and ocean views exist in perfect harmony.
                </p>
            </motion.div>

            {/* 2. ARCHITECTURE */}
            <motion.div
                style={{ opacity: archOpacity, y: archY }}
                className="absolute inset-x-8 md:inset-x-24 top-[38%] flex flex-col md:flex-row justify-between items-start md:items-center"
            >
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
                        Architecture<br />
                        <span className="text-[#C9A86A] italic">Designed Around Light</span>
                    </h2>
                </div>
                <div className="flex flex-col space-y-4 max-w-xs border-l border-[#C9A86A]/30 pl-6 mt-8 md:mt-0">
                    <p className="text-white/65 text-sm uppercase tracking-widest">Italian Marble Interiors</p>
                    <p className="text-white/65 text-sm uppercase tracking-widest">Minimalist Craftsmanship</p>
                    <p className="text-white/65 text-sm uppercase tracking-widest">Bespoke Textures</p>
                </div>
            </motion.div>

            {/* 3. LIFESTYLE */}
            <motion.div
                style={{ opacity: lifeOpacity, y: lifeY }}
                className="absolute inset-x-8 md:inset-x-24 top-[38%] flex flex-col items-end text-right"
            >
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-xl max-w-2xl">
                    A Lifestyle <br />
                    <span className="italic text-[#B87B43]">Above the City</span>
                </h2>
                <div className="flex space-x-8 mt-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[#C9A86A] text-3xl font-serif mb-1">Infinity</span>
                        <span className="text-white/65 text-xs uppercase tracking-widest">Balcony Pool</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[#C9A86A] text-3xl font-serif mb-1">Horizon</span>
                        <span className="text-white/65 text-xs uppercase tracking-widest">Ocean Breezes</span>
                    </div>
                </div>
            </motion.div>

            {/* 4. BUILDING REVEAL */}
            <motion.div
                style={{ opacity: revealOpacity, y: revealY }}
                className="absolute inset-x-8 md:inset-x-24 bottom-[28%] flex flex-col items-start"
            >
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight drop-shadow-xl">
                    An Icon of <br /> Modern Architecture
                </h2>
            </motion.div>

            {/* 5. FINAL HERO */}
            <motion.div
                style={{ opacity: finalOpacity, y: finalY }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-12 tracking-tight drop-shadow-2xl">
                    Welcome to <br />
                    <span className="text-[#C9A86A] italic">Aurelia Residences</span>
                </h1>
                <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 pointer-events-auto">
                    <Magnetic strength={25}>
                        <button className="px-10 py-4 bg-[#C9A86A] text-[#0B0B0C] text-sm md:text-base font-semibold tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300 shadow-2xl">
                            Book a Private Tour
                        </button>
                    </Magnetic>
                    <Magnetic strength={15}>
                        <button className="px-10 py-4 bg-transparent border border-white/30 text-white text-sm md:text-base font-semibold tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md">
                            Explore Residences
                        </button>
                    </Magnetic>
                </div>
            </motion.div>

        </div>
    );
}
