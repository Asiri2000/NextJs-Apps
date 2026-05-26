import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div className=" pt-10 pb-10 
    flex items-center justify-center  w-full flex-col">

    <BsEnvelopePaper className="w-16 h-16 mt-20 text-black"  />   

    <h1 className="text-lg sm:text-xl md:text-2xl text-black font-semibold mt-10 tracking-widest">Your Travel Journey Starts Here </h1>

    <p className="mt-3 text-black text-xs sm:text-sm md:text-base">Sign up and we&apos;ll send the best deals to your email</p>

   {/* Subscription input and button */}
  <div
    className="w-full flex flex-col sm:flex-row 
    items-center justify-center gap-3 mt-8 px-4"
  >
    <input
      type="email"
      placeholder="Enter your email address"
      className="px-6 py-3.5 bg-transparent 
      w-full sm:w-[65%] md:w-[50%] lg:w-[35%]
      rounded-lg border border-black
      focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      className="bg-red-600 text-white px-6 py-3.5 
      rounded-lg hover:bg-red-700 transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-red-400
      w-full sm:w-auto"
    >
      Subscribe
    </button>
  </div>
    
    </div>
  )
}

export default Newsletter