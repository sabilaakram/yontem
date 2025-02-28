"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { getATSProductBySlug } from "@/data/loaders";
import type { ProductDetail } from "@/lib/types";
import ParseRichText from "@/components/richtextparser";
import { getStrapiURL } from "@/lib/utils";
import { useParams } from "next/navigation";

export default function AMSProductDetailPage() {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getATSProductBySlug(slug);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const baseurl = getStrapiURL();

  // ✅ Process extra images before passing to ProductCarousel
  const images =
    product.product_extra_images?.map((image) => ({
      src: baseurl + image.url || "/placeholder.svg",
      alt: image.alternativeText || "Gallery image",
    })) || [];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('${baseurl + product.product_header_image.url}')`,
        }}
      >
        <h1 className="text-4xl font-bold text-white">
          {product.product_name}
        </h1>
      </div>

      {/* Key Features Section */}
      <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
        <div className="w-[85%]">
          <div className="flex flex-col md:flex-row lg:flex-row lg:gap-[60px] md:gap-[30px] gap-[20px]">
            <div className="lg:w-[400px] md:w-[350px]">
              <Image
                src={
                  baseurl + product.product_main_image.url || "/placeholder.svg"
                }
                alt={
                  product.product_main_image.alternativeText ||
                  "Product main image"
                }
                className="w-full h-full border border-none rounded-[8px] object-cover"
                height={550}
                width={550}
              />
            </div>
            <div className="gap-[30px] flex flex-col">
              <h2 className="text-[48px] leading-[55px] font-gilroy font-bold">
                Key Features:
              </h2>
              <ParseRichText content={product.product_features} />
              <Button
                asChild
                className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition"
              >
                <Link href={`/contact`}>
                  Get A Quote <MdArrowOutward size={30} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="">
          {product.product_extra_images?.length > 0 ? (
            <div className=" grid grid-cols-4 lg:gap-[100px] md:gap-[20px] gap-[10px] lg:h-[200px] w-full lg:mt-[50px] md:my-[50px] my-[20px]">
              {product.product_extra_images.map((image, idx) => (
                <Image
                  key={idx}
                  src={baseurl + image.url || "/placeholder.svg"}
                  alt={image.alternativeText || `Gallery image ${idx + 1}`}
                  className="w-full h-full border border-none rounded-[8px] object-cover"
                  height={550}
                  width={550}
                />
              ))}
            </div>
          ) : (
            <p>No additional images available.</p>
          )}
          </div>
          

          {/* Product Overview */}
          <div className="gap-[10px] flex flex-col lg:pt-[50px] ">
            <h2 className="lg:text-[48px] text-[40px] leading-[50px] font-gilroy font-bold">
              Product Overview
            </h2>
            <ParseRichText
              content={product.product_overview}
              paragraphProps="text-[24px] text-[#000000] font-normal font-gilroy"
            />
          </div>

          {/* Features Explained */}
          <div className="gap-[10px] flex flex-col lg:pt-[10px] md:pt-[50px] pt-[20px]">
            <h2 className="lg:text-[48px] text-[40px] leading-[50px] font-gilroy font-bold">
              Features Explained
            </h2>
            <ParseRichText content={product.Features_explained} />
          </div>

          {/* Additional Benefits */}
          <div className="gap-[10px] flex flex-col lg:pt-[50px]  md:pt-[50px] pt-[20px] ">
            <h2 className="lg:text-[48px] text-[40px] leading-[50px] font-gilroy font-bold">
              Additional Benefits
            </h2>
            <ParseRichText
              content={product.additional_benefits}
              paragraphProps="text-[24px] text-[#000000] font-normal font-gilroy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
