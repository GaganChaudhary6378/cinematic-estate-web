"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BlurText from "@/components/BlurText";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowRight } from "lucide-react";

export function PhilosophySection() {
    return (
        <section
            id="residences"
            className="bg-brand-bg-primary relative z-10 py-32 px-8 md:px-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                {/* BlurText headline */}
                <div className="text-center">
                    <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-8">
                        The Philosophy
                    </p>
                    <BlurText
                        text="Crafted for those who demand the exceptional."
                        delay={80}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-6xl font-serif text-white leading-tight mx-auto max-w-3xl"
                    />
                </div>

                {/* ScrollReveal body copy + stats */}
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <ScrollReveal
                            enableBlur={true}
                            blurStrength={5}
                            baseOpacity={0.05}
                            containerClassName="!my-0"
                            textClassName="!text-2xl !font-light text-white/75 leading-relaxed"
                        >
                            Aurelia Residences represents the pinnacle of coastal luxury. Each residence is masterfully designed to capture unparalleled light, creating an environment that feels both expansive and deeply personal.
                        </ScrollReveal>
                        <ScrollReveal
                            enableBlur={true}
                            blurStrength={4}
                            baseOpacity={0.05}
                            containerClassName="!my-0 mt-4"
                            textClassName="!text-2xl !font-light text-white/75 leading-relaxed"
                        >
                            It is more than an address. It is a legacy woven into the fabric of the ocean horizon.
                        </ScrollReveal>
                    </div>

                    {/* Stats — fixed grid cols so numbers & labels always align */}
                    <div className="flex flex-col">
                        {[
                            { num: "192", label: "Exclusive Residences" },
                            { num: "54F", label: "Floors of Elevation" },
                            { num: "4", label: "Penthouses Available" },
                            { num: "270°", label: "Panoramic Ocean Views" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="grid items-center border-b border-white/10 py-5"
                                style={{ gridTemplateColumns: "7rem 1fr", gap: "1rem" }}
                            >
                                <span className="text-4xl md:text-5xl font-serif text-brand-gold leading-none tabular-nums">
                                    {stat.num}
                                </span>
                                <span className="text-brand-text text-xs uppercase tracking-widest leading-none">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                        <Magnetic strength={25}>
                            <button className="mt-8 flex items-center space-x-4 text-brand-heading hover:text-brand-gold transition duration-300 group w-fit">
                                <span className="uppercase tracking-widest text-sm border-b border-brand-heading pb-1 group-hover:border-brand-gold transition-colors">
                                    Discover Residences
                                </span>
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                            </button>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </section>
    );
}
