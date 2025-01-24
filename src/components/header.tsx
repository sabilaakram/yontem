// components/Header.js
"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavigationMenuDemo } from "./navbar";
import { MobileMenu } from "./mobilenavbar";
import { Button } from "./ui/button";






function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-[#191928] bg-opacity-50 text-white p-5 px-10"> {/* Key changes here */}
      <div className="container mx-auto flex justify-between items-center"> {/* Added container for centering */}
        <div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Yontem Logo"
              width={120}
              height={75}
              className="relative" // Removed z-50 as z-10 on the header handles it
            />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <NavigationMenuDemo />
        </div>
        <div className="hidden lg:flex">
          <Button asChild variant="outline" className="border rounded-[14px] bg-transparent border-white hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] border-opacity-100 px-[27px] py-[23px] font-gilroy text-[18px] leading-[28px]">
            <Link href="/contact">
            Contact Us
            </Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;