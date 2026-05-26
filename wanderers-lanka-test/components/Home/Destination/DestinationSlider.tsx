"use client";
import { destinationData } from "@/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationData.map((data) => {
        return (
          <div key={data.id} className="m-3">
            {/* Image Div */}
            <div className="relative h-[500px]">
              {/* {Overlay} */}
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg">
                {" "}
              </div>
              {/* Image */}
              <img
                src={data.image}
                alt={data.country}
                width={400}
                height={500}
                className="h-full w-full object-cover rounded-lg 
          transition-transform duration-700 ease-in-out 
          group-hover:scale-110"
              />

              {/* text content */}
            </div>

            <h1 className="text-lg font-semibold mt-4 text-blue-600">
              {data.country}
            </h1>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestinationSlider;
