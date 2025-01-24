import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: Readonly<ProductCardProps>) {
  // const ProductCard: React.FC<{product: Product}> = ({ product }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div>
        <Image
          src={product.product_main_image.url}
          alt={product.product_main_image.alternativeText}
          width={380}
          height={352}
          className="rounded-md "
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
          <Link href={`/products/${product.slug}`}>
            Get Quote <MdArrowOutward size={30} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default ProductCard;
