import { Link } from "react-router";
import { SteamLoginButton } from "./SteamLoginButton.tsx";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "О проекте", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0d12]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-105">
            <span className="text-lg font-black text-white">S</span>
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            s7<span className="text-pink-400">x</span>
            <span className="text-indigo-400">Wn</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Steam Login */}
        <div className="flex items-center justify-end">
          <SteamLoginButton />
        </div>
      </div>
    </header>
  );
}
