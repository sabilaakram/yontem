import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { cn, getStrapiURL } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type CardCarosuelProps = {
  FeaturedImage: {
    url: string;
    alternativeText: string;
  };
  NavMenuName: string;
  FeaturedText?: string;
  slug: string;
};

type CardCarosuelComponentProps = {
  data: CardCarosuelProps;
  className?: string;
};

const CardCarosuel: React.FC<CardCarosuelComponentProps> = ({
  data,
  className,
  
}) => {
  const baseurl = getStrapiURL();
  return (
    <Card
      className={cn(
        "border-none p-4 rounded-sm flex flex-col shadow-3xl h-full",
        className
      )}
    >
      <CardHeader className="p-0 relative after:my-2 ">
        <Image
          src={baseurl + data.FeaturedImage.url} // Directly use the image URL
          alt={baseurl + data.FeaturedImage.alternativeText}
          width={200}
          height={208}
          className="w-full h-52 object-cover border rounded-xl"
        />
      </CardHeader>
      <CardContent className="p-0 h-full flex flex-col justify-between">
        <CardTitle className="font-gilroy lg:text-[24px] font-bold md:text-[21px]  text-[18px] text-[#161C2D]">
          {data.NavMenuName}
        </CardTitle>
        <CardDescription className="text-wrap mt-2 mb-4  font-gilroy  md:text-[16px] text-[16px] lg:text-[18px] lg:leading-[27px] md:leading-[20px] leading-[24px] text-[#161C2D] font-[500]">
          {data?.FeaturedText || data.NavMenuName}
        </CardDescription>

        <Link href={`/blogs/${data.slug}`}>
          <Button className="lg:px-6 lg:py-3 lg:gap-[10px]  bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy text-lg hover:bg-[#515D6A] transition font-[600] ">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CardCarosuel;
