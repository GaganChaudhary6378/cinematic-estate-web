"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X, ChevronLeft, ChevronRight, Bed, Bath, Home,
    MapPin, DollarSign, Ruler, Check, Phone
} from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
export interface Residence {
    id: number;
    title: string;
    subtitle: string;
    accent: string;
    price: string;
    area: string;
    beds: number;
    baths: number;
    floor: string;
    description: string;
    highlights: string[];
    amenities: string[];
    nearby: string[];
    floorPlan: string; // unsplash
    images: { url: string; caption: string }[];
    specs: { label: string; value: string }[];
}

export const residences: Residence[] = [
    {
        id: 1,
        title: "The Grand Living Suite",
        subtitle: "Penthouse A · West Wing",
        accent: "#C9A86A",
        price: "₹ 7.2 Cr onwards",
        area: "3,480 sq ft",
        beds: 3,
        baths: 3,
        floor: "42nd Floor",
        description:
            "The Grand Living Suite is the definitive expression of coastal luxury. Sweeping floor-to-ceiling glass frames an unbroken ocean horizon. Italian Calacatta marble flooring flows throughout the open-plan living and dining area, punctuated by bespoke oak joinery. Golden hour sunlight transforms the space into a living gallery at dusk.",
        highlights: [
            "Calacatta marble flooring throughout",
            "10-ft floor-to-ceiling glass facade",
            "Private chef's pantry & wine cellar",
            "Smart home automation (Crestron)",
            "Private balcony with infinity plunge pool",
            "Built-in Bulthaup cabinetry",
        ],
        amenities: [
            "Infinity Pool", "Concierge 24/7", "Private Elevator", "Spa Access",
            "Private Parking x2", "Security Suite", "Rooftop Access", "Gym",
        ],
        nearby: [
            "Marine Drive — 2 min walk",
            "Nariman Point CBD — 5 min drive",
            "Oberoi Hotel — 800m",
            "NCPA Arts Centre — 1.2 km",
            "Cuffe Parade Marina — 3 km",
        ],
        floorPlan: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
        images: [
            { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90", caption: "Living Room" },
            { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90", caption: "Ocean View" },
            { url: "https://images.unsplash.com/photo-1618219940028-e68f7b8d5f63?w=1200&q=90", caption: "Master Bedroom" },
            { url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=90", caption: "Master Bath" },
            { url: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&q=90", caption: "Private Sky Terrace" },
        ],
        specs: [
            { label: "Unit Type", value: "3 BHK Penthouse" },
            { label: "Total Area", value: "3,480 sq ft" },
            { label: "Carpet Area", value: "2,890 sq ft" },
            { label: "Floor", value: "42nd (of 54)" },
            { label: "Facing", value: "West — Ocean Facing" },
            { label: "Possession", value: "Q3 2028" },
        ],
    },
    {
        id: 2,
        title: "The Chef's Kitchen",
        subtitle: "Penthouse B · East Wing",
        accent: "#B87B43",
        price: "₹ 5.8 Cr onwards",
        area: "2,750 sq ft",
        beds: 2,
        baths: 2,
        floor: "38th Floor",
        description:
            "Conceived for the discerning host, Penthouse B centres around a culinary masterpiece: a Bulthaup kitchen island carved from a single slab of Calacatta Viola marble. Miele appliances and a climate-controlled wine cabinet make this residence as functional as it is beautiful. A private dining balcony overlooks the city skyline.",
        highlights: [
            "Bulthaup B3 kitchen — full suite",
            "Miele appliances throughout",
            "Calacatta Viola marble island",
            "Climate-controlled wine room (200+ bottles)",
            "Dining balcony with skyline view",
            "Butler's pantry & service entrance",
        ],
        amenities: [
            "Chef's Tasting Room", "Private Dining", "24/7 Concierge", "Private Elevator",
            "Sommelier Service", "Valet Parking x2", "Gym & Spa", "Rooftop Terrace",
        ],
        nearby: [
            "Colaba Causeway — 4 min drive",
            "Taj Mahal Palace Hotel — 1.5 km",
            "Ferry Wharf — 1.8 km",
            "Art Deco District — 3 min walk",
            "Fine Dining Mile — 500m",
        ],
        floorPlan: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
        images: [
            { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=90", caption: "Chef's Kitchen" },
            { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90", caption: "Living Area" },
            { url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=90", caption: "Lounge" },
            { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=90", caption: "Master Kitchen Detail" },
            { url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=90", caption: "Entry Foyer" },
        ],
        specs: [
            { label: "Unit Type", value: "2 BHK + Study" },
            { label: "Total Area", value: "2,750 sq ft" },
            { label: "Carpet Area", value: "2,240 sq ft" },
            { label: "Floor", value: "38th (of 54)" },
            { label: "Facing", value: "East — City Skyline" },
            { label: "Possession", value: "Q1 2028" },
        ],
    },
    {
        id: 3,
        title: "The Master Retreat",
        subtitle: "Sky Villa C · South Wing",
        accent: "#C9A86A",
        price: "₹ 9.4 Cr onwards",
        area: "4,100 sq ft",
        beds: 4,
        baths: 4,
        floor: "48th Floor",
        description:
            "The Master Retreat is a sanctuary above the clouds. Four en-suite bedrooms, each with private balconies. The master wing spans the entire southern facade — a 22-foot bedroom with walk-in dressing room, therapeutic spa bath, and direct terrace access. Designed at the intersection of privacy and panorama.",
        highlights: [
            "22-ft master bedroom wing",
            "4 bespoke en-suite bathrooms",
            "Walk-in wardrobe with island dressing",
            "Therapeutic Kohler spa bath",
            "Two private wrap-around terraces",
            "Home theatre room & library",
        ],
        amenities: [
            "Private Pool Terrace", "SPA Suite Access", "4 Private Elevators", "Nanny Suite",
            "3 Parking Bays", "Pet Concierge", "24/7 Medical Support", "Helipad Access",
        ],
        nearby: [
            "Malabar Hill — 6 min drive",
            "Hanging Gardens — 3 km",
            "American School Mumbai — 4 km",
            "Breach Candy Hospital — 2.5 km",
            "Willingdon Sports Club — 5 km",
        ],
        floorPlan: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
        images: [
            { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90", caption: "Master Bedroom" },
            { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90", caption: "Living Hall" },
            { url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=90", caption: "Spa Bathroom" },
            { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=90", caption: "South Terrace" },
            { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=90", caption: "Library & Study" },
        ],
        specs: [
            { label: "Unit Type", value: "4 BHK Sky Villa" },
            { label: "Total Area", value: "4,100 sq ft" },
            { label: "Carpet Area", value: "3,420 sq ft" },
            { label: "Floor", value: "48th (of 54)" },
            { label: "Facing", value: "South — Panoramic 270°" },
            { label: "Possession", value: "Q4 2028" },
        ],
    },
    {
        id: 4,
        title: "The Sky Terrace",
        subtitle: "Crown Penthouse D · North Wing",
        accent: "#B87B43",
        price: "₹ 14.8 Cr onwards",
        area: "5,600 sq ft",
        beds: 5,
        baths: 5,
        floor: "52nd–53rd Floor (Duplex)",
        description:
            "The Crown of Aurelia. A duplex sky residence spanning two floors at the pinnacle of the tower, with a 4,000 sq ft private sky terrace featuring a vanishing-edge infinity pool, an outdoor summer kitchen, and a garden pavilion. As the sun sets, the terrace becomes a private amphitheatre commanding the full Mumbai coastline.",
        highlights: [
            "Duplex layout across 52nd & 53rd floors",
            "4,000 sq ft private sky terrace",
            "Vanishing-edge infinity pool (25m)",
            "Outdoor summer kitchen & BBQ pavilion",
            "Rooftop garden — curated by landscape architects",
            "Private helipad (shared rooftop)",
        ],
        amenities: [
            "Private Sky Pool", "Helipad Access", "Butler Service", "5 Parking Bays",
            "Residence Manager", "Private Cinema", "Full SPA Floor", "Wine Vault",
        ],
        nearby: [
            "Bandra-Worli Sea Link — 10 min drive",
            "NSCI Club — 8 km",
            "Breach Candy Club — 6 km",
            "Shri Siddhivinayak Temple — 7 km",
            "International Airport — 25 min",
        ],
        floorPlan: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
        images: [
            { url: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&q=90", caption: "Sky Terrace" },
            { url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90", caption: "Infinity Pool" },
            { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90", caption: "Main Suite" },
            { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90", caption: "Grand Living" },
            { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=90", caption: "Panoramic View" },
        ],
        specs: [
            { label: "Unit Type", value: "5 BHK Crown Duplex" },
            { label: "Total Area", value: "5,600 sq ft" },
            { label: "Carpet Area", value: "4,780 sq ft" },
            { label: "Floor", value: "52nd–53rd (Duplex)" },
            { label: "Facing", value: "North — Full Coastline" },
            { label: "Possession", value: "Q4 2028" },
        ],
    },
];

/* ─────────────────────────────────────────────
   Image Gallery
───────────────────────────────────────────── */
function ImageGallery({ images }: { images: Residence["images"] }) {
    const [active, setActive] = useState(0);

    const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
    const next = () => setActive((a) => (a + 1) % images.length);

    return (
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "340px" }}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={active}
                    src={images[active].url}
                    alt={images[active].caption}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                />
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-white text-sm tracking-widest uppercase">
                    {images[active].caption}
                </p>
            </div>

            {/* Arrows */}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/70 transition-all"
            >
                <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/70 transition-all"
            >
                <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === active ? "bg-[#C9A86A] w-4" : "bg-white/40"}`}
                    />
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Modal
───────────────────────────────────────────── */
export function ResidenceModal({
    residence,
    onClose,
}: {
    residence: Residence | null;
    onClose: () => void;
}) {
    const [activeTab, setActiveTab] = useState<"overview" | "amenities" | "location" | "floorplan">("overview");

    // lock body scroll
    useEffect(() => {
        if (residence) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [residence]);

    // close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    const tabs = [
        { key: "overview", label: "Overview" },
        { key: "amenities", label: "Amenities" },
        { key: "location", label: "Location" },
        { key: "floorplan", label: "Floor Plan" },
    ] as const;

    return (
        <AnimatePresence>
            {residence && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/75 backdrop-blur-md z-[1000]"
                        onClick={onClose}
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-4 md:inset-8 lg:inset-12 z-[1001] rounded-3xl overflow-hidden flex flex-col"
                        style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.08)" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* ── Top bar ── */}
                        <div className="flex items-start justify-between p-6 md:p-8 border-b border-white/10 shrink-0">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] mb-1" style={{ color: residence.accent }}>
                                    {residence.subtitle}
                                </p>
                                <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                    {residence.title}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="ml-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all shrink-0"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* ── Scrollable body ── */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="flex flex-col lg:flex-row gap-0 h-full">

                                {/* Left — Gallery + Price Strip */}
                                <div className="w-full lg:w-[48%] p-6 md:p-8 shrink-0 border-b lg:border-b-0 lg:border-r border-white/10">
                                    <ImageGallery images={residence.images} />

                                    {/* Price / key stats strip */}
                                    <div
                                        className="mt-5 rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4"
                                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                                    >
                                        <div className="flex flex-col items-center">
                                            <Home className="w-4 h-4 mb-1 text-white/40" />
                                            <span className="text-white text-sm font-medium">{residence.area}</span>
                                            <span className="text-white/40 text-xs mt-0.5">Total Area</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Bed className="w-4 h-4 mb-1 text-white/40" />
                                            <span className="text-white text-sm font-medium">{residence.beds} BHK</span>
                                            <span className="text-white/40 text-xs mt-0.5">Bedrooms</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Bath className="w-4 h-4 mb-1 text-white/40" />
                                            <span className="text-white text-sm font-medium">{residence.baths}</span>
                                            <span className="text-white/40 text-xs mt-0.5">Bathrooms</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Ruler className="w-4 h-4 mb-1 text-white/40" />
                                            <span className="text-white text-sm font-medium">{residence.floor}</span>
                                            <span className="text-white/40 text-xs mt-0.5">Level</span>
                                        </div>
                                    </div>

                                    {/* Price + CTA */}
                                    <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div>
                                            <p className="text-white/40 text-xs uppercase tracking-widest">Starting Price</p>
                                            <p className="font-serif text-2xl mt-1" style={{ color: residence.accent }}>
                                                {residence.price}
                                            </p>
                                        </div>
                                        <Magnetic strength={20}>
                                            <button
                                                className="flex items-center space-x-2 px-7 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black"
                                                style={{ background: residence.accent, color: "#0B0B0C" }}
                                            >
                                                <Phone className="w-4 h-4" />
                                                <span>Request a Tour</span>
                                            </button>
                                        </Magnetic>
                                    </div>
                                </div>

                                {/* Right — Tabs + Content */}
                                <div className="w-full lg:flex-1 flex flex-col">
                                    {/* Tab bar */}
                                    <div className="flex border-b border-white/10 shrink-0 px-6 md:px-8">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.key}
                                                onClick={() => setActiveTab(tab.key)}
                                                className={`py-4 px-4 text-xs font-medium uppercase tracking-widest border-b-2 transition-all ${activeTab === tab.key
                                                        ? "border-[#C9A86A] text-white"
                                                        : "border-transparent text-white/40 hover:text-white/70"
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Tab content */}
                                    <div className="flex-1 overflow-y-auto p-6 md:p-8">
                                        <AnimatePresence mode="wait">
                                            {activeTab === "overview" && (
                                                <motion.div
                                                    key="overview"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="space-y-8"
                                                >
                                                    <p className="text-white/65 leading-relaxed text-sm">{residence.description}</p>

                                                    {/* Specs grid */}
                                                    <div>
                                                        <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Unit Specifications</p>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {residence.specs.map((s) => (
                                                                <div key={s.label} className="p-3 rounded-xl border border-white/8 bg-white/[0.03]">
                                                                    <p className="text-white/40 text-xs mb-1">{s.label}</p>
                                                                    <p className="text-white text-sm font-medium">{s.value}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Highlights */}
                                                    <div>
                                                        <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Key Highlights</p>
                                                        <ul className="space-y-2">
                                                            {residence.highlights.map((h) => (
                                                                <li key={h} className="flex items-start space-x-3">
                                                                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: residence.accent }} />
                                                                    <span className="text-white/70 text-sm">{h}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {activeTab === "amenities" && (
                                                <motion.div
                                                    key="amenities"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="space-y-6"
                                                >
                                                    <p className="text-white/40 text-sm">
                                                        Exclusive amenities curated for residents of {residence.title}.
                                                    </p>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {residence.amenities.map((a) => (
                                                            <div
                                                                key={a}
                                                                className="flex items-center space-x-3 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:border-[#C9A86A]/30 transition-all"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 rounded-full shrink-0"
                                                                    style={{ background: residence.accent }}
                                                                />
                                                                <span className="text-white/80 text-sm">{a}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {activeTab === "location" && (
                                                <motion.div
                                                    key="location"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="rounded-2xl overflow-hidden" style={{ height: 200 }}>
                                                        {/* Unsplash city aerial as map placeholder */}
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900&q=80"
                                                            alt="Mumbai Aerial"
                                                            className="w-full h-full object-cover opacity-60"
                                                        />
                                                        <div className="relative -mt-10 ml-4 inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium text-white" style={{ background: residence.accent }}>
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            <span>Marine Drive Skyline, Mumbai</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Nearby Landmarks</p>
                                                        <ul className="space-y-3">
                                                            {residence.nearby.map((n) => (
                                                                <li key={n} className="flex items-center space-x-3">
                                                                    <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: residence.accent }} />
                                                                    <span className="text-white/70 text-sm">{n}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {activeTab === "floorplan" && (
                                                <motion.div
                                                    key="floorplan"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="space-y-4"
                                                >
                                                    <p className="text-white/40 text-sm">
                                                        Indicative floor plan. Final layout subject to change.
                                                    </p>
                                                    <div className="rounded-2xl overflow-hidden border border-white/10">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src={residence.floorPlan}
                                                            alt="Floor Plan"
                                                            className="w-full object-contain"
                                                            style={{ maxHeight: 380, background: "#1a1a1c" }}
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                                        {residence.specs.slice(0, 4).map((s) => (
                                                            <div key={s.label} className="p-3 rounded-xl border border-white/8 bg-white/[0.03]">
                                                                <p className="text-white/40 text-xs mb-1">{s.label}</p>
                                                                <p className="text-white text-sm font-medium">{s.value}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <Magnetic strength={15}>
                                                        <button
                                                            className="mt-2 w-full py-3 rounded-xl border text-sm font-medium tracking-widest uppercase transition-all hover:opacity-80"
                                                            style={{ borderColor: residence.accent, color: residence.accent }}
                                                        >
                                                            <DollarSign className="w-4 h-4 inline mr-2" />
                                                            Download Floor Plan
                                                        </button>
                                                    </Magnetic>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
