"use client";
import Hero_slider from "@/components/hero_slider";
import Whoweare from "@/components/who_we_are";
import Carousel from "@/components/carsoul_container";
import AviationSimulators from "../components/aviationsimulators";
import MaritimeSimulators from "@/components/maritimesimulators";
import Labatorysolutions from "@/components/labatorysolutions";
import Specialprojects from "@/components/specialprojects";
import Blogs from "@/components/blogs";
import CTA from "@/components/cta";
import News from "@/components/news";

export default function Home() {
  const imageList = [
    { id: "1", url: "/logos/DNV.png", alt: "Image 1" },
    { id: "2", url: "/logos/iec.png", alt: "Image 2" },
    { id: "3", url: "/logos/iso.png", alt: "Image 3" },
    { id: "4", url: "/logos/shsms.png", alt: "Image 4" },
    { id: "5", url: "/logos/stcw.png", alt: "Image 5" },
  ];
  const slides = [
    {
      heading: "Unlock the next level of innovation",
      text: "Reach out today",
      buttonText: "Get Started",
      buttonLink: "/discover",
      backgroundImage: "/cta4.jpg",
    },
    {
      heading: "Let us help you power your vision",
      text: "Get a Quote now!",
      buttonText: "Learn More",
      buttonLink: "/learn",
      backgroundImage: "/cta3.jpg",
    },
    {
      heading: "Your ideal technology solution is just a click away",
      text: "Get in touch with us!",
      buttonText: "Get in Touch",
      buttonLink: "/get-started",
      backgroundImage: "/cta2.jpg",
    },
    {
      heading: "Turn your challenges into opportunities",
      text: "Connect with Yontem Teknoloji today!",
      buttonText: "Connect Now",
      buttonLink: "/get-started",
      backgroundImage: "/cta1.jpg",
    },
  ];
  return (
    <div>
      <Hero_slider />
      <Whoweare />
      <Carousel
          heading="Global Certifications of "
          subheading="Excellence"
          description="We proudly adhere to international standards like STCW, DNV-IMO, and IEC, and hold ISO 9001, 14001, and OHSAS 18001 certifications, ensuring top-quality solutions in every sector we serve."
          images={imageList}
          headingColor="text-[#171616]"
          subheadingGradient="from-blue-400 via-blue-700 to-black"
          bgColor="bg-[#D8D8D8]"
        />
        {/* <Carousel
          heading="Trusted Clients"
          description="Your trusted partner for professional aircraft simulator solutions. We deliver world-class training, marine simulators, and laboratory solutions. We are trusted globally for precision and innovation."
          images={imageList}
          headingColor="text-[#EEE5E5]"
          descriptionColor="text-[#EEE5E5]"
          bgColor="bg-[#161C2D]"
        /> */}
      <AviationSimulators />
      <MaritimeSimulators/>
      <Labatorysolutions/>
      <Specialprojects/>
      {/* <CTA slides={slides}/>
    <News/>
    <Blogs/> */}
    </div>
  );
}
