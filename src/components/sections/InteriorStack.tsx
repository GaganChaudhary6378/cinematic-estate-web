"use client";

import React, { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    MotionValue,
} from "framer-motion";
import { ResidenceModal, Residence, residences } from "@/components/sections/ResidenceModal";

/* ── Single Card ── */
function Card({
    card,
    index,
    total,
    sectionProgress,
    isActive,
    onOpen,
}: {
    card: Residence;
    index: number;
    total: number;
    sectionProgress: MotionValue<number>;
    isActive: boolean;
    onOpen: (r: Residence) => void;
}) {
    const stackStart = index / total;
    const stackEnd = (index + 1) / total;

    const opacity = useTransform(
        sectionProgress,
        [
            Math.max(0, stackStart - 0.05),
            stackStart,
            stackEnd - 0.05,
            stackEnd,
        ],
        [0, 1, 1, index === total - 1 ? 1 : 0],
    );

    const y = useTransform(
        sectionProgress,
        [Math.max(0, stackStart - 0.05), stackStart],
        [60, 0],
    );

    const scale = useTransform(
        sectionProgress,
        [stackStart, stackEnd],
        [1, index === total - 1 ? 1 : 0.97],
    );

    return (
        <motion.div
            style={{ opacity, y, scale }}
            /* Only the currently active card receives pointer events — all others are inert */
            className={`absolute inset-0 w-full h-full ${isActive ? "" : "pointer-events-none"}`}
        >
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col md:flex-row border border-white/10">
                {/* Image */}
                <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={card.images[0].url}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(0.82)" }}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141416] hidden md:block" />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-8 px-10 bg-[#141416]">
                    <span
                        className="text-xs uppercase tracking-[0.3em] mb-3"
                        style={{ color: card.accent }}
                    >
                        Residence {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 leading-tight">
                        {card.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-2 line-clamp-2">
                        {card.description}
                    </p>

                    {/* Key specs */}
                    <div className="flex items-center space-x-5 my-4 text-xs text-white/40 uppercase tracking-widest">
                        <span>{card.beds} Bed · {card.baths} Bath</span>
                        <span className="text-white/20">·</span>
                        <span>{card.area}</span>
                        <span className="text-white/20">·</span>
                        <span>{card.floor}</span>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between mt-1">
                        <p className="font-serif text-lg" style={{ color: card.accent }}>
                            {card.price}
                        </p>

                        <button
                            onClick={() => onOpen(card)}
                            className="flex items-center space-x-2.5 text-sm uppercase tracking-widest transition-all group cursor-pointer"
                            style={{ color: card.accent }}
                        >
                            <span className="group-hover:opacity-70 transition-opacity">Explore Space</span>
                            <span
                                className="h-px w-8 group-hover:w-14 transition-all"
                                style={{ background: card.accent }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ── Section ── */
export function InteriorStack() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openResidence, setOpenResidence] = useState<Residence | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Track which card is currently the "top" visible one
    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const raw = Math.floor(v * residences.length);
        const idx = Math.min(Math.max(raw, 0), residences.length - 1);
        setActiveIndex(idx);
    });

    return (
        <>
            <section id="architecture" className="w-full bg-brand-bg-secondary relative z-10">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-12 flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">
                            Interior Collection
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight max-w-xl">
                            Spaces Designed{" "}
                            <span className="italic text-brand-gold">to Inspire</span>
                        </h2>
                    </div>
                    <p className="text-brand-text max-w-sm mt-6 md:mt-2 text-sm leading-relaxed">
                        Every residence is a composition of rare materials, considered proportions,
                        and natural light — curated by world-renowned architectural studios.
                    </p>
                </div>

                {/* Scroll runway */}
                <div
                    ref={sectionRef}
                    className="relative w-full"
                    style={{ height: `${residences.length * 70 + 80}vh` }}
                >
                    {/* Sticky card area — NO pointer-events manipulation at this level */}
                    <div
                        className="sticky top-0 w-full flex items-center"
                        style={{ height: "72vh" }}
                    >
                        <div className="w-full h-full max-w-6xl mx-auto px-6 md:px-12 py-4 relative">
                            {residences.map((card, i) => (
                                <Card
                                    key={i}
                                    card={card}
                                    index={i}
                                    total={residences.length}
                                    sectionProgress={scrollYProgress}
                                    isActive={i === activeIndex}
                                    onOpen={setOpenResidence}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ResidenceModal
                residence={openResidence}
                onClose={() => setOpenResidence(null)}
            />
        </>
    );
}
