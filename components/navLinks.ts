export type NavLink = { href: string; label: string };

// Fonte única para o menu lateral (desktop) e o hambúrguer (celular).
export const navLinks: NavLink[] = [
  { href: "#home", label: "Início" },
  { href: "#fotos", label: "Fotos" },
  { href: "#videos", label: "Vídeos" },
  { href: "#reperta", label: "Repertório" },
  { href: "#contato", label: "Contato" },
  { href: "#sobre", label: "Sobre" },
];
