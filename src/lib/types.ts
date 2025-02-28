import { BlocksContent } from "@strapi/blocks-react-renderer";

// productTypes.ts
export interface Product {
  id: number;
  product_name: string;
  product_main_image: { url: string; alternativeText: string };
  product_short_description: string;
  slug: string;
}

export interface ProductDetail {
  id: number;
  product_name: string;
  product_header_image: {
    url: string;
    alternativeText: string;
  };
  product_main_image: {
    url: string;
    alternativeText: string;
  };
  product_features: BlocksContent;
  product_extra_images: Array<{
    url: string;
    alternativeText: string;
  }>;
  product_overview: BlocksContent;
  Features_explained: BlocksContent;
  additional_benefits: BlocksContent;
  slug: string;
}
