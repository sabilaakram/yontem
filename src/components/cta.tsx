"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

// Define the interface for slide data
interface Slide {
  heading: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

interface CTAProps {
  slides: Slide[]; // Array of slide objects
}

const CTA: React.FC<CTAProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto slide functionality with a timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div
      className="relative bg-scroll place-content-center h-[200px] md:h-[300px] lg:h-[300px]" // Adjust height here
      style={{
        backgroundImage: `url('${slides[currentIndex].backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-80"
        style={{ zIndex: 0 }}
      ></div>

      <div className="relative z-10 place-content-center lg:px-[50px] md:px-[50px] px-[20px] text-center text-white pt-[30px] pb-[30px]">
        <h2 className="lg:text-[54px] md:text-[36px] text-[18px] font-bold mb-[20px] lg:leading-[60px] md:leading-[40px] leading-[22px] font-gilroy capitalize text-[#EEE5E5]">
          {slides[currentIndex].heading}
          <br />
          {slides[currentIndex].text}
        </h2>
        <Button
          className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#161C2D] transition"
          onClick={() =>
            (window.location.href = slides[currentIndex].buttonLink)
          }
        >
          {slides[currentIndex].buttonText}
          <MdArrowOutward size={30} />
        </Button>
      </div>

      {/* Custom Pagination Dots */}
      <div className="absolute right-0 bottom-0 transform -translate-y-1/2 mr-[150px] mb-[20px] hidden md:flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-red-500" : "bg-opacity-50 bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CTA;
