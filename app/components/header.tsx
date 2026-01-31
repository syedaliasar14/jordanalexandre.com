import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 flex flex-row font-lores">
      <Link href="/" className="font-lowres">JordanAlexandre.com</Link>
      <nav className="ml-auto flex gap-6">
        <Link href="/portfolio" className="hover:text-primary">_portfolio</Link>
        <Link href="/about" className="hover:text-primary">_about</Link>
        <Link href="/contact" className="hover:text-primary">_contact</Link>
      </nav>
    </header>
  );
}