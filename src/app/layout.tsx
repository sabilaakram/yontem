import type { Metadata } from "next";
import localFont from "next/font/local";  
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import JsonLdSchema from "@/components/JsonLdSchema";
import Head from "next/head";
import ReCaptchaProvider from "@/components/RecaptchaProvider";


export const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.woff',
      weight: '600',
      style: 'medium',
    },
    {
      path: '../../public/fonts/Gilroy-Light.woff',
      weight: '200',
      style: 'light',
    },
    {
      path: '../../public/fonts/Gilroy.woff',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-gilroy',
});

export const metadata: Metadata = {
  title: "Avaition and Maritime Simulator Solutions in Turkey - Yontem Teknoloji",
  description: "Yontem Teknoloji offers professional simulator solutions for aviation, marine, and laboratory services, ensuring cutting-edge training and safety.",
  keywords:[
    "professional simulator solutions",
    "professional simulator company",
    "professional simulators",
    "simulation technology provider",
    "Flight and Marine Simulation Solutions",
    "simulation solutions",
    "simulator product solutions",
    "Flight and Ship simulator",
    "Aircraft simulator and maritime simulator",
    "Flight and Marine Simulation Solutions",
    "High-Quality Aviation and Maritime Simulators",
    "simulator manufacturer",
  ],
  alternates:{
    canonical:"https://yontemteknoloji.com/",
  },
  robots: {
    follow: true,
    index: true,
  },

};

const jsonLd = [
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",                                                                                                                                         
    url: "https://www.yontemteknoloji.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const breadcrumbJson = await getBreadCrumbJsonSchema();
  return (
    <html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-83Q5K31KSE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-83Q5K31KSE');
            `,
          }}
        />
      </Head>
      <body
      
        className={`${gilroy.variable} antialiased`}
      >
        <ReCaptchaProvider>
        <Header/>
        {children}
        <Footer/>
        {jsonLd.map((schema, index) => (
          <JsonLdSchema key={index} schema={JSON.stringify(schema)} />
        ))}
        </ReCaptchaProvider>
        {/* <JsonLdSchema schema={breadcrumbJson.breadcrumbJsonLd} /> */}
      </body>
    </html>
  );
}
