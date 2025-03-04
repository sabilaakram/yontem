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

const AviationSimulationCarousel: React.FC = () => {
  const cardData: CardData[] = [
    {
      backgroundImage: "/ATS.png",
      heading: "Aviation Training Simulators",
      text: "Our aviation training simulators provide immersive, real-world training, enhancing pilot skills with high-quality flight and ship simulators for optimal readiness.",
      button_text: "Discover More",
      link: "/aviationtrainingsimulators",
    },
    {
      backgroundImage: "/aviation_maintainance_simulators.webp",
      heading: "Aviation Maintenance Simulators",
      text: "Aviation Maintenance Simulators provide hands-on, practical training for technicians, ensuring aircraft are serviced safely and efficiently using advanced simulation solutions.",
      button_text: "Discover More",                                                                    
      link: "/aviationmaintenancesimulators",
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

export default AviationSimulationCarousel;