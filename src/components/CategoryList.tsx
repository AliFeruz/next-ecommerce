import { wixClientServer } from '@/lib/wixClientServer';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = async () => {
    const wixClient = await wixClientServer();
    const cat = await wixClient
    .collections
    .queryCollections()
    .find()

  return (
    <div className='px-4 overflow-x-scroll hide-scrollbar'>
      <div className='flex gap-4 md:gap-8'>
        {cat.items.map((item, index) => (
            <Link  href={`/list?cat=${item.slug}`} className='flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:w-1/6' key={index}>
            <div className='relative bg-slate-200/50 w-full h-96'>
                <Image src={item.media?.mainMedia?.image?.url || '/product.png'} 
                alt='image' fill sizes='20vw'
                className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wider'>{item.name}</h1>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
