"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center rounded-full border border-white/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        Menu
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute right-0 z-50 mt-2 w-48 rounded-2xl border border-ink/20 bg-ink/95 p-3 text-xs font-semibold text-sand shadow-soft"
        >
          <Link
            href="/quem-somos"
            className="block py-1 hover:text-gold"
            onClick={() => setOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/cursos"
            className="block py-1 hover:text-gold"
            onClick={() => setOpen(false)}
          >
            Cursos
          </Link>
          <Link
            href="/loja"
            className="block py-1 hover:text-gold"
            onClick={() => setOpen(false)}
          >
            Indicacoes
          </Link>
          <Link
            href="/livros"
            className="block py-1 hover:text-gold"
            onClick={() => setOpen(false)}
          >
            Livros
          </Link>
          <Link
            href="/personalizados"
            className="block py-1 hover:text-gold"
            onClick={() => setOpen(false)}
          >
            Personalizados
          </Link>
          <Link
            href="/blog"
            className="block py-1 hover:text-gold"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
        </div>
      ) : null}
    </div>
  );
}
