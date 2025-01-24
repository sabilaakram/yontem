import Contact_Section from '@/components/contact_section';
import HeroSection from '@/components/hero_section'
import React from 'react'


const images = [
    "/Hero_1.webp",
  ];


function ContactUs() {
  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: 'Contact Us',
          text: [
            { label: 'HOME', link: '/' }, // Link for HOME
            { label: 'CONTACT US', link: '/contact' }, // Link for ABOUT
          ],
        }} />
        <Contact_Section/>
    </div>
  )
}

export default ContactUs
