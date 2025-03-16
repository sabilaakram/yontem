import React, { useEffect, useState } from "react";
import Labatorysolutionscarosuel from "./labatorysolutionscarosuel";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getHomepageContent, formatImageUrl } from "@/data/loaders";
import { HomePage } from "@/lib/types";
import ParseRichText from "./richtextparser";

const Labatorysolutions = () => {
  const [HomePageData, setHomePageData] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomepageContent();
        setHomePageData(data);
      } catch (err) {
        setError("Failed to fetch About Us data");
        console.error("Error fetching About Us data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!HomePageData) return <div></div>;
  const laboratorySolutionImage = formatImageUrl(
    HomePageData?.EEL_solutions_image
  );

  return (
    <div className="mx-auto flex flex-col items-center justify-center lg:py-[100px] pt-[50px] lg:gap-[50px] gap-[20px]">
      <div className="w-[85%] lg:gap-[30px] gap-[20px] flex flex-col">
        <h2
          className={`text-[#171616] font-gilroy font-[800] text-center text-[36px] md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] leading-[40px] lg:line-clamp-2`}
        >
          Laboratory <br />
          <span
            className={`bg-gradient-to-r from-blue-400 via-blue-700 to-black bg-clip-text text-transparent md:text-[52px] lg:text-[60px] lg:leading-[70px] md:leading-[60px] text-[36px] leading-[40px]`}
          >
            Solutions
          </span>
        </h2>
        <ParseRichText
          content={HomePageData.laboratory_solutions} // Replace with actual block content variable
          paragraphProps="text-[#161C2D] lg:line-clamp-3 text-[18px] leading-[28px] lg:text-[28px] font-gilroy font-[600] text-center"
        />
      </div>
      <div
        className="w-[85%] relative overflow-hidden rounded-[8px] lg:block hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="h-[400px] md:h-[300px] lg:h-[500px] transition-transform duration-500 ease-in-out 
            bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url('${laboratorySolutionImage}')`,
          }}
        ></div>
        <div
          className={`absolute inset-0 flex items-end py-[50px] pl-[115px] pr-[200px] transition-opacity duration-300 ease-in-out ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-white font-gilroy text-[60px] font-[800] leading-[70px] p-10 text-start">
            Electrical & Electronics Training & Equipments
          </p>
        </div>
        <div
          className={`absolute inset-0 flex flex-col justify-center  py-[50px] pl-[115px] pr-[200px] p-10 transition-opacity duration-300 ease-in-out ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-left font-gilroy text-[48px] font-[800] leading-[60px] mb-[20px]">
            Electrical & Electronics Training & Equipments
          </p>
          {/* <p className="text-white text-left font-gilroy text-[24px] leading-[32px] mb-[30px]">
            Empowering innovation with cutting-edge electrical and electronics
            training equipment for hands-on learning and industry-ready
            expertise.
          </p> */}
          <ParseRichText
            content={HomePageData.EEL_solutions} // Replace with actual block content variable
            paragraphProps="text-white text-left font-gilroy text-[24px] leading-[32px] mb-[30px]"
          />
          <Button asChild className="flex items-center space-x-2">
            <Link href="/electric-and-electronics-laboratory-solutions">
              Discover More <ArrowUpRight className="h-[20px] w-[20px]" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="w-[85%] border rounded-lg lg:hidden flex">
        <Labatorysolutionscarosuel />
      </div>
    </div>
  );
};

export default Labatorysolutions;
