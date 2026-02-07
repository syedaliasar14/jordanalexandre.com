import Link from "next/link";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { PortfolioWithItem } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_ITEM_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ImagesGrid from "@/app/components/gallery/images-grid";
import WindowContainer from "@/app/components/window-container";

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

        <WindowContainer className="max-w-7xl w-full"
          title={portfolioItem.title}
          breadcrumb={(
            <>
              <Link href="/portfolio" className="hover:text-primary">_portfolio</Link>
              {" / "}
              <Link href={`/portfolio/${category}`} className="hover:text-primary">
                _{portfolioData.category}
              </Link>
            </>
          )}
        >
          <div className="bg-white p-4 md:px-8 pb-12">
            {portfolioItem.description && (
              <p className="mb-10 text-lg">{portfolioItem.description}</p>
            )}

            <ImagesGrid portfolio={portfolioItem} />
          </div>
        </WindowContainer>

      </div>
      <Footer />
    </main>
  );
}