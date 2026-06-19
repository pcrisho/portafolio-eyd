"use client";

import ScrollReveal from "./ScrollReveal";

export default function VideoCanvas() {
  return (
    <section id="video" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400 mb-2">
            Recurso audiovisual
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Video complementario
          </h2>
          <p className="text-xs text-gray-400 mb-10">
            Material audiovisual relacionado a la ética profesional
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-black aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/nXKV1dbr_Do"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-[11px] text-gray-400 mt-3 text-center">
            <a
              href="https://youtu.be/nXKV1dbr_Do?si=bMbNZ875pTO6SqU9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 underline underline-offset-2"
            >
              Ver en YouTube
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
