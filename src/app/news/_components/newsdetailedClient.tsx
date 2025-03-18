"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { MdArrowOutward, MdAccessTime, MdCalendarToday } from "react-icons/md"
import type { NewsDetail } from "@/lib/types"
import ParseRichText from "@/components/richtextparser"
import { getStrapiURL } from "@/lib/utils"
import NewsFaqs from "./news_faq_section"
import { toast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"
import { FaFacebook, FaTwitter, FaLinkedin, FaLink, FaInstagram } from "react-icons/fa"
import { format, parseISO } from "date-fns"
import NewsCta from "./news_cta_section"
import CTA from "@/components/cta"

interface NewsDetailClientProps {
  news: NewsDetail
}

const NewsDetailClient: React.FC<NewsDetailClientProps> = ({ news }) => {
  const baseurl = getStrapiURL()
  const [currentUrl, setCurrentUrl] = useState<string>("")
  const [imageError, setImageError] = useState(false)


  const slides = [
    {
      heading: "Experience the Future of Training!",
      text: "Discover Yöntem Teknoloji's Innovations Today!",
      buttonText: "Get Started",
      buttonLink: "/discover",
      backgroundImage: "/cta4.jpg",
    },
  ];

  // Set the current URL when component mounts (client-side only)
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const formattedDate = news.publishDate ? format(parseISO(news.publishDate), "MMMM d, yyyy") : null

  // Handle optional metadata with fallbacks
  const readTime = news.readTime || null
  const author = news.author || null

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnTwitter = () => {
    const text = `Check out this article: ${news.news_name}`
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
          title: news.news_name,
          text: `Check out this article: ${news.news_name}`,
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

  // Construct the full image URLs properly
  const headerImageUrl = news.news_header_image?.url
    ? news.news_header_image.url.startsWith("http")
      ? news.news_header_image.url
      : `${baseurl}${news.news_header_image.url}`
    : "/placeholder.svg?height=600&width=1200"

  const mainImageUrl = news.news_main_image?.url
    ? news.news_main_image.url.startsWith("http")
      ? news.news_main_image.url
      : `${baseurl}${news.news_main_image.url}`
    : "/placeholder.svg?height=600&width=1200"

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Section */}
      <div className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 ">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Article metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
              {formattedDate && (
                <div className="flex items-center bg-gray-800/50 px-3 py-1 rounded-full">
                  <MdCalendarToday className="mr-2" />
                  {formattedDate}
                </div>
              )}
              {readTime && (
                <div className="flex items-center bg-gray-800/50 px-3 py-1 rounded-full">
                  <MdAccessTime className="mr-2" />
                  {readTime}
                </div>
              )}
              {author && (
                <div className="flex items-center bg-gray-800/50 px-3 py-1 rounded-full">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-700 text-white text-xs mr-2">
                    {author.charAt(0)}
                  </span>
                  {author}
                </div>
              )}
            </div>

            {/* Article title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {news.news_name}
            </h1>

            {/* Social sharing - top */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-gray-300 text-sm">Share:</span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 bg-transparent border-gray-600 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-transparent"
                onClick={shareOnFacebook}
                aria-label="Share on Facebook"
              >
                <FaFacebook size={16} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 bg-transparent border-gray-600 text-gray-300 hover:text-white hover:bg-sky-500 hover:border-transparent"
                onClick={shareOnTwitter}
                aria-label="Share on Twitter"
              >
                <FaTwitter size={16} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 bg-transparent border-gray-600 text-gray-300 hover:text-white hover:bg-blue-700 hover:border-transparent"
                onClick={shareOnLinkedIn}
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin size={16} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 bg-transparent border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700 hover:border-transparent"
                onClick={copyLinkToClipboard}
                aria-label="Copy link"
              >
                <FaLink size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured image overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          {!imageError ? (
            <Image
              src={headerImageUrl || "/placeholder.svg"}
              alt={news.news_header_image?.alternativeText || "Featured image"}
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-800"></div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[80%] mx-auto">
          {/* Main image */}
          {/* <div className="mb-10 rounded-xl overflow-hidden shadow-xl">
            {!imageError ? (
              <Image
                src={mainImageUrl || "/placeholder.svg"}
                alt={news.news_main_image?.alternativeText || "Article main image"}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
          </div> */}

          {/* Introduction */}
          <div className="mb-12">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Introduction</h2> */}
            <div className="prose prose-lg max-w-none">
              <ParseRichText content={news.introduction} paragraphProps="text-gray-700 leading-relaxed mb-4" />
            </div>
          </div>

          {/* Main content */}
          <div className="mb-12 bg-gray-50 p-6 rounded-xl">
            <ParseRichText
              content={news.news_data}
              paragraphProps="text-gray-700 mb-4"
              headingProps={{ h1: "text-xl font-bold text-gray-900 mb-4" }}
            />
          </div>

          {/* Conclusion */}
          <div className="mb-16 border-l-4 border-[#E31E24] pl-6">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2> */}
            <div className="prose prose-lg max-w-none">
              <ParseRichText content={news.conclusion} paragraphProps="text-gray-700 leading-relaxed mb-4" />
            </div>
          </div>

          {/* CTA Section */}
          <CTA slides={slides} />

          {/* FAQs
          {news.Faq && news.Faq.length > 0 && (
            <div className="mb-16 bg-gray-50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <NewsFaqs product={news} />
            </div>
          )} */}

          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="w-full md:w-auto">
                <span className="block text-gray-600 mb-3 font-medium">Share this article</span>
                <div className="flex gap-2 flex-wrap">
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
                    className="rounded-full h-10 w-10 text-[#E31E24] hover:text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                    onClick={shareOnInstagram}
                    aria-label="Share on Instagram"
                  >
                    <FaInstagram size={20} />
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
                  {/* Mobile share button */}
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
                className="w-full md:w-auto px-6 py-3 gap-2 bg-[#E31E24] text-white rounded-lg font-medium hover:bg-[#c01a1f] transition"
              >
                <Link href="/news">
                  Back to News <MdArrowOutward size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetailClient

