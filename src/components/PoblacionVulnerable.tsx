"use client";

import { motion } from "framer-motion";
import type { IconKey } from "@/lib/data";
import LucideGlyph from "./LucideGlyph";
import ScrollReveal from "./ScrollReveal";

interface PoblacionVulnerableProps {
  items: { iconKey: IconKey; titulo: string; descripcion: string }[];
  accentColor: string;
}

export default function PoblacionVulnerable({ items, accentColor }: PoblacionVulnerableProps) {
  return (
    <div className="mt-12">
      <ScrollReveal>
        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-6">
          Población vulnerable
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              whileHover={{ y: -4 }}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: accentColor }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${accentColor}14`, color: accentColor }}
                >
                  <LucideGlyph name={item.iconKey} className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{item.titulo}</h4>
                  <p className="text-xs leading-relaxed text-gray-500">{item.descripcion}</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
