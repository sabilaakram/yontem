"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import AviationSimulationCarousel from "./aviation_simulation_carosuel";
import Link from "next/link";
import { formatImageUrl, getHomepageContent } from "@/data/loaders";
import { HomePage } from "@/lib/types";
import ParseRichText from "./richtextparser";

function AviationSimulators() {
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
  return (
    <div className="mx-auto  flex flex-col  items-center justify-center lg:py-[100px] pt-[50px] lg:gap-[50px] gap-[20px]">
      <div className="w-[85%] lg:gap-[30px] gap-[20px] flex flex-col">
        <h2
          className={`text-[#171616] font-gilroy font-[800] text-center text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2`}
        >
          Aviation <br />
          <span
            className={`bg-gradient-to-r from-blue-400 via-blue-700 to-black bg-clip-text text-transparent md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] text-[36px] leading-[40px]`}
          >
            Simulators
          </span>
        </h2>
        <ParseRichText
          content={HomePageData.aviation_simulators} // Replace with actual block content variable
          paragraphProps="text-[#161C2D] lg:line-clamp-3 text-[18px] leading-[28px] lg:text-[28px] font-gilroy font-[600] text-center"
        />
      </div>
      <div className="relative lg:flex w-[85%] h-[392px] border rounded-lg  hidden">
        {/* First Image */}
        <div
          id="image1-container"
          className="relative w-1/2 h-full transition-all duration-700 ease-in-out hover:w-full focus:w-full hover:z-10 group overflow-hidden" // Added overflow-hidden
          onMouseEnter={() => {
            const image2Container = document.getElementById("image2-container");
            if (image2Container) {
              image2Container.classList.add("w-0");
              image2Container.classList.remove("w-1/2");
            }
          }}
          onMouseLeave={() => {
            const image2Container = document.getElementById("image2-container");
            if (image2Container) {
              image2Container.classList.remove("w-0");
              image2Container.classList.add("w-1/2");
            }
          }}
        >
          <Image
            id="image1"
            src={aviationTrainingImage} // Replace with actual image URL
            alt="Aviation Training Simulators"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-s-lg"
          />

          {/* This text will be hidden on hover */}
          <div
            className="absolute inset-0 flex justify-start items-end transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            id="image_text"
          >
            <p className="text-white font-gilroy text-[36px] font-[800] leading-[40px] pb-10 px-10">
              Aviation Training
              <br /> Simulators
            </p>
          </div>

          {/* This text will appear on hover (no sliding) */}
          <div
            className="absolute inset-0 flex flex-col items-start justify-start p-[58px] pr-[140px] pl-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" // Changed transition
            id="hover_text"
          >
            {/* Title */}
            <p className="text-white text-left font-gilroy text-[48px] font-[800] leading-[50px] mb-[24px]">
              Aviation Training
              <br /> Simulators
            </p>

            {/* Description */}
            <ParseRichText
              content={HomePageData.aviation_training_simulators}
              paragraphProps="text-white text-left font-gilroy text-[24px] leading-[36px] mb-[24px]"
            />

            {/* Button */}
            <Button asChild className="flex items-center space-x-2">
              <Link href={"/aviationtrainingsimulators"}>
                Discover More <ArrowUpRight className="h-[20px] w-[20px]" />{" "}
                {/* Reduced icon size */}
              </Link>
            </Button>
          </div>
        </div>

        {/* Second Image */}
        <div
          id="image2-container"
          className="relative w-1/2 h-full transition-all duration-700 ease-in-out hover:w-full hover:z-10 group overflow-hidden"
          onMouseEnter={() => {
            const image1Container = document.getElementById("image1-container");
            if (image1Container) {
              image1Container.classList.add("w-0");
              image1Container.classList.remove("w-1/2");
            }
          }}
          onMouseLeave={() => {
            const image1Container = document.getElementById("image1-container");
            if (image1Container) {
              image1Container.classList.remove("w-0");
              image1Container.classList.add("w-1/2");
            }
          }}
        >
          {/* Image */}
          <Image
            id="image2"
            src={aviationMaintenanceImage} // Replace with actual image URL
            alt="Aviation Maintainance Simulators"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-br-lg rounded-tr-lg"
          />

          <div
            className="absolute flex justify-start lg:mr-[70px] items-end inset-0 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            id="overlay_title"
          >
            <p className="text-white font-gilroy text-[36px] font-[800] leading-[40px] pb-10 px-10">
              Aviation Maintenance <br /> Simulators
            </p>
          </div>

          {/* Hover content (moves from left to right) */}
          <div
            className="absolute inset-0 flex flex-col items-end justify-start p-[58px] pr-[140px] pl-[140px] opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out translate-x-[-100%] group-hover:translate-x-0" // Key change here
            id="overlay_description"
          >
            {/* Title */}
            <p className="text-white text-right font-gilroy text-[48px] font-[800] leading-[50px] mb-[24px]">
              Aviation Maintenance
              <br /> Simulators
            </p>

            {/* Description */}

            <ParseRichText
              content={HomePageData.aviation_maintenance_simulators}
              paragraphProps="text-white text-right font-gilroy text-[24px] leading-[36px] mb-[24px]"
            />

            {/* Button */}
            <Button asChild className="flex items-center space-x-2">
              <Link href={"/aviationmaintenancesimulators"}>
                Discover More <ArrowUpRight className="h-[20px] w-[20px]" />{" "}
                {/* Reduced icon size */}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[85%] border rounded-lg lg:hidden flex">
        <AviationSimulationCarousel />
      </div>
    </div>
  );
}

export default AviationSimulators;
