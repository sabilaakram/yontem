"use client";
import React from "react";
import NewsCard from "./newscard";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

function News() {
    const dummyData = [
        {
          id: 1,
          slug: "Latest News",
          FeaturedImage: {
            url: "/ATS.png",
            alternativeText: "Latest News",
          },
          NavMenuName: "Latest News",
          FeaturedText: "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
        },
        {
            id: 2,
            slug: "Latest News",
            FeaturedImage: {
              url: "/AMS.png",
              alternativeText: "Latest News",
            },
            NavMenuName: "Latest News",
            FeaturedText: "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
          },
          {
            id: 3,
            slug: "Latest News",
            FeaturedImage: {
              url: "/CTQ.png",
              alternativeText: "Latest News",
            },
            NavMenuName: "Latest News",
            FeaturedText: "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
          },
          {
            id: 4,
            slug: "Latest News",
            FeaturedImage: {
              url: "/CTQ.png",
              alternativeText: "Latest News",
            },
            NavMenuName: "Latest News",
            FeaturedText: "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
          },
          {
            id: 5,
            slug: "Latest News",
            FeaturedImage: {
              url: "/CTQ.png",
              alternativeText: "Latest News",
            },
            NavMenuName: "Latest News",
            FeaturedText: "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
          },
      ];
    
  return (
    <div className="lg:pt-[80px] md:pt-[70px] pt-[50px]">
    <div className="flex flex-col md:w-full md:items-center items-center lg:items-start lg:pl-[100px]">
      <div className="lg:w-[70%] md:w-[85%] w-[90%] gap-[10px] lg:gap-[30px] flex flex-col ">
        <h2
          className={`font-gilroy font-[800] text-left text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2`}
        >
          Industry Insights:
          <span
            className={`bg-gradient-to-r from-blue-400 via-blue-700 to-black bg-clip-text text-transparent md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] text-[36px] leading-[40px]`}
          >
            Latest News & Press Highlights
          </span>
        </h2>
        <p
          className={` lg:line-clamp-3 text-[18px] leading-[28px] lg:text-[28px] font-gilroy font-[600] text-left`}
        >
          Explore the latest trends, news, and industry insights shaping the
          future.
        </p>
        
      </div>
      </div>
      <div className=" flex items-center justify-center">
      <div className="md:w-[90%] lg:w-[90%] w-full">
      <NewsCard data={dummyData}/>
      </div>
      </div>
      <div className="flex place-content-center">
      <Button asChild className="lg:px-6 lg:py-3 lg:gap-[10px]  bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy text-lg hover:bg-[#515D6A] transition font-[600] ">
        <Link href={"/"}>
        See More <MdArrowOutward size={30}/>
        </Link>
        </Button>
      </div>
      
    </div>
  );
}

export default News;
