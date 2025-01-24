import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flattenAttributes(data: any): any {
  // Check if data is not an object or is a primitive, return as-is
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  // Handle arrays
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  // Flatten attributes and data fields
  let flattened: { [key: string]: any } = {};

  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue;

    // Merge nested attributes or data objects
    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else if (key === "product_features" || key === "product_short_description" || key === "product_detail_description") {
      // Special handling for structured fields
      flattened[key] = flattenRichText(data[key]);
    } else if (key === "product_main_image") {
      // Handle media URL
      flattened[key] = {
        ...data[key],
        url: getStrapiMedia(data[key]?.url),
      };
    } else {
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

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
  return process.env.STRAPI_URL || "http://localhost:1337";
}
console.log("fetching from", getStrapiURL());

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}
