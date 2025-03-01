import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import HeroSection from "@/components/hero_section";
import { getPageMetadata } from "@/data/loaders";
import { PageProps, SinglePageProps } from "@/lib/types";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const metadata: SinglePageProps = await getPageMetadata('termsandconditions');

  console.log("Raw Metadata:", metadata);

  let keywords: string[] = [];

  if (Array.isArray(metadata.metakeywords)) {
    keywords = metadata.metakeywords.flatMap((item: any) =>
      item.children?.map((child: any) => child.text) ?? []
    );
  } else if (typeof metadata.metakeywords === "string") {
    keywords = metadata.metakeywords.split(",").map((k) => k.trim());
  }

  return {
    title: metadata?.metatitle,
    description: metadata?.metadescription,
    keywords,
    alternates: {
      canonical: `http://localhost:3000/api/pages-metadatas/${metadata.slug}`,
    },
  };
}
const TermsAndConditions = () => {
  return (
    <>
      <HeroSection
        backgroundImages={["/aviationsimulators_hero.webp"]}
        items={{
          heading: "Terms and Conditions",
          text: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Terms and Conditions",
            },
          ],
        }}
      />
      <section className="container p-8 space-y-4">
        <h1 className="font-bold text-3xl text-center capitalize">
          Terms and Conditions
        </h1>
        <p className="text-gray-700">
          By accessing or using Yöntem Teknoloji's website or services,
          including but not limited to aviation simulators, maritime simulators,
          laboratory solutions, and training kits, you agree to comply with and
          be bound by these Terms and Conditions. <br />
          <br />
          These terms govern your use of our website and the services we
          provide. By using our website or engaging with our services, you
          acknowledge that you have read, understood, and agree to be bound by
          these terms. <br />
          <br />
          If you do not agree with any part of these terms, please refrain from
          using our website or services. These terms apply to all website users
          and anyone accessing or using our services.
        </p>
        <h2 className="text-2xl font-semibold">Use of Website</h2>
        <h3 className="text-xl font-semibold">Authorized Use</h3>
        <p className="text-gray-700">
          You are granted a personal, non-exclusive, non-transferable license to
          use the website and services under these Terms. You may use our
          website and services only for lawful purposes and in a manner
          consistent with these Terms.
        </p>
        <h3 className="text-xl font-semibold">Prohibited Use</h3>
        <p className="text-gray-700">You agree not to:</p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            Copy, reproduce, or distribute any content from our website or
            services without prior written consent.
          </li>
          <li className="">
            Engage in any conduct that could harm, disrupt, or impair the
            website or services.
          </li>
          <li className="">
            Use our services for any unlawful or unauthorized purposes.
          </li>
        </ul>
        <h3 className="text-xl font-semibold">Account Registration</h3>
        <p className="text-gray-700">
          To access certain services (e.g., simulator training solutions or
          consultancy), you may be required to create an account. When
          registering, you agree to provide accurate, current, and complete
          information. You are responsible for maintaining the confidentiality
          of your account credentials and are fully responsible for all
          activities under your account.
        </p>
        <h2 className="text-2xl font-semibold">Intellectual Property</h2>
        <h3 className="text-xl font-semibold">Ownership of Content</h3>
        <p className="text-gray-700">
          All content on this website, including but not limited to text,
          graphics, logos, trademarks, service names, and product designs, are
          the property of Yöntem Teknoloji or its licensors and are protected by
          copyright and other intellectual property laws.
        </p>
        <h3 className="text-xl font-semibold">User-Generated Content</h3>
        <p className="text-gray-700">
          By submitting any content to the website (e.g., inquiries, reviews, or
          feedback), you grant Yöntem Teknoloji a perpetual, irrevocable,
          royalty-free license to use, modify, and distribute such content as
          necessary to improve our services.
        </p>
        <h2 className="text-2xl font-semibold">Intellectual Property</h2>
        <h3 className="text-xl font-semibold">Ownership of Content</h3>
        <p className="text-gray-700">
          All content on this website, including but not limited to text,
          graphics, logos, trademarks, service names, and product designs, are
          the property of Yöntem Teknoloji or its licensors and are protected by
          copyright and other intellectual property laws.
        </p>
        <h2 className="text-2xl font-semibold">Payment Terms</h2>
        <h3 className="text-xl font-semibold">Payment Methods</h3>
        <p className="text-gray-700">
        The payment terms and methods will be communicated before the commencement of any service or purchase of products.
        </p>
        <h3 className="text-xl font-semibold">Late Payments</h3>
        <p className="text-gray-700">
        Yöntem Teknoloji reserves the right to suspend or terminate services if payments are not received by the due date.        </p>
        <h3 className="text-xl font-semibold">Refunds</h3>
        <p className="text-gray-700">
        Refund policies, if applicable, will be outlined at the time of the service agreement or product purchase.
        </p>
        <h2 className="text-2xl font-semibold">Privacy Policy</h2>
        <p className="text-gray-700">
        Your use of our website and services is governed by our Privacy Policy, which outlines how we collect, use, and safeguard your personal information. You consent to the data collection practices detailed in the Privacy Policy by using the website or services.</p>
        <h2 className="text-2xl font-semibold">Termination</h2>
        <p className="text-gray-700">
        Yöntem Teknoloji reserves the right to suspend or terminate your access to the website or services at any time, without notice, for any violation of these Terms. You may terminate your account or service agreement anytime by contacting us.</p>
        <h2 className="text-2xl font-semibold">Changes to Terms</h2>
        <p className="text-gray-700">
        Yöntem Teknoloji reserves the right to update or modify these Terms at any time. Any significant changes will be communicated to users through appropriate channels. We encourage users to review these terms regularly to stay informed about updates.</p>
        <h2 className="font-bold text-3xl text-center capitalize">
          Contact Us{" "}
        </h2>
        <p className="text-gray-700">
        For any questions regarding these Terms or our services, please contact us:
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong>By email: </strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="mailto:info@yontemteknoloji.com"
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
