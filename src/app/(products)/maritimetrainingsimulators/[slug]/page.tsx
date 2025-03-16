import { Metadata } from "next";
import { PageProps, ProductDetail } from "@/lib/types";
import {getMTSProductBySlug } from "@/data/loaders";
import ProductDetailClient from "@/components/productdetailedclient";
import { headers } from "next/headers";


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product: ProductDetail = await getMTSProductBySlug(params.slug);

  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const canonicalUrl = `${protocol}://${host}/maritimetrainingsimulators/${params.slug}`;

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


export default async function ProductDetailPage({ params }: PageProps) {
  const product: ProductDetail = await getMTSProductBySlug(params.slug);

  // Handle 404 case
  if (!product) {
    return <div>Product not found.</div>;
  }

  return <ProductDetailClient product={product} />;
}
