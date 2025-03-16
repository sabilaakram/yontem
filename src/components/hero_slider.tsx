import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { getHomepageContent } from "@/data/loaders";
import ParseRichText from "@/components/richtextparser";
import { getStrapiURL } from "@/lib/utils"; // Ensure correct backend URL

const HeroSection = () => {
  const [slides, setSlides] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomepageContent();
        if (data) {
          const getImageUrl = (field: any) => {
            if (!field || typeof field !== "object") return "/aviationsimulators_hero.webp"; // Ensure fallback
            const url = field.url.startsWith("http")
              ? field.url
              : `${getStrapiURL()}/${field.url.replace(/^\//, "")}`;
            console.log("Image URL:", url); // Debugging
            return url;
          };

          const slidesData = [
            {
              heading: data.heading_1,
              text: data.description_1,
              buttonText: "Discover more",
              buttonLink: "/aviationsimulator",
              backgroundImage: getImageUrl(data.background_1),
            },
            {
              heading: data.heading_2,
              text: data.description_2,
              buttonText: "Discover more",
              buttonLink: "/maritime-training-simulators",
              backgroundImage: getImageUrl(data.background_2),
            },
            {
              heading: data.heading_3,
              text: data.description_3,
              buttonText: "Discover more",
              buttonLink: "/electric-and-electronics-laboratory-solutions",
              backgroundImage: getImageUrl(data.background_3),
            },
            {
              heading: data.heading_4,
              text: data.description_4,
              buttonText: "Discover more",
              buttonLink: "/special-projects",
              backgroundImage: getImageUrl(data.background_4),
            },
          ];
          console.log("Slides Data:", slidesData); // Debugging
          setSlides(slidesData);
        }
      } catch (error) {
        console.error("Error fetching homepage content:", error);
      }
    }

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides]);

  if (slides.length === 0) {
    return <div></div>;
  }

  return (
    <div
      className="bg-scroll place-content-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url('${slides[currentIndex].backgroundImage}')`,
        height: "800px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="place-content-center lg:px-[100px] md:px-[50px] px-[20px] text-center text-white">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-[20px] font-gilroy capitalize text-[#EEE5E5]">
          {slides[currentIndex].heading}
        </h1>

        <ParseRichText
          content={slides[currentIndex].text}
          paragraphProps="text-[#EEE5E5] font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]"
        />

        <Button
          className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition"
          onClick={() =>
            (window.location.href = slides[currentIndex].buttonLink)
          }
        >
          {slides[currentIndex].buttonText}
          <MdArrowOutward size={30} />
        </Button>
      </div>

      <div className="absolute lg:mt-[40px] mt-[80px] left-1/2 transform -translate-x-1/2 flex gap-6">
        <button
          onClick={prevSlide}
          className="text-white text-4xl hover:opacity-80 transition"
        >
          <IoIosArrowDropleft />
        </button>
        <button
          onClick={nextSlide}
          className="text-white text-4xl hover:opacity-80 transition"
        >
          <IoIosArrowDropright />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
