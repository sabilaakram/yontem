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
          <div className="flex flex-col lg:space-y-2 md:space-y-2 space-y-2">
            <Link href="/">
              <p className="text-[16px] font-[400px] text-white hover:text-[#E31E24] text-center lg:text-left lg:leading-[24px] leading-[20px] lg:line-clamp-2 font-gilroy">
                Adil Mahallesi, Beykoz Cad. Kemerler Sokak No:6/2 Istanbul,
                Türkiye
              </p>
            </Link>
            <Link href="/">
              <p className="text-[16px] font-[400px] text-white hover:text-[#E31E24] lg:text-left text-center lg:leading-[24px] leading-[20px] lg:line-clamp-2 font-gilroy">
                info@yontemteknoloji.com
              </p>
            </Link>
            <Link href="/">
              <p className="text-[16px] font-[400px] text-[white] hover:text-[#E31E24] lg:text-left text-center lg:leading-[24px] leading-[20px] lg:line-clamp-2 font-gilroy">
                +90 216 592 30 00
              </p>
            </Link>
          </div>
          <div className="flex gap-[20px]">
            <a
              href="https://www.facebook.com/profile.php?id=100032740456783"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare size={18} color="white" />
            </a>

            <a
              href="https://www.instagram.com/yontemteknoloji/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} color="white" />
            </a>

            <a
              href="https://www.linkedin.com/company/yontemteknoloji/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} color="white" />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-[#EEE5E5] lg:pt-[100px] font-gilroy justify-start lg:items-start items-center">
          <p className="text-[15px] leading-[26px] font-bold pb-[20px]">
            Company
          </p>
          <ul className="text-[17px] text-[#ffffff] leading-[40px] font-medium lg:text-start text-center">
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            {/* <li>Blogs</li> */}
          </ul>
        </div>
        <div className="flex flex-col text-[#EEE5E5] lg:pt-[100px] font-gilroy justify-start lg:items-start items-center">
          <p className="text-[15px] leading-[26px] font-bold pb-[20px]">
            Product
          </p>
          <ul className="text-[17px] text-[#ffffff] leading-[40px] font-medium lg:text-start text-center">
            <li>
              <Link href={"/aviationtrainingsimulators"}>
                Aviation Training Simulators
              </Link>
            </li>
            <li>
              <Link href={"/aviationmaintenancesimulators"}>
                Aviation Maintenance Simulators
              </Link>
            </li>
            <li>
              <Link href={"/maritime-training-simulators"}>
                Maritime Training Simulators
              </Link>
            </li>
            <li>
              <Link href={"/electric-and-electronics-laboratory-solutions"}>
                Laboratory Solutions
              </Link>
            </li>
            <li>
              <Link href={"/special-projects"}>Special Projects </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-[#EEE5E5] lg:pt-[100px] font-gilroy justify-start lg:items-start items-center">
          <p className="text-[15px] leading-[26px] font-bold pb-[20px]">
            Legal
          </p>
          <ul className="text-[17px] text-[#ffffff] leading-[40px] font-medium lg:text-start text-center">
            {/* <li>Privacy Policy</li> */}
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            </li>
            {/* <li>Return Policy</li> */}
          </ul>
        </div>
      </div>
      <div className="font-gilroy text-[#EEE5E5] text-[15px] leading-[26px] font-[400] text-center">
        © 2025 Yöntem Teknoloji. All Rights Reserved. Design and Developed by{" "}
        <Link
          href="https://www.cyberxstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#EEE5E5] underline"
        >
          CyberX Studio
        </Link>
        .
      </div>{" "}
    </div>
  );
}

export default Footer;
