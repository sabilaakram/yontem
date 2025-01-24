import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Whoweare() {
  // Dynamic content array
  const content = [
    {
      title: 'Who We Are',
      description:
        'Established in 1997, Yontem Teknoloji is a professional aviation simulator provider offering advanced avionics simulators, professional flight simulators, and disinfection devices. We deliver innovative solutions in flight simulator training and laboratories for various industries.',
      buttonText: 'About Us',
    }
  ];

  return (
    <div className="w-full h-auto bg-[#161C2D] flex flex-col items-center justify-center gap-[30px] lg:py-[80px] md:py-[70px] py-[50px]">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-[20px]">
          <h1 className="text-center font-gilroy text-[#EEE5E5] font-[800] lg:text-6xl md:text-4xl text-3xl">
            {item.title}
          </h1>
          <p className="text-center font-gilroy text-[#EEE5E5] lg:line-clamp-4 w-[80%] font-[400] text-[18px] lg:text-[28px] ">
            {item.description}
          </p>
          <Button asChild className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition">
            <Link href="/about">
            {item.buttonText} <MdArrowOutward size={30} />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Whoweare;
