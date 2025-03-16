// "use client"

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import ParseRichText from "@/components/richtextparser"
// import type { BlocksContent } from "@strapi/blocks-react-renderer"

// interface TabItem {
//   value: string
//   label: string
//   content: BlocksContent
// }

// interface TabsComponentProps {
//   tabData: TabItem[]
// }

// export function TabsComponent({ tabData }: TabsComponentProps) {
//   return (
//     <Tabs defaultValue={tabData[0]?.value} className="w-full">
//       {/* Scrollable TabsList */}
//       <div className="w-full overflow-x-auto lg:overflow-x-visible pl-[200px] md:pl-0 lg:pl-0">
//         <TabsList className="flex lg:grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 whitespace-nowrap gap-2 scroll-snap-x-mandatory">
//           {tabData.map((tab) => (
//             <TabsTrigger key={tab.value} value={tab.value} className="min-w-max scroll-snap-start">
//               {tab.label}
//             </TabsTrigger>
//           ))}
//         </TabsList>
//       </div>

//       {/* Dynamically Generate Tab Contents */}
//       {tabData.map((tab) => (
//         <TabsContent key={tab.value} value={tab.value}>
//           {tab.content ? (
//             <div className="pt-6">
//               <ParseRichText content={tab.content} />
//             </div>
//           ) : (
//             <div className="pt-6">No content available</div>
//           )}
//         </TabsContent>
//       ))}
//     </Tabs>
//   )
// }



"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ParseRichText from "@/components/richtextparser"
import type { BlocksContent } from "@strapi/blocks-react-renderer"

interface TabItem {
  value: string
  label: string
  content: BlocksContent | null
}

interface TabsComponentProps {
  tabData: TabItem[]
}

export function TabsComponent({ tabData }: TabsComponentProps) {
  // Safety check - if no tabs, don't render the component
  if (!tabData || tabData.length === 0) {
    return <div>No tab data available</div>
  }

  return (
    <Tabs defaultValue={tabData[0]?.value} className="w-full">
      {/* Scrollable TabsList */}
      <div className="w-full overflow-x-auto lg:overflow-x-visible pl-[200px] md:pl-0 lg:pl-0">
        <TabsList className="flex lg:grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 whitespace-nowrap gap-2 scroll-snap-x-mandatory">
          {tabData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="min-w-max scroll-snap-start">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Dynamically Generate Tab Contents */}
      {tabData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content ? (
            <div className="pt-6">
              <ParseRichText content={tab.content} />
            </div>
          ) : (
            <div className="pt-6">No content available for this partner</div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}

