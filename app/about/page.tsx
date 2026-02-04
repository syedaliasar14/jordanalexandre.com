import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { Page } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export default async function AboutPage() {
  const pageData = (await sanityFetch({query: ABOUT_PAGE_QUERY, params: {}}))?.data as Page;
  const title = pageData.aboutContent?.section1?.title;
  const text = pageData.aboutContent?.section1?.text;
  const image = pageData.aboutContent?.section1?.image;
  
  return (
    <main className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <div className="flex-grow flex flex-col md:flex-row mx-auto w-full mt-20 px-4 max-w-7xl justify-center gap-12">
        <Image src={image ? urlFor(image).url() : "/headshot.png"} 
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full mx-auto"
          alt="Jordan Alexandre Headshot" width={288} height={288} />
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start md:text-left px-4">
          <h1 className="text-4xl md:text-5xl md:font-sans font-thin mb-6 text-primary">{title || "About"}</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-20">
            {text || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}