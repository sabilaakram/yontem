"use client";
import React from "react";
import NewsCard from "./blogscard";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import HeroSection from "./hero_section";

type BlogDetail = {
  id: number;
  slug: string;
  FeaturedImage: {
    url: string;
    alternativeText: string;
  };
  NavMenuName: string;
  FeaturedText: string;
};

interface BlogsClientProps {
  blog: BlogDetail;
}

const BlogsClient: React.FC<BlogsClientProps> = ({ blog }) => {
    return (
        <div>
          <HeroSection
            backgroundImages={[blog.FeaturedImage.url]}
            items={{
              heading: blog.FeaturedText,
              text: [
                {
                  label:
                    "Aviation maintenance simulators offer realistic training for diagnosing and repairing aircraft systems. These flight maintenance devices equip technicians with the skills needed to perform precise and efficient maintenance tasks.",
                },
              ],
            }}
          />
        </div>
      )
};

export default BlogsClient;
