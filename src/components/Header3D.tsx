import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Header3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 400);
    camera.position.set(0, 0, 36);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Subtle Ambient & Point Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const centerGlow = new THREE.PointLight(0x00f0ff, 2.2, 80);
    centerGlow.position.set(0, 0, 15);
    scene.add(centerGlow);

    const amberAccent = new THREE.PointLight(0xf59e0b, 1.8, 80);
    amberAccent.position.set(0, 0, 10);
    scene.add(amberAccent);

    // =========================================================================
    // 3D GAMING HOLOGRAPHIC RADAR & TACTICAL RETICLE IN EXACT CENTER OF HEADER
    // =========================================================================
    const centerHUD = new THREE.Group();
    centerHUD.position.set(0, 0, 0); // EXACT MIDDLE
    scene.add(centerHUD);

    // 1. Center Floating 3D VIP Tactical Core (Subtle & Sleek)
    const coreGeo = new THREE.OctahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.7,
    });
    const centerCore = new THREE.Mesh(coreGeo, coreMat);
    centerHUD.add(centerCore);

    // Wireframe glow over center core
    const coreWireGeo = new THREE.OctahedronGeometry(1.75, 0);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const coreWire = new THREE.Mesh(coreWireGeo, coreWireMat);
    centerHUD.add(coreWire);

    // 2. Dual Concentric 3D Tactical Rings (Scope / Radar)
    const ringGeo1 = new THREE.TorusGeometry(3.8, 0.08, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    centerHUD.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(5.4, 0.06, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    centerHUD.add(ring2);

    // 3. Four 3D Precision Tactical Crosshair Ticks (Gaming HUD Reticle)
    const ticksGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const tickGeo = new THREE.BoxGeometry(0.12, 1.4, 0.12);
      const tickMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.65,
      });
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(Math.cos(angle) * 4.4, Math.sin(angle) * 4.4, 0);
      tick.rotation.z = angle;
      ticksGroup.add(tick);
    }
    centerHUD.add(ticksGroup);

    // 4. Subtle 3D Horizontal Cyber Scanner Wave (Pulse across center)
    const scanGeo = new THREE.PlaneGeometry(38, 0.15);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35,
    });
    const scanLine = new THREE.Mesh(scanGeo, scanMat);
    scanLine.position.set(0, 0, -2);
    centerHUD.add(scanLine);

    // 5. Subtle Floating Center Micro-Sparks
    const sparkCount = 35;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkCol = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      sparkPos[i * 3] = (Math.random() - 0.5) * 32;
      sparkPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      if (i % 2 === 0) {
        sparkCol[i * 3] = 0.98;
        sparkCol[i * 3 + 1] = 0.75;
        sparkCol[i * 3 + 2] = 0.1;
      } else {
        sparkCol[i * 3] = 0.0;
        sparkCol[i * 3 + 1] = 0.92;
        sparkCol[i * 3 + 2] = 1.0;
      }
    }

    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    sparkGeo.setAttribute('color', new THREE.BufferAttribute(sparkCol, 3));

    const sparkMat = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    centerHUD.add(sparks);

    // Mouse Interaction
    let targetX = 0;
    let currentX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      currentX += (targetX - currentX) * 0.06;

      // Rotate center 3D core & wireframe
      centerCore.rotation.y = time * 0.9;
      centerCore.rotation.x = Math.sin(time * 0.6) * 0.3;
      coreWire.rotation.y = -time * 0.7;

      // Rotate tactical rings in opposite directions
      ring1.rotation.z = time * 0.45;
      ring1.rotation.x = Math.sin(time * 0.5) * 0.25;

      ring2.rotation.z = -time * 0.35;
      ring2.rotation.y = Math.cos(time * 0.4) * 0.2;

      ticksGroup.rotation.z = time * 0.2;

      // Gentle floating elevation & mouse tracking in center
      centerHUD.position.y = Math.sin(time * 1.2) * 0.5;
      centerHUD.rotation.y = currentX * 0.25;

      // Pulse scan line
      scanLine.scale.x = 0.85 + Math.sin(time * 1.8) * 0.2;
      scanMat.opacity = 0.2 + Math.sin(time * 2) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      scanGeo.dispose();
      scanMat.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60 flex items-center justify-center"
      aria-hidden="true"
    />
  );
};
