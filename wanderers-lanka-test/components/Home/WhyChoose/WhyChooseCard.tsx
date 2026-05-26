import React from 'react'

type Props ={

    image:string;
    title:string;
};


const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div>

        <img src={image} width={70} height={70} alt="image" className="mx-auto" />
        

    </div>
  )
}

export default WhyChooseCard