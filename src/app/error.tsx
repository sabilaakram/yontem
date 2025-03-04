"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <MdOutlineErrorOutline className="text-custom-purple-300 text-6xl mx-auto" />
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Try Again Or Go Back To Home Page
        </p>

        <div className="flex items-center gap-8 max-w-xs justify-center mx-auto">
          <Button
            onClick={() => reset()}
            className="inline-flex h-10 capitalize items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Try Again
          </Button>
          <Link
            href="/"
            className="inline-flex h-10 capitalize items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
