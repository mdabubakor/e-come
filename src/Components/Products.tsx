'use client'
import Image from 'next/image';
import React from 'react'

const Products = ({product}) => {
    console.log(product); 
    
  return (
    <div className='mt-10'>
          <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-4'>
      {
        product.map((item)=>(
            <div className='rounded-lg '>
                <Image src={item.image} width={500} height={500} className='w-full h-96 object-cover  '/>
                <p className='ms-2'>{item?.title}</p>
                <p className='ms-2'>${item?.price}</p>
                <p className='ms-2'>{item?.category}</p>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default Products
