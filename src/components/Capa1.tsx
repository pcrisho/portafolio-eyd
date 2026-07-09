"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Capa1() {
  return (
    <section
      id="capa-1"
      className="relative bg-black text-white overflow-hidden"
    >
      {/* 1. HERO: Etiqueta + título + autores + carreras */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gray-500 mb-8">
              Capa 1
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-balance mb-4">
              Población vulnerable
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance" style={{ color: "#ffca28" }}>
              El trabajador informal
              <br />
              que el sistema no ve
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-sm text-gray-400 leading-relaxed">
              <p>
                <span className="text-gray-200">Crisóstomo Berrocal, Roberto</span>
                {" — "}
                <span className="text-gray-200">Villafuerte Berrospi, Jose Miguel</span>
                {" — "}
                <span className="text-gray-200">Lovera Castillo, Rafael</span>
                {" — "}
                <span className="text-gray-200">Rojas Pañahua, Estrella</span>
                {" — "}
                <span className="text-gray-200">Chávez Becerra, Brigitte</span>.
              </p>
              <p className="mt-2 text-gray-500">
                Comunicación y Publicidad · Adm. Hotelería y Turismo · Ing. de Sistemas
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. IMAGEN con crédito */}
      <ScrollReveal>
        <div className="relative w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src="/2.png"
              alt="Trabajador informal leyendo el periódico junto a sus herramientas de trabajo en una vereda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
          <p className="absolute bottom-3 left-4 text-[11px] text-white/80 italic">
            Foto: Muhammad Furqan / Pexels (licencia libre)
          </p>
        </div>
      </ScrollReveal>

      {/* 3. +12M — Cifra + reflexión */}
      <div className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <p
                className="font-display text-[10rem] md:text-[14rem] lg:text-[16rem] leading-none font-bold tracking-tighter"
                style={{ color: "#e0e0e0" }}
              >
                +12M
              </p>
              <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md">
                trabajadores informales en el Perú sin contrato ni protección social
              </p>
              <a
                href="https://www.gob.pe/institucion/mtpe/noticias/1154518-mtpe-marca-un-hito-historico-presento-el-registro-de-trabajadores-en-la-informalidad-laboral"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[11px] text-gray-500 underline underline-offset-4 hover:text-gray-300 transition-colors"
              >
                Ministerio de Trabajo y Promoción del Empleo — Cifra reporte 2025
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-balance">
              Su vulnerabilidad específica no es la pobreza como dato: es la{" "}
              <span style={{ color: "#ffca28" }}>ausencia de reconocimiento institucional</span>,
              la precariedad que el mercado produce y el Estado no repara.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 4. CITA ÉPICA — Levinas */}
      <div className="py-20 md:py-24 px-6 md:px-12 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Quote
              className="mx-auto mb-6 opacity-40"
              size={32}
              strokeWidth={1.2}
              style={{ color: "#ffca28" }}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p
              className="font-display text-2xl md:text-4xl lg:text-5xl italic leading-tight text-balance mb-6"
              style={{ color: "#ffca28" }}
            >
              «El rostro del otro me interpela antes de cualquier norma.»
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xs text-gray-500 tracking-wide">
              — Levinas, E. (2015). <em>Ética e infinito</em>. Madrid: A. Machado Libros.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 5. TRES CARDS DE COMPROMISO POR CARRERA */}
      <div className="py-24 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Comunicación */}
            <ScrollReveal>
              <motion.div
                className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                whileHover={{ y: -4 }}
              >
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-5" style={{ color: "#ffca28" }}>
                  Comunicación y Publicidad
                </p>
                <h3 className="font-display text-2xl font-semibold text-white mb-5 leading-tight">
                  No al recurso estético
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Nos comprometemos a representar la vulnerabilidad con dignidad, construyendo
                  narrativas que restituyan humanidad concreta — nunca convirtiendo el rostro
                  ajeno en impacto emocional sin autoría ni retribución ética.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Card 2: Administración */}
            <ScrollReveal delay={0.1}>
              <motion.div
                className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                whileHover={{ y: -4 }}
              >
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-5" style={{ color: "#ffca28" }}>
                  Adm. Hotelería y Turismo
                </p>
                <h3 className="font-display text-2xl font-semibold text-white mb-5 leading-tight">
                  Actor legítimo, no costo
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Asumimos el <em>motivational displacement</em> de Noddings: desplazar el
                  centro de nuestra gestión desde la rentabilidad hacia las condiciones reales
                  de quienes sostienen la cadena de valor turística desde los márgenes.
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Card 3: Ingeniería */}
            <ScrollReveal delay={0.2}>
              <motion.div
                className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                whileHover={{ y: -4 }}
              >
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-5" style={{ color: "#ffca28" }}>
                  Ingeniería de Sistemas
                </p>
                <h3 className="font-display text-2xl font-semibold text-white mb-5 leading-tight">
                  Diseño para los invisibles
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Nos comprometemos a que el rostro del otro sea el punto de partida del
                  diseño — no una variable agregada al final — desarrollando sistemas que no
                  exijan lo que la informalidad precisamente niega.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-center mt-14 text-[11px] text-gray-600 tracking-wider">
              Levinas (2015) · Noddings (2013)
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
