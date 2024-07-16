'use client'
import React from 'react'

const Filter = () => {
  return (
    <div className='flex justify-between mt-12'>
        <div className='flex gap-6 flex-wrap'>
            <select name="type" id="" className='py-2 px-4 bg-gray-200/50 rounded-2xl text-xs font-medium'>
                <option>Type</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <input type="text" name='min' placeholder='min price' 
            className='text-xs rounded-2xl w-24 pl-2 ring-1 ring-gray-400' />
            <input type="text" name='max' placeholder='max price' 
            className='text-xs rounded-2xl w-24 pl-2 ring-1 ring-gray-400' />
            <select name="type" id="" className='py-2 px-4 bg-gray-200/50 rounded-2xl text-xs font-medium'>
                <option>Type</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <select name="type" id="" className='py-2 px-4 bg-gray-200/50 rounded-2xl text-xs font-medium'>
                <option>Type</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <select name="type" id="" className='py-2 px-4 bg-gray-200/50 rounded-2xl text-xs font-medium'>
                <option>Type</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <select name="type" id="" className='py-2 px-4 bg-gray-200/50 rounded-2xl text-xs font-medium'>
                <option>Type</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
        </div>
        <div>
            <select name="type" id="" className='py-2 px-4 bg-gray-200/50 rounded-2xl text-xs font-medium'>
                <option>Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newes</option>
                <option value="">Oldest</option>
            </select>
        </div>
    </div>
  )
}

export default Filter