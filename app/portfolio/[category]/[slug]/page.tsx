import Link from "next/link";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { PortfolioWithItem } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_ITEM_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

export default async function PortfolioItemPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;

  const portfolioData = (await sanityFetch({ query: PORTFOLIO_ITEM_QUERY, params: { category, itemSlug: slug } }))?.data as PortfolioWithItem;

  if (!portfolioData?.portfolioItem) {
    notFound();
  }

  const { portfolioItem } = portfolioData;

  return (
    <main className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4">
        <div className="border-2 font-lores max-w-2xl w-full">
          <div className="bg-foreground text-white p-2">
            <div className="text-sm mb-1">
              <Link href="/portfolio" className="hover:underline">_portfolio</Link>
              {" / "}
              <Link href={`/portfolio/${category}`} className="hover:underline">
                {portfolioData.category}
              </Link>
            </div>
            <h1 className="text-2xl md:text-3xl">_{portfolioItem.title}</h1>
          </div>

          <div className="p-4">
            {portfolioItem.description && (
              <p className="mb-4 text-lg">{portfolioItem.description}</p>
            )}

            {portfolioItem.gallery && portfolioItem.gallery.length > 0 && (
              <div className="space-y-4">
                {portfolioItem.gallery.map((image, index) => (
                  <div key={index} className="border">
                    <img
                      src={urlFor(image).url()}
                      alt={`${portfolioItem.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}

            {portfolioItem.thumbnail && !portfolioItem.gallery && (
              <div className="border">
                <img
                  src={urlFor(portfolioItem.thumbnail).url()}
                  alt={portfolioItem.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}