'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {

    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if(name){
            router.push(`/list?name=${name}`)
        }
    }

  return (
    <form className='flex items-center justify-center bg-gray-100 rounded-md gap-4
    p-2 flex-1' onSubmit={handleSearch}>
        <input type="text" placeholder='Search' name='name'
        className='flex-1 rounded-md bg-transparent outline-none'/>
        <button className='cursor-pointer' type='submit'>
            <Image src={'/search.png'} alt='search' width={16} height={16}/>
        </button>
    </form>
  )
}

export default SearchBar