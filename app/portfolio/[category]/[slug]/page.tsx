import { PortfolioWithItem } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_ITEM_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ImagesGrid from "@/components/gallery/images-grid";
import WindowContainer from "@/components/window-container";

export default async function PortfolioItemPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;

  const portfolioData = (await sanityFetch({ query: PORTFOLIO_ITEM_QUERY, params: { category, itemSlug: slug } }))?.data as PortfolioWithItem;

  if (!portfolioData?.portfolioItem) {
    notFound();
  }

  const { portfolioItem } = portfolioData;

  return (
    <WindowContainer className="max-w-6xl w-full"
      title={portfolioItem.title}
      backLink={`/portfolio/${category}`}
      breadcrumb={[
        { title: "_portfolio", href: "/portfolio" },
        { title: `_${portfolioData.category}`, href: `/portfolio/${category}` }
      ]}
    >
      <div className="bg-white p-4 md:px-8 pb-12">
        {portfolioItem.description && (
          <p className="mb-10 text-lg">{portfolioItem.description}</p>
        )}

        <ImagesGrid portfolio={portfolioItem} />
      </div>
    </WindowContainer>
  );
}