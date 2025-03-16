import { Button } from '@/components/ui/button';
import { getHomepageContent } from '@/data/loaders';
import { HomePage } from '@/lib/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import ParseRichText from '@/components/richtextparser'; // Block Content Renderer

function Whoweare() {
  const [HomePageData, setHomePageData] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomepageContent();
        setHomePageData(data);
      } catch (err) {
        setError('Failed to fetch About Us data');
        console.error('Error fetching About Us data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!HomePageData) return <div></div>;

  return (
    <div className="w-full h-auto bg-[#161C2D] flex flex-col items-center justify-center gap-[30px] lg:py-[80px] md:py-[70px] py-[50px]">
      <div className="flex flex-col items-center gap-[20px]">
        <h2 className="text-center font-gilroy text-[#EEE5E5] font-[800] lg:text-6xl md:text-4xl text-3xl">
          Who We Are
        </h2>

        {/* ✅ Render Block Content Correctly */}
        <div className="text-center font-gilroy text-[#EEE5E5] w-[80%] text-[18px] lg:text-[28px]">
          <ParseRichText content={HomePageData.Whoweare} />
        </div>

        <Button asChild className="px-6 py-3 gap-[10px] bg-[#E31E24] text-[#EEE5E5] rounded-[8px] font-gilroy font-medium text-lg hover:bg-[#515D6A] transition">
          <Link href="/about">
            About Us <MdArrowOutward size={30} />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Whoweare;
