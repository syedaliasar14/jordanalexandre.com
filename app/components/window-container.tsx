import Link from "next/link";

interface Props {
  title: string;
  children: React.ReactNode;
  breadcrumb?: { title: string, href: string }[]
  className?: string;
  backLink?: string;
}

export default function WindowContainer({ title, children, breadcrumb, className, backLink }: Props) {
  return (
    <div className={`w-full border-2 border-foreground relative my-20 font-lores lores-shadow ${className}`}>

      {/* Window Header */}
      <div className="bg-foreground text-white px-4 py-2">
        {breadcrumb && breadcrumb.length > 0 &&
          <h2 className="mb-1">
            {backLink && <Link href={backLink} className="text-2xl pr-2 mr-1 hover:text-primary">{"<"}</Link>}
            {breadcrumb.map((crumb, index) => (
              <span key={index}>
                <Link href={crumb.href} className="hover:text-primary">{crumb.title}</Link>
                {index < breadcrumb.length - 1 && " / "}
              </span>
            ))}
          </h2>}
        <h1 className="font-lores text-3xl">
          {backLink && !breadcrumb && <Link href={backLink} className="pr-2 mr-2 hover:text-primary">{"<"}</Link>}
          _{title}
        </h1>
      </div>

      {/* Close Button */}
      <Link href={"/"} aria-label="Close window"
        className="absolute top-0 right-2 z-10 p-2 text-white text-3xl hover:text-primary">
        ×
      </Link>

      {/* Window Content */}
      <div className="">
        {children}
      </div>
    </div>
  );
}