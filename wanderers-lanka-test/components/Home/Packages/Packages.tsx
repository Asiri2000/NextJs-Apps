import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { PackagesData } from '@/data/data'
import PackageCard from './PackageCard'

const Packages = () => {
  return (
    <div className="pt-20 pd-20">
        
        {/* Section Heading */}

        <SectionHeading heading="Popular Sri Lanka Packages" />

        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">

          { /*  Package Card  */ }

          {PackagesData.map((data)=>{

            return(
                <div key={data.id}>
                    <PackageCard packagelist={data} />
                </div>
            );
          })}




        </div>

        
        </div>
  )
}

export default Packages