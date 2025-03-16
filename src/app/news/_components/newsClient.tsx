"use client";
import React, { useEffect, useState } from "react";
import { News } from "@/lib/types";
import {getNewsData } from "@/data/loaders";
import HeroSection from "@/components/hero_section";
import NewsCard from "./newsCard";

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
    </div>
  );
};

export default NewsClient;
