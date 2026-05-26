import React from 'react'

type Props ={

    image:string;
    title:string;
    description:string;
}

const ExperienceCard = ({ image, title, description }: Props) => {
  return (
    <div>
{/* Image card */}
      <div className="h-[300px]">
      <img src={image} alt={title} width={300} height={300} className="w-full h-full object-cover rounded-lg"/>
      </div>
      {/* title */}
      <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200
      cursor-pointer">{title}</h1>
      {/* description */}
      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  )
}

export default ExperienceCard