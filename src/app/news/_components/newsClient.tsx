"use client";
import React, { useEffect, useState } from "react";
import { News } from "@/lib/types";
import {getNewsData } from "@/data/loaders";
import HeroSection from "@/components/hero_section";
import NewsCard from "./newsCard";
import CTA from "@/components/cta";
import Blogs from "@/components/blogs";

const NewsClient: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const images = ["/AMS.png"];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsData();
        setNews(data.data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

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
      <HeroSection
        backgroundImages={images}
        items={{
          heading: "News",
          text: [
            {
              label:
                "Dive into expert discussions, tech innovations, and real-world applications shaping the future of simulation training.",
            },
          ],
        }}
      />
      <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] p-6 w-[85%] ">
          {news.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
      <CTA slides={slides} />
      <Blogs/>
    </div>
  );
};

export default NewsClient;
