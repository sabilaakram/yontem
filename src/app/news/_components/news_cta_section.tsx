"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { getStrapiURL } from "@/lib/utils";
import ParseRichText from "@/components/richtextparser";
import { useState } from "react";
import { BlocksContent } from "@strapi/blocks-react-renderer";

interface CtaProps {
  title?: string;
  description?: BlocksContent;
  backgroundImage?: {
    url: string;
    alternativeText?: string;
  };
}

interface NewsCtaProps {
  cta: CtaProps;
}

const NewsCta: React.FC<NewsCtaProps> = ({ cta }) => {
  const baseurl = getStrapiURL();
  const [imageError, setImageError] = useState(false);

  // Construct the full image URL properly
  const backgroundImageUrl = cta.backgroundImage?.url
    ? cta.backgroundImage.url.startsWith("http")
      ? cta.backgroundImage.url
      : `${baseurl}${cta.backgroundImage.url}`
    : "/placeholder.svg?height=400&width=1200";

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={backgroundImageUrl || "/placeholder.svg"}
            alt={cta.backgroundImage?.alternativeText || "CTA background"}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900"></div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-white">
        <div className="max-w-3xl mx-auto text-center">
          {cta.title && (
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
          )}

          {cta.description && (
            <div className="mb-8 text-gray-200">
              <ParseRichText
                content={cta.description}
                paragraphProps="text-gray-200 leading-relaxed mb-4"
              />
            </div>
          )}
          <Button
            asChild
            className="px-6 py-3 gap-2 bg-[#E31E24] text-white rounded-lg font-medium hover:bg-[#c01a1f] transition"
          >
            <Link href="/contact">
              Contact Us Now <MdArrowOutward size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsCta;
