"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import NewsCardCarosuel from "./news_card";

interface NewsCardCarosuelProps {
  id?: number;
  FeaturedText?: string;
  slug: string;
  FeaturedImage: {
    url: string;
    alternativeText: string;
  };
  NavMenuName: string;
}

const NewsCard = ({ data }: { data: NewsCardCarosuelProps[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full h-full"
    >
      <CarouselContent className="m-4 lg:mx-0">
        {data.map((data, index) => (
          <CarouselItem
            key={index}
            className="basis-[75%] md:basis-1/2 lg:basis-1/3" // Shows 4 cards on large screens
          >
            <NewsCardCarosuel news={data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  );
};

export default NewsCard;

