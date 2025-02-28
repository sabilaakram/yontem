import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const slides = [
  {
    heading: "Soar Higher with Next Gen Flight Simulators",
    text: "Experience the pinnacle of flight simulation, designed to elevate your training to new heights. Elevate your training with simulators engineered for precision and reliability.",
    buttonText: "Discover Now",
    buttonLink: "/aviationsimulator",
    backgroundImage: "/Hero_1.webp",
  },
  {
    heading: "Unleash the Skies with Cutting-Edge Technology",
    text: "Fly with unmatched precision and immerse yourself in a world of advanced flight training solutions.",
    buttonText: "Learn More",
    buttonLink: "/aviationsimulator",
    backgroundImage: "/Hero_1.webp",
  },
  {
    heading: "Transform Your Training Experience",
    text: "Step into the future of aviation with simulators tailored for excellence and efficiency.",
    buttonText: "Get Started",
    buttonLink: "/contact",
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
          {slides[currentIndex].text}
        </p>
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
