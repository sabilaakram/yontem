"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product_card";
import { Product } from "@/lib/types";
import { getATSProducts } from "@/data/loaders"; // Adjust import path if necessary
import HeroSection from "@/components/hero_section";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const images = ["/AMS.png"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getATSProducts();
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);
  if (loading) {
    // return <div>Loading products...</div>;
  }

  return (
    <div>
      <HeroSection
        backgroundImages={images}
        items={{
          heading: "Aviation Training Simulators",
          text: [
            {
              label:
                "Experience the pinnacle of flight simulation, designed to elevate your training to new heights. Elevate your training with simulators engineered for precision and reliability",
            },
          ],
        }}
      />
      <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] p-6 w-[85%] ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
