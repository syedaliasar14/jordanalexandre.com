import type { Metadata } from "next";
import "./globals.css";
import { helveticaNeue, loRes9Wide, loRes21Serif } from "./fonts";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "./components/disable-draft-mode";
import { VisualEditing } from "next-sanity/visual-editing";

export const metadata: Metadata = {
  title: "JordanAlexandre.com",
  description: "The personal website of Jordan Alexandre, showcasing projects, blog posts, and more.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased ${helveticaNeue.variable} ${loRes9Wide.variable} ${loRes21Serif.variable}`}>
        {children}
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
