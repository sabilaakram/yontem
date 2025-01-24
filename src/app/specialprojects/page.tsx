import Blogs from '@/components/blogs';
import Container from '@/components/container';
import CTA from '@/components/cta';
import HeroSection from '@/components/hero_section'
import News from '@/components/news';
import React from 'react'

function SpecialProjects() {
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
        "/Air_disinfection_Devices.webp"
      ];
  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: 'Air disinfection devices',
          text: [
            { label: 'Our smart air disinfection machines are designed to improve air quality by eliminating harmful airborne particles, providing a healthier environment.'}, 
          ],
        }} />
        <Container
      bgColor="#ffffff"
      title="Tipi Time"
      titleColor="#161C2D"
      description="This compact air disinfection machine offers quick and effective air purification for small spaces, such as bedrooms and offices. Its sleek design makes it easy to fit into any interior without compromising on performance."
      descriptionColor="#161C2D"
      imageSrc="/Tipi Time.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Tavan/Asthma Tip"
      titleColor="#161C2D"
      description="Designed for larger spaces, this ceiling-mounted unit uses advanced UV air sterilization technology to reduce airborne pollutants. It is an ideal solution for clinics, schools, and commercial spaces where clean air is essential."
      descriptionColor="#161C2D"
      imageSrc="/TavanAsthma Tip.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Standing Type"
      titleColor="#161C2D"
      description="A versatile portable air disinfection device that can be moved easily from one room to another. Its powerful filtration system ensures continuous air purification for healthier living spaces."
      descriptionColor="#161C2D"
      imageSrc="/Standing Type.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Wall Mount"
      titleColor="#161C2D"
      description="This smart air disinfection machine can be mounted on walls to save space and provide constant air purification. It is suitable for homes, offices, and public spaces that require ongoing air sanitation."
      descriptionColor="#161C2D"
      imageSrc="/Wall Mount.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={true}
    />
    <Container
      bgColor="#ffffff"
      title="Vehicle/Elevator Type"
      titleColor="#161C2D"
      description="Perfect for confined spaces, this air sanitation machine keeps the air clean inside vehicles and elevators. Its compact build ensures maximum efficiency without taking up too much space."
      descriptionColor="#161C2D"
      imageSrc="/VehicleElevator Type.webp"
      buttonText='View All'
      buttonLink='/contact'
      showButton={true}
      reverseLayout={false}
    />
    <Container
      bgColor="#D4D4D4"
      title="Decorative Type"
      titleColor="#161C2D"
      description="Our stylish air disinfection devices blend seamlessly into any décor while ensuring effective air purification. They are designed to meet the needs of both aesthetics and functionality from trusted air disinfection device suppliers."
      descriptionColor="#161C2D"
      imageSrc="/Decorative Type.webp"
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

export default SpecialProjects
