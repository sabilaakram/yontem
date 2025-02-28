import Link from "next/link";
import React from "react";
import { ContactForm } from "./contact-form";
import Image from "next/image";

function Contact_Section() {
  return (
    <div className="flex lg:flex-col md:flex-col flex-col w-full h-auto lg:bg-[#161C2D] md:bg-[#161C2D] lg:py-[100px] md:py-[80px] py-[50px] px-[20px] bg-white items-center justify-center">
      <div className="flex flex-col lg:text-white md:text-white text-[#161C2D] items-center  pb-[30px]  lg:pb-[50px] gap-[20px] w-[80%] ">
        <h1 className="lg:text-[48px] text-[36px] font-bold text-center lg:leading-[60px] leading-[40px] font-gilroy">
          Get In Touch
        </h1>
        <p className="text-[16px] font-[400px] text-center lg:leading-[24px] leading-[20px] lg:line-clamp-2 font-gilroy lg:w-[60%]">
        Let create smarter solutions together — reach out to Yöntem Teknoloji for your specialized needs
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:w-[80%] md:w-[90%] md: gap-[20px] ">
        <div><ContactForm/> </div>
        <div className="flex lg:flex-col space-y-4 md:flex-col flex-col-reverse">
          <div className="flex flex-col lg:space-y-4 md:space-y-4 space-y-2">
          <h1 className="text-[32px] font-bold text-left lg:text-white md:text-white text-[#161C2D] leading-[40px]  font-gilroy">
            Main Office
          </h1>
          <Link href="/">
            <p className="text-[16px] font-[400px] lg:text-white md:text-white text-[#161C2D] hover:text-[#E31E24] text-left lg:leading-[24px] leading-[20px] lg:line-clamp-2 font-gilroy">
            Adil Mahallesi, Beykoz Cad. Kemerler Sokak No:6/2 Istanbul, Türkiye
            </p>
          </Link>
          <Link href="/">
            <p className="text-[16px] font-[400px] lg:text-white md:text-white text-[#161C2D] hover:text-[#E31E24] text-left lg:leading-[24px] leading-[20px] lg:line-clamp-2 font-gilroy">
              info@yontemteknoloji.com
            </p>
          </Link>
          <Link href="/">
            <p className="text-[16px] font-[400px] lg:text-white md:text-white text-[#161C2D] hover:text-[#E31E24] text-left lg:leading-[24px] leading-[20px] lg:line-clamp-2 font-gilroy">
              +90 216 592 30 00
            </p>
          </Link>
          </div>
          <div className="w-full h-full ">
          <Image src="/ATS.png" alt=""  className="w-full h-full border border-none rounded-[8px] object-cover"  height={550} width={550} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact_Section;
