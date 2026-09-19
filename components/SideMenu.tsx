import { navLinks } from "./navLinks";

export default function SideMenu() {
  return (
    <nav className="side-menu" aria-label="Seções do site">
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
