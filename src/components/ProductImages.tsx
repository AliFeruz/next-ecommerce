'use client'
import Image from 'next/image'
import React, { useState } from 'react'

// const images = [
//     {
//         id: 1,
//         url: 'https://images.pexels.com/photos/26898422/pexels-photo-26898422/free-photo-of-a-spiral-staircase-with-a-metal-railing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
//     },
//     {
//         id: 2,
//         url: 'https://images.pexels.com/photos/26889959/pexels-photo-26889959/free-photo-of-a-park-bench-is-sitting-in-the-middle-of-a-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
//     },
//     {
//         id: 3,
//         url: 'https://images.pexels.com/photos/9116768/pexels-photo-9116768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
//     },
//     {
//         id: 1,
//         url: 'https://images.pexels.com/photos/14108380/pexels-photo-14108380.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
//     },
// ]

const ProductImages = ({images} : {images : any }) => {
    const [index, setIndex] = useState(0)
  return (
    <div>
      <div className='h-[500px] relative'>
        <Image src={images[index].image?.url}
        alt='product image'
        fill
        sizes='50vw'
        className='object-cover rounded-md'/>
      </div>
      <div className='flex gap-4 mt-8'>
        {images.map((item:any, index: number) => (
            <div className='relative w-1/4 h-32 cursor-pointer' key={index}
            onClick={() => setIndex(index)}> 
            <Image src={item.image.url}
            alt='product image'
            fill
            sizes='50vw'
            className='object-cover rounded-md'/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
