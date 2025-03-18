import { Metadata } from "next";
import { BlogDetail, PageProps } from "@/lib/types";
import {getBlogsBySlug } from "@/data/loaders";
import { headers } from "next/headers";
import BlogDetailClient from "../_components/blogdetailedClient";


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product: BlogDetail = await getBlogsBySlug(params.slug);

  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const canonicalUrl = `${protocol}://${host}/blogs/${params.slug}`;

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


export default async function BlogsDetailPage({ params }: PageProps) {
  const product: BlogDetail = await getBlogsBySlug(params.slug);

  // Handle 404 case
  if (!product) {
    return <div>Product not found.</div>;
  }

  return <BlogDetailClient blog={product}  />;
}
