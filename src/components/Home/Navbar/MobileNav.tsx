import React, { ReactElement } from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/Constant'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean,
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: Props): ReactElement => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>
      
      {/* navLinks */}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 
       fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#ae2258] 
       space-y-6 z-[10000]`}>
        {navLinks.map((items) => {
          return (
            <Link key={items.id} href={items.url}>
              <p className='font-bold text-[20px] ml-12 border-b-[1.5px] hover:text-yellow-300 pb-1 w-fit border-white sm:text-[30px]'>
                {items.label}
              </p>
            </Link>
          )
        })}

        {/* close button */}
        <CgClose onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
      </div>

    </div>
  )
}

export default MobileNav
