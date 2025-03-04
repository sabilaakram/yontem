"use client";
import React from "react";
import NewsCard from "./newscard";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

function Blogs() {
  const dummyData = [
    {
      id: 1,
      slug: "Latest News",
      FeaturedImage: {
        url: "/ATS.png",
        alternativeText: "Latest News",
      },
      NavMenuName: "Latest News",
      FeaturedText:
        "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
    },
    {
      id: 2,
      slug: "Latest News",
      FeaturedImage: {
        url: "/AMS.png",
        alternativeText: "Latest News",
      },
      NavMenuName: "Latest News",
      FeaturedText:
        "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
    },
    {
      id: 3,
      slug: "Latest News",
      FeaturedImage: {
        url: "/CTQ.png",
        alternativeText: "Latest News",
      },
      NavMenuName: "Latest News",
      FeaturedText:
        "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
    },
    {
      id: 4,
      slug: "Latest News",
      FeaturedImage: {
        url: "/CTQ.png",
        alternativeText: "Latest News",
      },
      NavMenuName: "Latest News",
      FeaturedText:
        "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
    },
    {
      id: 5,
      slug: "Latest News",
      FeaturedImage: {
        url: "/CTQ.png",
        alternativeText: "Latest News",
      },
      NavMenuName: "Latest News",
      FeaturedText:
        "A versatile air disinfection device designed for easy placement in any room, providing continuous purification for improved air quality.",
    },
  ];

  return (
    <div className="lg:py-[80px] md:py-[70px] py-[50px]">
      <div className="flex flex-col md:w-full md:items-center items-center lg:items-start lg:pl-[100px]">
        <div className="lg:w-[70%] md:w-[85%] w-[90%] gap-[10px] lg:gap-[30px] flex flex-col ">
          <h2
            className={`font-gilroy font-[800] text-left text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2 bg-gradient-to-r from-blue-400 via-blue-700 to-black bg-clip-text text-transparent `}
          >
           Latest Articles & Blogs
          </h2>
          <p
            className={` lg:line-clamp-3 text-[18px] leading-[28px] lg:text-[28px] font-gilroy font-[600] text-left`}
          >
           Discover engaging stories and fresh ideas in our latest blog posts!
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="md:w-[90%] lg:w-[90%] w-full">
          <NewsCard data={dummyData} />
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

export default Blogs;


// import { Metadata } from "next";
// import { getBlogBySlug } from "@/data/loaders"; // Your function to fetch blog data
// import { PageProps, BlogDetail } from "@/lib/types";
// import BlogsClient from "./blogs_client";

// // ✅ Generate Metadata for Each Blog
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const blog: BlogDetail = await getBlogBySlug(params.slug);

//   if (!blog) {
//     return {
//       title: "Blog Not Found",
//       description: "The requested blog post could not be found.",
//     };
//   }

//   return {
//     title: blog.metatitle,
//     description: blog.metadescription,
//     keywords: blog.metakeywords || [],
//     alternates: {
//       canonical: `http://localhost:3000/blogs/${params.slug}`,
//     },
//   };
// }

// // ✅ Server Component that Fetches Blog Data
// export default async function BlogsPage({ params }: PageProps) {
//   const blog: BlogDetail = await getBlogBySlug(params.slug);

//   if (!blog) {
//     return <div>Blog not found.</div>;
//   }

//   return <BlogsClient blog={blog} />;
// }
