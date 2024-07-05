'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const[open, SetOpen] = useState(false)
  return (
    <div>
        <Image src={'/menu.png'} alt='humburger menu' width={28} height={28}
        className='cursor-pointer' onClick={()=> SetOpen((prev) => !prev)}/>
        {open && (
            <div className='absolute bg-slate-950 left-0 text-blue-50 top-20 min-h-screen w-full
            flex flex-col items-center justify-center space-y-4 text-2xl z-10'>
                <Link href={'/'}>HomePage</Link>
                <Link href={'/'}>Shop</Link>
                <Link href={'/'}>Deals</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>Logout</Link>
                <Link href={'/'}>Cart(1)</Link>
            </div>
        )}
    </div>
  )
}

export default Menu