"use client";

import type { CareerData } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import MetaforaVisual from "./MetaforaVisual";
import PoblacionVulnerable from "./PoblacionVulnerable";
import SchelerJerarquia from "./SchelerJerarquia";
import MapaCritico from "./MapaCritico";

interface CarreraSectionProps {
  data: CareerData;
}

export default function CarreraSection({ data }: CarreraSectionProps) {
  const { theme, id, slug, metafora, problematica, poblacion, scheler, mapaCritico, integrantes } = data;

  return (
    <section
      id={id}
      className="relative py-24 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: theme.colorBg }}
    >
      {/* Background decorative gradient */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${theme.colorAccent}08 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, ${theme.colorAccent}06 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Metafora + title */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">
          <ScrollReveal>
            <MetaforaVisual slug={slug} />
          </ScrollReveal>

          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <p
                className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: theme.colorMuted }}
              >
                {theme.name}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-display text-xl md:text-2xl font-medium text-balance leading-relaxed italic mb-4" style={{ color: theme.colorText }}>
                &ldquo;{theme.subtitle}&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-sm leading-relaxed text-gray-500 max-w-xl">{metafora.descripcion}</p>
            </ScrollReveal>
          </div>
        </div>

        {/* Problemática */}
        <ScrollReveal>
          <div
            className="border rounded-lg p-6 mb-8"
            style={{ borderColor: theme.colorBorder, backgroundColor: theme.colorCard }}
          >
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
              Problemática central
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">{problematica}</p>
          </div>
        </ScrollReveal>

        {/* Población vulnerable */}
        <PoblacionVulnerable items={poblacion} accentColor={theme.colorAccent} />

        {/* Scheler Jerarquía */}
        <SchelerJerarquia niveles={scheler} accentColor={theme.colorAccent} />

        {/* Mapa crítico */}
        <MapaCritico
          negligencias={mapaCritico.negligencias}
          acciones={mapaCritico.acciones}
          colorPositive={theme.colorPositive}
          colorNegative={theme.colorNegative}
        />

        {/* Integrantes */}
        <ScrollReveal>
          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: theme.colorBorder }}>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-300 mb-2">
              Integrantes
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1">
              {integrantes.map((int, i) => (
                <span key={i} className="text-xs text-gray-500">
                  {int.nombre}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
