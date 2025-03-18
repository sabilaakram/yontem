"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import { getMMSProducts } from "@/data/loaders";
import HeroSection from "@/components/hero_section";
import MMSProductCard from "./MMS_product_card";

const MMSProductsClient: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const images = ["/AMS.png"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getMMSProducts();
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
          heading: "Maritime Maintenance Simulators",
          text: [
            {
              label:
                "Our maritime maintenance simulators offer comprehensive training through virtual ship maintenance scenarios. Trainees can practice essential repair and troubleshooting skills, ensuring they are well-prepared for real-world challenges in vessel operations and management.",
            },
          ],
        }}
      />
      <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] p-6 w-[85%] ">
          {products.map((product) => (
            <MMSProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MMSProductsClient;
