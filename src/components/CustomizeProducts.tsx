import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h4 className='font-medium'>Choose a color</h4>
        <ul className='flex items-center gap-3'>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer
            relative bg-red-600 flex items-center justify-center'>
                <div className='absolute w-10 h-10 rounded-full ring-2 ring-offset-blue-300'/>
            </li>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer
            relative bg-blue-600 flex items-center justify-center'>
            </li>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed
            relative bg-green-600 flex items-center justify-center'>
                <div className='absolute w-10 h-[2px] rotate-45 bg-red-500'/>
            </li>
        </ul>
        <h4 className='font-medium'>Choose a size</h4>
        <ul className='flex items-center gap-3'>
            <li className='ring-1 ring-red-500 text-red-600 rounded-md py-1 px-4 text-sm cursor-pointer'>
                Small
            </li>
            <li className='ring-1 ring-red-500 text-white bg-red-500 rounded-md py-1 px-4 text-sm cursor-pointer'>
                Medium
            </li>
            <li className='ring-1 ring-red-500 text-red-600 rounded-md py-1 px-4 text-sm cursor-not-allowed bg-pink-200'>
                Large
            </li>
        </ul>
    </div>
  )
}

export default CustomizeProducts