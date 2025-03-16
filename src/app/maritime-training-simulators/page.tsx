import { getPageMetadata } from '@/data/loaders';
import { PageProps, SinglePageProps } from '@/lib/types';
import { Metadata } from 'next';
import React from 'react'
import { headers } from "next/headers";
import MaritimeSimulatorContent from './_components/page';



export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const metadata: SinglePageProps = await getPageMetadata('maritime-training-simulators');

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


function MaritimeSimulator() {
  return (
    <MaritimeSimulatorContent/>
  )
}

export default MaritimeSimulator
