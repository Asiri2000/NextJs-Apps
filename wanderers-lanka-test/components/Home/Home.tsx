"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Packages from './Packages/Packages'
import Destination from './Destination/Destination'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Review'
import Experience from './Experiences/Experience'
import Newsletter from './Newsletter/Newsletter'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

   useEffect(() => {

   const initAOS = async()=>{
    await import ('aos');
    AOS.init({

      duration:700,
      easing:'ease',
      once:true,
      anchorPlacement: "top-bottom"

    })

   }

   initAOS();

   }, [])


  return (
    <div className="overflow-hidden ">

      
        
        <Hero />

        <Packages />

        <Destination />

        <Experience />

        <WhyChoose />

        <Review />

        <Newsletter />
        
        </div>
  )
}

export default Home