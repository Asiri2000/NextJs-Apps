"use client";

import React from "react";
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[90%] mx-auto">
        {/* Logo */}

        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Wanderers Lanka Travels
          </h1>
        </div>

        {/* Nav Links */}

        <div className="hidden lg:flex items-center space-x-5">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className="relative text-white text-base font-medium w-fit block 
                                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                after:h-[3px] after:w-full after:bg-yellow-300 
                                after:scale-x-0 hover:after:scale-x-100 
                                after:origin-right hover:after:origin-left 
                                after:transition-transform after:duration-300"
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}

        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="relative z-10 md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white 
          hover:bg-gray-200 transition-all duration-200 rounded-lg"
          >
            Book Now
          </button>
            {/*  Burger Menu  */}
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden"  />

        </div>
      </div>
    </div>
  );
};

export default Nav;
