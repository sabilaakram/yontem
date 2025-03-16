// import React from 'react'
// import { TabsComponent } from './tabs'
// import { getAboutUs } from '@/data/loaders'

// async function Tabcontainer() {
//   const aboutUsData = await getAboutUs()

//   if (!aboutUsData) {
//     return <div>Loading partners data...</div>
//   }

//   return (
//     <div
//       className={`lg:py-[80px] md:py-[70px] py-[50px] flex place-content-center`}>
//         <div className='flex w-[85%]  flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]'>
//         <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px] text-center">Our Trusted Clients</h2>
//         <p className="list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px] text-center">References for Technical Training Laboratories</p>
//         <TabsComponent tabData={[]}/>
//         </div>
//       </div>
//   )
// }


// export default Tabcontainer



import { TabsComponent } from "./tabs"
import { getAboutUs } from "@/data/loaders"

async function Tabcontainer() {
  const aboutUsData = await getAboutUs()

  if (!aboutUsData) {
    return <div>Loading partners data...</div>
  }

  // Format the aboutUsData into the structure expected by TabsComponent
  const formattedTabData =
    aboutUsData.partners?.map((partner: { id: number; name: string; description: string }, index: number) => ({
      value: partner.id.toString() || `tab-${index}`,
      label: partner.name || `Partner ${index + 1}`,
      content: partner.description || null,
    })) || []

  // Check if we have any tabs to display
  if (formattedTabData.length === 0) {
    return (
      <div className={`lg:py-[80px] md:py-[70px] py-[50px] flex place-content-center`}>
        <div className="flex w-[85%] flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]">
          <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px] text-center">
            Our Trusted Clients
          </h2>
          <p className="list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px] text-center">
            References for Technical Training Laboratories
          </p>
          <div className="text-center py-8">No partner data available</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`lg:py-[80px] md:py-[70px] py-[50px] flex place-content-center`}>
      <div className="flex w-[85%] flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]">
        <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px] text-center">
          Our Trusted Clients
        </h2>
        <p className="list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px] text-center">
          References for Technical Training Laboratories
        </p>
        <TabsComponent tabData={formattedTabData} />
      </div>
    </div>
  )
}

export default Tabcontainer

