// "use client";
// import React, { useEffect, useState } from "react";
// import HeroSection from '@/components/hero_section';
// import ProductCard from '@/components/product_card';
// import { getProducts } from "@/data/loaders";

// interface Product {
//   id: number;
//   product_name: string;
//   product_main_image: { url: string; alternativeText: string };
//   product_short_description: string;
//   slug: string;
// }

// const Aviation_Training_Simulators: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const images = ["/AMS.png"];

//   useEffect(() => {
//     const fetchProducts = async () => {
//         console.log("Fetching Products...");
//       try {
//         const data = await getProducts();
//         console.log("Fetched Products:", data);
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to load products", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//         <HeroSection
//         backgroundImages={images}
//         items={{
//           heading: 'Aviation Training Simulators',
//           text: [
//             {
//               label:
//                 'Experience the pinnacle of flight simulation, designed to elevate your training to new heights. Elevate your training with simulators engineered for precision and reliability',
//             },
//           ],
//         }}
//       />
//       <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center flex-wrap">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Aviation_Training_Simulators;

"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product_card";
import { Product } from "@/lib/types";
import { getProducts } from "@/data/loaders"; // Adjust import path if necessary
import HeroSection from "@/components/hero_section";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const images = ["/AMS.png"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
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

// import React from 'react';
// import ProductCard from '@/components/product_card';
// import { Product } from '@/lib/types';

// const productData: Product[] = [
//   {
//     id: 1,
//     product_name: 'Luxury Sofa Set',
//     product_main_image: { url: '/AMS.png', alternativeText: 'image 1' },
//     product_short_description: 'Elegant and comfortable sofa set for your living room.',
//     slug: 'luxury-sofa-set'
//   },
//   {
//     id: 2,
//     product_name: 'Luxury Sofa Set',
//     product_main_image: { url: '/AMS.png', alternativeText: 'image 1' },
//     product_short_description: 'Elegant and comfortable sofa set for your living room.',
//     slug: 'luxury-sofa-set'
//   },
//   {
//     id: 2,
//     product_name: 'Luxury Sofa Set',
//     product_main_image: { url: '/AMS.png', alternativeText: 'image 1' },
//     product_short_description: 'Elegant and comfortable sofa set for your living room.',
//     slug: 'luxury-sofa-set'
//   },
// ];

// const ProductsPage: React.FC = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {productData.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductsPage;
