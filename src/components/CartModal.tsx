'use client'
import Image from 'next/image'
import React from 'react'

const CartModal = () => {


    const cartItems = true
  return (
    <div className='absolute right-0 top-12 bg-blue-50 text-sm
    rounded-md p-4 z-10 shadow-lg shadow-blue-200 flex flex-col gap-6'>
    {!cartItems ? (
        <div>Cart is empty</div>
    ) : (
        <div className='flex gap-4'>
            <Image src={'https://www.pexels.com/photo/flowers-in-vases-on-table-19486511/'} 
            alt='item image' width={72} height={96}
            className='object-cover rounded-md'/>
            <div>
               <div>
                <h3>Product Name</h3>
                <div>$49</div>
               </div> 
               <div>
                available
               </div>
            </div>
        </div>
    )}
    </div>
  )
}

export default CartModal