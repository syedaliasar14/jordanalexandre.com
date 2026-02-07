import Header from "../components/header";
import Footer from "../components/footer";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { Page } from "@/sanity/lib/types";
import AboutSection from "./about-section";

export default async function AboutPage() {
  const pageData = (await sanityFetch({query: ABOUT_PAGE_QUERY, params: {}}))?.data as Page;
  const sections = pageData.aboutContent?.sections || [];
  
  return (
    <main className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <div className="flex-grow w-full">
        {sections.map((section, index) => (
          <AboutSection 
            key={index}
            title={section.title} 
            text={section.text} 
            image={section.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}