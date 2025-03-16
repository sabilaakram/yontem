"use client";
import Hero_slider from "@/components/hero_slider";
import Whoweare from "@/components/who_we_are";
import Carousel from "@/components/carsoul_container";
import AviationSimulators from "../components/aviationsimulators";
import MaritimeSimulators from "@/components/maritimesimulators";
import Labatorysolutions from "@/components/labatorysolutions";
import Specialprojects from "@/components/specialprojects";
import CTA from "@/components/cta";
import News from "@/components/news";
import Blogs from "@/components/blogs";
import { getHomepageContent } from "@/data/loaders";
import { HomePage } from "@/lib/types";
import { useState, useEffect } from "react";
import { getStrapiURL } from "@/lib/utils"; // ✅ Import getStrapiURL()

export default function Home() {
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

  // ✅ Format image URLs properly to avoid `localhost:3000` issues
  const certificationsImages =
    HomePageData.certifications_logos?.map((logo) => ({
      url: logo.url.startsWith("http")
        ? logo.url
        : `${getStrapiURL()}/${logo.url.replace(/^\//, "")}`, // Fix for backend images
      alt: logo.alternativeText || "Certification Logo",
    })) || [];


    const clientsImages =
    HomePageData.clients_logos?.map((logo) => ({
      url: logo.url.startsWith("http")
        ? logo.url
        : `${getStrapiURL()}/${logo.url.replace(/^\//, "")}`, // Fix for backend images
      alt: logo.alternativeText || "Clients Logo",
    })) || [];

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

  return (
    <div>
      <Hero_slider />
      <Whoweare />
      <Carousel
        heading="Global Certifications of "
        subheading="Excellence"
        description={HomePageData.certifications}
        images={certificationsImages} // ✅ Use formatted images
        headingColor="text-[#171616]"
        subheadingGradient="from-blue-400 via-blue-700 to-black"
        bgColor="bg-[#D8D8D8]"
      />
      <Carousel
        heading="Trusted Clients "
        description={HomePageData.clients}
        images={clientsImages} // ✅ Use formatted images
        headingColor="text-[#EEE5E5]"
        descriptionColor="text-[#EEE5E5]"
        subheadingGradient="from-blue-40  0 via-blue-700 to-black"
        bgColor="bg-[#161C2D]"
      />
      <AviationSimulators />
      <MaritimeSimulators />
      <Labatorysolutions />
      <Specialprojects />
      <CTA slides={slides} />
      <News />
      <Blogs />
    </div>
  );
}
