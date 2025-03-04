import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import SpecialProjectcarosuel from "./specialprojectcarosuel";
import Link from "next/link";

const Specialprojects = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="mx-auto flex flex-col items-center justify-center py-[50px] gap-[20px] lg:pt-[100px] lg:gap-[50px] lg:bg-gradient-to-b lg:from-[#D8D8D8] lg:via-[#D8D8D8] lg:to-transparent">
      <div className="w-[85%] lg:gap-[30px] gap-[20px] flex flex-col">
        <h2
          className={`text-[#171616] font-gilroy font-[800] text-center text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2`}
        >
          Special <br />
          <span
            className={`bg-gradient-to-r from-blue-400 via-blue-700 to-black bg-clip-text text-transparent md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] text-[36px] leading-[40px]`}
          >
            Projects
          </span>
        </h2>
        <p
          className={`text-[#161C2D] lg:line-clamp-3 text-[18px] leading-[28px] lg:text-[28px] font-gilroy font-[600] text-center`}
        >
          In response to the challenges of COVID, Yontem Teknoloji developed advanced {" "}
          <a href="/special-projects" className="text-[#E31E24] hover:text-[#ff676c]">air disinfection devices</a>, delivering groundbreaking solutions that enhanced safety and set new industry benchmarks.
        </p>
      </div>
      <div
        className="w-[85%] relative overflow-hidden rounded-[8px] lg:block hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={`h-[400px] md:h-[300px] lg:h-[500px] transition-transform duration-500 ease-in-out ${
            isHovering ? "scale-110" : "scale-100"
          } bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url('/Air_disinfection_Devices.webp')`,
          }}
        ></div>
        <div
          className={`absolute inset-0 flex items-end py-[50px] pl-[115px] pr-[200px] transition-opacity duration-300 ease-in-out ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-white font-gilroy text-[60px] font-[800] leading-[70px] p-10 text-start">
          Air disinfection<br/>Devices
          </p>
        </div>
        <div
          className={`absolute inset-0 flex flex-col justify-center  py-[50px] pl-[115px] pr-[200px] p-10 transition-opacity duration-300 ease-in-out ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-left font-gilroy text-[48px] font-[800] leading-[60px] mb-[20px]">
          Air disinfection<br/>Devices
          </p>
          <p className="text-white text-left font-gilroy text-[24px] leading-[32px] mb-[30px]">
          Designed to ensure clean, safe environments, our Air Disinfection Devices provide advanced air purification for critical areas like aircraft and medical facilities.
          </p>
          <Button asChild className="flex items-center space-x-2">
            <Link href="/special-projects">
            Discover More <ArrowUpRight className="h-[20px] w-[20px]" />
            </Link>
            
          </Button>
        </div>
      </div>
      
      <div className="w-[85%] border rounded-lg lg:hidden flex">
        <SpecialProjectcarosuel />
      </div>
    </div>
  );
};

export default Specialprojects;
