"use client";

import { useState } from "react";
import Image from "next/image";
import ImageSlider from "./image-slider";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortfolioItem } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

export default function ImagesGrid({ portfolio }: { portfolio: PortfolioItem | null }) {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setSliderOpen(true);
  };

  if (!portfolio?.gallery?.length) return null;

  return (
    <>
      <ImageSlider
        images={portfolio.gallery}
        initialIndex={selectedImageIndex}
        isOpen={sliderOpen}
        onClose={() => setSliderOpen(false)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {portfolio.gallery.map((image: SanityImageSource, index: number) => (
          <div onClick={() => handleImageClick(index)} key={index} className="group cursor-pointer">
            <div className="aspect-square relative border-2 lores-shadow group-hover:shadow-primary">
              <Image
                src={urlFor(image).url()}
                alt={'Jordan Alexandre Portfolio'}
                className="w-full h-full object-cover"
                loading="lazy"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}