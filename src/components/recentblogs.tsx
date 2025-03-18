import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/button";
import type { BlogDetail } from "@/lib/types";
import { getStrapiURL } from "@/lib/utils";

interface RecentBlogsProps {
  blogs: BlogDetail[];
  showViewAll?: boolean;
  title?: string;
}

export default function RecentBlogs({
  blogs = [],
  showViewAll = true,
  title = "Latest from Our Blog",
}: RecentBlogsProps) {
  const baseurl = getStrapiURL();
  const [numBlogs, setNumBlogs] = useState(3);

  useEffect(() => {
    const updateNumBlogs = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setNumBlogs(1); // Mobile
      } else if (width < 1024) {
        setNumBlogs(20); // Tablet
      } else {
        setNumBlogs(3); // Desktop
      }
    };

    updateNumBlogs();
    window.addEventListener("resize", updateNumBlogs);
    return () => window.removeEventListener("resize", updateNumBlogs);
  }, []);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
          <p className="text-center text-gray-500">No articles available at the moment. Check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, numBlogs).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48 bg-gray-200">
                {blog.blog_main_image && (
                  <Image
                    src={baseurl + blog.blog_main_image.url || "/placeholder.svg"}
                    alt={blog.blog_main_image.alternativeText || blog.blog_name}
                    className="object-cover"
                    fill
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{blog.blog_name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {typeof blog.introduction === 'string' ? blog.introduction : "Read this interesting article"}
                </p>
                <Link href={`/blogs/${blog.slug}`} className="text-blue-600 font-medium flex items-center">
                  Read More <MdArrowOutward className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {showViewAll && (
          <div className="text-center mt-10">
            <Button asChild className="px-6 py-3 gap-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              <Link href="/blogs">
                View All Articles <MdArrowOutward size={20} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
