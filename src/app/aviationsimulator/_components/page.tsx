"use client";

import HeroSection from '@/components/hero_section';
import { getASData } from '@/data/loaders';
import { Aviation_Simulators, FAQ } from '@/lib/types';
import Container from '@/components/container';
import React, { useEffect, useState } from 'react'
import { AccordionDemo } from '@/components/faqs';
import { getStrapiURL } from '@/lib/utils';
import ParseRichText from '@/components/richtextparser';
import CTA from '@/components/cta';

function AviationSimulatorContent() {
    const [ASData, setASData] = useState<Aviation_Simulators | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getASData();
          setASData(data);
        } catch (err) {
          setError("Failed to fetch About Us data");
          console.error("Error fetching About Us data:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (!ASData) return <div></div>;

    
  
    // Extract FAQ data
    const faqData: FAQ[] = ASData.Faq?.map((faq, index) => ({
      faqTitle: faq.faqTitle || `Question ${index + 1}`,
      faqDescription: faq.faqDescription || [],
    })) || [];
    


      const slides = [
        {
          heading: "Choose the future-ready aviation simulator provider",
          text: "Unlock professional solutions now",
          buttonText: "Get Started",
          buttonLink: "/discover",
          backgroundImage: "/cta4.jpg",
        }
      ];
    const backgroundImages =
        ASData.background_image?.map((img) =>
          img.url.startsWith("http") ? img.url : `${getStrapiURL()}/${img.url.replace(/^\//, "")}`
        ) || ["/aviationsimulators_hero.webp"];
  return (
    <div>
      <HeroSection
        backgroundImages={backgroundImages}
        items={{
          heading: ASData.page_heading || "Aviation Simulators",
          text: [{ label: <ParseRichText content={ASData.description} /> }],
        }} />
        <Container
      bgColor="#ffffff"
      title="Aviation Training Simulators"
      titleColor="#161C2D"
      description={ASData.aviation_training_simulators}
      descriptionColor="#161C2D"
      imageSrc={ASData.aviation_training_simulators_image?.url || "/aviation_training_simulators.webp"}
      buttonText='View All'
      buttonLink='/aviationtrainingsimulators'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Aviation Maintenance Simulators"
      titleColor="#161C2D"
      description={ASData.aviation_maintenance_simulators}
      descriptionColor="#161C2D"
      imageSrc={ASData.aviation_maintenance_simulators_image?.url || "/AM_simulators.webp"}
      buttonText='View All'
      buttonLink='/aviationmaintenancesimulators'
      showButton={true}
      reverseLayout={true}
    />
    <CTA slides={slides}/>
    {/* 
    <News/>
    <Blogs/> */}
    {/* FAQ Section */}
    
    {faqData.length > 0 ? (
            <div className="bg-[#F7F7F7] w-full flex place-content-center">
            <div className="px-6 lg:px-12 py-10 w-[90%]">
              <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px] text-center my-[30px]">
                Frequently Asked Questions
              </h2>
              <AccordionDemo faqs={faqData} />
            </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No FAQs available.</p>
          )}
    </div>
  )
}

export default AviationSimulatorContent
