
import Image from 'next/image';
import { FaQuoteRight, FaStar } from 'react-icons/fa'


interface Props {
    review: {
        id: number;
        name: string;
        profession: string;
        userImage: string;
        review: string;
    }
}


const Review_Card = ({review}:Props) => {
  return (
    <div className='bg-white rounded-lg m-3 p-6 relative'>
       <FaQuoteRight className='w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20'/>

       <div className='mt-6 flex items-center '>
        <FaStar className='w-4 h-4 text-yellow-500'/>
        <FaStar className='w-4 h-4 text-yellow-500'/>
        <FaStar className='w-4 h-4 text-yellow-500'/>
        <FaStar className='w-4 h-4 text-yellow-500'/>
        <FaStar className='w-4 h-4 text-yellow-500'/>
       </div>
       <p className='mt-6 text-base text-gray-600 font-medium'>{review.review}</p>
       <div className='w-full h-[1.2px] bg-gray-600 opacity-20 mt-6 mb-6'></div>

       <div className='flex items-center space-x-4'>
          
           <div>
             <Image src={review.userImage} alt={review.name} width={40} height={40}
             className='rounded-full '/>
           </div>

          <div>
           <h1 className='font-bold text-gray-800 '>{review.name}</h1>
           <p className='text-sm text-gray-500'>{review.profession}</p>
          </div>
          
       </div>
    </div>
  )
}

export default Review_Card
