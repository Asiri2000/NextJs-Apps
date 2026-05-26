import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (

    <div className="pt-16 pb-16">
        {/* Section HEADING */}

        <SectionHeading heading="Travel Experiences" />

        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">

              <div data-aos="fade-left" data-aos-anchor-placement="top-center" >
                
                <ExperienceCard image="/images/n1.jpg" 
                   title="Safari Tours"
                   description="Experience the thrill of a safari tour and witness the beauty of wildlife in their natural habitat."
                />
                
                 </div>

                    <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
                
                <ExperienceCard image="/images/n2.jpg" 
                   title="Whale Watching"
                   description="Embark on a whale watching tour and witness the majestic creatures in their natural habitat."
                />
                
                 </div>

                    <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
                
                <ExperienceCard image="/images/n3.jpg" 
                   title="Scenic Train Journeys"
                   description="Experience the thrill of a scenic train journey and witness the beauty of the landscape."
                />
                
                 </div>

                    <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="450">
                
                <ExperienceCard image="/images/n4.jpg" 
                   title="Ayurveda Retreats"
                   description="Experience the thrill of an Ayurveda retreat and rejuvenate your body and mind."
                />
                
                 </div>


        </div>



    </div>
  )
}

export default Experience