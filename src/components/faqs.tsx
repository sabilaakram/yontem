"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { FAQ } from "@/lib/types"
import { useState } from "react"
import ParseRichText from "./richtextparser"

export function AccordionDemo({ faqs = [] }: { faqs: FAQ[] }) {
  const [openItem, setOpenItem] = useState<string | undefined>("item-1")

  const handleValueChange = (value: string) => {
    setOpenItem(value === openItem ? undefined : value)
  }

  return (
    <Accordion
      type="single"
      collapsible
      className=""
      defaultValue="item-1"
      value={openItem}
      onValueChange={handleValueChange}
    >
      {faqs.map((faq, index) => {
        const itemValue = `item-${index + 1}`
        const isOpen = openItem === itemValue

        return (
          <AccordionItem
            key={index}
            value={itemValue}
            className={`mb-4 rounded-xl transition-all duration-300 ${
              isOpen ? "bg-white shadow-lg scale-[1.02] border-l-4 border-primary" : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <AccordionTrigger
              className={`font-gilroy w-full px-6 lg:py-4 py-2 text-left font-semibold text-[18px] lg:text-[22px] transition-colors ${
                isOpen ? "text-primary" : "text-gray-800"
              }`}
            >
              <div className="flex items-center">
                <span
                  className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full ${
                    isOpen ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {index + 1}
                </span>
                {faq.faqTitle}
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={`font-gilroy px-6 py-4 text-[16px] lg:text-[18px] leading-relaxed ${
                isOpen ? "text-gray-700" : "text-gray-600"
              }`}
            >
              <ParseRichText 
                  content={faq.faqDescription} 
                  paragraphProps="text-[16px] text-[#000000] font-normal font-gilroy"
                />
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

