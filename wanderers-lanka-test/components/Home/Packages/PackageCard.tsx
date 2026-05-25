import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  packagelist: {
    id: number;
    image: string;
    name: string;
    Description: string;
  };
};

const PackageCard = ({ packagelist }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Add to fav button  */}
        <div
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full 
         text-black flex items-center justify-center flex-col"
        >
          <FaHeart className="w-3 h-3" />
        </div>

        {/* Overlay  */}

        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

        {/* Image  */}

        <img
          src={packagelist.image}
          alt={packagelist.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div>
         <h1 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all
         duration-200">{packagelist.name}</h1>
         <p className="text-sm text-gray-600 mt-3 font-medium md-6">{packagelist.Description}</p>

      </div>
    </div>
  );
};

export default PackageCard;
