"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "./newscard";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { getNewsData } from "@/data/loaders";
import type { News as NewsType } from "@/lib/types";

function News() {
  const [news, setNews] = useState<NewsType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsData()
        setNews(data.data)
      } catch (error) {
        console.error("Failed to fetch news:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  // Map the Strapi data structure to the structure expected by NewsCard
  const mappedNewsData = news.map((news) => ({
    id: news.id,
    slug: news.slug,
    FeaturedImage: {
      url: news.news_main_image.url,
      alternativeText: news.news_main_image.alternativeText,
    },
    NavMenuName: news.news_name,
    FeaturedText: news.news_short_description,
  }))
    
  return (
    <div className="lg:pt-[80px] md:pt-[70px] pt-[50px]">
    <div className="flex flex-col md:w-full md:items-center items-center lg:items-start lg:pl-[100px]">
      <div className=" gap-[10px] w-[85%]  lg:gap-[30px] flex flex-col ">
        <h2
          className={` lg:w-[70%] md:w-[85%] w-[90%] font-gilroy font-[800] text-left text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2`}
        >
          Industry Insights:
          <span
            className={`bg-gradient-to-r from-blue-400 via-blue-700 to-black bg-clip-text text-transparent md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] text-[36px] leading-[40px]`}
          >
            Latest News & Press Highlights
          </span>
        </h2>
        <p
          className={`lg:line-clamp-3 text-[18px] leading-[30px] lg:text-[28px] font-gilroy font-[600] text-left`}
        >
          Explore the latest trends, news, and industry insights shaping the
          future.
        </p>
        
      </div>
      </div>
      <div className=" flex items-center justify-center">
      {loading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="md:w-[90%] lg:w-[90%] w-full">
            <NewsCard data={mappedNewsData} />
          </div>
        )}
      </div>
      <div className="flex place-content-center">
      <Button asChild className="lg:px-6 lg:py-3 lg:gap-[10px]  bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy text-lg hover:bg-[#515D6A] transition font-[600] ">
        <Link href={"/news"}>
        See More <MdArrowOutward size={30}/>
        </Link>
        </Button>
      </div>
      
    </div>
  );
}

export default News;
