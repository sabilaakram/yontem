import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Product } from "@/lib/types";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { getStrapiURL } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

function MMSProductCard({ product }: Readonly<ProductCardProps>) {
  const baseurl = getStrapiURL();

  // Ensure the product slug is correctly passed to the Link component
  const productSlug = product.slug;

  return (
    <div className="flex flex-col gap-[30px]">
      <div>
        <Image
          src={baseurl + product.product_main_image.url}
          alt={product.product_main_image.alternativeText || "Product image"}
          width={380}
          height={352}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="font-gilroy font-[800] text-[24px] leading-[30px] text-[#161C2D]">
          {product.product_name
            .split(" ")
            .slice(0, Math.ceil(product.product_name.split(" ").length / 2))
            .join(" ")}
          <br />
          {product.product_name
            .split(" ")
            .slice(Math.ceil(product.product_name.split(" ").length / 2))
            .join(" ")}
        </h2>

        <p className="font-gilroy font-[400] text-[18px] leading-[28px] text-[#161C2D]">
          {product.product_short_description}
        </p>
        <Button
          asChild
          className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition"
        >
          <Link href={`/maritimemaintenancesimulators/${productSlug}`}>
            Learn More <MdArrowOutward size={30} />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default MMSProductCard;