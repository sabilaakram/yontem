"use client";

import { useState, useEffect } from "react";
import { AccordionDemo } from "@/components/faqs";
import type { FAQ, BlogDetail } from "@/lib/types";

interface FaqsProps {
  product: BlogDetail; // Pass entire product instead of fetching again
}


const BlogFaqs: React.FC<FaqsProps> = ({ product }) => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product) {
      setFaqs(product.Faq || []); // Get FAQs directly from product data
      setLoading(false);
    }
  }, [product]); // Update FAQs when product changes

  return (
    <div className="mx-auto flex flex-col items-center justify-center pt-[50px] lg:gap-[50px] gap-[20px]">
      <div className="">
        {loading ? (
          <div className="text-center py-8">Loading FAQs...</div>
        ) : faqs.length > 0 ? (
          <AccordionDemo faqs={faqs} />
        ) : (
          <div className="text-center py-8">No FAQs available</div>
        )}
      </div>
    </div>
  );
};

export default BlogFaqs;
