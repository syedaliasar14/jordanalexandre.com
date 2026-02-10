import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground mt-auto text-white font-lores">
      <div className="mx-auto px-4 pt-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Link href="/" className="text-lg px-2 hover:underline">
              JordanAlexandre.com
            </Link>
            <p className="text-sm text-secondary">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex-col gap-4">
            <nav className="flex gap-4 text-sm font-lores md:self-start">
              <Link href="/portfolio" className="hover:text-primary px-2">
                _portfolio
              </Link>
              <Link href="/about" className="hover:text-primary px-2">
                _about
              </Link>
              <Link href="/contact" className="hover:text-primary px-2">
                _contact
              </Link>
            </nav>

            <div className="flex flex-row gap-2 mt-4 justify-center md:justify-end">
              <Link href="https://www.instagram.com/jordan.d.alexandre/" target="_blank" rel="noopener noreferrer" className="hover:text-primary px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}