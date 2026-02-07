import Link from "next/link";

interface Props {
  title: string;
  breadcrumb?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function WindowContainer({ title, breadcrumb, children, className }: Props) {
  return (
    <div className={`w-full border-2 border-foreground relative my-20 font-lores lores-shadow ${className}`}>
      {/* Window Header */}
      <div className="bg-foreground text-white px-4 py-2">
        {breadcrumb && <h2 className="text-sm mb-1">
          {breadcrumb}
        </h2>}
        <h1 className="font-lores text-3xl">
          _{title}
        </h1>
      </div>

      {/* Close Button */}
      <Link href="/" aria-label="Close window"
        className="absolute top-0 right-2 z-50 p-2 text-white text-3xl hover:text-primary">
        ×
      </Link>

      {/* Window Content */}
      <div className="">
        {children}
      </div>
    </div>
  );
}