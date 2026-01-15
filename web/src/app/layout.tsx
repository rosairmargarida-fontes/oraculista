import type { Metadata } from "next";
import Link from "next/link";
import { DM_Serif_Display, Libre_Franklin } from "next/font/google";
import "./globals.css";

const displayFont = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Libre_Franklin({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oraculista de Delfos",
  description:
    "Conhecimento esotérico aplicado ao autoconhecimento, com cursos, estudos e conteúdos simbólicos.",
  metadataBase: new URL("https://oraculistadedelfos.com.br"),
  openGraph: {
    title: "Oraculista de Delfos",
    description:
      "Tarot, cursos e leituras para pessoas que querem clareza e direcao.",
    url: "https://oraculistadedelfos.com.br",
    siteName: "Oraculista de Delfos",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0f3b66",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <header className="sticky top-0 z-30 border-b border-ink/10 bg-sand/90 backdrop-blur header-hero">
          <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4">
            <div></div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/logodourado2.png"
                  alt="Oraculista de Delfos"
                  className="h-16 w-16 rounded-full border border-ink/20 object-cover md:h-20 md:w-20"
                />
                <p className="font-display text-2xl md:text-3xl text-[#fddb8f]">
                  Oraculista de Delfos
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-white font-semibold">
                Esoterismo aplicado ao autoconhecimento
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-end gap-6 text-sm font-semibold">
              <a href="#cursos" className="hover:text-wine">
                Cursos
              </a>
              <a href="#produtos" className="hover:text-wine">
                Produtos
              </a>
              <Link href="/loja" className="hover:text-wine">
                Loja
              </Link>
              <Link href="/quem-somos" className="hover:text-wine">
                Quem Somos
              </Link>
              <Link href="/blog" className="hover:text-wine">
                Blog
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
