import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Url } from "next/dist/shared/lib/router/router";

//pages metadata
export interface PageProps {
  params: { slug: string; id: string };
}

export interface HomePage {
  certifications_logos: {
    url: string;
    alternativeText: string;
  }[];

  clients_logos: {
    url: string;
    alternativeText: string;
  }[];
  aviation_training_simulators_image: {
    url: string;
    alternativeText: string;
  };
  aviation_maintenance_simulators_image: {
    url: string;
    alternativeText: string;
  };
  maritime_training_simulators_image: {
    url: string;
    alternativeText: string;
  };
  maritime_maintenance_simulators_image: {
    url: string;
    alternativeText: string;
  };
  EEL_solutions_image: {
    url: string;
    alternativeText: string;
  };
  special_projects_image: {
    url: string;
    alternativeText: string;
  };
  background_1: { url: string; alternativeText: string };
  background_2: { url: string; alternativeText: string };
  background_3: { url: string; alternativeText: string };
  background_4: { url: string; alternativeText: string };
  Faq: FAQ[];
  heading_1: string;
  heading_2: string;
  heading_3: string;
  heading_4: string;
  description_1: BlocksContent;
  description_2: BlocksContent;
  description_3: BlocksContent;
  description_4: BlocksContent;
  certifications: BlocksContent;
  clients: BlocksContent;
  aviation_simulators: BlocksContent;
  aviation_training_simulators: BlocksContent;
  aviation_maintenance_simulators: BlocksContent;
  maritime_simulators: BlocksContent;
  maritime_training_simulators: BlocksContent;
  maritime_maintenance_simulators: BlocksContent;
  laboratory_solutions: BlocksContent;
  EEL_solutions: BlocksContent;
  special_projects: BlocksContent;
  air_disinfection_devices: BlocksContent;
  Whoweare: BlocksContent;
}

export interface AboutUs {
  background_image: {
    url: string;
    alternativeText: string;
  }[];
  military_institutions: BlocksContent;
  universities: BlocksContent;
  high_schools: BlocksContent;
  govt_institutes: BlocksContent;
  journey: BlocksContent;
  mission: BlocksContent;
  vision: BlocksContent;
  values: BlocksContent;
  Innovation: BlocksContent;
  CTQ: BlocksContent;
  solutions: BlocksContent;
  partners: BlocksContent;
  journey_image: {
    url: string;
    alternativeText: string;
  };
  mission_image: {
    url: string;
    alternativeText: string;
  };
  vision_image: {
    url: string;
    alternativeText: string;
  };
  value_image: {
    url: string;
    alternativeText: string;
  };
  innovation_image: {
    url: string;
    alternativeText: string;
  };
  ctq_image: {
    url: string;
    alternativeText: string;
  };
  solutions_image: {
    url: string;
    alternativeText: string;
  };
  partners_image: {
    url: string;
    alternativeText: string;
  };
}

export interface FAQ {
  faqTitle: string;
  faqDescription: BlocksContent;
}

export interface Aviation_Simulators {
  page_heading: string;
  description: BlocksContent;
  background_image: {
    url: string;
    alternativeText: string;
  }[];
  aviation_training_simulators_image: {
    url: string;
    alternativeText: string;
  };
  aviation_training_simulators: BlocksContent;
  aviation_maintenance_simulators_image: {
    url: string;
    alternativeText: string;
  };
  aviation_maintenance_simulators: BlocksContent;
  Faq: FAQ[];
}

export interface EEL_Solutions {
  page_heading: string;
  description: BlocksContent;
  background_image: {
    url: string;
    alternativeText: string;
  }[];
  microcontroller_laboratory: BlocksContent;
  microcontroller_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  fluid_mechanics_training_laboratory: BlocksContent;
  fluid_mechanics_training_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  electrical_and_electronic_measurement_laboratory: BlocksContent;
  electrical_and_electronic_measurement_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  mechanical_laboratory: BlocksContent;
  mechanical_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  academics: BlocksContent;
  academics_image: {
    url: string;
    alternativeText: string;
  };
  power_electronics_laboratory: BlocksContent;
  power_electronics_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  circuit_and_system_laboratory: BlocksContent;
  circuit_and_system_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  high_voltage_laboratory: BlocksContent;
  high_voltage_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  electromechanical_laboratory: BlocksContent;
  electromechanical_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  electrical_machinery_laboratory: BlocksContent;
  electrical_machinery_laboratory_image: {
    url: string;
    alternativeText: string;
  };
  Faq: FAQ[];
}

export interface Special_Projects {
  page_heading: string;
  description: BlocksContent;
  background_image: {
    url: string;
    alternativeText: string;
  }[];
  tipi_time: BlocksContent;
  tipi_time_image: {
    url: string;
    alternativeText: string;
  };
  asthma_tip: BlocksContent;
  asthma_tip_image: {
    url: string;
    alternativeText: string;
  };
  standing_type: BlocksContent;
  standing_type_image: {
    url: string;
    alternativeText: string;
  };
  wall_mount: BlocksContent;
  wall_mount_image: {
    url: string;
    alternativeText: string;
  };
  elevator_type: BlocksContent;
  elevator_type_image: {
    url: string;
    alternativeText: string;
  };
  decorative_type: BlocksContent;
  decorative_type_image: {
    url: string;
    alternativeText: string;
  };
  Faq: FAQ[];
}

export interface Maritime_Simulators {
  page_heading: string;
  description: BlocksContent;
  background_image: {
    url: string;
    alternativeText: string;
  }[];
  maritime_training_simulators_image: {
    url: string;
    alternativeText: string;
  };
  maritime_training_simulators: BlocksContent;
  maritime_maintenance_simulators_image: {
    url: string;
    alternativeText: string;
  };
  maritime_maintenance_simulators: BlocksContent;
  Faq: FAQ[];
}

export interface SinglePageProps {
  id: number;
  metatitle: string | null;
  metadescription: string | null;
  metakeywords:
    | string
    | { type: string; children: { text: string }[] }[]
    | null;
  metacanonical: Url | null;
  slug: string;
  
}

// productTypes
export interface Product {
  id: number;
  product_name: string;
  product_main_image: { url: string; alternativeText: string };
  product_short_description: string;
  slug: string;
}

export interface ProductDetail {
  Faq: FAQ[];
  id: number;
  metatitle: string | null;
  metadescription: string | null;
  metakeywords:
    | string
    | { type: string; children: { text: string }[] }[]
    | null;
  metacanonical: Url | null;
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

// Blogs
export interface Blogs {
  id: number;
  blog_name: string;
  blog_main_image: { url: string; alternativeText: string };
  blog_short_description: string;
  slug: string;
}

export interface BlogDetail {
  Faq: FAQ[];
  id: number;
  metatitle: string | null;
  metadescription: string | null;
  metakeywords:
    | string
    | { type: string; children: { text: string }[] }[]
    | null;
  metacanonical: Url | null;
  blog_name: string;
  blog_header_image: {
    url: string;
    alternativeText: string;
  };
  blog_main_image: {
    url: string;
    alternativeText: string;
  };
  introduction: BlocksContent;
  blog_data: BlocksContent;
  conclusion: BlocksContent;
  cta_text: string;
  cta_description: string;
  slug: string;
  author: string;
  publishDate?: string;
  readTime: string;
}

// News
export interface News {
  id: number;
  news_name: string;
  news_main_image: { url: string; alternativeText: string };
  news_short_description: string;
  slug: string;
}

export interface NewsDetail {
  Faq: FAQ[];
  id: number;
  metatitle: string | null;
  metadescription: string | null;
  metakeywords:
    | string
    | { type: string; children: { text: string }[] }[]
    | null;
  metacanonical: Url | null;
  news_name: string;
  news_header_image: {
    url: string;
    alternativeText: string;
  };
  news_main_image: {
    url: string;
    alternativeText: string;
  };
  introduction: BlocksContent;
  news_data: BlocksContent;
  conclusion: BlocksContent;
  category?: string;
  tags?: BlocksContent;
  slug: string;
  author: string;
  publishDate?: string;
  readTime: string;
}
