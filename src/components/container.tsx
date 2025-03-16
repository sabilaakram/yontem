"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button"; // Ensure the path is correct
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import ParseRichText from "@/components/richtextparser"; // Import the rich text parser
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { getStrapiURL } from "@/lib/utils";

interface ContainerProps {
  bgColor?: string;
  title?: string;
  titleColor?: string;
  description?: BlocksContent | string; // Changed from `string` to `BlocksContent`
  descriptionColor?: string;
  imageSrc?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  reverseLayout?: boolean;
  bold?: string[];
}

const Container: React.FC<ContainerProps> = ({
  bgColor = "#ffffff",
  title = "Default Title",
  titleColor = "#000000",
  description,
  descriptionColor = "#000000",
  imageSrc = "",
  showButton = true,
  buttonText = "View All",
  buttonLink = "/",
  reverseLayout = false,
}) => {
  const fullImageSrc = imageSrc?.startsWith("http") ? imageSrc : `${getStrapiURL()}/${imageSrc.replace(/^\//, "")}`;
  return (
    
    <div
      className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`w-[85%] flex ${
          reverseLayout ? "md:flex-row-reverse lg:flex-row-reverse" : "md:flex-row lg:flex-row"
        } gap-[60px] flex-col`}
      >
        <div className="flex flex-col lg:w-[60%] md:w-[60%] w-full lg:gap-[30px] gap-[20px]">
          <h2
            style={{ color: titleColor }}
            className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px]"
          >
            {title}
          </h2>

          {/* Use ParseRichText to render rich content properly */}
          {description && typeof description !== 'string' && (
            <ParseRichText
              content={description}
              paragraphProps={`text-[${descriptionColor}] font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]`}
            />
          )}
          {description && typeof description === 'string' && (
            <p
              style={{ color: descriptionColor }}
              className="text-[#161C2D] font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]"
            >
              {description}
            </p>
          )}

          {showButton && (
            <Link href={buttonLink} legacyBehavior passHref>
              <Button className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition flex items-center flex-row">
                {buttonText} <MdArrowOutward size={20} />
              </Button>
            </Link>
          )}
        </div>
        <div className="lg:w-[40%] md:w-[40%] md:h-full lg:h-full w-full h-[200px] relative">
          <Image
            src={fullImageSrc}
            alt="Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
