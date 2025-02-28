"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

function ContainerWithButton({
  bgColor = "#ffffff", // Background color of the container
  title = "Default Title", // H2 text
  titleColor = "#000000", // H2 text color
  description = "Default description goes here.", // P text
  descriptionColor = "#000000", // P text color
  imageSrc = "/default-image.png", // Image source
  showButton = true, // Whether to show the button
  buttonText = "View All", // Button text
  buttonLink = "#", // Button link
}) {
  return (
    <div
      className={`lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center`}
      style={{ backgroundColor: bgColor }} // Dynamic background color
    >
      <div
        className={`w-[85%] flex lg:flex-row lg:gap-[56px] md:gap-[20px] gap-[20px] flex-col md:flex-row`}
      >
        {/* Text Section */}
        <div
          className={`flex flex-col lg:w-[60%] md:w-[60%] w-full lg:gap-[30px] gap-[20px]`}
        >
          <h2
            className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px]"
            style={{ color: titleColor }} // Dynamic H2 text color
          >
            {title}
          </h2>
          <p
            className="font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]"
            style={{ color: descriptionColor }} // Dynamic P text color
          >
            {description}
          </p>
          {showButton && (
            <Button asChild
              className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition flex items-center flex-row"
            >
              <Link href={buttonLink}>
                {buttonText} <MdArrowOutward size={30} />
              </Link>
            </Button>
          )}
        </div>

        {/* Image Section */}
        <div
          className="lg:w-[40%] md:w-[40%] md:h-full lg:h-full w-full h-[200px] relative"
          style={{
            aspectRatio: "3 / 4",
            height: "cover",
          }}
        >
          <Image
            src={imageSrc} // Dynamic image source
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ContainerWithButton;
