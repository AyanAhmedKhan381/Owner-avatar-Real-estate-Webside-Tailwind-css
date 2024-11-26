






import SectionHeading from '@/components/Helper/SectionHeading'
import CitySlider from '@/components/Home/CityProperties-Section/CitySlider'
import PropertiesCard from '@/components/Home/Discover-Properties-Section/PropertiesCard'
import { properties } from '@/data/data'
import React from 'react'


const Properties = () => {
  return (
    <div className='pt-16 pb-16 bg-black '>
       <div className='w-[80%] mx-auto pt-20'>
           <SectionHeading heading='Discover Our Properties' subHeading="Explore Our Stunning Property Listings!"
           className='text-white/90'/>

           <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
              {
                properties.map((item)=> {
                    return <div key={item.id}>
                          <PropertiesCard data={item}/>
                    </div>
                })
              }
           </div>
       </div>

       <div className='pt-16 pb-16'>

       <div className='w-[80%] mx-auto mt-20'>
        <SectionHeading heading='Explor City Properties' subHeading='Find, Invest, Live, Grow, Thrive'
        className='text-white/90'/>
          <div className='mt-10 md:mt-16 '> 
            {/* Slider */}
             <CitySlider/>
          </div>
       </div>

    </div>
    </div>
    
  )
}

export default Properties
