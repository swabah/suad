

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function HomeFive() {
  return (
   <div className='w-full flex flex-col text-[#1c415d] h-auto xl:h-[400px] justify-center bg-white px-5 md:px-12 lg:px-20 xl:px-44 py-8 md:py-12 lg:py-16'>
            <div className='w-full h-auto md:items-center flex flex-col pb-4 md:pb-7 lg:pb-10  space-y-3'>
              <h1 className='text-sm md:text-xl lg:text-2xl xl:text-3xl font-medium'>JOIN THE AHLUSSUFFA FAMILY TODAY</h1>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold md:text-center'>join with us to experience <br /> real edutainmental atmosphere</h2>
            </div>
            <div className='w-full h-auto flex flex-col md:items-center py-1'>
              <button className='bg-[#36bd70] rounded-lg flex items-center  text-lg p-2 px-3 md:p-3 md:px-5 lg:p-3 lg:px-7'><span className='pr-3 lg:text-xl'>Join now</span><FaArrowRight/></button>
              {/* <p className='text-sm text-[#ac0904] font-bold py-2 opacity-90'>Don't hesitate to join . . .</p> */}
            </div>
   </div>
  )
}

export default HomeFive

