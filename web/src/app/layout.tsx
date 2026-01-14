import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
