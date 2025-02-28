import React from 'react'
import { TabsComponent } from './tabs'

function Tabcontainer() {
  return (
    <div
      className={`lg:py-[80px] md:py-[70px] py-[50px] flex place-content-center`}>
        <div className='flex w-[85%]  flex-col lg:gap-[30px] gap-[10px] md:gap-[20px]'>
        <h2 className="font-gilroy font-[800] text-[28px] md:text-[30px] lg:text-[48px] lg:leading-[60px] md:leading-[36px] leading-[36px] text-center">Our Trusted Clients</h2>
        <p className="list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px] text-center">References for Technical Training Laboratories</p>
        <TabsComponent/>
        </div>
      </div>
  )
}


export default Tabcontainer
