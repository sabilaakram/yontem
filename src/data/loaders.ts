import qs from "qs";
import { getStrapiURL, flattenAttributes } from "@/lib/utils";

const baseURL = getStrapiURL();

async function fetchData(url: string) {
  console.log("Fetching URL:", url);
  try {
    const response = await fetch(url, {
      next: { revalidate: 120 },
    });
    console.log("Response:", response);

    if (!response.ok) throw new Error(`Http error! status ${response.status}`);

    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


export async function getATSProducts() {
  const url = new URL("/api/aviation-products", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      product_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      product_extra_images: {
        fields: ['alternativeText', 'name', 'url']
      },
      product_header_image: {
        fields: ['alternativeText', 'name', 'url']
      }
    },
    
  });

  return await fetchData(url.href);
}


export async function getAMSProducts() {
  const url = new URL("/api/aviation-maintenance-products", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      product_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      product_extra_images: {
        fields: ['alternativeText', 'name', 'url']
      },
      product_header_image: {
        fields: ['alternativeText', 'name', 'url']
      }
    },
    
  });

  return await fetchData(url.href);
}


export const getATSProductBySlug = async (slug: string) => {
  const url = new URL(`/api/aviation-products/${slug}`, baseURL);

  url.search = qs.stringify({
    populate: {
      product_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      product_extra_images: {
        fields: ['alternativeText', 'name', 'url']
      },
      product_header_image: {
        fields: ['alternativeText', 'name', 'url']
      }
    },
  });

  return await fetchData(url.href);
};


export const getAMSProductBySlug = async (slug: string) => {
  const url = new URL(`/api/aviation-maintenance-products/${slug}`, baseURL);

  url.search = qs.stringify({
    populate: {
      product_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      product_extra_images: {
        fields: ['alternativeText', 'name', 'url']
      },
      product_header_image: {
        fields: ['alternativeText', 'name', 'url']
      }
    },
  });

  return await fetchData(url.href);
};


// fetch("http://localhost:1337/api/aviation-products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));


export const getBlogBySlug = async (slug: string) => {
  const url = new URL(`/api/blogs${slug}`, baseURL);
  return await fetchData(url.href);
  
}


export const getPageMetadata = async (slug: string) => {
  const url = new URL(`/api/pages-metadatas/${slug}`, baseURL);
  return await fetchData(url.href);
  
}