"use client";

import React from "react";
import CardCarosuel from "./blog_card";

interface CardCarosuelProps {
  id?: number;
  FeaturedText?: string;
  slug: string;
  FeaturedImage: {
    url: string;
    alternativeText: string;
  };
  NavMenuName: string;
}

const NewsGrid = ({ data }: { data: CardCarosuelProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((newsItem, index) => (
        <CardCarosuel key={index} data={newsItem} />
      ))}
    </div>
  );
};

export default NewsGrid;
