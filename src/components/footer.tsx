import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#515D6A] items-center justify-center flex flex-col lg:py-[50px] md:py-[30px] py-[30px] gap-[50px]">
      <div className="grid lg:grid-cols-4  lg:px-[150px] md:px-[100px] px-[50px] md:gap-[25px] gap-[20px]">
        <div className="  gap-[20px] flex flex-col md:items-center lg:items-start items-center lg:justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Yontem Logo"
                width={120}
                height={75}
                className="z-50 relative"
              />
            </Link>
          </div>
          <p className="text-[#EEE5E5] font-normal font-gilroy lg:text-[18px] lg:leading-[26px] text-center lg:text-start md:text-[25px] text-[16px]">
            Yontem Teknoloji: Innovating Simulators and Laboratory Solutions
          </p>
          <div className="flex gap-[20px]">
            <FaTwitter size={18} color="white" />
            <FaFacebookSquare size={18} color="white" />
            <FaInstagram size={18} color="white" />
            <FaLinkedin size={18} color="white" />
          </div>
        </div>
        <div className="flex flex-col text-[#EEE5E5] lg:pt-[100px] font-gilroy justify-start lg:items-start items-center">
            <p className="text-[15px] leading-[26px] font-bold pb-[20px]">Company</p>
            <ul className="text-[17px] text-[#ffffff] leading-[40px] font-medium lg:text-start text-center">
                <li><Link href={'/about'}>About Us</Link></li>
                <li><Link href={'/contact'}>Contact Us</Link></li>
                {/* <li>Blogs</li> */}
            </ul>
        </div>
        <div className="flex flex-col text-[#EEE5E5] lg:pt-[100px] font-gilroy justify-start lg:items-start items-center">
            <p className="text-[15px] leading-[26px] font-bold pb-[20px]">Product</p>
            <ul className="text-[17px] text-[#ffffff] leading-[40px] font-medium lg:text-start text-center">
                <li><Link href={'/aviationsimulator'}>Aviation Simulators</Link></li>
                <li><Link href={'/maritimesimulator'}>Maritime Training Simulators</Link></li>
                <li><Link href={'/labatorysolutions'}>Laboratory Solutions</Link></li>
                <li><Link href={'/specialprojects'}>Special Projects </Link></li>
            </ul>
        </div>
        <div className="flex flex-col text-[#EEE5E5] lg:pt-[100px] font-gilroy justify-start lg:items-start items-center">
            <p className="text-[15px] leading-[26px] font-bold pb-[20px]">Legal</p>
            <ul className="text-[17px] text-[#ffffff] leading-[40px] font-medium lg:text-start text-center">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Return Policy</li>
            </ul>
        </div>
      </div>
      <div className="font-gilroy text-[#EEE5E5] text-[15px] leading-[26px] font-[400] text-center">© 2025 Yöntem Teknoloji. All Rights Reserved. Design and Developed by CyberX Studio.</div>
    </div>
  );
}

export default Footer;
