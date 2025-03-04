import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function flattenAttributes(data: any): any {
  // Check if data is a plain object; return as is if not
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  // Initialize an object with an index signature for the flattened structure
  let flattened: { [key: string]: any } = {};

  // Iterate over each key in the object
  for (let key in data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}
// export function flattenAttributes(data: any): any {
//   if (
//     typeof data !== "object" ||
//     data === null ||
//     data instanceof Date ||
//     typeof data === "function"
//   ) {
//     return data;
//   }

//   if (Array.isArray(data)) {
//     return data.map((item) => flattenAttributes(item));
//   }

//   let flattened: { [key: string]: any } = {};

//   for (let key in data) {
//     if (!data.hasOwnProperty(key)) continue;

//     if (
//       (key === "attributes" || key === "data") &&
//       typeof data[key] === "object" &&
//       !Array.isArray(data[key])
//     ) {
//       Object.assign(flattened, flattenAttributes(data[key]));
//     } else if (key === "product_features" || key === "product_short_description" || key === "product_overview" || key === "Features_explained" || key === "additional_benefits") {
//       flattened[key] = flattenRichText(data[key]);
//     } else if (key === "product_main_image" || key === "product_header_image") {
//       flattened[key] = {
//         ...data[key],
//         url: getStrapiMedia(data[key]?.url),
//       };
//     } else if (key === "product_extra_images" && Array.isArray(data[key])) {
//       flattened[key] = data[key].map((image) => ({
//         ...image,
//         url: getStrapiMedia(image?.url),
//       }));
//     } else {
//       flattened[key] = flattenAttributes(data[key]);
//     }
//   }

//   return flattened;
// }


// Helper to flatten rich text structures
function flattenRichText(content: any): string[] {
  if (!Array.isArray(content)) return [];
  return content.map((block) => extractTextFromBlock(block)).flat();
}

// Extract text from a single block
function extractTextFromBlock(block: any): string {
  if (block.type === "text") {
    return block.text || "";
  }
  if (block.children) {
    return block.children.map(extractTextFromBlock).join(" ");
  }
  return "";
}


export function getStrapiURL() {
  return process.env.STRAPI_URL || "https://admin.yontemteknoloji.com";
}
console.log("fetching from", getStrapiURL());

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}



