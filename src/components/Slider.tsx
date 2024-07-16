'use client'

import { slides } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


const Slider = () => {
    const [current, setCurrent] = useState(0)

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    //   }, 3000)

    //   return () => clearInterval(interval)
    // }, [])
    
  return (
    <div className="h-[calc(100vh-80px)] hide-scrollbar overflow-hidden relative">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
      style={{transform: `translateX(-${current * 100}vw)`}}>
        {slides.map((item, index) => (
            <div key={index} className={`${item.bg} w-screen h-full flex gap-16 flex-col xl:flex-row`}>
                <div className="xl:w-1/2 h-1/2 xl:h-full flex flex-col items-center justify-center gap-8">
                    <h2 className="text-xl">{item.description}</h2>
                    <h1 className="text-5xl  text-center lg:text-6xl 2xl:text-8xl font-semibold">{item.title}</h1>
                    <Link href={item.url} className="rounded-md bg-black text-white py-3 px-4">
                        Shop Now
                    </Link>
                </div>
                <div className="relative xl:w-1/2 h-1/2 xl:h-full">
                    <Image src={item.img} alt="product image" fill sizes="100%"
                    className="object-cover"/>
                </div>
            </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-5 flex gap-4">
      {slides.map((item, index) => (
        <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer
            flex items-center justify-center ${current === index ? "scale-150" : ''}`} 
            key={index}
            onClick={() => setCurrent(index)}>
                {current === index && (
                    <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                )}
            </div>
      ))}
      </div>
    </div>
  )
}

export default Slider
