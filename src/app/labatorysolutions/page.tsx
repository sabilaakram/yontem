import Blogs from '@/components/blogs';
import Container from '@/components/container';
import CTA from '@/components/cta';
import HeroSection from '@/components/hero_section'
import News from '@/components/news';
import React from 'react'

function LabatorySolutions() {
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
        "/labatorysolutions.webp"
      ];
  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: 'Electric and Electronics Laboratory Solutions',
          text: [
            { label: 'Equip your workspace with cutting-edge electrical and electronics lab equipment designed for precision, efficiency, and advanced learning.'}, 
          ],
        }} />
        <Container
      bgColor="#ffffff"
      title="Electrical Machinery Laboratory"
      titleColor="#161C2D"
      description="Designed for hands-on training in electrical machines, this lab offers practical learning in motor control, transformers, and generators. It includes electrical lab equipment to ensure precise testing and real-time simulations."
      descriptionColor="#161C2D"
      imageSrc="/electrical_machinery_laboratory.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Microcontroller Laboratory"
      titleColor="#161C2D"
      description="Focused on embedded systems, this lab provides tools for microcontroller programming, circuit design, and real-time applications. It enhances learning with advanced electronics laboratory equipment to develop smart solutions."
      descriptionColor="#161C2D"
      imageSrc="/microcontroller_laboratory.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Fluid Mechanics Training Laboratory"
      titleColor="#161C2D"
      description="This lab covers essential concepts of fluid flow, pressure, and hydraulics through practical experiments. The equipment aligns with modern electrical and electronics lab solutions to support cross-disciplinary research."
      descriptionColor="#161C2D"
      imageSrc="/fluid_mechanics_training_laboratory.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Electrical and Electronic Measurement Laboratory"
      titleColor="#161C2D"
      description="This lab offers precision instruments for measuring voltage, current, resistance, and frequency. It includes tools essential for advanced electronics lab equipment to ensure reliable and accurate results."
      descriptionColor="#161C2D"
      imageSrc="/electrical_and_electronic_measurement_laboratory.webp"
      buttonText='View All'
      buttonLink='/'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Mechanical Laboratory"
      titleColor="#161C2D"
      description="A comprehensive lab for studying mechanical systems, including motors, actuators, and control systems. It complements electrical and electronics lab equipment to support interdisciplinary engineering projects."
      descriptionColor="#161C2D"
      imageSrc="/mechanical_laboratory.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Academics"
      titleColor="#161C2D"
      description="Designed to support educational institutions, this category includes teaching tools, digital boards, and classroom furniture. The E&E laboratory solutions ensure students gain practical, hands-on learning experiences."
      descriptionColor="#161C2D"
      imageSrc="/Academics.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Power Electronics Laboratory"
      titleColor="#161C2D"
      description="Focused on power conversion systems, this lab includes tools for studying inverters, converters, and motor drives. It offers cutting-edge electrical and electronics lab equipment to enhance research and industrial applications."
      descriptionColor="#161C2D"
      imageSrc="/Power Electronics Laboratory.webp"
      buttonText='View All'
      buttonLink='/'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Circuit and System Laboratory"
      titleColor="#161C2D"
      description="This lab provides equipment for analyzing circuits, testing system designs, and ensuring component reliability. It supports various electronics laboratory equipment to foster innovation in electrical engineering."
      descriptionColor="#161C2D"
      imageSrc="/Circuit and System Laboratory.webp"
      buttonText='View All'
      buttonLink='/'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="High Voltage Laboratory"
      titleColor="#161C2D"
      description="Specialized in the study of high-voltage systems and insulation materials, this lab ensures safe and accurate testing. It incorporates essential electrical and electronics lab solutions for energy research."
      descriptionColor="#161C2D"
      imageSrc="/High Voltage Laboratory.webp"
      buttonText='View All'
      buttonLink='/'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Electromechanical Laboratory"
      titleColor="#161C2D"
      description="Combining electrical and mechanical systems, this lab covers motors, actuators, and control units. It offers high-quality electronics lab equipment to support complex system integration and automation projects."
      descriptionColor="#161C2D"
      imageSrc="/Electromechanical Laboratory.webp"
      buttonText='View All'
      buttonLink='/'
      showButton={true}
      reverseLayout={true}
    />
    {/* <CTA slides={slides}/>
    <News/>
    <Blogs/> */}
    </div>
  )
}

export default LabatorySolutions
