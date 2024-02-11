import React from 'react'
import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
LocomotiveScroll

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <marquee scrollamount="15" className='text-[8vw] p-5 leading-none font-semibold uppercase'>We are ochi We are ochi We are ochi We are Ochi</marquee>           
        </div>
    </div>
  )
}

export default Marquee