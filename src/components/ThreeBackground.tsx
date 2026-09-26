import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  intensity?: number;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ intensity = 1 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fxEnabled, setFxEnabled] = useState(true);

  useEffect(() => {
    if (!containerRef.current || !fxEnabled) return;

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // --- Scene, Camera & WebGL Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040711, 0.0015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1200);
    camera.position.set(0, 15, 80);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // --- Soft Ambient & Accent Lighting ---
    const ambientLight = new THREE.AmbientLight(0x0e172a, 1.8);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x00f0ff, 3.0 * intensity, 350);
    cyanPoint.position.set(-45, 20, 30);
    scene.add(cyanPoint);

    const amberPoint = new THREE.PointLight(0xf59e0b, 3.2 * intensity, 350);
    amberPoint.position.set(45, 10, 30);
    scene.add(amberPoint);

    // --- Helper: Soft Glow Texture ---
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        gradient.addColorStop(0.25, 'rgba(0, 240, 255, 0.7)');
        gradient.addColorStop(0.6, 'rgba(245, 158, 11, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const glowTexture = createGlowTexture();

    // =========================================================================
    // 1. SUBTLE CYBER-GRID HORIZON TERRAIN (Deep background, gentle waves)
    // =========================================================================
    const gridCols = 80;
    const gridRows = 60;
    const gridCount = gridCols * gridRows;

    const gridGeometry = new THREE.BufferGeometry();
    const gridPositions = new Float32Array(gridCount * 3);
    const gridColors = new Float32Array(gridCount * 3);

    const gridWidth = 280;
    const gridDepth = 220;

    let pIdx = 0;
    for (let i = 0; i < gridRows; i++) {
      for (let j = 0; j < gridCols; j++) {
        const u = (j / (gridCols - 1) - 0.5) * gridWidth;
        const v = (i / (gridRows - 1) - 0.5) * gridDepth;

        gridPositions[pIdx * 3] = u;
        gridPositions[pIdx * 3 + 1] = 0;
        gridPositions[pIdx * 3 + 2] = v - 30;

        const ratio = j / gridCols;
        if (ratio < 0.5) {
          gridColors[pIdx * 3] = THREE.MathUtils.lerp(0.0, 0.96, ratio * 2);
          gridColors[pIdx * 3 + 1] = THREE.MathUtils.lerp(0.9, 0.7, ratio * 2);
          gridColors[pIdx * 3 + 2] = THREE.MathUtils.lerp(1.0, 0.1, ratio * 2);
        } else {
          gridColors[pIdx * 3] = THREE.MathUtils.lerp(0.96, 0.05, (ratio - 0.5) * 2);
          gridColors[pIdx * 3 + 1] = THREE.MathUtils.lerp(0.7, 0.85, (ratio - 0.5) * 2);
          gridColors[pIdx * 3 + 2] = THREE.MathUtils.lerp(0.1, 1.0, (ratio - 0.5) * 2);
        }

        pIdx++;
      }
    }

    gridGeometry.setAttribute('position', new THREE.BufferAttribute(gridPositions, 3));
    gridGeometry.setAttribute('color', new THREE.BufferAttribute(gridColors, 3));

    const gridMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: glowTexture,
      transparent: true,
      opacity: 0.65, // Subtle, soft opacity
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const gridMesh = new THREE.Points(gridGeometry, gridMaterial);
    gridMesh.position.set(0, -32, -20);
    gridMesh.rotation.x = 0.2;
    scene.add(gridMesh);

    // =========================================================================
    // 2. GENTLE FLOATING GAMING PARTICLES & AMBIENT EMBERS (Lightweight & smooth)
    // =========================================================================
    const emberCount = 260;
    const emberGeo = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    const emberColors = new Float32Array(emberCount * 3);
    const emberSpeeds = new Float32Array(emberCount);

    for (let i = 0; i < emberCount; i++) {
      emberPositions[i * 3] = (Math.random() - 0.5) * 200;
      emberPositions[i * 3 + 1] = (Math.random() - 0.5) * 150;
      emberPositions[i * 3 + 2] = (Math.random() - 0.5) * 90 - 10;

      emberSpeeds[i] = 0.05 + Math.random() * 0.1;

      if (i % 2 === 0) {
        emberColors[i * 3] = 0.98;
        emberColors[i * 3 + 1] = 0.72;
        emberColors[i * 3 + 2] = 0.08;
      } else {
        emberColors[i * 3] = 0.02;
        emberColors[i * 3 + 1] = 0.92;
        emberColors[i * 3 + 2] = 1.0;
      }
    }

    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    emberGeo.setAttribute('color', new THREE.BufferAttribute(emberColors, 3));

    const emberMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: glowTexture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const embers = new THREE.Points(emberGeo, emberMat);
    scene.add(embers);

    // =========================================================================
    // 3. MOUSE PARALLAX & SMOOTH SCROLL RESPONSE
    // =========================================================================
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // =========================================================================
    // 4. ANIMATION LOOP
    // =========================================================================
    let animId: number;
    const clock = new THREE.Clock();
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const time = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      scrollY += (targetScrollY - scrollY) * 0.05;

      camera.position.x = mouse.x * 10;
      camera.position.y = 15 + mouse.y * 8 - scrollY * 0.018;
      camera.lookAt(0, -scrollY * 0.014, 0);

      // Animate subtle terrain waves
      const gPos = gridGeometry.attributes.position.array as Float32Array;
      let gIdx = 0;
      for (let i = 0; i < gridRows; i++) {
        for (let j = 0; j < gridCols; j++) {
          const u = (j / gridCols) * Math.PI * 4;
          const v = (i / gridRows) * Math.PI * 4;

          const waveElevation =
            Math.sin(u * 0.6 + time * 1.1) * 4.5 +
            Math.cos(v * 0.5 + time * 0.9) * 3.5;

          gPos[gIdx * 3 + 1] = waveElevation;
          gIdx++;
        }
      }
      gridGeometry.attributes.position.needsUpdate = true;

      // Animate embers drifting smoothly
      const ePos = emberGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < emberCount; i++) {
        ePos[i * 3 + 1] += emberSpeeds[i];
        if (ePos[i * 3 + 1] > 80) {
          ePos[i * 3 + 1] = -80;
          ePos[i * 3] = (Math.random() - 0.5) * 200;
        }
      }
      emberGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      gridGeometry.dispose();
      gridMaterial.dispose();
      glowTexture.dispose();
      emberGeo.dispose();
      emberMat.dispose();
      renderer.dispose();
    };
  }, [fxEnabled, intensity]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-opacity duration-700"
        style={{ opacity: fxEnabled ? 1 : 0 }}
        aria-hidden="true"
      />
      {/* Normal, clean background system overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#040711]/50 backdrop-blur-[0.5px]" />
    </>
  );
};
