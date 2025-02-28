"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  backgroundImages: string[];
  items: {
    heading: string;
    text: { label: string; link?: string }[];
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImages, items }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!backgroundImages || backgroundImages.length === 0) {
      console.warn("No background images provided for HeroSection.");
      return;
    }

    if (backgroundImages.length === 1) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [backgroundImages]);

  const currentImage = backgroundImages && backgroundImages.length > 0 ? backgroundImages[currentImageIndex] : '';

  return (
    <div
      className="bg-scroll place-content-center lg:h-[670px] md:h-[500px] h-[400px] md:pt-20 pt-20"
      style={{
        backgroundImage: currentImage ? `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url(${currentImage})` : 'none',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="place-content-center lg:px-[100px] md:px-[50px] px-[20px] text-center text-white md:max-w-[80%] lg:max-w-[70%] mx-auto flex flex-col items-center justify-center">
        <h1 className="lg:text-[54px] lg:leading-[60px] md:text-4xl text-3xl font-bold lg:mb-[30px] mb-[16px] font-gilroy line-clamp-2 capitalize text-[#EEE5E5]">
          {items.heading}
        </h1>
        <p className="text-[16px] lg:text-[18px] lg:leading-[19.2px] leading-[16px] mb-[40px] text-[#EEE5E5] font-gilroy lg:line-clamp-2 ">
          {items.text.map((item, index) => (
            <React.Fragment key={index}>
              {item.link ? (
                <Link href={item.link}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < items.text.length - 1 && <span className="mx-2">/</span>}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HeroSection