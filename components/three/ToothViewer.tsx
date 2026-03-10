"use client";

import { useRef, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type LayerKey = "enamel" | "dentin" | "pulp" | "root";

interface Layer {
  key: LayerKey;
  label: string;
  color: string;
  emissive: string;
  desc: string;
  rTop: number;
  rBottom: number;
  height: number;
  posY: number;
  segments: number;
}

const LAYERS: Layer[] = [
  {
    key: "enamel", label: "Enamel", color: "#d8efe8", emissive: "#1A7A6E",
    desc: "The hardest substance in the human body. 96% hydroxyapatite crystals protect the crown.",
    rTop: 0.0, rBottom: 0.7, height: 0.5, posY: 1.45, segments: 6,
  },
  {
    key: "dentin", label: "Dentin", color: "#e8d8b0", emissive: "#B89A4A",
    desc: "Yellow mineralised tissue forming the bulk of the tooth. Contains microscopic tubules.",
    rTop: 0.7, rBottom: 0.65, height: 1.2, posY: 0.5, segments: 6,
  },
  {
    key: "pulp", label: "Pulp", color: "#e8a0a0", emissive: "#cc4444",
    desc: "The living core — blood vessels, lymphatics, and nerve fibres that give the tooth vitality.",
    rTop: 0.22, rBottom: 0.18, height: 1.0, posY: 0.5, segments: 12,
  },
  {
    key: "root", label: "Root", color: "#c8b89a", emissive: "#8a6a30",
    desc: "Anchors the tooth in the alveolar bone via the periodontal ligament. Covered in cementum.",
    rTop: 0.65, rBottom: 0.1, height: 1.6, posY: -0.8, segments: 6,
  },
];

function LayerMesh({
  layer, isSelected, isAnySelected, onClick,
}: {
  layer: Layer; isSelected: boolean; isAnySelected: boolean; onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    const mat = meshRef.current?.material as THREE.MeshStandardMaterial | undefined;
    if (!mat) return;
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, isSelected ? 1 : isAnySelected ? 0.18 : 0.82, dt * 5);
    mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, isSelected ? 0.45 : 0, dt * 5);
  });

  return (
    <mesh ref={meshRef} position={[0, layer.posY, 0]}
      onClick={(e) => { e.stopPropagation(); onClick(); }} castShadow>
      <cylinderGeometry args={[layer.rTop, layer.rBottom, layer.height, layer.segments]} />
      <meshStandardMaterial
        color={layer.color} emissive={layer.emissive} emissiveIntensity={0}
        transparent opacity={0.82} roughness={0.45} metalness={0.08} side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Scene({ selected, autoRotate, onSelect }: {
  selected: LayerKey | null; autoRotate: boolean; onSelect: (k: LayerKey) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (autoRotate && groupRef.current) groupRef.current.rotation.y += dt * 0.3; });
  return (
    <group ref={groupRef}>
      {LAYERS.map((l) => (
        <LayerMesh key={l.key} layer={l}
          isSelected={selected === l.key} isAnySelected={!!selected}
          onClick={() => onSelect(l.key)} />
      ))}
    </group>
  );
}

export default function ToothViewer() {
  const [selected, setSelected] = useState<LayerKey | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  const handleSelect = useCallback((key: LayerKey) => {
    setSelected((p) => (p === key ? null : key));
    setAutoRotate(false);
  }, []);

  const sel = LAYERS.find((l) => l.key === selected);

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows
        onPointerMissed={() => { setSelected(null); setAutoRotate(true); }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <pointLight position={[-4, 4, -4]} intensity={0.5} color="#1A7A6E" />
        <pointLight position={[4, -2, 4]} intensity={0.3} color="#B89A4A" />
        <Scene selected={selected} autoRotate={autoRotate} onSelect={handleSelect} />
        <OrbitControls enableZoom enablePan={false} minDistance={3} maxDistance={10}
          onStart={() => setAutoRotate(false)} />
      </Canvas>

      {/* Layer buttons — pure DOM, no Html from drei */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        {LAYERS.map((l) => (
          <button key={l.key} onClick={() => handleSelect(l.key)} style={{
            background: selected === l.key ? `${l.emissive}33` : "rgba(232,227,219,0.04)",
            border: `1px solid ${selected === l.key ? `${l.emissive}99` : "rgba(232,227,219,0.08)"}`,
            color: selected === l.key ? l.color : "rgba(232,227,219,0.45)",
            padding: "5px 12px", borderRadius: "6px",
            fontFamily: "monospace", fontSize: "10px",
            letterSpacing: "0.12em", textTransform: "uppercase",
            cursor: "pointer", transition: "all 0.25s ease",
          }}>{l.label}</button>
        ))}
      </div>

      {/* Info panel */}
      {sel ? (
        <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
          style={{ background: "rgba(10,10,10,0.9)", border: `1px solid ${sel.emissive}44`, backdropFilter: "blur(12px)" }}>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: sel.emissive }} />
            <span style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,227,219,0.5)" }}>
              {sel.label}
            </span>
          </div>
          <p style={{ fontSize: "13px", color: "#E8E3DB", lineHeight: 1.6 }}>{sel.desc}</p>
        </div>
      ) : (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
          style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,227,219,0.25)" }}>
          Click a layer · Drag to rotate
        </div>
      )}
    </div>
  );
}
