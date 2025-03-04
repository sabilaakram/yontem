import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Whoweare() {
  // Dynamic content array
  const content = [
    {
      title: 'Who We Are',
      description: [
        { text: 'Established in 1997, Yontem Teknoloji is a leading provider of flight and marine simulation solutions, offering advanced simulators for both ', link: null },
        { text: 'aviation', link: '/aviation-simulators' },
        { text: ' and ', link: null },
        { text: 'maritime training', link: '/maritime-training-simulators' },
        { text: '. We specialize in delivering simulator product solutions that cater to a wide range of industries such as ', link: null },
        { text: 'Aircraft', link: '/aviation-simulators' },
        { text: ' and ', link: null },
        { text: 'maritime simulator', link: '/maritime-training-simulators' },
        { text: '. Our expertise extends to ', link: null },
        { text: 'disinfection devices', link: '/special-projects' },
        { text: ' and ', link: null },
        { text: 'laboratory solutions', link: '/electric-and-electronics-laboratory-solutions' },
        { text: ', ensuring innovative and effective training across various sectors.', link: null },
      ],
      buttonText: 'About Us',
    }
  ];

  return (
    <div className="w-full h-auto bg-[#161C2D] flex flex-col items-center justify-center gap-[30px] lg:py-[80px] md:py-[70px] py-[50px]">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-[20px]">
          <h2 className="text-center font-gilroy text-[#EEE5E5] font-[800] lg:text-6xl md:text-4xl text-3xl">
            {item.title}
          </h2>
          <p className="text-center font-gilroy text-[#EEE5E5] w-[80%] font-[400] text-[18px] lg:text-[28px] ">
            {item.description.map((part, i) => (
              part.link ? (
                <Link key={i} href={part.link} className="text-[#e31e25] hover:text-[#ff676c]">
                  {part.text}
                </Link>
              ) : (
                <span key={i}>{part.text}</span>
              )
            ))}
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
