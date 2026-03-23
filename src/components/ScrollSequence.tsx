"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

export function ScrollSequence({
    children,
}: {
    children: (scrollYProgress: MotionValue<number>) => React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 192;

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(3, "0");
            img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    drawFrame(0);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);

        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                drawFrame(Math.round(frameIndex.get()));
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Scoped to THIS container — 0 at top, 1 at bottom of 500vh
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    const drawFrame = (index: number) => {
        if (!canvasRef.current || !images[index]) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        const canvas = canvasRef.current;

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        } else {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        drawFrame(Math.round(latest));
    });

    return (
        <div ref={containerRef} className="relative w-full bg-[#0B0B0C]" style={{ height: "500vh" }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-0 pointer-events-none" />

                <div className="absolute inset-0 z-10 w-full h-full">
                    {/* Pass the container-scoped progress to children via render prop */}
                    {children(scrollYProgress)}
                </div>
            </div>
        </div>
    );
}
