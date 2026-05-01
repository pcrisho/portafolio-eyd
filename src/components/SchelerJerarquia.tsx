"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { IconKey } from "@/lib/data";
import LucideGlyph from "./LucideGlyph";
import ScrollReveal from "./ScrollReveal";

interface SchelerLevel {
  nivel: string;
  valor: string;
  descripcion: string;
  iconKey: IconKey;
  relacion: string;
}

interface SchelerJerarquiaProps {
  niveles: SchelerLevel[];
  accentColor: string;
}

export default function SchelerJerarquia({ niveles, accentColor }: SchelerJerarquiaProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<SchelerLevel | null>(null);

  const openPopup = useCallback((level: SchelerLevel) => {
    setSelectedLevel(level);
  }, []);

  const closePopup = useCallback(() => {
    setSelectedLevel(null);
  }, []);

  const widths = ["min(100%, 17rem)", "min(100%, 19rem)", "min(100%, 21rem)", "min(100%, 23rem)"];
  const opacities = [0.96, 0.88, 0.8, 0.72];

  return (
    <div className="mt-12">
      <ScrollReveal>
        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
          Jerarquía de valores
        </h3>
        <p className="text-xs text-gray-400 mb-8">
          Max Scheler · Ética material de los valores · Clic para explorar cada nivel
        </p>
      </ScrollReveal>

      <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
        {niveles.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <motion.div
              className="relative cursor-pointer"
              style={{ width: widths[i] }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => openPopup(item)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div
                className="rounded-xl px-5 py-4 text-center transition-colors duration-300"
                style={{
                  backgroundColor: `${accentColor}${Math.round(opacities[i] * 255)
                    .toString(16)
                    .padStart(2, "0")}`,
                  color: i <= 1 ? "#ffffff" : i === 2 ? "#f1f5f9" : "#1f2937",
                }}
              >
                <div className="flex items-center justify-center gap-2.5">
                  <span
                    className="text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    style={{
                      backgroundColor:
                        i === 0 ? "rgba(255,255,255,0.25)" : `${accentColor}22`,
                    }}
                  >
                    {item.nivel}
                  </span>
                  <LucideGlyph name={item.iconKey} className="h-3.5 w-3.5" strokeWidth={2} />
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

      {/* Popup */}
      <AnimatePresence>
        {selectedLevel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
            onClick={closePopup}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
              style={{ borderTop: `4px solid ${accentColor}` }}
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${accentColor}`, color: "#fff" }}
                  >
                    <LucideGlyph name={selectedLevel.iconKey} className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400">
                      Nivel {selectedLevel.nivel}
                    </p>
                    <p
                      className="text-lg font-semibold font-display"
                      style={{ color: accentColor }}
                    >
                      Valores {selectedLevel.valor.toLowerCase()}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  {selectedLevel.descripcion}
                </p>

                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                    Relación con la carrera
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {selectedLevel.relacion}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
