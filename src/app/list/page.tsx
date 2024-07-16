import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import React, { Suspense } from 'react'

const Listpage = async ({ searchParams } : {searchParams: any}) => {
  const wixClient = await wixClientServer();
    const res = await wixClient
    .collections
    .getCollectionBySlug(searchParams || 'all-products')

  return (
    <div className='px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className='bg-pink-50 hidden px-4 sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
          <h1 className='text-4xl font-semibold text-center leading-[48px] text-gray-700'>Grab up to 50% off on<br/> Selected Products</h1>
          <button className='rounded-3xl bg-red-500 py-2 text-white px-4 text-sm w-max'>Buy Now</button>
        </div>
        <div className='relative w-1/3'>
          <Image src={'/woman.png'} alt='product' fill sizes='100%'
          className='object-contain'/>
        </div>
      </div>
      <Filter/>
      <h1 className='mt-12 text-xl font-semibold'>Shoes For You</h1>
      <Suspense fallback={'loading'}>
      <ProductList categoryID={res.collection?._id}/>
      </Suspense>
    </div>
  )
}

export default Listpage
