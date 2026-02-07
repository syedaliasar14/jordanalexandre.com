"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: "/portfolio", label: "_portfolio" },
    { href: "/about", label: "_about" },
    { href: "/contact", label: "_contact" },
  ];

  return (
    <header className="w-full p-4 md:px-8 flex flex-row font-lores">
      <Link href="/" className="text-xl bg-foreground text-white px-2 hover:underline hover:bg-transparent hover:text-foreground">JordanAlexandre.com</Link>

      {/* Desktop Nav */}
      <nav className="ml-auto flex gap-6 text-xl hidden md:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:bg-foreground hover:text-white px-2">
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Button */}
      <nav className="ml-auto flex gap-4 text-lg md:hidden">
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
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:bg-foreground hover:text-white px-2 mb-4" onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}