"use client";

import { motion } from "framer-motion";
import { valoresCompartidos } from "@/lib/data";
import LucideGlyph from "./LucideGlyph";
import ScrollReveal from "./ScrollReveal";

export default function ValoresCompartidos() {
  return (
    <section id="valores-compartidos" className="relative py-24 px-6 md:px-12 bg-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, #1565c0 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, #1565c0 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, #1565c0 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-300 mb-4">
            <LucideGlyph name="sparkles" className="h-3.5 w-3.5" />
            Nuestro compromiso
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Valores compartidos
          </h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto mb-14">
            Cuatro principios éticos fundamentales que unen a tres carreras distintas
            en un solo horizonte profesional.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valoresCompartidos.map((valor, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/90 transition-transform duration-300 group-hover:scale-105">
                  <LucideGlyph name={valor.iconKey} className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold mb-2">{valor.titulo}</h3>
                <p className="text-[11px] leading-relaxed text-gray-400">
                  {valor.descripcion}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compass SVG unifying element */}
        <ScrollReveal delay={0.6}>
          <motion.svg
            viewBox="0 0 100 100"
            className="w-16 h-16 mx-auto mt-16 opacity-20"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.3" fill="none" strokeDasharray="2 3" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="0.5" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
            <polygon points="50,18 46,48 50,50 54,48" fill="white" opacity="0.7" />
            <polygon points="50,82 46,52 50,50 54,52" fill="white" opacity="0.3" />
          </motion.svg>
        </ScrollReveal>
      </div>
    </section>
  );
}
