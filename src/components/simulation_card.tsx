import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';


interface Simulation_cardProps {
    backgroundImage: string;
    items: {
      heading: string;
      text: string;
      button_text: string;
      link: string
    };
  }
const Simulation_card: React.FC<Simulation_cardProps> = ({ backgroundImage, items }) => {
  return (
    <div className="bg-scroll place-content-center lg:h-[600px] md:h-[400px] h-[300px] border rounded-[8px]"
    style={{
      backgroundImage: `linear-gradient(to top, rgba(22, 28, 45, 1), rgba(22, 28, 45, 0)), url('${backgroundImage}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <div className='md:pl-[50px] md:pr-[20px] md:py-[50px] pl-[20px] pr-[10px] py-[20px] gap-[15px] flex flex-col md:gap-[20px]'>
            <h2 className='font-gilroy text-[#EEE5E5] md:text-[36px] md:leading-[40px] text-[24px] leading-[30px] font-bold'>{items.heading}</h2>
            <p className='font-gilroy text-[#EEE5E5] md:text-[16px] md:leading-[24px] text-[14px] leading-[20px]'>{items.text}</p>
            <Button asChild
              className="md:px-6 md:py-3 px-[15px] py-[6px] gap-[10px] bg-[#E31E24] md:text-[18px] text-[16px] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium hover:bg-[#515D6A] transition flex items-center flex-row"
            >
              <Link href={items.link}>
                {items.button_text} <MdArrowOutward />
              </Link>
            </Button>
        </div>
      
    </div>
  )
}

export default Simulation_card
