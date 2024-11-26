


import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2
         lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>

        {/*------------- 1st footer part ----------- */}
           <div className=''>
              {/* Logo */}
             <div className='flex items-center space-x-2 '>
                <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white 
                flex items-center justify-center flex-col'>
                     <FaHouse/>
                </div>
                <h1 className='text-white font-bold text-sm sm:text-base md:text-sm'>HomeHub</h1>
             </div>
               <p className='text-gray-300 mt-6'>Your go-to place for all things home: tips, products, and inspiration!
               </p>

               {/* email & phone num */}
               <p className='text-gray-300 mt-5 font-semibold opacity-70'>ayangood49@gmail.com</p>
               <p className='text-gray-300 mt-2 font-semibold opacity-70'>+01258087525</p>
                 
                 {/* social media icons and links */}
                 <div className='flex items-center space-x-4 mt-6'>
                    <FaFacebook className='w-6 h-6 text-blue-600 hover:text-blue-700 duration-300 transition-all hover:scale-105'/>
                    <FaTwitter className='w-6 h-6 text-sky-600 hover:text-sky-700 duration-300 transition-all hover:scale-105'/>
                    <FaYoutube className='w-6 h-6 text-red-500 hover:text-red-600 duration-300 transition-all hover:scale-105'/>
                    <FaInstagram className='w-6 h-6 text-red-600 hover:text-red-700 duration-300 transition-all hover:scale-105'/>
                    <FaLinkedin className='w-6 h-6 text-blue-700 hover:text-blue-800 duration-300 transition-all hover:scale-105'/>
                 </div>

           </div>
            
            {/*---------------2nd Part -------------- */}
            <div className='md:mx-auto'>
                 <h1 className='footer__heading'>Popular Search</h1>
                 <p className='footer__link'>Apartment For Rent</p>
                 <p className='footer__link'>Apartment Low to High</p>
                 <p className='footer__link'>Offices For Buy</p>
                 <p className='footer__link'>Offices For Rent</p>
            </div>


            {/*---------------3rd Part -------------- */}
            <div className='md:mx-auto'>
                 <h1 className='footer__heading'>Quick Link</h1>
                 <p className='footer__link'>Terms of Use</p>
                 <p className='footer__link'>Privacy Policy</p>
                 <p className='footer__link'>Priceing Plans</p>
                 <p className='footer__link'>Our Services</p>
                 <p className='footer__link'>Careers</p>
                 <p className='footer__link'>FAQs</p>
            </div>
            

             {/*---------------4th Part -------------- */}
             <div className='md:mx-auto'>
                 <h1 className='footer__heading'>Discover</h1>
                 <p className='footer__link'>Miami</p>
                 <p className='footer__link'>Los Angeles</p>
                 <p className='footer__link'>Chicago</p>
                 <p className='footer__link'>New York</p>
                 <p className='footer__link'>London</p>
            </div>


        </div>
    </div>
  )
}

export default Footer
