"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { Hexagon } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-16 bg-[#050506] border-t border-white/5 relative z-10 px-8 md:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Brand */}
                <div className="flex flex-col gap-4 max-w-xs">
                    <div className="flex items-center space-x-2">
                        <Hexagon className="w-5 h-5 text-brand-gold" />
                        <span className="font-serif text-lg tracking-wide text-white">Aurelia Residences</span>
                    </div>
                    <p className="text-brand-text text-xs leading-relaxed">
                        The pinnacle of coastal luxury living. An ocean-view penthouse experience designed to redefine modern architecture.
                    </p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-xs text-brand-text uppercase tracking-widest">
                    <div className="flex flex-col gap-3">
                        <p className="text-white/40 mb-1">Explore</p>
                        {["Residences", "Architecture", "Lifestyle"].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brand-gold transition-colors">{l}</a>)}
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-white/40 mb-1">Experience</p>
                        {["Amenities", "Gallery", "Location"].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brand-gold transition-colors">{l}</a>)}
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-white/40 mb-1">Legal</p>
                        {["Privacy Policy", "Terms of Service", "RERA Info"].map(l => <a key={l} href="#" className="hover:text-brand-gold transition-colors">{l}</a>)}
                    </div>
                </div>

                {/* CTA */}
                <div>
                    <Magnetic strength={20}>
                        <button className="px-8 py-3 bg-brand-gold text-black text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300">
                            Book Private Tour
                        </button>
                    </Magnetic>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-white/20">
                <p>© 2026 Aurelia Residences. All rights reserved.</p>
                <p>Mumbai, India · Marine Drive Skyline</p>
            </div>
        </footer>
    );
}
