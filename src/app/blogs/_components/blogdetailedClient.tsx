// "use client";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { MdArrowOutward } from "react-icons/md";
// import type { BlogDetail } from "@/lib/types";
// import ParseRichText from "@/components/richtextparser";
// import { getStrapiURL } from "@/lib/utils";
// import BlogFaqs from "./blogs_faq_section";
// import Blogs from "@/components/blogs";

// interface BlogDetailClientProps {
//   blog: BlogDetail;
// }

// const BlogDetailClient: React.FC<BlogDetailClientProps> = ({
//   blog,
// }) => {
//   const baseurl = getStrapiURL();

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div
//         className="bg-cover bg-center h-[400px] flex items-center justify-center"
//         style={{
//           backgroundImage: `url('${baseurl + blog.blog_header_image.url}')`,
//         }}
//       >
//         <h1 className="text-4xl font-bold text-white">
//           {blog.blog_name}
//         </h1>
//       </div>

//       {/* Key Features Section */}
//       <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
//         <div className="w-[85%]">
//           <div className="flex flex-col md:flex-row lg:flex-row lg:gap-[60px] md:gap-[30px] gap-[20px]">
//             <div className="lg:w-[400px] md:w-[350px]">
//               <Image
//                 src={
//                   baseurl + blog.blog_main_image.url || "/placeholder.svg"
//                 }
//                 alt={
//                     blog.blog_main_image.alternativeText ||
//                   "Product main image"
//                 }
//                 className="w-full h-full border border-none rounded-[8px] object-cover"
//                 height={550}
//                 width={550}
//               />
//             </div>
//             {/* <div className="gap-[30px] flex flex-col">
//               <h2 className="text-[48px] leading-[55px] font-gilroy font-bold">
//                 Key Features:
//               </h2>
//               <ParseRichText content={product.product_features} />
//               <Button
//                 asChild
//                 className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition"
//               >
//                 <Link href={`/contact`}>
//                   Get A Quote <MdArrowOutward size={30} />
//                 </Link>
//               </Button>
//             </div> */}
//           </div>

//           {/* Gallery Grid */}
//           {/* <div className="">
//             {blog.product_extra_images?.length > 0 ? (
//               <div className="grid grid-cols-4 lg:gap-[100px] md:gap-[20px] gap-[10px] lg:h-[200px] w-full lg:mt-[50px] md:my-[50px] my-[20px]">
//                 {product.product_extra_images.map((image, idx) => (
//                   <Image
//                     key={idx}
//                     src={baseurl + image.url || "/placeholder.svg"}
//                     alt={image.alternativeText || `Gallery image ${idx + 1}`}
//                     className="w-full h-full border border-none rounded-[8px] object-cover"
//                     height={550}
//                     width={550}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <p>No additional images available.</p>
//             )}
//           </div> */}

//           {/* Product Overview */}
//           <div className="gap-[10px] flex flex-col lg:pt-[50px]">
//             <h2 className="lg:text-[48px] text-[40px] leading-[50px] font-gilroy font-bold">
//               Introduction
//             </h2>
//             <ParseRichText
//               content={blog.introduction}
//               paragraphProps="text-[24px] text-[#000000] font-normal font-gilroy"
//             />
//           </div>

//           {/* Features Explained */}
//           <div className="gap-[10px] flex flex-col lg:pt-[10px] md:pt-[50px] pt-[20px]">
//             <h2 className="lg:text-[48px] text-[40px] leading-[50px] font-gilroy font-bold">
//               Features Explained
//             </h2>
//             <ParseRichText content={blog.blog_data} />
//           </div>

//           {/* Additional Benefits */}
//           <div className="gap-[10px] flex flex-col lg:pt-[50px] md:pt-[50px] pt-[20px]">
//             <h2 className="lg:text-[48px] text-[40px] leading-[50px] font-gilroy font-bold">
//               Conclusion
//             </h2>
//             <ParseRichText
//               content={blog.conclusion}
//               paragraphProps="text-[24px] text-[#000000] font-normal font-gilroy"
//             />
//           </div>
//           {/* FAQs */}
//           <h2 className="lg:text-[48px] text-[40px] leading-[50px] font-gilroy font-bold">
//               Frequently Asked Questions
//             </h2>          
//           <BlogFaqs product={blog}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetailClient;



"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { MdArrowOutward, MdAccessTime, MdCalendarToday } from "react-icons/md"
import type { BlogDetail } from "@/lib/types"
import ParseRichText from "@/components/richtextparser"
import { getStrapiURL } from "@/lib/utils"
import BlogFaqs from "./blogs_faq_section"
import { toast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"
import { FaFacebook, FaTwitter, FaLinkedin, FaLink, FaInstagram } from "react-icons/fa"
import { format, parseISO } from "date-fns"

interface BlogDetailClientProps {
  blog: BlogDetail
}

const BlogDetailClient: React.FC<BlogDetailClientProps> = ({ blog }) => {
  const baseurl = getStrapiURL()
  const [currentUrl, setCurrentUrl] = useState<string>("")

  // Set the current URL when component mounts (client-side only)
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const formattedDate = blog.publishDate ? format(parseISO(blog.publishDate), "MMMM d, yyyy") : null
  
  // Handle optional metadata with fallbacks
  const readTime = blog.readTime || null
  const author = blog.author || null




  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnTwitter = () => {
    const text = `Check out this article: ${blog.blog_name}`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnInstagram = () => {
    window.open("https://www.instagram.com/", "_blank")

    toast({
      title: "Instagram sharing",
      description:
        "Instagram doesn't support direct web sharing. You can copy the link and share it on Instagram manually.",
      duration: 5000,
    })
  }

  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
          duration: 3000,
        })
      })
      .catch(() => {
        toast({
          title: "Failed to copy",
          description: "Could not copy the link to clipboard.",
          variant: "destructive",
          duration: 3000,
        })
      })
  }

  // Web Share API for mobile devices
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.blog_name,
          text: `Check out this article: ${blog.blog_name}`,
          url: currentUrl,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback for desktop
      copyLinkToClipboard()
    }
  }


  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Section with Overlay */}
      <div className="relative">
        <div
          className="h-[30vh] md:h-[40vh] lg:h-[60vh] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('${baseurl + blog.blog_header_image.url}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="relative -mt-32 md:-mt-40 z-10 max-w-3xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              {formattedDate && (
                  <div className="flex items-center">
                    <MdCalendarToday className="mr-1" />
                    {formattedDate}
                  </div>
                )}
                {readTime && (
                  <div className="flex items-center">
                    <MdAccessTime className="mr-1" />
                    {readTime}
                  </div>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{blog.blog_name}</h1>
              {author ? (
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-3">
                    {author.charAt(0)}
                  </div>
                  <span className="text-gray-700">By {author}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[80%] mx-auto">
          {/* Introduction with Featured Image */}
          <div className="mb-16">
            <div className="relative mb-8 md:mb-12">
              <div className="relative h-[200px] md:h-[300px] lg:h-[500px] overflow-hidden rounded-xl flex items-center justify-center">
                <Image
                  src={baseurl + blog.blog_main_image.url || "/placeholder.svg"}
                  alt={blog.blog_main_image.alternativeText || "Blog main image"}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full z-0"></div> */}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative">
              Introduction
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-600"></div>
            </h2>
            <div className="prose prose-lg max-w-none">
              <ParseRichText content={blog.introduction} paragraphProps="text-lg text-gray-700 leading-relaxed" />
            </div>
          </div>

          {/* Features Explained */}
          <div className="mb-16">
            {/* <div className="flex items-center mb-6">
              <div className="h-px flex-grow bg-gray-200"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 px-4">Blog Data</h2> 
              <div className="h-px flex-grow bg-gray-200"></div>
            </div> */}
            <div className="bg-gray-50 p-2 md:p-4 rounded-xl">
              <ParseRichText content={blog.blog_data} paragraphProps="text-gray-700 mb-4" />
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 inline-block relative">
              Conclusion
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
            </h2>
            <div className="prose prose-lg max-w-none">
              <ParseRichText content={blog.conclusion} paragraphProps="text-lg text-gray-700 leading-relaxed" />
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <BlogFaqs product={blog} />
          </div>

          
          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 mr-2">Share this article:</span>
                <div className="inline-flex gap-2">
                  {/* Social share buttons with actual functionality */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 text-blue-600 hover:text-white hover:bg-blue-600"
                    onClick={shareOnFacebook}
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 text-sky-500 hover:text-white hover:bg-sky-500"
                    onClick={shareOnTwitter}
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 text-blue-700 hover:text-white hover:bg-blue-700"
                    onClick={shareOnLinkedIn}
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 text-gray-700 hover:text-white hover:bg-gray-700"
                    onClick={copyLinkToClipboard}
                    aria-label="Copy link"
                  >
                    <FaLink size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 text-[#E31E24] hover:text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                    onClick={shareOnInstagram}
                    aria-label="Share on Instagram"
                  >
                    <FaInstagram size={20} />
                  </Button>
                  {/* Mobile share button (only visible on mobile) */}
                  <Button
                    variant="outline"
                    className="rounded-full md:hidden px-4 py-2 text-gray-700"
                    onClick={handleShare}
                  >
                    Share
                  </Button>
                </div>
              </div>
              <Button
                asChild
                className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition"
              >
                <Link href="/blogs">
                  Back to Blogs <MdArrowOutward size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default BlogDetailClient

