import React from "react";
import Simulation_card from "./simulation_card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Import from your shadcn/ui components

interface CardData {
  backgroundImage: string;
  heading: string;
  text: string;
  button_text: string;
  link: string;
}

const SpecialProjectcarosuel: React.FC = () => {
  const cardData: CardData[] = [
    {
      backgroundImage: "/Air_disinfection_Devices.webp",
      heading: "Air disinfection Devices",
      text: "Designed to ensure clean, safe environments, our Air Disinfection Devices provide advanced air purification for critical areas like aircraft and medical facilities.",
      button_text: "Discover More",
      link: "/special-projects",
    },
  ];

  return (
    <Carousel className="w-full"> {/* Added w-full for full width */}
      <CarouselContent>
        {cardData.map((item, index) => (
          <CarouselItem key={index} className="md:basis-[100%] lg:basis-1/2 xl:basis-1/2 basis-[100%]"> {/* Adjust basis as needed */}
            <Simulation_card backgroundImage={item.backgroundImage} items={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  );
};

export default SpecialProjectcarosuel;