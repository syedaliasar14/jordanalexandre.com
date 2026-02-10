import Link from "next/link";
import { Portfolio } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import WindowContainer from "../components/window-container";

export default async function PortfolioPage() {
  const portfolioCategories = (await sanityFetch({ query: PORTFOLIO_CATEGORIES_QUERY, params: {} }))?.data as Portfolio[];

  return (
    <WindowContainer className="border-2 my-10 font-lores max-w-sm w-full"
      title="portfolio"
      backLink="/"
    >
      <nav className="flex flex-col text-xl">
        {portfolioCategories?.map(category => (
          <Link
            key={category._id}
            href={`/portfolio/${category.slug.current}`}
            className="hover:bg-foreground hover:text-white p-2 px-4"
          >
            _{category.category}
          </Link>
        ))}
      </nav>
    </WindowContainer>
  );
}