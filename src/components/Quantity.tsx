'use client'
import React, { useState } from 'react'

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const stock = 4;

    const handleQunatity = (type: 'i' | 'd') => {
        if(type === 'd' && quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
        if(type === 'i' && quantity < stock) {
            setQuantity((prev) => prev + 1)
        }
    }
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className='flex items-center gap-4'>
        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl"
            onClick={() => handleQunatity('d')}
            >-</button>
            {quantity}
            <button className="cursor-pointer text-xl"
            onClick={() => handleQunatity('i')}
            >+</button>
        </div>
        <div className="text-xs">
            Only <span className='text-red-500'>{stock} items</span> left!<br/> {"Don't"} miss it
        </div>
        </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-red-500 py-2 px-4 
      text-red-500 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed
      disabled:bg-pink-200 disabled:text-white disabled:ring-0">
        Add to Cart
      </button>
      </div>
    </div>
  )
}

export default Quantity
