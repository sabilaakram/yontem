import ProductCarousel from "@/components/carousel";
import React from "react";

interface CarouselTemplateProps {
  heading: string;
  subheading?: string; // Optional subheading
  description: string;
  images: { id: string; url: string; alt?: string }[];
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
      <h1 className={`${headingColor} font-gilroy font-[800] text-center text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2 lg:px-[100px]`}>
        {heading}<br/>
        {subheading && (
          <span
            className={`bg-gradient-to-r ${subheadingGradient} bg-clip-text text-transparent md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] text-[36px] leading-[40px]`}
          >
            {subheading}
          </span>
        )}
      </h1>
      <p className={`${descriptionColor} lg:line-clamp-3 text-[18px] leading-[28px] lg:text-[28px] font-gilroy font-[600] text-center `}>
        {description}
      </p>
      <ProductCarousel data={images} />
      </div>
      
    </div>
  );
};

export default Carousel;
