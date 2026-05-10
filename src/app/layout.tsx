import type { Metadata } from "next";
import localFont from "next/font/local";
import { Proza_Libre } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";
import { Footer } from "@/components/Footer";
import { RevealEffect } from "@/components/RevealEffect";
import "./globals.css";

/*
 * Sang Bleu OG Serif Light, hosted under public/sang-bleu-og/.
 * Only the Light Roman cut is provided in this drop — there is no italic
 * file. The browser will synthesize italics where the design currently
 * uses <em>; if we keep this typeface, em emphasis should be rebuilt to
 * not depend on font-style: italic (color + tracking instead).
 *
 * WebXL is the display optical size, tuned for headings. WebS is the
 * text optical size; we add it as a fallback so smaller serif moments
 * (Territorio location label, success heading) still render legibly if
 * we ever drop WebXL into smaller contexts.
 */
const sangBleu = localFont({
  src: [
    {
      path: "../../public/sang-bleu-og/SangBleuOGSerif-Light-WebXL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sang-bleu-og/SangBleuOGSerif-Light-WebXL.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Garamond", "ui-serif", "Georgia", "serif"],
});

const proza = Proza_Libre({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-proza",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "venaritravel",
    template: "%s · venaritravel",
  },
  description:
    "Agencia privada de caza en España. Programas a medida en dehesas extremeñas, sierras béticas y casonas castellanas.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://venaritravel.com",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sangBleu.variable} ${proza.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js");',
          }}
        />
      </head>
      <body className="bg-hueso text-tinta antialiased">
        <RevealEffect />
        <main id="main">{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
