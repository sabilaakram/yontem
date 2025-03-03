import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Url } from "next/dist/shared/lib/router/router";

//pages metadata
export interface PageProps {
  params: { slug: string; id: string };
}

export interface SinglePageProps {
  id: number
  metatitle: string | null
  metadescription: string | null
  metakeywords: string | { type: string; children: { text: string }[] }[] | null
  metacanonical: Url | null
  slug: string
}


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
  metatitle: string | null
  metadescription: string | null
  metakeywords: string | { type: string; children: { text: string }[] }[] | null
  metacanonical: Url | null
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



