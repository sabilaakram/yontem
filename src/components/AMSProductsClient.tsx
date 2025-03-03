"use client";
import React, { useEffect, useState } from "react";
import AMSProductCard from "@/components/AMS_product_card";
import { Product } from "@/lib/types";
import { getAMSProducts } from "@/data/loaders";
import HeroSection from "@/components/hero_section";

const AMSProductsClient: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const images = ["/AMS.png"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAMSProducts();
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
          heading: "Aviation Maintenance Simulators",
          text: [
            {
              label:
                "Aviation maintenance simulators offer realistic training for diagnosing and repairing aircraft systems. These flight maintenance devices equip technicians with the skills needed to perform precise and efficient maintenance tasks.",
            },
          ],
        }}
      />
      <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] p-6 w-[85%] ">
          {products.map((product) => (
            <AMSProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AMSProductsClient;
