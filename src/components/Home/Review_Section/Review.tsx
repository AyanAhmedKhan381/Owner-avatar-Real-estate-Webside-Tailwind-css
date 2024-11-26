



import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Review_Slider from './Review_Slider'

const Review = () => {
  return (
    <div className='pt-16 pb-16 bg-[#faf7f6] '>
       <div className='w-[80%] mx-auto'>
          <SectionHeading heading='Our Customer Reviews' subHeading='What our clients say'/>

          <div className='mt-14'>
             {/* Review Slider */}
               <Review_Slider/>

          </div>

       </div>
    </div>
  )
}

export default Review
