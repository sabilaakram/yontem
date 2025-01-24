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
  product_features: string[];
  product_extra_images: Array<{
    url: string;
    alternativeText: string;
  }>;
  product_detail_description: string;
  slug: string;
}
