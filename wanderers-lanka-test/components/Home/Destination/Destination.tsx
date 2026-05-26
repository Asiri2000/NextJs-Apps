import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';





const Destination = () => {
  return (
    <div className="pt-20 pb-20">

        {/* Section Heading  */ }

    <SectionHeading heading="Exploring Popular Destinations in Sri Lanka" />

    { /* Section Content  */ }

    <div className="mt-14 w-[80%] mx-auto">

       {/* Slider */}

       <DestinationSlider />

    </div>


    </div>
  )
}

export default Destination