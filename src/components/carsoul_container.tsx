import ProductCarousel from "@/components/carousel";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import React from "react";
import ParseRichText from "./richtextparser";

interface CarouselTemplateProps {
  heading: string;
  subheading?: string; // Optional subheading
  description: BlocksContent;
  images: { url: string; alt?: string }[];
  headingColor?: string; // Optional custom color for heading
  subheadingGradient?: string; // Optional gradient for subheading
  bgColor?: string; // Background color for the component
  descriptionColor?: string
}

const Carousel: React.FC<CarouselTemplateProps> = ({
  heading,
  subheading,
  description,
  images,
  headingColor = "text-[#171616]", // Default color
  subheadingGradient = "from-blue-400 via-blue-700 to-black", // Default gradient
  bgColor = "bg-white", // Default background color
  descriptionColor = "text-black"
}) => {
  return (
    <div className={` mx-auto ${bgColor} flex flex-col  items-center justify-center lg:py-[100px] py-[50px] `}>
      <div className="w-[85%] gap-[30px] flex flex-col">
      <h3 className={`${headingColor} font-gilroy font-[800] text-center text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2 lg:px-[100px]`}>
        {heading}<br/>
        {subheading && (
          <span
            className={`bg-gradient-to-r ${subheadingGradient} bg-clip-text text-transparent md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] text-[36px] leading-[40px]`}
          >
            {subheading}
          </span>
        )}
      </h3>
      <ParseRichText
          content={description}
          paragraphProps={`${descriptionColor} font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px] text-center`}
        />
      <ProductCarousel data={images.map((image, index) => ({ ...image, id: index.toString() }))} />
      </div>
      
    </div>
  );
};

export default Carousel;
