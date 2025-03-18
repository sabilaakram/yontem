import React, { useEffect, useState } from "react";
import Simulation_card from "./simulation_card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Import from your shadcn/ui components
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { getHomepageContent, formatImageUrl } from "@/data/loaders";
import { HomePage } from "@/lib/types";

interface CardData {
  backgroundImage: string;
  heading: string;
  text: BlocksContent;
  button_text: string;
  link: string;
}

function AviationSimulationCarousel() {
  const [HomePageData, setHomePageData] = useState<HomePage | null>(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const data = await getHomepageContent();
              setHomePageData(data);
            } catch (err) {
              setError("Failed to fetch About Us data");
              console.error("Error fetching About Us data:", err);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
        }, []);
      
        if (!HomePageData) return <div></div>;
        const aviationTrainingImage = formatImageUrl(
          HomePageData?.aviation_training_simulators_image
        );
        const aviationMaintenanceImage = formatImageUrl(
          HomePageData?.aviation_maintenance_simulators_image
        );
  const cardData: CardData[] = [
    {
      backgroundImage: aviationTrainingImage,
      heading: "Aviation Training Simulators",
      text: HomePageData.aviation_training_simulators,
      button_text: "Discover More",
      link: "/aviationtrainingsimulators",
    },
    {
      backgroundImage: aviationMaintenanceImage,
      heading: "Aviation Maintenance Simulators",
      text: HomePageData.aviation_maintenance_simulators,
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