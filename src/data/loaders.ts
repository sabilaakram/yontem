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
    console.log(flattenAttributes)
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getProducts() {
  const url = new URL("/api/aviation-products", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      product_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
    },
    
  });

  return await fetchData(url.href);
}


fetch("http://localhost:1337/api/aviation-products")
  .then((res) => res.json())
  .then((data) => console.log(data));
