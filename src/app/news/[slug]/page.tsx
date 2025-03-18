import { Metadata } from "next";
import { NewsDetail, PageProps } from "@/lib/types";
import {getNewsBySlug } from "@/data/loaders";
import { headers } from "next/headers";
import NewsDetailClient from "../_components/newsdetailedClient";


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product: NewsDetail = await getNewsBySlug(params.slug);

  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const canonicalUrl = `${protocol}://${host}/news/${params.slug}`;

  return {
    title: product.metatitle,
    description: product.metadescription,
    keywords: Array.isArray(product.metakeywords) 
      ? product.metakeywords.map(keyword => 
          typeof keyword === 'string' 
            ? keyword 
            : keyword.children.map(child => child.text).join(' ')
        ) 
      : product.metakeywords,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}


export default async function NewsDetailPage({ params }: PageProps) {
  const product: NewsDetail = await getNewsBySlug(params.slug);

  // Handle 404 case
  if (!product) {
    return <div>Product not found.</div>;
  }

  return <NewsDetailClient news={product}  />;
}
