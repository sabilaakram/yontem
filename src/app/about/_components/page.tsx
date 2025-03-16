"use client";
import HeroSection from "@/components/hero_section";
// import Tabcontainer from "@/components/tabcontainer";
import Container from "@/components/container";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/data/loaders";
import { AboutUs } from "@/lib/types";
import ParseRichText from "@/components/richtextparser";
import News from "@/components/news";
import Blogs from "@/components/blogs";
import CTA from "@/components/cta";
import { getStrapiURL } from "@/lib/utils";


function AboutUsContent() {
  const [aboutData, setAboutData] = useState<AboutUs | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutUs();
        setAboutData(data);
      } catch (err) {
        setError("Failed to fetch About Us data");
        console.error("Error fetching About Us data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!aboutData) return <div></div>;

  const slides = [
    {
      heading: "Unlock the next level of innovation",
      text: "Reach out today",
      buttonText: "Get Started",
      buttonLink: "/discover",
      backgroundImage: "/cta4.jpg",
    },
    {
      heading: "Let us help you power your vision",
      text: "Get a Quote now!",
      buttonText: "Learn More",
      buttonLink: "/learn",
      backgroundImage: "/cta3.jpg",
    },
    {
      heading: "Your ideal technology solution is just a click away",
      text: "Get in touch with us!",
      buttonText: "Get in Touch",
      buttonLink: "/get-started",
      backgroundImage: "/cta2.jpg",
    },
    {
      heading: "Turn your challenges into opportunities",
      text: "Connect with Yontem Teknoloji today!",
      buttonText: "Connect Now",
      buttonLink: "/get-started",
      backgroundImage: "/cta1.jpg",
    },
  ];
  const backgroundImages = aboutData.background_image?.map((img) =>
    img.url.startsWith("http")
      ? img.url
      : `${getStrapiURL()}/${img.url.replace(/^\//, "")}`
  ) || ["/aviationsimulators_hero.webp"];
      
  return (
    <div>
      <HeroSection
        backgroundImages={backgroundImages}
        items={{
          heading: "About Us",
          text: [
            { label: "HOME", link: "/" }, // Link for HOME
            { label: "ABOUT", link: "/about" }, // Link for ABOUT
          ],
        }}
      />
      <Container
        bgColor="#161C2D"
        title="Our Journey: Inside Yontem's Technical Hub"
        titleColor="#EEE5E5"
        description={aboutData?.journey}
        descriptionColor="#EEE5E5"
        imageSrc={aboutData.journey_image?.url || "/our_journey.webp"}
        showButton={false}
      />
      <Container
        bgColor="#ffffff"
        title="Our Mission: Innovating for the Future"
        titleColor="#161C2D"
        description={aboutData?.mission}
        descriptionColor="black"
        imageSrc={aboutData.mission_image?.url || "/our_mission.webp"}
        showButton={false}
        reverseLayout={true}
      />
      <Container
        bgColor="#D4D4D4"
        title="Our Vision: Leading Through Technology"
        titleColor="#161C2D"
        description={aboutData?.vision}
        descriptionColor="black"
        imageSrc={aboutData.vision_image?.url || "/our_vision.webp"}
        showButton={false}
        reverseLayout={false}
      />
      <div
        className={`lg:py-[80px] md:py-[70px] py-[50px] flex place-content-center`}
      >
        <div className="flex w-[85%]  flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]">
          <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px]">
            Driving Excellence: Our Values
          </h2>
          <ParseRichText
            content={aboutData?.values}
            paragraphProps={`text-black font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]`}
          />
          {/* <p className="list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]">
            At the core of Yontem Teknoloji are values that drive our success
            and innovation:
          </p>
          <ul className="lg:pl-6 md:pl-4 pl-2 list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]">
            <li>
              <b>Innovation:</b> We continuously push the boundaries of
              technology, offering forward-thinking solutions that keep pace
              with modern advancements.
            </li>
            <li>
              <b>Quality:</b> Delivering high-quality products and services is
              key to our approach, ensuring client satisfaction and reliability.
            </li>
            <li>
              <b>Sustainability:</b> We are committed to contributing positively
              to society and the environment through sustainable solutions and
              responsible practices.
            </li>
          </ul> */}
        </div>
      </div>
      <Container
        bgColor="#D4D4D4"
        title="Pioneering Simulators and Technology"
        titleColor="#161C2D"
        description={aboutData?.Innovation}
        descriptionColor="#161C2D"
        imageSrc={aboutData.innovation_image?.url || "/CTQ.png"}
        showButton={false}
        reverseLayout={true}
      />
      <Container
        bgColor="#ffffff"
        title="Commitment to Quality"
        titleColor="#161C2D"
        description={aboutData?.CTQ}
        descriptionColor="#161C2D"
        imageSrc={aboutData.ctq_image?.url || "/CTQ.png"}
        showButton={false}
        reverseLayout={false}
      />
      {/* <Tabcontainer /> */}
      <Container
        bgColor="#D4D4D4"
        title="Solutions Beyond Simulators"
        titleColor="#161C2D"
        description={aboutData?.solutions}
        descriptionColor="#161C2D"
        imageSrc={aboutData.solutions_image?.url || "/solutions.png"}
        showButton={false}
        reverseLayout={true}
      />
      <Container
        bgColor="#ffffff"
        title="A Partner in Your Success"
        titleColor="#161C2D"
        description={aboutData?.partners}
        descriptionColor="#161C2D"
        imageSrc={
          aboutData.partners_image?.url || "/partner_in_your_success.webp"
        }
        showButton={false}
        reverseLayout={false}
      />
      <CTA slides={slides}/>
    <News/>
      <Blogs/> 
    </div>
  );
}

export default AboutUsContent;
