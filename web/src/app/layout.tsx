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
        <header className="relative z-40 border-b border-ink/10 bg-sand/90 backdrop-blur header-hero md:sticky md:top-0">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-3 py-2 md:hidden">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logodourado2.png"
                alt="Oraculista de Delfos"
                className="h-10 w-10 rounded-full border border-ink/20 object-cover"
              />
              <span className="text-base font-semibold text-white">
                Oraculista de Delfos
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/5500000000000"
                className="inline-flex items-center justify-center rounded-full bg-gold p-2 text-ink shadow-soft hover:bg-sand"
                aria-label="Falar no WhatsApp"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64A11.9 11.9 0 0 0 12.02 24C18.64 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.02 22a9.9 9.9 0 0 1-5.06-1.4l-.36-.22-3.7.98.99-3.6-.24-.37A9.86 9.86 0 0 1 2 12C2 6.48 6.5 2 12.02 2c2.64 0 5.12 1.03 6.98 2.9A9.84 9.84 0 0 1 22 12c0 5.52-4.48 10-9.98 10Zm5.5-7.45c-.3-.15-1.75-.86-2.02-.96-.27-.1-.46-.15-.65.15-.2.3-.75.96-.92 1.16-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.49-1.8-1.66-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.65-1.57-.9-2.15-.24-.58-.48-.5-.65-.5h-.55c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
              <details className="relative z-50">
                <summary className="inline-flex items-center rounded-full border border-white/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  Menu
                </summary>
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-2xl border border-ink/20 bg-ink/95 p-3 text-xs font-semibold text-sand shadow-soft">
                  <Link href="/quem-somos" className="block py-1 hover:text-gold">
                    Sobre
                  </Link>
                  <Link href="/cursos" className="block py-1 hover:text-gold">
                    Cursos
                  </Link>
                  <Link href="/loja" className="block py-1 hover:text-gold">
                    Indicacoes
                  </Link>
                  <Link href="/livros" className="block py-1 hover:text-gold">
                    Livros
                  </Link>
                  <Link href="/personalizados" className="block py-1 hover:text-gold">
                    Personalizados
                  </Link>
                  <Link href="/blog" className="block py-1 hover:text-gold">
                    Blog
                  </Link>
                </div>
              </details>
            </div>
          </div>

          <div className="mx-auto hidden max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-4 md:grid">
            <div className="flex items-center justify-start">
              <Link href="/">
                <img
                  src="/logodourado2.png"
                  alt="Oraculista de Delfos"
                  className="h-24 w-24 rounded-full border border-ink/20 object-cover"
                />
              </Link>
            </div>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
              <p className="font-display text-[3.15rem] leading-tight text-[#fddb8f]">
                Oraculista de Delfos
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Esoterismo aplicado ao autoconhecimento
              </p>
              <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
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
            <div className="flex items-center justify-end">
              <a
                href="https://wa.me/5500000000000"
                className="inline-flex items-center justify-center rounded-full bg-gold p-2 text-ink shadow-soft hover:bg-sand"
                aria-label="Falar no WhatsApp"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64A11.9 11.9 0 0 0 12.02 24C18.64 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.02 22a9.9 9.9 0 0 1-5.06-1.4l-.36-.22-3.7.98.99-3.6-.24-.37A9.86 9.86 0 0 1 2 12C2 6.48 6.5 2 12.02 2c2.64 0 5.12 1.03 6.98 2.9A9.84 9.84 0 0 1 22 12c0 5.52-4.48 10-9.98 10Zm5.5-7.45c-.3-.15-1.75-.86-2.02-.96-.27-.1-.46-.15-.65.15-.2.3-.75.96-.92 1.16-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.49-1.8-1.66-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.65-1.57-.9-2.15-.24-.58-.48-.5-.65-.5h-.55c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z" />
                </svg>
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
