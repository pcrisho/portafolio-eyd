"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconKey } from "@/lib/data";
import LucideGlyph from "./LucideGlyph";
import ScrollReveal from "./ScrollReveal";

interface SchelerLevel {
  nivel: string;
  valor: string;
  descripcion: string;
  iconKey: IconKey;
}

interface SchelerJerarquiaProps {
  niveles: SchelerLevel[];
  accentColor: string;
}

export default function SchelerJerarquia({ niveles, accentColor }: SchelerJerarquiaProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const widths = ["min(100%, 17rem)", "min(100%, 19rem)", "min(100%, 21rem)", "min(100%, 23rem)"];
  const opacities = [0.96, 0.88, 0.8, 0.72];

  return (
    <div className="mt-12">
      <ScrollReveal>
        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
          Jerarquía de valores
        </h3>
        <p className="text-xs text-gray-400 mb-8">Max Scheler · Ética material de los valores</p>
      </ScrollReveal>

      <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
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
                  className="rounded-xl px-5 py-4 text-center transition-colors duration-300"
                  style={{
                    backgroundColor: `${accentColor}${Math.round(opacities[i] * 255)
                      .toString(16)
                      .padStart(2, "0")}`,
                    color: i === 0 ? "#fff" : "#1f2937",
                  }}
                >
                  <div className="flex items-center justify-center gap-2.5">
                    <span
                      className="text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
                      style={{
                        backgroundColor: i === 0 ? "rgba(255,255,255,0.25)" : `${accentColor}22`,
                      }}
                    >
                      {item.nivel}
                    </span>
                    <LucideGlyph
                      name={item.iconKey}
                      className="h-3.5 w-3.5"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-semibold tracking-wide">
                      Valores {item.valor.toLowerCase()}
                    </span>
                  </div>
                </div>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-10 bg-gray-900 text-white text-[11px] leading-relaxed rounded-lg px-3 py-2 whitespace-nowrap shadow-lg pointer-events-none"
                  >
                    {item.descripcion}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45" />
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
