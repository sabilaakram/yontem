"use client";

import HeroSection from "@/components/hero_section";
import { getSPData } from "@/data/loaders";
import { Special_Projects, FAQ } from "@/lib/types";
import Container from "@/components/container";
import React, { useEffect, useState } from "react";
import { AccordionDemo } from "@/components/faqs";
import { getStrapiURL } from "@/lib/utils";
import ParseRichText from "@/components/richtextparser";
import CTA from "@/components/cta";
import Blogs from "@/components/blogs";
import News from "@/components/news";

function SpecialProjectContent() {
  const [SPData, setSPData] = useState<Special_Projects | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSPData();
        setSPData(data);
      } catch (err) {
        setError("Failed to fetch About Us data");
        console.error("Error fetching About Us data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!SPData) return <div></div>;

  // Extract FAQ data
  const faqData: FAQ[] =
    SPData.Faq?.map((faq, index) => ({
      faqTitle: faq.faqTitle || `Question ${index + 1}`,
      faqDescription: faq.faqDescription || [],
    })) || [];

  const slides = [
    {
      heading: "Explore innovative solutions for your unique needs.",
      text: "Discover our Special Projects now!",
      buttonText: "Get Started",
      buttonLink: "/discover",
      backgroundImage: "/cta4.jpg",
    },
  ];
  const backgroundImages = SPData.background_image?.map((img) =>
    img.url.startsWith("http")
      ? img.url
      : `${getStrapiURL()}/${img.url.replace(/^\//, "")}`
  ) || ["/aviationsimulators_hero.webp"];
  return (
    <div>
      <HeroSection
        backgroundImages={backgroundImages}
        items={{
          heading: SPData.page_heading || "Special Projects",
          text: [{ label: <ParseRichText content={SPData.description} /> }],
        }}
      />
      <Container
        bgColor="#ffffff"
        title="Tipi Time"
        titleColor="#161C2D"
        description={SPData.tipi_time}
        descriptionColor="#161C2D"
        imageSrc={SPData.asthma_tip_image?.url || "/Tipi Time.webp"}
        buttonText="Get A Quote"
        buttonLink="/contact"
        showButton={true}
        reverseLayout={false}
      />
      <Container
        bgColor="#D4D4D4"
        title="Tavan/Asthma Tip"
        titleColor="#161C2D"
        description={SPData.asthma_tip}
        descriptionColor="#161C2D"
        imageSrc={SPData.asthma_tip_image?.url || "/TavanAsthma Tip.webp"}
        buttonText="Get A Quote"
        buttonLink="/contact"
        showButton={true}
        reverseLayout={true}
      />
      <Container
        bgColor="#ffffff"
        title="Standing Type"
        titleColor="#161C2D"
        description={SPData.standing_type}
        descriptionColor="#161C2D"
        imageSrc={SPData.standing_type_image?.url || "/Standing Type.webp"}
        buttonText="Get A Quote"
        buttonLink="/contact"
        showButton={true}
        reverseLayout={false}
      />
      <Container
        bgColor="#D4D4D4"
        title="Wall Mount"
        titleColor="#161C2D"
        description={SPData.wall_mount}
        descriptionColor="#161C2D"
        imageSrc={SPData.wall_mount_image?.url || "/Wall Mount.webp"}
        buttonText="Get A Quote"
        buttonLink="/contact"
        showButton={true}
        reverseLayout={true}
      />
      <Container
        bgColor="#ffffff"
        title="Vehicle/Elevator Type"
        titleColor="#161C2D"
        description={SPData.elevator_type}
        descriptionColor="#161C2D"
        imageSrc={
          SPData.elevator_type_image?.url || "/VehicleElevator Type.webp"
        }
        buttonText="View All"
        buttonLink="/contact"
        showButton={true}
        reverseLayout={false}
      />
      <Container
        bgColor="#D4D4D4"
        title="Decorative Type"
        titleColor="#161C2D"
        description={SPData.decorative_type}
        descriptionColor="#161C2D"
        imageSrc={SPData.decorative_type_image?.url || "/Decorative Type.webp"}
        buttonText="View All"
        buttonLink="/contact"
        showButton={true}
        reverseLayout={true}
      />
      <CTA slides={slides} />
      {/* 
    <News/>
    <Blogs/> */}
      {faqData.length > 0 ? (
        <div className="bg-[#F7F7F7] w-full flex place-content-center">
          <div className="px-6 lg:px-12 py-10 w-[90%]">
            <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px] text-center my-[30px]">
              Frequently Asked Questions
            </h2>
            <AccordionDemo faqs={faqData} />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No FAQs available.</p>
      )}
      <News/>
      <Blogs/>
    </div>
  );
}

export default SpecialProjectContent;
