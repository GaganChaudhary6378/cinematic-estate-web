"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function ModelSection() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = mountRef.current;
        if (!el) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#0B0B0C");

        const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100);
        camera.position.set(12, 12, 12);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(el.clientWidth, el.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        el.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.07;
        controls.minDistance = 8;
        controls.maxDistance = 25;
        controls.maxPolarAngle = Math.PI / 2.1;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;

        // Material palette
        const wallMat = new THREE.MeshStandardMaterial({ color: "#1a1612", roughness: 0.9, metalness: 0.1 });
        const floorMat = new THREE.MeshStandardMaterial({ color: "#2a2016", roughness: 0.7, metalness: 0.2 });
        const goldMat = new THREE.MeshStandardMaterial({ color: "#C9A86A", roughness: 0.3, metalness: 0.8 });
        const glassMat = new THREE.MeshStandardMaterial({ color: "#87CEEB", roughness: 0.0, metalness: 0.1, transparent: true, opacity: 0.3 });
        const accentMat = new THREE.MeshStandardMaterial({ color: "#B87B43", roughness: 0.5, metalness: 0.6 });

        const addBox = (
            w: number, h: number, d: number,
            x: number, y: number, z: number,
            mat: THREE.Material
        ) => {
            const geo = new THREE.BoxGeometry(w, h, d);
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x, y, z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            scene.add(mesh);
            return mesh;
        };

        // Floor
        addBox(14, 0.1, 10, 0, 0, 0, floorMat);
        // Outer walls
        addBox(14, 2.2, 0.15, 0, 1.1, -5, wallMat);    // back
        addBox(14, 2.2, 0.15, 0, 1.1, 5, glassMat);     // front (glass facade)
        addBox(0.15, 2.2, 10, -7, 1.1, 0, wallMat);     // left
        addBox(0.15, 2.2, 10, 7, 1.1, 0, wallMat);      // right

        // Interior walls (2BHK layout)
        addBox(0.12, 2.2, 5, 1, 1.1, -2.5, wallMat);    // bedroom divider
        addBox(5, 2.2, 0.12, -3.5, 1.1, 0, wallMat);    // living/bedroom divide

        // Gold accents — skirting / trim
        addBox(14, 0.07, 0.07, 0, 0.07, -4.92, goldMat);
        addBox(14, 0.07, 0.07, 0, 0.07, 4.92, goldMat);
        addBox(0.07, 0.07, 10, -6.92, 0.07, 0, goldMat);
        addBox(0.07, 0.07, 10, 6.92, 0.07, 0, goldMat);

        // Furniture — living room sofa (simplified)
        addBox(3, 0.4, 1.2, -4, 0.25, 2.5, accentMat);
        addBox(3, 0.7, 0.3, -4, 0.45, 3.1, accentMat);
        // Coffee table
        addBox(1.2, 0.08, 0.8, -4, 0.15, 1.6, goldMat);

        // Bedroom 1 – bed
        addBox(2.2, 0.35, 1.8, 4.5, 0.2, -2.5, accentMat);
        addBox(2.2, 0.5, 0.3, 4.5, 0.38, -3.35, wallMat);
        // Bedroom 2 – bed
        addBox(1.8, 0.35, 1.5, -1.5, 0.2, -3.2, accentMat);
        // Bathroom fixtures (simplified)
        addBox(0.8, 0.4, 1.4, 5.5, 0.2, 1.5, wallMat);
        // Kitchen island
        addBox(1.5, 0.6, 0.7, 3.5, 0.3, 1.5, goldMat);

        // Room label planes (floating gold lines)
        const lineMat = new THREE.LineBasicMaterial({ color: "#C9A86A" });
        const addRect = (w: number, d: number, x: number, z: number) => {
            const pts = [
                new THREE.Vector3(-w / 2, 0.12, -d / 2),
                new THREE.Vector3(w / 2, 0.12, -d / 2),
                new THREE.Vector3(w / 2, 0.12, d / 2),
                new THREE.Vector3(-w / 2, 0.12, d / 2),
                new THREE.Vector3(-w / 2, 0.12, -d / 2),
            ];
            const geo = new THREE.BufferGeometry().setFromPoints(pts);
            const line = new THREE.Line(geo, lineMat);
            line.position.set(x, 0, z);
            scene.add(line);
        };
        addRect(8, 5, -3.5, 2.5);   // living area
        addRect(5, 5, 4, -2.5);      // bedroom 1
        addRect(3, 4, -1.5, -3.2);   // bedroom 2

        // Lighting
        const ambient = new THREE.AmbientLight("#FFE8C8", 0.6);
        scene.add(ambient);

        const sun = new THREE.DirectionalLight("#FFF3DC", 2);
        sun.position.set(10, 15, 8);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 1024;
        sun.shadow.mapSize.height = 1024;
        scene.add(sun);

        const fill = new THREE.DirectionalLight("#C9A86A", 0.4);
        fill.position.set(-8, 6, -5);
        scene.add(fill);

        // Resize
        const onResize = () => {
            if (!el) return;
            camera.aspect = el.clientWidth / el.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(el.clientWidth, el.clientHeight);
        };
        window.addEventListener("resize", onResize);

        let animId: number;
        const animate = () => {
            animId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", onResize);
            controls.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <section
            id="lifestyle"
            className="w-full bg-[#080809] relative z-10 py-24"
        >
            <div className="max-w-7xl mx-auto px-8 md:px-16 mb-12 flex flex-col md:flex-row justify-between items-start">
                <div>
                    <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">
                        Interactive Floor Plan
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                        The 2BHK <br />
                        <span className="italic text-brand-gold">Penthouse Layout</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-3 mt-6 md:mt-0 max-w-xs">
                    <p className="text-brand-text text-sm leading-relaxed">
                        Drag to orbit. Scroll to zoom. Pinch on mobile. Experience the spatial flow of each zone before you visit in person.
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                        <span className="flex items-center space-x-2 text-xs text-brand-text">
                            <span className="w-3 h-3 rounded-sm bg-brand-gold inline-block" />
                            <span>Gold Accents</span>
                        </span>
                        <span className="flex items-center space-x-2 text-xs text-brand-text">
                            <span className="w-3 h-3 rounded-sm bg-blue-300/50 inline-block" />
                            <span>Glass Facade</span>
                        </span>
                    </div>
                </div>
            </div>

            <div
                ref={mountRef}
                className="w-full mx-auto rounded-2xl overflow-hidden border border-white/10"
                style={{ height: "65vh", maxWidth: "1280px", paddingLeft: "2rem", paddingRight: "2rem" }}
            />

            {/* Legend */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "Living & Dining", area: "480 sq ft" },
                    { label: "Master Bedroom", area: "260 sq ft" },
                    { label: "Bedroom 2", area: "200 sq ft" },
                    { label: "Kitchen & Bath", area: "180 sq ft" },
                ].map((room) => (
                    <div key={room.label} className="border-l-2 border-brand-gold/40 pl-4">
                        <p className="text-white text-sm font-medium">{room.label}</p>
                        <p className="text-brand-gold text-xs mt-1">{room.area}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
