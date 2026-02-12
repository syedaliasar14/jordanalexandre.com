"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { useEffect } from 'react';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/sanity/lib/image';

interface Props {
  images: SanityImageSource[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageSlider({ images, initialIndex, isOpen, onClose }: Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close Button */}
      <button onClick={onClose} aria-label="Close slider"
        className="absolute top-4 right-4 z-50 p-2 text-white text-4xl hover:text-primary">
        ×
      </button>

      {/* Swiper Slider */}
      <div className="w-full h-full flex items-center md:px-16 justify-center relative">
        <Swiper
          modules={[Navigation, Zoom]}
          initialSlide={initialIndex}
          slidesPerView={1}
          loop={false}
          zoom={{
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container w-full h-full flex items-center justify-center p-4">
                <Image
                  src={urlFor(image).url()}
                  alt="Jordan Alexandre Portfolio Image"
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  width={3000}
                  height={3000}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}