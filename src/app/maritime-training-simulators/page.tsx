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
  const metadata: SinglePageProps = await getPageMetadata('maritime-training-simulators');

  console.log("Raw Metadata:", metadata);

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


function MaritimeSimulator() {
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
        "/maritime_simulators.webp"
      ];
  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: 'Maritime Simulators',
          text: [
            { label: 'Revolutionize training with our ship training simulator designed to enhance your crew skills and safety at sea.'}, 
          ],
        }} />
        <Container
      bgColor="#ffffff"
      title="Maritime Training Simulators"
      titleColor="#161C2D"
      description="Our maritime training sets offer immersive simulations for navigation, safety, and operational procedures. Tailored for various scenarios, they enhance crew expertise and prepare them for real-world challenges, including essential maintenance training modules for comprehensive skill development."
      descriptionColor="#161C2D"
      imageSrc="/cta4.jpg"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Maritime Maintenance Simulator"
      titleColor="#161C2D"
      description="Our maritime simulator delivers hands-on training for effective maintenance practices across various vessels. Enhance your team's skills in diagnosing and repairing equipment through realistic scenarios that replicate real-world challenges faced in maritime operations."
      descriptionColor="#161C2D"
      imageSrc="/maritime_maintainance_simulators.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={true}
    />
    {/* <CTA slides={slides}/>
    <News/>
    <Blogs/> */}
    </div>
  )
}

export default MaritimeSimulator
