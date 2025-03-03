import { Metadata } from "next";
import { PageProps, ProductDetail } from "@/lib/types";
import { getATSProductBySlug } from "@/data/loaders";
import ProductDetailClient from "@/components/productdetailedclient";

// ✅ Server function to generate metadata for each product
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product: ProductDetail = await getATSProductBySlug(params.slug);

  return {
    title: product.metatitle,
    description: product.metadescription,
    keywords: Array.isArray(product.metakeywords) ? product.metakeywords.map(keyword => typeof keyword === 'string' ? keyword : keyword.children.map(child => child.text).join(' ')) : product.metakeywords,
    alternates: {
      canonical: `http://localhost:3000/products/${params.slug}`,
    },
  };
}

// ✅ Server Component that fetches product data
export default async function ProductDetailPage({ params }: PageProps) {
  const product: ProductDetail = await getATSProductBySlug(params.slug);

  // Handle 404 case
  if (!product) {
    return <div>Product not found.</div>;
  }

  return <ProductDetailClient product={product} />;
}
