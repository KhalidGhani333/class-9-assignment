
import React from 'react'
import Section from './section'
import { FaArrowRight } from 'react-icons/fa'

const Demo = () => {
  return (
    <div>
      <Section
  title="Collaborate Seamlessly"
  description="Our tools help your team stay connected and productive."
  buttonText="Learn More"
  buttonIcon={FaArrowRight}
  backgroundColor="#123456"
  containerPadding="py-20 px-10"
  containerMargin="mt-10"
  buttonColor="#FF6347"
  buttonHoverColor="#FF4500"
  contentWidth="w-full"
  image={<img src="/path/to/image.jpg" alt="Team collaboration" />}
/>


    </div>
  )
}

export default Demo
