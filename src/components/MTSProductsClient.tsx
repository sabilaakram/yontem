"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import { getMTSProducts } from "@/data/loaders";
import HeroSection from "@/components/hero_section";
import MTSProductCard from "./MTS_product_card";

const MTSProductsClient: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const images = ["/AMS.png"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getMTSProducts();
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: "Maritime Training Simulators",
          text: [
            {
              label:
                "Our marine simulator training offers realistic scenarios for enhancing navigational and operational skills. Experience hands-on learning that prepares your crew for real-world maritime challenges effectively.",
            },
          ],
        }}
      />
      <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] p-6 w-[85%] ">
          {products.map((product) => (
            <MTSProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MTSProductsClient;
