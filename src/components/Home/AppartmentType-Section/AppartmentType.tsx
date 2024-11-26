


import AppartmentTypeCard from '@/components/Helper/AppartmentTypeCard'
import SectionHeading from '@/components/Helper/SectionHeading'
import { appartmentTypeData } from '@/data/data'
import React from 'react'

const AppartmentType = () => {
  return (
    <div className='pt-16 pb-16 '>
      
      <div className='w-[80%] mx-auto '>
         <SectionHeading heading='Appartment Types' subHeading="Prime properties, secure investments."
         />
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            mt-10 md:mt-20 gap-8 items-center'>
            {appartmentTypeData.map((item)=> {
              return <div key={item.id}>
                  <AppartmentTypeCard data={item}/>
              </div>
            })}
         </div>
      </div>

    </div>
  )
}

export default AppartmentType
