"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product_card";
import { PageProps, Product, SinglePageProps } from "@/lib/types";
import { getATSProducts, getPageMetadata } from "@/data/loaders"; // Adjust import path if necessary
import HeroSection from "@/components/hero_section";
import { Metadata } from "next";


// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const metadata: SinglePageProps = await getPageMetadata('aviationmaintenancesimulators');

//   console.log("Raw Metadata:", metadata);

//   let keywords: string[] = [];

//   if (Array.isArray(metadata.metakeywords)) {
//     keywords = metadata.metakeywords.flatMap((item: any) =>
//       item.children?.map((child: any) => child.text) ?? []
//     );
//   } else if (typeof metadata.metakeywords === "string") {
//     keywords = metadata.metakeywords.split(",").map((k) => k.trim());
//   }

//   return {
//     title: metadata?.metatitle,
//     description: metadata?.metadescription,
//     keywords,
//     alternates: {
//       canonical: `http://localhost:3000/api/pages-metadatas/${metadata.slug}`,
//     },
//   };
// }


const AMSProductsPage: React.FC = () => {
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AMSProductsPage;
