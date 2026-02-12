"use client";

import { Portfolio } from "@/sanity/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SidebarClient({ portfolioLinks }: { portfolioLinks?: Portfolio[] }) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [portfolioExpanded, setPortfolioExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Auto-expand sections based on current path
    const initialExpanded: Record<string, boolean> = {};
    portfolioLinks?.forEach(link => {
      if (pathname.startsWith(`/portfolio/${link.slug.current}`)) {
        initialExpanded[link._id] = true;
        setPortfolioExpanded(true);
      }
    });
    setExpandedSections(initialExpanded);
  }, [pathname, portfolioLinks]);

  const togglePortfolioSection = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPortfolioExpanded(!portfolioExpanded);
  };

  const toggleSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  function isActive(link: string) {
    return pathname === link;
  }

  return (
    <div className="w-64 h-[calc(100dvh)] bg-foreground text-white p-4 font-lores hidden md:block fixed left-0 top-0 z-10">
      <Link href="/" className="text-2xl mb-8 block hover:underline">JordanAlexandre.com</Link>
      <nav className="flex flex-col gap-2">
        <Link href="/portfolio" className={`hover:bg-primary hover:text-foreground px-2 py-1 flex items-center justify-between
            ${isActive("/portfolio") && "bg-primary text-foreground"}`}>
          _portfolio
          {portfolioLinks && portfolioLinks.length > 0 && <button className="scale-150 text-xl" onClick={togglePortfolioSection}>
            {portfolioExpanded ? "-" : "+"}
          </button>}
        </Link>
        {portfolioExpanded && portfolioLinks?.map(link => (
          <div key={link._id} className="flex flex-col gap-2">
            <Link href={`/portfolio/${link.slug.current}`}
              className={`hover:bg-primary hover:text-foreground px-2 pl-6 py-1 flex items-center justify-between whitespace-nowrap overflow-hidden
                ${isActive(`/portfolio/${link.slug.current}`) && "bg-primary text-foreground"}`}
            >
              _{link.category}
              {link.portfolioItems && link.portfolioItems.length > 0 && <button className="scale-150 text-xl" onClick={(e) => toggleSection(link._id, e)}>
                {expandedSections[link._id] ? "-" : "+"}
              </button>}
            </Link>
            {expandedSections[link._id] && link.portfolioItems?.map(item => (
              <Link key={item.slug.current} href={`/portfolio/${link.slug.current}/${item.slug.current}`}
                className={`hover:bg-primary hover:text-foreground px-2 pl-12 py-1 whitespace-nowrap overflow-hidden
                  ${isActive(`/portfolio/${link.slug.current}/${item.slug.current}`) && "bg-primary text-foreground"}`}
              >
                _{item.title}
              </Link>
            ))}
          </div>
        ))}
        <Link href="/about" className={`hover:bg-primary hover:text-foreground px-2 py-1
          ${isActive("/about") && "bg-primary text-foreground"}`}>_about</Link>
        <Link href="/contact" className={`hover:bg-primary hover:text-foreground px-2 py-1
          ${isActive("/contact") && "bg-primary text-foreground"}`}>_contact</Link>
      </nav>
    </div>
  );
}