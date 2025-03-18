"use client";

import HeroSection from '@/components/hero_section';
import { getMSData } from '@/data/loaders';
import {FAQ, Maritime_Simulators } from '@/lib/types';
import Container from '@/components/container';
import React, { useEffect, useState } from 'react'
import { AccordionDemo } from '@/components/faqs';
import { getStrapiURL } from '@/lib/utils';
import CTA from '@/components/cta';
import ParseRichText from '@/components/richtextparser';
import Blogs from '@/components/blogs';
import News from '@/components/news';

function MaritimeSimulatorContent() {
    const [MSData, setMSData] = useState<Maritime_Simulators | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getMSData();
          setMSData(data);
        } catch (err) {
          setError("Failed to fetch About Us data");
          console.error("Error fetching About Us data:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    if (!MSData) return <div></div>;
  
    // Extract FAQ data
    const faqData: FAQ[] = MSData.Faq?.map((faq, index) => ({
      faqTitle: faq.faqTitle || `Question ${index + 1}`,
      faqDescription: faq.faqDescription || [],
    })) || [];
    

    const backgroundImages =
    MSData.background_image?.map((img) =>
      img.url.startsWith("http") ? img.url : `${getStrapiURL()}/${img.url.replace(/^\//, "")}`
    ) || ["/aviationsimulators_hero.webp"];


      const slides = [
        {
          heading: "Ready to elevate your marine training?",
          text: "Buy a training simulator today!",
          buttonText: "Get Started",
          buttonLink: "/discover",
          backgroundImage: "/cta4.jpg",
        }
      ];
  return (
    <div>
      <HeroSection
        backgroundImages={backgroundImages}
        items={{
          heading: MSData.page_heading || "Maritime Simulators",
          text: [{ label: <ParseRichText content={MSData.description} /> }],
        }} />
        <Container
      bgColor="#ffffff"
      title="Maritime Training Simulators"
      titleColor="#161C2D"
      description={MSData.maritime_training_simulators}
      descriptionColor="#161C2D"
      imageSrc={MSData.maritime_training_simulators_image?.url || "/aviation_training_simulators.webp"}
      buttonText="View All"
      buttonLink="/maritimetrainingsimulators"
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Maritime Maintenance Simulators"
      titleColor="#161C2D"
      description={MSData.maritime_maintenance_simulators}
      descriptionColor="#161C2D"
      imageSrc={MSData.maritime_maintenance_simulators_image?.url || "/AM_simulators.webp"}
      buttonText="View All"
      buttonLink="/maritimemaintenancesimulators"
      showButton={true}
      reverseLayout={true}
    />
    <CTA slides={slides}/>
   {/*  <News/>
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
      <News/>
      <Blogs/>
    </div>
  )
}

export default MaritimeSimulatorContent
