"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ProductCarousel: React.FC<{ data: { id: string; url: string; alternativeText?: string }[] }> = ({ data }) => {
  return (
    <Carousel
      className="w-full flex-1 overflow-hidden"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="flex justify-center items-center space-x-4">
        {data.map((image) => (
          <CarouselItem
            key={image.id}
            className="flex-[0_0_20%] max-w-[20%] flex items-center justify-center" // Centers each item
          >
            <Image
              src={image.url}
              alt={image.alternativeText || ""}
              width={100}
              height={100}
              className="rounded-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProductCarousel;
