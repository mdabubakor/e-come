'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../image/Ab.png'
import {BiSearch} from 'react-icons/bi'
import {FaRegUserCircle} from 'react-icons/fa'
import {BsCart4} from 'react-icons/bs'


const Hero = () => {
  return (
   <div className=' w-full h-20 border border-b-[1px] outline-gray-800 border-b-gray-900 gap-3 bg-orange-500'>
    <div className='max-w-screen-xl mx-auto h-full flex items-center  gap-3 '>
          {/* Logo */}
     <Image src={Logo} className='w-20 h-12  ' alt='logo '/>

      {/* Search bar */}
     <div className='flex-1 relative  rounded-lg items-center flex justify-center '>
      <BiSearch className=' absolute right-4 text-2xl cursor-pointer opacity-50 ' />
        <input type="text" className=' w-full rounded-lg px-3 py-2 border  focus-visible:outline-red-500 duration-200' placeholder='Search your items...' />
        
     </div>
     
    
     <div className=' flex items-center gap-2 text-white'>
      <span className=' opacity-60'>
        <FaRegUserCircle className='text-4xl' />
      </span>
      <div className='text-xs'>
        <p className='opacity-70'>Hello, Sign in</p>
        <p className='font-bold '>Your Account</p>
      </div>
     </div>

       {/* Card */}
       <div className='text-3xl relative text-white'>
        <BsCart4/>
        <span className='  absolute text-xs right-0 bottom-5 bg-red-400  rounded-full  w-4 h-4 inline-flex items-center justify-center'>
          0
        </span>
       </div>
    </div>
   </div>
  )
}

export default Hero
