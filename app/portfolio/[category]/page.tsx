import Link from "next/link";
import { Portfolio } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import WindowContainer from "@/app/components/window-container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function PortfolioCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const portfolioData = (await sanityFetch({ query: PORTFOLIO_CATEGORY_QUERY, params: { category } }))?.data as Portfolio;

  if (!portfolioData) {
    notFound();
  }

  return (
    <WindowContainer className="border-2 my-10 font-lores max-w-6xl w-full"
      title={portfolioData.category}
      backLink="/portfolio"
      breadcrumb={[{ title: "_portfolio", href: "/portfolio" }]}
    >
      <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg p-8">
        {(!portfolioData.portfolioItems || portfolioData.portfolioItems.length === 0) && (
          <div className="col-span-full text-center">coming soon...</div>
        )}
        {portfolioData.portfolioItems?.map(item => (
          <Link
            key={item.slug.current}
            href={`/portfolio/${category}/${item.slug.current}`}
            className="relative border-2 lores-shadow hover:shadow-primary aspect-square text-lg p-4 flex items-center justify-center text-center"
          >
            {item.thumbnail && <Image
              className="absolute inset-0 object-cover w-full h-full"
              src={urlFor(item.thumbnail).width(400).height(400).url()}
              alt={item.title}
              width={400} height={400}
            />}
            <div className="absolute inset-0 bg-foreground opacity-0 hover:opacity-100 flex items-center justify-center text-white">
              _{item.title}
            </div>
          </Link>
        ))}
      </nav>
    </WindowContainer>
  );
}