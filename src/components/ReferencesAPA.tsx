"use client";

import { referencesAPA } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function ReferencesAPA() {
  return (
    <section id="referencias" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400 mb-2">
            Referencias
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Referencias APA
          </h2>
          <p className="text-xs text-gray-400 mb-10">7.ª edición</p>
        </ScrollReveal>

        <ul className="space-y-4">
          {referencesAPA.map((ref, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <li className="flex gap-3 text-xs leading-relaxed text-gray-600 pl-6 relative">
                <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span>
                  {ref.texto}
                  {ref.doi && (
                    <>
                      {" "}
                      <a
                        href={ref.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
                      >
                        {ref.doi}
                      </a>
                    </>
                  )}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
