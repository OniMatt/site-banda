"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "./navLinks";

export default function MobileMenu() {
  const [aberto, setAberto] = useState(false);
  const botao = useRef<HTMLButtonElement>(null);
  const primeiroLink = useRef<HTMLAnchorElement>(null);
  const jaAbriu = useRef(false);

  // Esc fecha o menu.
  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.code === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  // Trava o scroll do fundo enquanto o painel cobre a tela.
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = anterior;
    };
  }, [aberto]);

  // Foco entra no painel ao abrir e volta para o botão ao fechar.
  useEffect(() => {
    if (aberto) {
      jaAbriu.current = true;
      primeiroLink.current?.focus();
    } else if (jaAbriu.current) {
      botao.current?.focus();
    }
  }, [aberto]);

  return (
    <>
      <button
        ref={botao}
        type="button"
        className="menu-botao"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        aria-controls="menu-celular"
        onClick={() => setAberto((v) => !v)}
      >
        <span className="menu-risco" />
        <span className="menu-risco" />
        <span className="menu-risco" />
      </button>

      <nav
        id="menu-celular"
        className="menu-painel"
        aria-label="Seções do site"
        data-aberto={aberto}
        inert={!aberto}
      >
        <ul>
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                ref={i === 0 ? primeiroLink : undefined}
                href={link.href}
                onClick={() => setAberto(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
