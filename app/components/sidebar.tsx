import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_LINKS_QUERY } from "@/sanity/lib/queries";
import { Portfolio } from "@/sanity/lib/types";
import SidebarClient from "./sidebar-client";

export default async function Sidebar() {
  const links = (await sanityFetch({ query: PORTFOLIO_LINKS_QUERY }))?.data as Portfolio[];

  return (<SidebarClient portfolioLinks={links} />);
}