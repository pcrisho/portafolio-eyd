"use client";

import { motion } from "framer-motion";
import type { CareerSlug } from "@/lib/data";

interface MetaforaVisualProps {
  slug: CareerSlug;
}

export default function MetaforaVisual({ slug }: MetaforaVisualProps) {
  return (
    <div className="w-full max-w-xs mx-auto aspect-square relative">
      {slug === "admin-turismo" && <ExploradorSVG />}
      {slug === "comunicacion" && <NarradorSVG />}
      {slug === "ingenieria" && <TraductorSVG />}
    </div>
  );
}

function ExploradorSVG() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <motion.circle
        cx="100" cy="100" r="88"
        stroke="#a5d6a7" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="100" cy="100" r="70"
        stroke="#c8e6c9" strokeWidth="1" fill="none" strokeDasharray="4 4"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* N */}
      <motion.path
        d="M100 20 L100 60 M100 60 L115 25"
        stroke="#5d4037" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      {/* S */}
      <motion.path
        d="M100 180 L100 140"
        stroke="#5d4037" strokeWidth="2" strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
      {/* E */}
      <motion.path
        d="M180 100 L140 100"
        stroke="#5d4037" strokeWidth="2" strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
      {/* W */}
      <motion.path
        d="M20 100 L60 100"
        stroke="#5d4037" strokeWidth="2" strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
      {/* Leaf 1 */}
      <motion.path
        d="M100 100 Q120 70 135 80 Q125 100 100 100"
        fill="#2e7d32" opacity="0.7"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      />
      {/* Leaf 2 */}
      <motion.path
        d="M100 100 Q75 65 65 75 Q75 95 100 100"
        fill="#4caf50" opacity="0.5"
        initial={{ scale: 0, rotate: 20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
      />
      {/* Leaf 3 */}
      <motion.path
        d="M100 100 Q130 95 135 105 Q120 110 100 100"
        fill="#388e3c" opacity="0.45"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
      />
      {/* Center dot */}
      <motion.circle
        cx="100" cy="100" r="4"
        fill="#3e2723"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      />
    </motion.svg>
  );
}

function NarradorSVG() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Quill shaft */}
      <motion.path
        d="M130 50 Q120 100 100 170"
        stroke="#283593" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      {/* Quill feather left */}
      <motion.path
        d="M130 50 Q100 60 90 80 Q105 65 125 60"
        fill="#5c6bc0" opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
      {/* Quill feather right */}
      <motion.path
        d="M130 50 Q140 70 135 90 Q125 70 128 55"
        fill="#283593" opacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
      {/* Sound waves from tip */}
      {[1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d={`M${100 - i * 14} ${170 + i * 8} Q100 ${160 + i * 8} ${100 + i * 14} ${170 + i * 8}`}
          stroke="#ff6f61" strokeWidth="1.2" fill="none" strokeLinecap="round"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 1, 0.3], pathLength: [0, 1] }}
          transition={{
            delay: 1.2 + i * 0.2,
            duration: 1.5,
            opacity: { repeat: Infinity, duration: 2, delay: 1.2 + i * 0.2 },
          }}
        />
      ))}
      {/* Eye / truth symbol */}
      <motion.circle
        cx="100" cy="60" r="14"
        stroke="#283593" strokeWidth="1.5" fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      />
      <motion.circle
        cx="100" cy="60" r="5"
        fill="#283593"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      />
    </motion.svg>
  );
}

function TraductorSVG() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Bridge arch */}
      <motion.path
        d="M30 120 Q100 20 170 120"
        stroke="#004d9a" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Bridge deck */}
      <motion.line
        x1="30" y1="120" x2="170" y2="120"
        stroke="#607d8b" strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      {/* Suspension lines */}
      {[50, 70, 90, 110, 130, 150].map((x, i) => (
        <motion.line
          key={x}
          x1={x} y1="120"
          x2={x} y2={40 + Math.sin((x - 30) / 140 * Math.PI) * 70}
          stroke="#90a4ae" strokeWidth="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.0 + i * 0.1, duration: 0.5 }}
        />
      ))}
      {/* Binary left side */}
      {[
        { x: 50, text: "01" },
        { x: 40, text: "10" },
        { x: 45, text: "11" },
      ].map((item, i) => (
        <motion.text
          key={`bin-${i}`}
          x={item.x} y={150 + i * 14}
          fill="#004d9a" opacity="0.4"
          fontSize="10" fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 + i * 0.15 }}
        >
          {item.text}
        </motion.text>
      ))}
      {/* Human figures right side */}
      {[
        { x: 145, h: 12 },
        { x: 155, h: 14 },
        { x: 150, h: 10 },
      ].map((fig, i) => (
        <motion.g key={`fig-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.8 + i * 0.15 }}>
          <circle cx={fig.x} cy={150 + i * 14 - fig.h} r="4" fill="#004d9a" opacity="0.5" />
          <line x1={fig.x} y1={150 + i * 14 - fig.h + 4} x2={fig.x} y2={150 + i * 14} stroke="#004d9a" strokeWidth="1.2" opacity="0.5" />
        </motion.g>
      ))}
      {/* Center node */}
      <motion.circle
        cx="100" cy="90" r="6"
        fill="#1565c0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      />
      <motion.circle
        cx="100" cy="90" r="12"
        stroke="#1565c0" strokeWidth="1" fill="none" opacity="0.3"
        initial={{ scale: 0 }}
        animate={{ scale: 1, opacity: [0.3, 0.1] }}
        transition={{ delay: 0.3, duration: 0.4, opacity: { repeat: Infinity, duration: 2, repeatType: "reverse" } }}
      />
    </motion.svg>
  );
}
