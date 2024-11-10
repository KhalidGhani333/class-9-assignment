

import React from 'react';
import { Inter } from 'next/font/google';
import { IconType } from 'react-icons';

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

type SectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: IconType;
  backgroundColor?: string;
  containerPadding?: string;
  containerMargin?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  contentWidth?: string;
  image?: React.ReactNode;
};

const Section = ({
  title,
  description,
  buttonText,
  buttonIcon: ButtonIcon,
  backgroundColor = '#043873',
  containerPadding = 'py-[140px] px-[220px]',
  containerMargin = '',
  buttonColor = '#4F9CF9',
  buttonHoverColor = '#4D9CFC',
  contentWidth = 'w-[656px]',
  image,
}: SectionProps) => {
  return (
    <div
      className={`w-screen h-[829px] flex items-center ${containerPadding} ${containerMargin}`}
      style={{ backgroundColor }}
    >
      <div className={`${contentWidth} flex flex-col gap-[160px] ${inter.className}`}>
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-[64px] font-bold leading-[77.45px] tracking-[-2%] text-left text-white">
            {title}
          </h2>
          <p className="pt-6 text-lg font-normal leading-[30px] tracking-[-2%] text-left text-white">
            {description}
          </p>
        </div>
        <button
          className="w-[230px] h-[63px] flex items-center justify-center gap-2 rounded-lg text-lg font-medium leading-[23px] tracking-[-2%] text-white"
          style={{ backgroundColor: buttonColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonColor)}
        >
          {buttonText} {ButtonIcon && <ButtonIcon />}
        </button>
      </div>
      <div className="w-[824px] h-[549px] bg-[#C4DEFD]">
        {image}
      </div>
    </div>
  );
};

export default Section;
