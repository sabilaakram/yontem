"use client";

import HeroSection from '@/components/hero_section';
import { getEELSData } from '@/data/loaders';
import { EEL_Solutions, FAQ } from '@/lib/types';
import Container from '@/components/container';
import React, { useEffect, useState } from 'react'
import { AccordionDemo } from '@/components/faqs';
import { getStrapiURL } from '@/lib/utils';
import ParseRichText from '@/components/richtextparser';
import CTA from '@/components/cta';
import Blogs from '@/components/blogs';
import News from '@/components/news';

function LaboratorySolutionContent() {
    const [EELData, setEELData] = useState<EEL_Solutions | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getEELSData();
          setEELData(data);
        } catch (err) {
          setError("Failed to fetch About Us data");
          console.error("Error fetching About Us data:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (!EELData) return <div></div>;

    
  
    // Extract FAQ data
    const faqData: FAQ[] = EELData.Faq?.map((faq, index) => ({
      faqTitle: faq.faqTitle || `Question ${index + 1}`,
      faqDescription: faq.faqDescription || [],
    })) || [];
    


      const slides = [
        {
          heading: "Empower your lab with innovative solutions",
          text: "Discover reliable E&E lab equipment today!",
          buttonText: "Get Started",
          buttonLink: "/discover",
          backgroundImage: "/cta4.jpg",
        }
      ];
    const backgroundImages =
        EELData.background_image?.map((img) =>
          img.url.startsWith("http") ? img.url : `${getStrapiURL()}/${img.url.replace(/^\//, "")}`
        ) || ["/aviationsimulators_hero.webp"];
  return (
    <div>
      <HeroSection
        backgroundImages={backgroundImages}
        items={{
          heading: EELData.page_heading || "Aviation Simulators",
          text: [{ label: <ParseRichText content={EELData.description} /> }],
        }} />
        <Container
      bgColor="#ffffff"
      title="Electrical Machinery Laboratory"
      titleColor="#161C2D"
      description={EELData.electrical_machinery_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.electrical_machinery_laboratory_image?.url || "/electrical_machinery_laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Microcontroller Laboratory"
      titleColor="#161C2D"
      description={EELData.microcontroller_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.microcontroller_laboratory_image?.url || "/microcontroller_laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Fluid Mechanics Training Laboratory"
      titleColor="#161C2D"
      description={EELData.fluid_mechanics_training_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.fluid_mechanics_training_laboratory_image?.url || "/fluid_mechanics_training_laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Electrical and Electronic Measurement Laboratory"
      titleColor="#161C2D"
      description={EELData.electrical_and_electronic_measurement_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.electrical_and_electronic_measurement_laboratory_image?.url || "/electrical_and_electronic_measurement_laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Mechanical Laboratory"
      titleColor="#161C2D"
      description={EELData.mechanical_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.mechanical_laboratory_image?.url || "/mechanical_laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Academics"
      titleColor="#161C2D"
      description={EELData.academics}
      descriptionColor="#161C2D"
      imageSrc={EELData.academics_image?.url || "/Academics.webp"}
      buttonText='Get A Quote'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Power Electronics Laboratory"
      titleColor="#161C2D"
      description={EELData.power_electronics_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.power_electronics_laboratory_image?.url || "/Power Electronics Laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Circuit and System Laboratory"
      titleColor="#161C2D"
      description={EELData.circuit_and_system_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.circuit_and_system_laboratory_image?.url || "/Circuit and System Laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="High Voltage Laboratory"
      titleColor="#161C2D"
      description={EELData.high_voltage_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.high_voltage_laboratory_image?.url || "/High Voltage Laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Electromechanical Laboratory"
      titleColor="#161C2D"
      description={EELData.electromechanical_laboratory}
      descriptionColor="#161C2D"
      imageSrc={EELData.electromechanical_laboratory_image?.url || "/Electromechanical Laboratory.webp"}
      buttonText='Get A Quote'
      buttonLink='/'
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
          <News/>
          <Blogs/>
    </div>
  )
}

export default LaboratorySolutionContent
