"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface MapaCriticoProps {
  negligencias: string[];
  acciones: string[];
  colorPositive: string;
  colorNegative: string;
}

export default function MapaCritico({
  negligencias,
  acciones,
  colorPositive,
  colorNegative,
}: MapaCriticoProps) {
  return (
    <div className="mt-12">
      <ScrollReveal>
        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-8">
          Mapa crítico profesional
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal direction="left">
          <div className="bg-red-50/60 border border-red-100 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorNegative }} />
              <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: colorNegative }}>
                Negligencias
              </h4>
            </div>
            <ul className="space-y-3">
              {negligencias.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex gap-2.5 text-xs text-gray-600 leading-relaxed"
                >
                  <span className="text-red-400 mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorPositive }} />
              <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: colorPositive }}>
                Acciones positivas
              </h4>
            </div>
            <ul className="space-y-3">
              {acciones.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex gap-2.5 text-xs text-gray-600 leading-relaxed"
                >
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">+</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
