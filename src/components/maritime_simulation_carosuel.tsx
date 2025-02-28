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

const MaritimeSimulationCarousel: React.FC = () => {
  const cardData: CardData[] = [
    {
      backgroundImage: "/Maritimetrainingsimulators.webp",
      heading: "Maritime Training Simulators",
      text: "Immersive and realistic scenarios for comprehensive crew training, improving safety and operational performance at sea with advanced professional simulator solutions.",
      button_text: "Discover More",
      link: "/maritimesimulator",
    },
    {
      backgroundImage: "/Maritime_maintenance_simulator.webp",
      heading: "Maritime Maintenance Simulator",
      text: "Designed for real-world scenarios, Maritime Maintenance Simulators equip technicians with the skills needed for effective vessel repairs, troubleshooting, and routine maintenance.",
      button_text: "Discover More",
      link: "/maritimesimulator",
    },
  ];

  return (
    <Carousel className="w-full"> {/* Added w-full for full width */}
      <CarouselContent>
        {cardData.map((item, index) => (
          <CarouselItem key={index} className="md:basis-[70%] lg:basis-1/2 xl:basis-1/2 basis-[90%]"> {/* Adjust basis as needed */}
            <Simulation_card backgroundImage={item.backgroundImage} items={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  );
};

export default MaritimeSimulationCarousel;