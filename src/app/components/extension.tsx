
import React from "react"
import Section from "./section";
import { FaArrowRight } from 'react-icons/fa'
import {Inter} from "next/font/google"


const inter = Inter({
  weight:["500"],
  subsets:["latin"],
});


const Extension = () => {
  return (
    <>
      {/* <div className='w-[1920px]  h-[759px] py-[140px] px-[220px] flex items-center gap-[98px] bg-[#043873]'>
       <div className={`w-[697px] h-[294px] ${inter.className} flex flex-col gap-[60px] `}>

       <div className='w-[697px] h-[171px] flex flex-col gap-[24px] '>
          <h2 className='w-[697px] h-[187px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-left text-white' >Use as Extension</h2>
          <p className='w-[697px] pt-6 h-[60px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-white'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
       </div>

       <div>
       <button className='w-[171px] h-[63px] py-[20px] px-[40px] gap-[10px]  rounded-lg bg-[#4F9CF9] hover:bg-[#4F9CF9] '>
          <p className='flex items-center text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white'>Let’s Go <FaArrowRight /></p></button>
       </div>

       </div>

        <div className='w-[686px] h-[497px] gap-1 bg-[#C4DEFD]'></div>
          </div>    
   */}
        
         {/* Achieved by Props */}
          
         <Section
      mainContainerWidth = "w-[1920px]"
      mainContainerHeight = "h-[759px]"
      paddingX="px-[220px]"
      paddingY="py-[140px]"
      backgroundColor="bg-[#043873]"
      containerWidth="w-[697px]"
      containerHeight="h-[380px]"
      title="Use as Extension"
      description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
      buttonText="Let&apos;s Go "
      innerContainerWidth="w-[686px]"
      innerContainerHight="h-[497px]"
      hcolor="text-white"
      pcolor= "text-white"
    />

      </>
  )
}

export default Extension
