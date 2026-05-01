import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manifiesto de Identidad Ética — UCS 2026",
  description:
    "Tres carreras. Tres miradas. Un mismo compromiso. Portafolio grupal del curso Ética Profesional, Universidad Científica del Sur, Lima, Perú.",
  openGraph: {
    title: "Manifiesto de Identidad Ética",
    description:
      "¿Qué tipo de profesional quiero ser en un país donde la transgresión ética parece normalizada?",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
