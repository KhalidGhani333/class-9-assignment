
import React from "react"
import Section from "./section";
import { FaArrowRight } from 'react-icons/fa'
import {Inter} from "next/font/google"
import Image from "next/image";
import image from '../../../public/Work Together Image.png'


const inter = Inter({
  weight:["500"],
  subsets:["latin"],
});
const Project = () => {
  return (
    <>
    <div>
          {/* Achived by Props */}
      <Section
      mainContainerWidth = "w-[1920px]"
      mainContainerHeight = "h-[700px]"
      paddingX="px-[220px]"
      paddingY="py-[140px]"
      backgroundColor="bg-[#FFFFFF]"
      containerWidth="w-[632px]"
      containerHeight="h-[411px]"
      title="Project Management"
      description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
      buttonText="Get Started "
      innerContainerWidth="w-[824px]"
      innerContainerHight="h-[549px]"
      hcolor="text-[#212529]"
      pcolor="text-[#212529]"
    />
    
      <div className='w-[1920px] h-[900px] 1588  py-[140px] px-[220px] flex flex-col gap-[100px]'>
       {/* <div className={`w-[1480px] h-[547px] flex items-center ${inter.className} gap-[60px] `}>
       <div className='w-[672px] h-[411px]  gap-[60px] '>
        <div className="w-[700px] h-[288px] gap-6">
          <h1 className='w-[672px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-left text-[#212529]' >Project Management</h1>
          <p className='w-[672px] pt-6 h-[90px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-[#212529]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
           </div>
       <div>
       <button className='w-[210px] h-[63px] py-[20px] px-[40px] gap-[10px] mt-[60px] rounded-md bg-[#4F9CF9]  '>
          <p className='flex items-center gap-2 text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white'>Get Started <FaArrowRight /></p></button>
       </div>
       </div>
       
        <div className='w-[824px] h-[549px] gap-1 bg-[#C4DEFD]'></div>
          </div>   */}


        <div className={`w-[1480px] h-[661px] flex items-center ${inter.className} flex flex-row-reverse gap-[100px]`}>
       <div className='w-[670px] h-[294px] flex flex-col gap-[60px] '>
         <div className="w-[670px] h-[171px] flex flex-col gap-6">
          <h1 className='w-[670px] h-[87px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-left text-[#212529]' >Work together</h1>
          <p className='w-[690px] pt-6 h-[60px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-[#212529]'>With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.</p>
           </div>
       <div>
       <button className='w-[196px] h-[63px] py-[20px] px-[40px] flex gap-[10px]  rounded-md bg-[#4F9CF9]  '>
          <p className='flex items-center gap-2 text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white'>Try it now <FaArrowRight /></p></button>
       </div>
       </div>
        <div className='w-[710px] h-[661px] gap-1 '>
            <Image src={image} alt={"picture"}  />
        </div>
          </div>

          </div>  
      </div>  

      </>
  )
}

export default Project
