import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const slides = [
  {
    heading: "Professional Simulator Solutions Build for Excellence",
    text: "Discover the future of aviation training as Yontem Teknoloji is a professional simulator company, trusted worldwide for delivering unmatched accuracy and performance.",
    buttonText: "Discover more",
    buttonLink: "/aviationsimulator",
    backgroundImage: "/Hero_1.webp",
    link: "/aviationsimulator",
    linkText: "aviation training",
  },
  {
    heading: "Real-World Marine Training With Simulation Technology Provider",
    text: "Advanced maritime simulation solutions with ship simulators engineered to deliver realistic training experiences, improving operational readiness and safety for maritime professionals.",
    buttonText: "Discover more",
    buttonLink: "/maritime-training-simulators",
    backgroundImage: "/Hero_1.webp",
    link: "/maritime-training-simulators",
    linkText: "ship simulators",
  },
  {
    heading: "Cutting-Edge Laboratory Solutions For Advanced, Precise Testing And Training",
    text: "As a leading simulator manufacturer, we offer innovative laboratory equipment for accurate and reliable testing environments, enhancing research and development efficiency.",
    buttonText: "Discover more",
    buttonLink: "/electric-and-electronics-laboratory-solutions",
    backgroundImage: "/Hero_1.webp",
  },
  {
    heading: "Reliable Air Disinfection Devices For Cleaner, Safer Environments",
    text: "Our disinfection technology ensures a safer, healthier environment by eliminating airborne contaminants.",
    buttonText: "Discover more",
    buttonLink: "/special-projects",
    backgroundImage: "/Hero_1.webp",
  },
];

const HeroSection = () => {
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
  }, []);

  const renderTextWithLink = (text:string, link?:string, linkText?:string) => {
    if (!link || !linkText) return text;

    const parts = text.split(linkText);
    return (
      <>
        {parts[0]}
        <Link href={link} className="text-[#e31e25] hover:text-[#ff676c]">
          {linkText}
        </Link>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className="bg-scroll place-content-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url('${slides[currentIndex].backgroundImage}')`,
        height: "800px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="place-content-center lg:px-[100px] md:px-[50px] px-[20px] text-center text-white">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-[20px] font-gilroy capitalize text-[#EEE5E5]">
          {slides[currentIndex].heading}
        </h1>
        <p className="text-[18px] lg:text-[28px] mb-[40px] text-[#EEE5E5] font-gilroy">
          {renderTextWithLink(
            slides[currentIndex].text,
            slides[currentIndex].link,
            slides[currentIndex].linkText
          )}
        </p>
        <Button
          className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition"
          onClick={() =>
            (window.location.href = slides[currentIndex].buttonLink)
          }
        >
          {slides[currentIndex].buttonText}
          <MdArrowOutward size={30} />
        </Button>
      </div>

      {/* Navigation buttons at the bottom-center */}
      <div className="absolute lg:mt-[40px] mt-[80px] left-1/2 transform -translate-x-1/2 flex gap-6">
        <button
          onClick={prevSlide}
          className="text-white text-4xl hover:opacity-80 transition"
        >
          <IoIosArrowDropleft />

        </button>
        <button
          onClick={nextSlide}
          className="text-white text-4xl hover:opacity-80 transition"
        >
          <IoIosArrowDropright />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
