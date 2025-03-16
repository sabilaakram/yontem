// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { getStrapiURL } from "@/lib/utils";

// interface HeroSectionProps {
//   backgroundImages: string[];
//   items: {
//     heading: string;
//     text: { label: React.ReactNode; link?: string }[]; // Accept JSX content
//   };
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImages, items }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (!backgroundImages || backgroundImages.length === 0) {
//       console.warn("No background images provided for HeroSection.");
//       return;
//     }

//     if (backgroundImages.length === 1) return;

//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [backgroundImages]);

//   const currentImage =
//     backgroundImages && backgroundImages.length > 0
//       ? backgroundImages[currentImageIndex]
//       : "/fallback_image.webp";

//   const fullBackgroundImageSrc = currentImage.startsWith("http")
//     ? currentImage
//     : `${getStrapiURL()}/${currentImage.replace(/^\//, "")}`;

//   return (
//     <div
//       className="bg-scroll place-content-center lg:h-[670px] md:h-[500px] h-[400px] md:pt-20 pt-20"
//       style={{
//         backgroundImage: fullBackgroundImageSrc
//           ? `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url(${fullBackgroundImageSrc})`
//           : "none",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="place-content-center lg:px-[100px] md:px-[50px] px-[20px] text-center text-white md:max-w-[80%] lg:max-w-[70%] mx-auto flex flex-col items-center justify-center">
//         <h1 className="lg:text-[54px] lg:leading-[60px] md:text-4xl text-3xl font-bold lg:mb-[30px] mb-[16px] font-gilroy line-clamp-2 capitalize text-[#EEE5E5]">
//           {items.heading}
//         </h1>
//         <p className="text-[16px] lg:text-[18px] lg:leading-[19.2px] leading-[16px] mb-[40px] text-[#EEE5E5] font-gilroy ">
//           {items.text.map((item, index) => (
//             <React.Fragment key={index}>
//               {item.link ? <Link href={item.link}>{item.label}</Link> : item.label}
//               {index < items.text.length - 1 && <span className="mx-2">/</span>}
//             </React.Fragment>
//           ))}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { getStrapiURL } from "@/lib/utils"

interface HeroSectionProps {
  backgroundImages: string[]
  items: {
    heading: string
    text: { label: React.ReactNode; link?: string }[] // Accept JSX content
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImages, items }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!backgroundImages || backgroundImages.length === 0) {
      console.warn("No background images provided for HeroSection.")
      return
    }

    if (backgroundImages.length === 1) return

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [backgroundImages])

  const currentImage =
    backgroundImages && backgroundImages.length > 0 ? backgroundImages[currentImageIndex] : "/fallback_image.webp"

  // Determine if the image is from public folder or Strapi
  const isPublicImage = currentImage.startsWith("/") && !currentImage.includes("uploads")

  // Get the correct image URL based on the source
  const fullBackgroundImageSrc = (() => {
    // If it's a full URL (starts with http), use it directly
    if (currentImage.startsWith("http")) {
      return currentImage
    }

    // If it's from the public folder, use it directly with the app's base URL
    if (isPublicImage) {
      return currentImage // Next.js will handle this correctly from the public folder
    }

    // Otherwise, it's from Strapi, so prepend the Strapi URL
    return `${getStrapiURL()}/${currentImage.replace(/^\//, "")}`
  })()

  return (
    <div
      className="bg-scroll place-content-center lg:h-[670px] md:h-[500px] h-[400px] md:pt-20 pt-20"
      style={{
        backgroundImage: fullBackgroundImageSrc
          ? `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url(${fullBackgroundImageSrc})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="place-content-center lg:px-[100px] md:px-[50px] px-[20px] text-center text-white md:max-w-[80%] lg:max-w-[70%] mx-auto flex flex-col items-center justify-center">
        <h1 className="lg:text-[54px] lg:leading-[60px] md:text-4xl text-3xl font-bold lg:mb-[30px] mb-[16px] font-gilroy line-clamp-2 capitalize text-[#EEE5E5]">
          {items.heading}
        </h1>
        <p className="text-[16px] lg:text-[18px] lg:leading-[19.2px] leading-[16px] mb-[40px] text-[#EEE5E5] font-gilroy ">
          {items.text.map((item, index) => (
            <React.Fragment key={index}>
              {item.link ? <Link href={item.link}>{item.label}</Link> : item.label}
              {index < items.text.length - 1 && <span className="mx-2">/</span>}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}

export default HeroSection

