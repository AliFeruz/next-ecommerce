import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href={'/slug'} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative h-80 w-full'>
        <Image src={'https://images.pexels.com/photos/14863163/pexels-photo-14863163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src={'https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-gray-500 text-sm'>My description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-red-500
        py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
        </Link>
        <Link href={''} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative h-80 w-full'>
        <Image src={'https://images.pexels.com/photos/14863163/pexels-photo-14863163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src={'https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-gray-500 text-sm'>My description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-red-500
        py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
        </Link>
        <Link href={''} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative h-80 w-full'>
        <Image src={'https://images.pexels.com/photos/14863163/pexels-photo-14863163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src={'https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-gray-500 text-sm'>My description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-red-500
        py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
        </Link>
        <Link href={''} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative h-80 w-full'>
        <Image src={'https://images.pexels.com/photos/14863163/pexels-photo-14863163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
        <Image src={'https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} 
        alt='' fill sizes='25vw'
        className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-gray-500 text-sm'>My description</div>
        <button className='rounded-2xl w-max ring-1 ring-red-500 text-red-500
        py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
        </Link>
    </div>
  )
}

export default ProductList