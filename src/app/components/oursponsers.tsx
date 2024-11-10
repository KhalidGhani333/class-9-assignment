import React from 'react'
import {Inter} from "next/font/google"
import Image from 'next/image';
import apple from "../../../public/Apple.png"
import microsoft from "../../../public/microsoft 1.png"
import slack from "../../../public/Slack_Technologies_Logo 1.png"
import google from "../../../public/Group 246.png"



const inter = Inter({
  weight:["500"],
  subsets:["latin"],
});

const Oursponsers = () => {
  return (
   <>
   <div className='w-[1920px] h-[538px] py-[140px] px-[220px] flex flex-col gap-[100px]'>
    <div className='w-[1482px] h-[87px] '>
        <h1 className={`${inter} font-bold text-7xl leading-[87.14px] tracking-[-2%] text-center text-[#212529]`}>Our sponsors</h1></div>
        <div className='w-[1482px] h-[71px] flex justify-evenly list-none items-center'>
            <li><Image src={apple} alt="apple logo" /></li>
            <li><Image src={microsoft} alt="microsoft logo" /></li>
            <li><Image src={slack} alt="slack logo" /></li>
            <li><Image src={google} alt="google logo" /></li>
            
        </div>
    

   </div>
   
   
   </>
  )
}

export default Oursponsers
