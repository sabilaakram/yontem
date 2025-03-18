"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MdArrowOutward } from "react-icons/md"
import Link from "next/link"
import { getBlogsData } from "@/data/loaders"
import type { Blogs as BlogsType } from "@/lib/types"
import BlogsCard from "./blogscard"

function Blogs() {
  const [blogs, setBlogs] = useState<BlogsType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogsData()
        setBlogs(data.data)
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  // Map the Strapi data structure to the structure expected by NewsCard
  const mappedBlogsData = blogs.map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    FeaturedImage: {
      url: blog.blog_main_image.url,
      alternativeText: blog.blog_main_image.alternativeText,
    },
    NavMenuName: blog.blog_name,
    FeaturedText: blog.blog_short_description,
  }))

  return (
    <div className="lg:py-[80px] md:py-[70px] py-[50px]">
      <div className="flex flex-col md:w-full md:items-center items-center lg:items-start lg:pl-[100px]">
        <div className="w-[85%]  gap-[10px] lg:gap-[30px] flex flex-col ">
          <h2
            className={`font-gilroy font-[800] text-left text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2 bg-gradient-to-r from-blue-400 via-blue-700 to-black bg-clip-text text-transparent `}
          >
            Blogs & Articles
          </h2>
          <p className={` lg:line-clamp-3 text-[18px] leading-[30px] lg:text-[28px] font-gilroy font-[600] text-left`}>
          Dive into expert discussions, tech innovations, and real-world applications shaping the future of simulation training.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="md:w-[90%] lg:w-[90%] w-full">
            <BlogsCard data={mappedBlogsData} />
          </div>
        )}
      </div>
      <div className="flex place-content-center mt-8">
        <Button
          asChild
          className="lg:px-6 lg:py-3 lg:gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy text-lg hover:bg-[#515D6A] transition font-[600]"
        >
          <Link href="/blogs">
            See More <MdArrowOutward size={30} />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Blogs

