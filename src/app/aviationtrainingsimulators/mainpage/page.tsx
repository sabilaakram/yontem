// import Image from "next/image";
// import React from "react";

// function ProductPage() {
//   return (
//     <div>
//       <div
//         className="bg-scroll place-content-center lg:h-[500px] md:h-[400px] h-[300px] md:pt-20 pt-20"
//         style={{
//           backgroundImage: `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url('/AMS.png')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="place-content-center lg:px-[100px] md:px-[50px] px-[20px] text-center text-white md:max-w-[80%] lg:max-w-[70%] mx-auto flex flex-col items-center justify-center">
//           <h1 className="lg:text-[54px] lg:leading-[60px] md:text-4xl text-3xl font-bold lg:mb-[30px] mb-[16px] font-gilroy line-clamp-2 capitalize text-[#EEE5E5]">
//             Your Heading Text Here
//           </h1>
//         </div>
//       </div>
//       <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
//         <div className="w-[85%] ">
//           <Image
          
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductPage;



// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { MdArrowOutward } from 'react-icons/md';

// const sections = [
//   {
//     headerImage: '/AMS.png',
//     title: 'ADI-HSI Training Set',
//     keyFeatures: [
//       'Durable Design',
//       'Realistic Simulation',
//       'High-Quality Training',
//       'Cost Effective',
//     ],
//     buttonText: 'Learn More',
//     buttonLink: '/about',
//     featureImage: '/ATS.png',
//     featureGallery: ['/ATS.png', '/ATS.png', '/ATS.png', '/ATS.png'],
//     overview: `The ADI & HSI training simulators are designed to provide an immersive learning experience for aviation trainees. These simulators replicate the functions of the Attitude Direction Indicator (ADI) and Horizontal Situation Indicator (HSI) systems, essential tools in modern cockpit navigation. The realistic interface allows trainees to develop critical navigational and situational awareness skills in a controlled, safe environment. Whether for basic instruction or advanced simulation, these ADI & HSI training simulators are vital for pilots and aviation professionals. By mimicking real-world operations, the simulators enhance understanding of essential aircraft instrumentation. Perfect for both civil and military aviation programs, this set ensures accurate and effective training that builds operational readiness.`
//   }
// ];

// export default function ADIHSIPage() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {sections.map((section, index) => (
//         <div key={index}>
//           {/* Header Section */}
//           <div className="bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: `url('${section.headerImage}')` }}>
//             <h1 className="text-4xl font-bold text-white">{section.title}</h1>
//           </div>

//           {/* Key Features Section */}
//           <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
//             <div className="w-[85%]">
//               <div className="flex flex-col lg:flex-row gap-[60px]">
//                 <div className="w-[300px]">
//                   <Image src={section.featureImage} alt="Feature" className="w-full h-full border border-none rounded-[8px] object-cover" height={550} width={550} />
//                 </div>
//                 <div className='gap-[30px] flex flex-col'>
//                   <h2 className="text-[48px] leading-[55px] font-gilroy font-bold ">Key Features:</h2>
//                   <ul className="list-disc pl-6 text-[24px] text-[#161C2D] font-semibold font-gilroy">
//                     {section.keyFeatures.map((feature, idx) => (
//                       <li key={idx}>{feature}</li>
//                     ))}
//                   </ul>
//                   <Button asChild className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition">
//                     <Link href={section.buttonLink}>
//                       {section.buttonText} <MdArrowOutward size={30} />
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//               <div className="grid grid-cols-4 gap-[100px] h-[200px] my-[100px]">
//                 {section.featureGallery.map((image, idx) => (
//                   <Image key={idx} src={image} alt="Gallery" className="w-full h-full border border-none rounded-[8px] object-cover" height={550} width={550} />
//                 ))}
//               </div>
//               <p className='font-gilroy text-[24px] leading-[28.8px] font-normal'>{section.overview}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { MdArrowOutward } from "react-icons/md"
import { getProducts } from "@/data/loaders"
import type { ProductDetail } from "@/lib/types"

export default function ADIHSIPage() {
  const [products, setProducts] = useState<ProductDetail[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        if (Array.isArray(data)) {
          setProducts(data)
        } else {
          throw new Error("Data received is not an array")
        }
      } catch (error) {
        console.error("Failed to fetch products:", error)
        setError("Failed to load products. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (products.length === 0) {
    return <div>No products found.</div>
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {products.map((product) => (
        <div key={product.id}>
          {/* Header Section */}
          <div
            className="bg-cover bg-center h-[400px] flex items-center justify-center"
            style={{ backgroundImage: `url('${product.product_header_image.url}')` }}
          >
            <h1 className="text-4xl font-bold text-white">{product.product_name}</h1>
          </div>

          {/* Key Features Section */}
          <div className="lg:py-[80px] md:py-[70px] py-[50px] w-full flex place-content-center">
            <div className="w-[85%]">
              <div className="flex flex-col lg:flex-row gap-[60px]">
                <div className="w-[300px]">
                  <Image
                    src={product.product_main_image.url || "/placeholder.svg"}
                    alt={product.product_main_image.alternativeText || "Product main image"}
                    className="w-full h-full border border-none rounded-[8px] object-cover"
                    height={550}
                    width={550}
                  />
                </div>
                <div className="gap-[30px] flex flex-col">
                  <h2 className="text-[48px] leading-[55px] font-gilroy font-bold">Key Features:</h2>
                  <ul className="list-disc pl-6 text-[24px] text-[#161C2D] font-semibold font-gilroy">
                    {product.product_features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition"
                  >
                    <Link href={product.slug}>
                      Learn More <MdArrowOutward size={30} />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-[100px] h-[200px] my-[100px]">
                {product.product_extra_images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image.url || "/placeholder.svg"}
                    alt={image.alternativeText || `Gallery image ${idx + 1}`}
                    className="w-full h-full border border-none rounded-[8px] object-cover"
                    height={550}
                    width={550}
                  />
                ))}
              </div>
              <p className="font-gilroy text-[24px] leading-[28.8px] font-normal">
                {product.product_detail_description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}




