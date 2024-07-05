'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const router = useRouter()

    const isLoggedin = true;
    const handleProfile = () => {
        if(!isLoggedin){
            router.push('/login')
        }
        setIsProfileOpen((prev) => !prev);
    }


  return (
    <div className='flex gap-4 items-center xl:gap-6 relative'>
      <Image src={'/profile.png'} alt='profile' width={22} height={22}
      className='cursor-pointer' onClick={handleProfile}/>
      {isProfileOpen && (
        <div className='absolute left-0 top-12 bg-blue-50 text-sm
        rounded-md p-4 z-10 shadow-lg shadow-blue-200'>
            <Link href={'/'}>Profile</Link>
            <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}
      <Image src={'/notification.png'} alt='profile' width={22} height={22}
      className='cursor-pointer'/>
      <div className='cursor-pointer'>
      <Image src={'/cart.png'} alt='profile' width={22} height={22}
      className='cursor-pointer' onClick={() => setIsCartOpen((prev) => !prev)}/>
      <div className='absolute -top-4 -right-4 w-6 h-6 rounded-full
      bg-red-500 flex items-center justify-center text-white text-sm'>2</div>
      </div>
      {isCartOpen && (
        <div className='relative'>
            <CartModal/>
        </div>
      )}
    </div>
  )
}

export default NavIcons
