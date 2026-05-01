"use client";

import { motion } from "framer-motion";
import { BookOpenText, ChevronDown } from "lucide-react";
import Navbar from "./Navbar";

export default function HeroGlobal() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-50/40 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-50/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-50/30 blur-3xl" />
      </div>

      <Navbar />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-500 mb-6 shadow-sm backdrop-blur-sm">
            <BookOpenText className="h-3.5 w-3.5" strokeWidth={1.8} />
            Curso: Ética Profesional · EC1 Semana 5
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 text-balance mb-4">
            Manifiesto de
            <br />
            Identidad Ética
          </h1>

          <p className="text-sm md:text-base text-gray-400 font-light italic max-w-lg mx-auto mb-8">
            &ldquo;¿Qué tipo de profesional quiero ser en un país donde la
            transgresión ética muchas veces parece normalizada o incluso
            recompensada?&rdquo;
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400">
              Tres carreras. Tres miradas. Un mismo compromiso.
            </span>
            <span className="w-8 h-px bg-gray-300" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-[11px] tracking-widest uppercase text-gray-300">
            Universidad Científica del Sur · Lima, Perú · 2026
          </p>
          <p className="text-[11px] text-gray-300 mt-1">Sección 5G</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.8 },
            y: { delay: 1.8, repeat: Infinity, duration: 2 },
          }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-300">
            Explorar manifiesto
          </span>
          <ChevronDown className="h-4 w-4 text-gray-300" strokeWidth={1.8} />
        </motion.div>
      </div>
    </section>
  );
}
