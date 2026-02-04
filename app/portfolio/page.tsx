import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { PortfolioItem } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";

export default async function PortfolioPage() {
  const portfolio = (await sanityFetch({query: PORTFOLIO_QUERY, params: {}}))?.data as PortfolioItem[];

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full p-4">
        <div className="border-2 font-lores max-w-sm w-full">
          <h1 className="bg-foreground text-white p-2 text-3xl md:text-4xl">_portfolio</h1>
          <nav className="flex flex-col text-xl">
            {portfolio.map(item => (
              <Link key={item._id} href={`/portfolio/${item.slug.current}`} className="hover:bg-foreground hover:text-white p-2">_{item.title}</Link>
            ))}
          </nav>
        </div>
      </div>
      <Footer />
    </main>
  );
}