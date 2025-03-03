import { Metadata } from "next";
import { PageProps, SinglePageProps } from "@/lib/types";
import { getPageMetadata } from "@/data/loaders";
import AMSProductsClient from "@/components/AMSProductsClient";

// ✅ This function is now correctly used in a server component
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const metadata: SinglePageProps = await getPageMetadata("aviation-maintenance-simulators");

  console.log("Raw Metadata:", metadata);

  let keywords: string[] = [];

  if (Array.isArray(metadata.metakeywords)) {
    keywords = metadata.metakeywords.flatMap((item: any) =>
      item.children?.map((child: any) => child.text) ?? []
    );
  } else if (typeof metadata.metakeywords === "string") {
    keywords = metadata.metakeywords.split(",").map((k) => k.trim());
  }

  return {
    title: metadata?.metatitle,
    description: metadata?.metadescription,
    keywords,
    alternates: {
      canonical: `http://localhost:3000/api/pages-metadatas/${metadata.slug}`,
    },
  };
}

// ✅ Server component that imports the client component
const AMSProductsPage = () => {
  return <AMSProductsClient />;
};

export default AMSProductsPage;
