import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import HeroSection from "@/components/hero_section";
import { getPageMetadata } from "@/data/loaders";
import { PageProps, SinglePageProps } from "@/lib/types";
import { headers } from "next/headers";



export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const metadata: SinglePageProps = await getPageMetadata('privacy-policy');

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

const TermsAndConditions = () => {
  return (
    <>
      <HeroSection
        backgroundImages={["/aviationsimulators_hero.webp"]}
        items={{
          heading: "Privacy Policy",
          text: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Privacy Policy",
            },
          ],
        }}
      />
      <section className="container p-8 space-y-4">
        <h1 className="font-bold text-3xl text-center capitalize">
        Privacy Policy
        </h1>
        <p className="text-gray-700">
        At Yöntem Teknoloji, we are dedicated to protecting your privacy and handling your personal information with the utmost care and transparency. This Privacy Policy outlines how we collect, use, share, and safeguard your personal data when you access our website or utilize our services, including aviation simulators, maritime simulators, laboratory solutions, and training kits.<br />
          <br />
          By accessing our website or engaging with our services, you consent to the practices described in this policy. Please take the time to read it carefully and contact us with any questions or concerns.<br />
          </p>
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p className="text-gray-700">
        When you interact with Yöntem Teknoloji, we may collect the following types of information:
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong className="">Personal Identification Information: </strong> Name, email address, phone number, job title, and any other relevant personal details you provide.
          </li>
          <li className="">
            <strong className="">Professional Information:</strong> Industry-specific data, company details, and preferences related to simulators, solutions, or services.
          </li>
          <li className="">
            <strong className="">Usage Data:</strong> Information about your interaction with our website, such as IP addresses, browser types, device details, and browsing activities.
          </li>
          <li className="">
            <strong className="">Technical Data:</strong> Performance metrics and feedback from the use of our simulators or other technology-related services.
            </li>
        </ul>
        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <p className="text-gray-700">
        We use the information we collect to provide and enhance our products and services. Specifically, we may use your data to:</p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
          Deliver aviation and maritime simulator solutions tailored to your needs.
          </li>
          <li className="">
          Communicate with you regarding services, updates, promotions, or technical support.
          </li>
          <li className="">
          Analyze website performance and user behavior to improve functionality.
          </li>
          <li className="">
          Ensure compliance with legal obligations and industry regulations.
            </li>
            <li className="">
            Address inquiries, resolve issues, or provide customer support.
            </li>
        </ul>
        <h2 className="text-2xl font-semibold">3. Data Sharing</h2>
        <p className="text-gray-700">
        Your information may be shared with trusted third parties in the following circumstances:</p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong className="">With Service Providers: </strong> To facilitate service delivery, including hosting, payment processing, and technical support.
          </li>
          <li className="">
            <strong className="">For Legal Compliance:</strong>To meet legal obligations, respond to court orders, or comply with regulatory requirements.
          </li>
          <li className="">
            <strong className="">With Your Consent:</strong> With your explicit permission, we may share data with third parties for agreed-upon purposes.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700">
        Our website employs cookies and similar tracking technologies to enhance user experience, track website analytics, and customize content. These tools help us understand visitor preferences and improve our online presence.<br/><br/>You can manage your cookie preferences through your browser settings. Disabling cookies may limit some functionality on our website.</p>
        <h2 className="text-2xl font-semibold">5. Data Retention</h2>
        <p className="text-gray-700">
        Yöntem Teknoloji retains your personal data only as long as necessary to fulfill the purposes for which it was collected, including legal, regulatory, and business needs.<br/><br/> If you wish to request the deletion of your data, you may do so under the rights outlined below.</p>
        <h3 className="text-xl font-semibold">Your Data Protection Rights</h3>
        <p className="text-gray-700">As a user, you have the following rights concerning your personal data:</p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong className="">Access:</strong>  Request a copy of the data we hold about you.
          </li>
          <li className="">
            <strong className="">Correction:</strong> Request corrections to inaccurate or incomplete information.
          </li>
          <li className="">
            <strong className="">Deletion:</strong> Request the deletion of your personal data, subject to legal and operational constraints.
          </li>
          <li className="">
            <strong className="">Restriction:</strong> Request that we limit how we use your data in certain circumstances.
          </li>
          <li className="">
            <strong className="">Portability:</strong> Request a transfer of your data to another service provider, where applicable.
          </li>
        </ul>
        
        <h2 className="font-bold text-3xl text-center capitalize">
          Contact Us{" "}
        </h2>
        <p className="text-gray-700">
        For any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at:
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong>By email: </strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="mailto: info@yontemteknoloji.com"
            >
              info@yontemteknoloji.com{" "}
            </Link>{" "}
          </li>
          {/* <li className="">
            <strong>By visiting this page on our webiste:</strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="https://laptop-rental.com.au/"
            >
              https://laptop-rental.com.au/
            </Link>{" "}
          </li> */}
          <li className="">
            <strong>By phone number:</strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="tel:+902165923000"
            >
               +90 216 592 30 00
            </Link>{" "}
          </li>
          <li className="">
            <strong>Address:</strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="https://maps.app.goo.gl/eKn5WkLVFEhbTkYD9"
              target="_blank"
            >
              Adil Mahallesi, Beykoz Cad. Kemerler Sokak No:6/2 Istanbul, Türkiye
            </Link>{" "}
          </li>
        </ul>
      </section>
    </>
  );
};

export default TermsAndConditions;
