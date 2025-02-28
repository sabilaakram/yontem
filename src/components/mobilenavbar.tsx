import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function MobileMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div>
            <Image
              src="/logo.png"
              alt="Yontem Logo"
              width={90}
              height={75}
              className="z-50 relative"
            />
          </div>
        </SheetHeader>
        <div className="grid gap-3 py-4">
          <div>
            <Link href="/">
              <p className="font-gilroy justify-center rounded-md text-[18px] leading-[28px] font-[600] px-4 pt-2  hover:text-[#E31E24]  focus:text-[#E31E24] ">
                Home
              </p>
            </Link>
          </div>
          {/* Simulations with Dropdown */}
          <div>
            <div
              className="flex items-center justify-between px-4"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <p className="font-gilroy rounded-md text-[18px] leading-[28px] font-[600] hover:text-[#E31E24] focus:text-[#E31E24]">
                Simulations
              </p>
              <FiChevronDown
                className={`text-[18px] transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/aviationsimulator">
                  <p className="font-gilroy text-[16px] leading-[24px] font-[500] hover:text-[#E31E24] focus:text-[#E31E24]">
                    Aviation Simulators
                  </p>
                </Link>
                <Link href="/maritimesimulator">
                  <p className="font-gilroy text-[16px] leading-[24px] font-[500] hover:text-[#E31E24] focus:text-[#E31E24]">
                    Maritime Simulators
                  </p>
                </Link>
              </div>
            )}
          </div>
          <div>
            <Link href="/labatorysolutions">
              <p className="font-gilroy justify-center rounded-md text-[18px] leading-[28px] font-[600] px-4   hover:text-[#E31E24]  focus:text-[#E31E24] ">
              Laboratory Solutions
              </p>
            </Link>
          </div>
          <div>
            <Link href="/specialprojects">
              <p className="font-gilroy justify-center rounded-md text-[18px] leading-[28px] font-[600] px-4   hover:text-[#E31E24]  focus:text-[#E31E24] ">
              Special Projects
              </p>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <p className="font-gilroy justify-center rounded-md text-[18px] leading-[28px] font-[600] px-4   hover:text-[#E31E24]  focus:text-[#E31E24] ">
              About Us
              </p>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <p className="font-gilroy justify-center rounded-md text-[18px] leading-[28px] font-[600] px-4   hover:text-[#E31E24]  focus:text-[#E31E24] ">
              Contact Us
              </p>
            </Link>
          </div>
          
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
