"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface SchelerLevel {
  nivel: string;
  valor: string;
  descripcion: string;
}

interface SchelerJerarquiaProps {
  niveles: SchelerLevel[];
  accentColor: string;
}

export default function SchelerJerarquia({ niveles, accentColor }: SchelerJerarquiaProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const widths = ["30%", "42%", "58%", "76%"];
  const opacities = [1, 0.85, 0.7, 0.55];

  return (
    <div className="mt-12">
      <ScrollReveal>
        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
          Jerarquía de valores
        </h3>
        <p className="text-xs text-gray-400 mb-8">Max Scheler · Ética material de los valores</p>
      </ScrollReveal>

      <div className="flex flex-col items-center gap-2 max-w-lg mx-auto">
        {niveles.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <motion.div
              className="relative cursor-pointer"
              style={{ width: widths[i] }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div
                className="rounded-md px-4 py-3 text-center transition-colors duration-300"
                style={{
                  backgroundColor: `${accentColor}${Math.round(opacities[i] * 100)
                    .toString(16)
                    .padStart(2, "0")}`,
                  color: i === 0 ? "#fff" : accentColor,
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span
                    className="text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    style={{
                      backgroundColor: i === 0 ? "rgba(255,255,255,0.25)" : `${accentColor}22`,
                    }}
                  >
                    {item.nivel}
                  </span>
                  <span
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: i === 0 ? "#fff" : "#333" }}
                  >
                    Valores {item.valor.toLowerCase()}
                  </span>
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 z-10 bg-gray-900 text-white text-[11px] leading-relaxed rounded-lg px-3 py-2 whitespace-nowrap shadow-lg pointer-events-none"
                  >
                    {item.descripcion}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <p className="text-center text-[10px] text-gray-300 mt-4 uppercase tracking-widest">
          ↑ mayor jerarquía axiológica &nbsp;&nbsp;|&nbsp;&nbsp; ↓ menor jerarquía
        </p>
      </ScrollReveal>
    </div>
  );
}
