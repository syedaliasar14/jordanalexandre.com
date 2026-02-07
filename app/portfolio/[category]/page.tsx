import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Portfolio } from "@/sanity/lib/types";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import WindowContainer from "@/app/components/window-container";

export default async function PortfolioCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const portfolioData = (await sanityFetch({ query: PORTFOLIO_CATEGORY_QUERY, params: { category } }))?.data as Portfolio;

  if (!portfolioData) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full p-4">
        <WindowContainer className="border-2 my-10 font-lores max-w-sm w-full"
          title={portfolioData.category}
          breadcrumb={(
            <>
              <Link href="/portfolio" className="text-sm hover:underline">_portfolio</Link>
            </>
          )}
        >
          <nav className="flex flex-col text-xl">
            {portfolioData.portfolioItems?.map(item => (
              <Link
                key={item.slug.current}
                href={`/portfolio/${category}/${item.slug.current}`}
                className="hover:bg-foreground hover:text-white p-2"
              >
                _{item.title}
              </Link>
            ))}
          </nav>
        </WindowContainer>
      </div>
      <Footer />
    </main>
  );
}