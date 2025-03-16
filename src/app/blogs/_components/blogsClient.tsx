"use client";
import React, { useEffect, useState } from "react";
import { Blogs } from "@/lib/types";
import {getBlogsData } from "@/data/loaders";
import HeroSection from "@/components/hero_section";
import BlogsCard from "./blogsCards";

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

  return (
    <div>
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
    </div>
  );
};

export default BlogsClient;
