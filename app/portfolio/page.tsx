import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full p-4">
        <div className="border-2 font-lores max-w-sm w-full">
          <h1 className="bg-foreground text-white p-2 text-3xl md:text-4xl">_portfolio</h1>
          <nav className="flex flex-col text-xl">
            <Link href="/portfolio/project1" className="hover:bg-foreground hover:text-white p-2">_project1</Link>
            <Link href="/portfolio/project2" className="hover:bg-foreground hover:text-white p-2">_project2</Link>
            <Link href="/portfolio/project3" className="hover:bg-foreground hover:text-white p-2">_project3</Link>
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}