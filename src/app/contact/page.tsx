import Contact_Section from '@/components/contact_section';
import HeroSection from '@/components/hero_section'
import { getPageMetadata } from '@/data/loaders';
import { PageProps, SinglePageProps } from '@/lib/types';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import React from 'react'


const images = [
    "/Hero_1.webp",
  ];

  export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const metadata: SinglePageProps = await getPageMetadata('contact-us');
  
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
    const canonicalUrl = `${protocol}://${host}/contact`;
  
    return {
      title: metadata?.metatitle,
      description: metadata?.metadescription,
      keywords,
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }


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
