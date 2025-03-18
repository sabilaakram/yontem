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

// export async function getSchemaData() {
//   try {
//     const res = await fetch(`${getStrapiURL()}/api/schema-setting`, {
//       headers: { "Content-Type": "application/json" },
//       cache: "no-store", // Ensures fresh data
//     });

//     if (!res.ok) {
//       throw new Error(`Http error! status ${res.status}`);
//     }

//     const data = await res.json();
//     return data?.data?.attributes?.jsonLdSchema || [];
//   } catch (error) {
//     console.error("Error fetching schema data:", error);
//     return [];
//   }
// }


export const formatImageUrl = (image: { url?: string } | null, fallback: string = "/ATS.png") => {
  if (!image?.url) return fallback; // Return fallback if image is missing

  return image.url.startsWith("http")
    ? image.url
    : `${getStrapiURL()}/${image.url.replace(/^\//, "")}`;
};


export async function getHomepageContent() {
  const url = new URL("/api/homepages", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      certifications_logos: { fields: ["url", "alternativeText"] },
      clients_logos: { fields: ["url", "alternativeText"] },
      aviation_training_simulators_image: {
        fields: ["url", "alternativeText"],
      },
      aviation_maintenance_simulators_image: {
        fields: ["url", "alternativeText"],
      },
      maritime_training_simulators_image: {
        fields: ["url", "alternativeText"],
      },
      maritime_maintenance_simulators_image: {
        fields: ["url", "alternativeText"],
      },
      EEL_solutions_image: { fields: ["url", "alternativeText"] },
      special_projects_image: { fields: ["url", "alternativeText"] },
      background_1: { fields: ["url", "alternativeText"] },
      background_2: { fields: ["url", "alternativeText"] },
      background_3: { fields: ["url", "alternativeText"] },
      background_4: { fields: ["url", "alternativeText"] },
      Faq: "*",
    },
  });

  return await fetchData(url.href);
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
        fields: ["alternativeText", "name", "url"],
      },
      product_header_image: {
        fields: ["alternativeText", "name", "url"],
      },
    },
  });

  return await fetchData(url.href);
}

export async function getAMSProducts() {
  const url = new URL("/api/aviation-maintenance-products", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify(
    {
      populate: {
        product_main_image: {
          fields: ["alternativeText", "name", "url"],
        },
        product_extra_images: {
          fields: ["alternativeText", "name", "url"],
        },
        product_header_image: {
          fields: ["alternativeText", "name", "url"],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
}

export async function getMTSProducts() {
  const url = new URL("/api/maritime-training-simulators", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      product_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      product_extra_images: {
        fields: ["alternativeText", "name", "url"],
      },
      product_header_image: {
        fields: ["alternativeText", "name", "url"],
      },
    },
  });

  return await fetchData(url.href);
}

export async function getMMSProducts() {
  const url = new URL("/api/maritime-maintenance-simulators", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      product_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      product_extra_images: {
        fields: ["alternativeText", "name", "url"],
      },
      product_header_image: {
        fields: ["alternativeText", "name", "url"],
      },
    },
  });

  return await fetchData(url.href);
}

export const getATSProductBySlug = async (slug: string) => {
  const url = new URL(`/api/aviation-products/${slug}`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        product_main_image: {
          fields: ["alternativeText", "name", "url"],
        },
        product_extra_images: {
          fields: ["alternativeText", "name", "url"],
        },
        product_header_image: {
          fields: ["alternativeText", "name", "url"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
};

export const getAMSProductBySlug = async (slug: string) => {
  const url = new URL(`/api/aviation-maintenance-products/${slug}`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        product_main_image: {
          fields: ["alternativeText", "name", "url"],
        },
        product_extra_images: {
          fields: ["alternativeText", "name", "url"],
        },
        product_header_image: {
          fields: ["alternativeText", "name", "url"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
};

export const getMTSProductBySlug = async (slug: string) => {
  const url = new URL(`/api/maritime-training-simulators/${slug}`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        product_main_image: {
          fields: ["alternativeText", "name", "url"],
        },
        product_extra_images: {
          fields: ["alternativeText", "name", "url"],
        },
        product_header_image: {
          fields: ["alternativeText", "name", "url"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
};

export const getMMSProductBySlug = async (slug: string) => {
  const url = new URL(`/api/maritime-maintenance-simulators/${slug}`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        product_main_image: {
          fields: ["alternativeText", "name", "url"],
        },
        product_extra_images: {
          fields: ["alternativeText", "name", "url"],
        },
        product_header_image: {
          fields: ["alternativeText", "name", "url"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
};

export async function getASData() {
  const url = new URL(`/api/aviation-simulators`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        background_image: { fields: ["url", "alternativeText"] },
        aviation_training_simulators_image: {
          fields: ["url", "alternativeText"],
        },
        aviation_maintenance_simulators_image: {
          fields: ["url", "alternativeText"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
}

export async function getEELSData() {
  const url = new URL(`/api/laboratory-solutions`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        background_image: { fields: ["url", "alternativeText"] },
        fluid_mechanics_training_laboratory_image: {
          fields: ["url", "alternativeText"],
        },
        electrical_and_electronic_measurement_laboratory_image: {
          fields: ["url", "alternativeText"],
        },
        mechanical_laboratory_image: { fields: ["url", "alternativeText"] },
        academics_image: { fields: ["url", "alternativeText"] },
        power_electronics_laboratory_image: {
          fields: ["url", "alternativeText"],
        },
        circuit_and_system_laboratory_image: {
          fields: ["url", "alternativeText"],
        },
        high_voltage_laboratory_image: { fields: ["url", "alternativeText"] },
        electromechanical_laboratory_image: {
          fields: ["url", "alternativeText"],
        },
        electrical_machinery_laboratory_image: {
          fields: ["url", "alternativeText"],
        },
        microcontroller_laboratory_image: {
          fields: ["url", "alternativeText"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
}

export async function getSPData() {
  const url = new URL(`/api/special-projects`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        background_image: { fields: ["url", "alternativeText"] },
        tipi_time_image: { fields: ["url", "alternativeText"] },
        asthma_tip_image: { fields: ["url", "alternativeText"] },
        standing_type_image: { fields: ["url", "alternativeText"] },
        wall_mount_image: { fields: ["url", "alternativeText"] },
        elevator_type_image: { fields: ["url", "alternativeText"] },
        decorative_type_image: { fields: ["url", "alternativeText"] },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
}

export async function getMSData() {
  const url = new URL(`/api/maritime-simulators`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        background_image: { fields: ["url", "alternativeText"] },
        maritime_training_simulators_image: {
          fields: ["url", "alternativeText"],
        },
        maritime_maintenance_simulators_image: {
          fields: ["url", "alternativeText"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
}

export async function getAboutUs() {
  const url = new URL("/api/about-pages", baseURL);
  console.log("Fetching About Us data from URL:", url.href);

  url.search = qs.stringify(
    {
      populate: {
        background_image: { fields: ["url", "alternativeText"] },
        journey_image: { fields: ["url", "alternativeText"] },
        mission_image: { fields: ["url", "alternativeText"] },
        vision_image: { fields: ["url", "alternativeText"] },
        // values_image: { fields: ["url", "alternativeText"] },
        innovation_image: { fields: ["url", "alternativeText"] }, // Capital 'I' as per API
        ctq_image: { fields: ["url", "alternativeText"] },
        solutions_image: { fields: ["url", "alternativeText"] },
        partners_image: { fields: ["url", "alternativeText"] },
      },
    },
    { encode: false }
  );

  return await fetchData(url.href);
}

export const getPageMetadata = async (slug: string) => {
  const url = new URL(`/api/pages-metadatas/${slug}`, baseURL);
  return await fetchData(url.href);
};

export async function getBlogsData() {
  const url = new URL("/api/blogs", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      blog_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      blog_header_image: {
        fields: ["alternativeText", "name", "url"],
      },
    },
  });

  return await fetchData(url.href);
}

export const getBlogsBySlug = async (slug: string) => {
  const url = new URL(`/api/blogs/${slug}`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        blog_main_image: {
          fields: ["alternativeText", "name", "url"],
        },
        blog_header_image: {
          fields: ["alternativeText", "name", "url"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
};

// export async function getRecentBlogs() {
//   const url = new URL("/api/blogs", baseURL);
//   console.log("Fetching recent blogs from URL:", url.href);

//   url.search = qs.stringify(
//     {
//       sort: ["publishedAt:desc"], // Get latest blogs
//       pagination: { limit: 5 }, // Fetch only 5 blogs
//       populate: {
//         blog_main_image: {
//           fields: ["alternativeText", "name", "url"],
//         },
//       },
//     },
//     { encodeValuesOnly: true }
//   );

//   return await fetchData(url.href);
// };

export async function getNewsData() {
  const url = new URL("/api/news", baseURL);
  console.log("Fetching products from URL:", url.href);

  url.search = qs.stringify({
    populate: {
      news_main_image: {
        fields: ["alternativeText", "name", "url"],
      },
      news_header_image: {
        fields: ["alternativeText", "name", "url"],
      },
    },
  });

  return await fetchData(url.href);
}

export const getNewsBySlug = async (slug: string) => {
  const url = new URL(`/api/news/${slug}`, baseURL);

  url.search = qs.stringify(
    {
      populate: {
        news_main_image: {
          fields: ["alternativeText", "name", "url"],
        },
        news_header_image: {
          fields: ["alternativeText", "name", "url"],
        },
        Faq: "*",
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return await fetchData(url.href);
};
