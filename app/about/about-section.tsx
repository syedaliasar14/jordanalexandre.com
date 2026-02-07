import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import WindowContainer from "../components/window-container";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default function AboutSection({ title, text, image, reverse }: { title?: string; text?: string; image?: SanityImageSource, reverse?: boolean }) {
  return (
    <section className={`flex-grow flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} mx-auto w-full px-4 md:px-8 max-w-7xl justify-center gap-12`}>

      {image &&
        <Image src={urlFor(image).url()}
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full mx-auto mt-20"
          alt="About Jordan Alexandre" width={288} height={288} />
      }

      <WindowContainer className="w-max-7xl w-full md:w-2/3 h-max shadow-primary"
        title={title || "about"}>
        <p className="text-lg md:text-xl leading-relaxed p-4">
          {text || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        </p>
      </WindowContainer>

    </section>
  );
}