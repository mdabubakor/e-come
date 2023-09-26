
'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Work from '../image/work.png'
import Code from '../image/code.jpg'
import Laptop from '../image/laptop.jpg'
import Image from 'next/image';

const Banner = () => {
  return (
    <div>
       <Carousel showThumbs={false} autoPlay interval={2000} infiniteLoop showStatus={false}>
                <div>
                   <Image priority src={Work} alt='work' className='h-screen'/>
                    
                </div>
                <div>
                <Image loading='lazy' src={Code} alt='code' className='h-screen'/>
                    
                </div>
                <div>
                <Image loading='lazy' src={Laptop} alt='laptop' className='h-screen'/>
                  
                </div>
            </Carousel>
    </div>
  )
}

export default Banner
