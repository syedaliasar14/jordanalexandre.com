"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const LINKS = [
  { href: "/portfolio", label: "_portfolio" },
  { href: "/about", label: "_about" },
  { href: "/contact", label: "_contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hide = usePathname().startsWith("/portfolio");

  return (
    <header className="w-full p-4 md:px-8 flex flex-row font-lores">

      {/* Desktop Nav */}
      {!hide &&
        <div className="hidden md:flex flex-row items-center w-full">
          <Link href="/" className="text-xl bg-foreground text-white px-4 py-1 hover:underline hover:bg-transparent hover:text-foreground">JordanAlexandre.com</Link>
          <nav className="ml-auto flex gap-6 text-xl hidden md:flex">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:bg-foreground hover:text-white px-4 py-1">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      }

      {/* Mobile Nav */}
      <div className="md:hidden flex flex-row items-center w-full">
        <Link href="/" className="text-xl bg-foreground text-white px-4 py-1 hover:underline hover:bg-transparent hover:text-foreground">JordanAlexandre.com</Link>

        {/* Button */}
        <nav className="ml-auto flex gap-4 text-lg">
          <button className="flex flex-row gap-1 self-center h-full items-center" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-1 h-1 bg-foreground" />
            <div className="w-1 h-1 bg-foreground" />
            <div className="w-1 h-1 bg-foreground" />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 left-0 w-full h-full bg-primary flex flex-col items-center justify-center text-2xl z-50 ${isMenuOpen ? "" : "hidden"}`}>
          <button className="absolute top-4 right-4 text-4xl" onClick={() => setIsMenuOpen(false)}>×</button>
          <Link href="/" className="px-2 underline mb-8" onClick={() => setIsMenuOpen(false)}>JordanAlexandre.com</Link>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:bg-foreground hover:text-white px-2 mb-4" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}