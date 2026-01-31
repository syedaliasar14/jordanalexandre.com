import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/" className="text-lg font-lores px-2">
              JordanAlexandre.com
            </Link>
            <p className="text-sm text-secondary">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 text-sm font-lores">
            <Link href="/portfolio" className="hover:bg-foreground hover:text-white px-2">
              _portfolio
            </Link>
            <Link href="/about" className="hover:bg-foreground hover:text-white px-2">
              _about
            </Link>
            <Link href="/contact" className="hover:bg-foreground hover:text-white px-2">
              _contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}