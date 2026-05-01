"use client";

import { motion } from "framer-motion";
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
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400 mb-6">
            Curso: Ética Profesional · EC1 Semana 5
          </p>

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
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-gray-300"
          >
            <path
              d="M8 3v8M4 9l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
