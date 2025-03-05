import Blogs from "@/components/blogs";
import Container from "@/components/container";
import CTA from "@/components/cta";
import HeroSection from "@/components/hero_section";
import News from "@/components/news";
import Tabcontainer from "@/components/tabcontainer";
import { getPageMetadata } from "@/data/loaders";
import { PageProps, SinglePageProps } from "@/lib/types";


import { Metadata } from "next";
import React from "react";
import { headers } from "next/headers";



export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const metadata: SinglePageProps = await getPageMetadata('about');

  // console.log("Raw Metadata:", metadata);

  let keywords: string[] = [];

  if (Array.isArray(metadata.metakeywords)) {
    keywords = metadata.metakeywords.flatMap((item: any) =>
      item.children?.map((child: any) => child.text) ?? []
    );
  } else if (typeof metadata.metakeywords === "string") {
    keywords = metadata.metakeywords.split(",").map((k) => k.trim());
  }

  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const canonicalUrl = `${protocol}://${host}/${metadata.slug}`;

  return {
    title: metadata?.metatitle,
    description: metadata?.metadescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}



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
const images = [
  "/Hero_1.webp",
  // "/ATS.png"
];

function AboutUs() {
  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: "About Us",
          text: [
            { label: "HOME", link: "/" }, // Link for HOME
            { label: "ABOUT", link: "/about" }, // Link for ABOUT
          ],
        }}
      />
      <Container
        bgColor="#161C2D"
        title="Our Journey: Inside Yontem's Technical Hub"
        titleColor="#EEE5E5"
        description="Founded in 1997, Yontem Teknoloji emerged to meet Turkey's growing need for advanced technology and services. From its early days, the company focused on engineering, design, and production, building a strong foundation in power electronics, simulation systems, training equipment, and the maritime and aviation industries. Over the years, Yontem Teknoloji has successfully delivered numerous high-tech projects, catering to diverse sectors, including Turkish industry and educational institutions, all while staying ahead of technological advancements."
        descriptionColor="#EEE5E5"
        imageSrc="/our_journey.webp"
        showButton={false}
      />
      <Container
        bgColor="#ffffff"
        title="Our Mission: Innovating for the Future"
        titleColor="#161C2D"
        description="At Yöntem Teknoloji, our mission is to stay at the forefront of technology, ensuring we provide the highest quality solutions to meet the evolving needs of our clients and country. We are dedicated to delivering innovative and sustainable solutions across industries that require advanced technology. From aviation and maritime simulators to laboratory solutions and air disinfection devices, our goal is to empower businesses with tools that improve performance and safety."
        descriptionColor="#161C2D"
        imageSrc="/our_mission.webp"
        showButton={false}
        reverseLayout={true}
      />
      <Container
        bgColor="#D4D4D4"
        title="Our Vision: Leading Through Technology"
        titleColor="#161C2D"
        description="We envision a world where Yontem Teknoloji leads as a top provider of advanced technology solutions, both locally and globally. We aim to increase Turkey's competitiveness, particularly in the defense, aviation, and space sectors, by offering innovative, future-ready solutions. Our dedication to shaping a modern world with the right tools is at the heart of everything we do."
        descriptionColor="#161C2D"
        imageSrc="/our_vision.webp"
        showButton={false}
        reverseLayout={false}
      />
      <div
        className={`lg:py-[80px] md:py-[70px] py-[50px] flex place-content-center`}
      >
        <div className="flex w-[85%]  flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]">
          <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px]">
            Driving Excellence: Our Values
          </h2>
          <p className="list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]">
            At the core of Yontem Teknoloji are values that drive our success
            and innovation:
          </p>
          <ul className="lg:pl-6 md:pl-4 pl-2 list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px]">
            <li>
              <b>Innovation:</b> We continuously push the boundaries of
              technology, offering forward-thinking solutions that keep pace
              with modern advancements.
            </li>
            <li>
              <b>Quality:</b> Delivering high-quality products and services is
              key to our approach, ensuring client satisfaction and reliability.
            </li>
            <li>
              <b>Sustainability:</b> We are committed to contributing positively
              to society and the environment through sustainable solutions and
              responsible practices.
            </li>
          </ul>
        </div>
      </div>
      <Container
        bgColor="#D4D4D4"
        title="Pioneering Simulators and Technology"
        titleColor="#161C2D"
        description="Our expertise spans four core product categories: Aviation Simulators, Maritime Simulators, Laboratory Solutions, and Air Disinfection Devices. Our simulators are designed to provide unmatched precision, replicating real-world scenarios to prepare professionals for the challenges they face in the field. We are proud to say that all our simulators are certified by international bodies, including DNV, MCA, and the U.S. Coast Guard, ensuring they meet the highest global standards."
        descriptionColor="#161C2D"
        imageSrc="/pioneering.png"
        showButton={false}
        reverseLayout={true}
      />
      <Container
        bgColor="#ffffff"
        title="Commitment to Quality"
        titleColor="#161C2D"
        description="We pride ourselves on our commitment to quality, with every solution we offer meeting stringent international standards such as STCW, DNV-IMO, and IEC. We continuously update our aviation and maritime simulators in line with STCW 95 and STCW 2010 Manila regulations, guaranteeing compliance and excellence."
        descriptionColor="#161C2D"
        imageSrc="/CTQ.png"
        showButton={false}
        reverseLayout={false}
      />
      <Tabcontainer />
      <Container
        bgColor="#D4D4D4"
        title="Solutions Beyond Simulators"
        titleColor="#161C2D"
        description="Yontem Teknoloji goes beyond simulators, providing cutting-edge laboratory solutions for industries that require precision and efficiency. Whether it's heavy industry or scientific research, our lab systems are designed to maximize productivity. Our Air Disinfection Devices also safeguard critical environments, from aircraft to medical facilities, ensuring clean and safe air for all."
        descriptionColor="#161C2D"
        imageSrc="/solutions.png"
        showButton={false}
        reverseLayout={true}
      />
      <Container
        bgColor="#ffffff"
        title="A Partner in Your Success"
        titleColor="#161C2D"
        description={`Yontem Teknoloji is more than just a provider of advanced technology—we are a trusted partner in your journey to excellence. Our mission is to supply top-tier equipment and offer comprehensive training and maintenance services, ensuring you get the most out of your investment. From seamless integration to ongoing support, we are here at every step of the way.
          This story of Yontem Teknoloji reflects our dedication to progress, innovation, and quality, making us a trusted leader in the technology sector.`}
        descriptionColor="#161C2D"
        imageSrc="/partner_in_your_success.webp"
        showButton={false}
        reverseLayout={false}
      />
      {/* <CTA slides={slides}/>
    <News/> */}
    {/* <Blogs/>  */}
    </div>
  );
}

export default AboutUs;
