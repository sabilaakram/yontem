"use client";
import React, { useEffect, useState } from "react";
import { Blogs } from "@/lib/types";
import {getBlogsData } from "@/data/loaders";
import HeroSection from "@/components/hero_section";
import BlogsCard from "./blogsCards";
import CTA from "@/components/cta";
import News from "@/components/news";

const BlogsClient: React.FC = () => {
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [loading, setLoading] = useState(true);
  const images = ["/AMS.png"];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogsData();
        setBlogs(data.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
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
    <div className="mb-10">
      <HeroSection
        backgroundImages={images}
        items={{
          heading: "Blogs And Articles",
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
          {blogs.map((blog) => (
            <BlogsCard key={blog.id} blogs={blog} />
          ))}
        </div>
      </div>
      <CTA slides={slides} />
      <News/>
    </div>
  );
};

export default BlogsClient;
