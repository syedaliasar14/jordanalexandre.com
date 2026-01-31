import type { Metadata } from "next";
import "./globals.css";
import { helveticaNeue, loRes9Wide, loRes21Serif } from "./fonts";

export const metadata: Metadata = {
  title: "JordanAlexandre.com",
  description: "The personal website of Jordan Alexandre, showcasing projects, blog posts, and more.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased ${helveticaNeue.variable} ${loRes9Wide.variable} ${loRes21Serif.variable}`}>
        {children}
      </body>
    </html>
  );
}
