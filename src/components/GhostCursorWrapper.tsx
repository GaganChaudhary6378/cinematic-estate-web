"use client";

import GhostCursor from "@/components/GhostCursor";

export function GhostCursorWrapper() {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-[9999]"
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
        >
            <GhostCursor
                color="#C9A86A"
                trailLength={35}
                inertia={0.6}
                brightness={1.4}
                bloomStrength={0.15}
                bloomRadius={1.2}
                mixBlendMode="screen"
                zIndex={9999}
            />
        </div>
    );
}
