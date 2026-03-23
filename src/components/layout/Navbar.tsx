"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const navItems = [
        { name: "Residences", href: "#residences" },
        { name: "Architecture", href: "#architecture" },
        { name: "Lifestyle", href: "#lifestyle" },
        { name: "Amenities", href: "#amenities" },
        { name: "Gallery", href: "#gallery" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${isScrolled
                    ? "bg-[#0B0B0C]/70 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <Hexagon className="w-6 h-6 text-brand-gold" />
                <span className="font-serif text-xl tracking-wide text-brand-heading">
                    Aurelia Residences
                </span>
            </div>

            {/* Center: Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm tracking-widest uppercase text-brand-text hover:text-brand-gold transition-colors duration-300"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Right: CTA */}
            <div className="flex items-center">
                <Magnetic strength={30}>
                    <button className="px-6 py-2.5 bg-brand-gold text-[#0B0B0C] text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-white transition-colors duration-300">
                        Book Private Tour
                    </button>
                </Magnetic>
            </div>
        </motion.nav>
    );
}
