import Blogs from '@/components/blogs';
import Container from '@/components/container';
import CTA from '@/components/cta';
import HeroSection from '@/components/hero_section'
import News from '@/components/news';
import { getPageMetadata } from '@/data/loaders';
import { PageProps, SinglePageProps } from '@/lib/types';
import { Metadata } from 'next';
import React from 'react'


import { headers } from "next/headers";



export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const metadata: SinglePageProps = await getPageMetadata('aviationsimulator');

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


function AviationSimulator() {
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
        "/aviationsimulators_hero.webp"
      ];
  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: 'Aviation Simulators',
          text: [
            { label: 'Advanced Aviation Simulator Solutions for Training and Maintenance Excellence'}, 
          ],
        }} />
        <Container
      bgColor="#ffffff"
      title="Aviation Training Simulators"
      titleColor="#161C2D"
      description="Our aviation training simulators offer unmatched realism, designed to replicate real-world conditions for pilots. With professional flight simulators, you can enhance your skills and experience true-to-life training scenarios, ensuring optimal performance and safety."
      descriptionColor="#161C2D"
      imageSrc="/aviation_training_simulators.webp"
      buttonText='View All'
      buttonLink='/aviationtrainingsimulators'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Aviation Maintenance Simulators"
      titleColor="#161C2D"
      description="Our aviation maintenance simulators give technicians hands-on experience diagnosing and repairing aircraft systems. Using advanced avionics simulators and aircraft simulator solutions, professionals can ensure the long-term reliability of flight simulation technology."
      descriptionColor="#161C2D"
      imageSrc="/AM_simulators.webp"
      buttonText='View All'
      buttonLink='/aviationmaintenancesimulators'
      showButton={true}
      reverseLayout={true}
    />
    {/* <CTA slides={slides}/>
    <News/>
    <Blogs/> */}
    </div>
  )
}

export default AviationSimulator
