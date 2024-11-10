
import React from 'react'
import logo from '../../../public/Logo.png'
import Image from 'next/image'

import {DM_Sans} from "next/font/google";
import {Inter} from "next/font/google"

const Dmsans = DM_Sans({
weight: ['400', '700'],
style: 'normal',
subsets:['latin'],
display: 'swap'
})
const inter = Inter({
  weight:["500"],
  subsets:["latin"],
});


const Navbar = () => {
  return (
    <>
    
    <div className='w-[1920px]  h-[92px] py-4 px-[220px] gap-0  bg-[#043873] flex justify-between items-center'>
        <Image src={logo} alt='logo' className='w-[191px] h-[34px] justify-between items-center'/>
        <div className='flex w-[737.5px] h-[60px] gap-[60px] justify-between items-center'> 
            <div className={`flex list-none ${Dmsans.className} text-white w-[549px] h-[23px] gap-[32px] text-lg font-medium leading-[23px] text-left items-center`}>
            <li className='hover:text-[#FFE492] cursor-pointer hover:underline'>Products</li>
            <li className='hover:text-[#FFE492] cursor-pointer hover:underline'>Solutions</li>
            <li className='hover:text-[#FFE492] cursor-pointer hover:underline'>Resources</li>
            <li className='hover:text-[#FFE492] cursor-pointer hover:underline'>Pricing</li>
            </div>
            <button className='w-[126px] h-[60px] gap-6 rounded-lg py-4 px-10 bg-[#FFE492] hover:bg-[#ffd865]'>
                <p className={`font-medium text-[18px] ${inter.className} gap-[10px] leading-[23px] tracking-[-2%] text-[#043873]`}>Login</p></button>
            </div>
    </div>
    </>
  )
}

export default Navbar


