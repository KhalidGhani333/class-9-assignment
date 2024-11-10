import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {Inter} from "next/font/google"


const inter = Inter({
  weight:["500"],
  subsets:["latin"],
});
const Ourwork = () => {
  return (
    <>
      <div className='w-[1920px] h-[574px] py-[140px] px-[220px]  bg-[#043873]'>
       <div className='w-[1481px] h-[294px] gap-[60px] flex flex-col items-center '>
        <div className={`w-[1064px] h-[171px] flex flex-col  gap-6 ${inter}`} >
         <h1 className='w-[1064px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-white'>Your work, everywhere you are </h1>
         <p className='w-[1064px] h-[60px] font-normal text-lg leading-[30px] tracking-[-2%] text-center text-white'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        </div>
        <button className='w-[200px] h-[63px] rounded-lg py-5 px-10 flex gap-[10px] bg-[#4F9CF9]'>
            <p className='flex items-center gap-2 font-medium text-lg leading-[23px] tracking-[-2%] text-left text-white'>Try Taskey<FaArrowRight/></p></button>

       </div>
          </div>    
  
      </>
  )
}

export default Ourwork
