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
  icons: {
    icon: [
      { url: "/logodourado2.ico" },
      { url: "/logodourado2.png" },
    ],
  },
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
          <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-3 px-3 py-1 md:grid-cols-[1fr_auto_1fr] md:px-6 2xl:max-w-3xl">
            <div className="flex items-start justify-center pb-0">
              <img
                src="/logodourado2.png"
                alt="Oraculista de Delfos"
                className="h-1/2 w-auto rounded-full border border-ink/20 object-contain"
              />
            </div>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
              <p className="font-display text-[2.6rem] leading-tight text-[#fddb8f] md:text-[3.15rem]">
                Oraculista de Delfos
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Esoterismo aplicado ao autoconhecimento
              </p>
              <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold sm:text-sm">
                <Link href="/quem-somos" className="hover:text-wine">
                  Sobre
                </Link>
                <Link href="/cursos" className="hover:text-wine">
                  Cursos
                </Link>
                <Link href="/loja" className="hover:text-wine">
                  Indicacoes
                </Link>
                <Link href="/livros" className="hover:text-wine">
                  Livros
                </Link>
                <Link href="/personalizados" className="hover:text-wine">
                  Personalizados
                </Link>
                <Link href="/blog" className="hover:text-wine">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <a
                href="https://wa.me/5500000000000"
                className="inline-flex items-center rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-soft hover:bg-sand"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-ink/10 bg-ink text-sand">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6 2xl:max-w-7xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Servicos
              </p>
              <ul className="mt-3 space-y-2 text-sm text-sand/80">
                <li>Livros</li>
                <li>Cursos</li>
                <li>Produtos</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Redes sociais
              </p>
              <ul className="mt-3 space-y-2 text-sm text-sand/80">
                <li>Instagram</li>
                <li>Pinterest</li>
                <li>Facebook</li>
                <li>YouTube</li>
                <li>TikTok</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Paginas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-sand/80">
                <li>Politicas</li>
                <li>Termos de uso</li>
                <li>Contato</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Contato
              </p>
              <ul className="mt-3 space-y-2 text-sm text-sand/80">
                <li>email@oraculistadedelfos.com.br</li>
                <li>WhatsApp: (00) 00000-0000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sand/20 py-6 text-center text-xs text-sand/70">
            (c) 2025 Oraculista de Delfos. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
