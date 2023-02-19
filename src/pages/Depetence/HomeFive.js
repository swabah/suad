

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function HomeFive() {
  return (
   <div className='w-full flex flex-col text-[#1c415d] h-[400px] justify-center bg-white px-44'>
            <div className='w-full h-auto items-center flex flex-col pb-10  space-y-3'>
              <h1 className='text-3xl font-medium'>JOIN THE AHLUSSUFFA FAMILY TODAY</h1>
              <h2 className='text-5xl font-bold text-center'>join with us to experience <br /> real edutainmental atmosphere</h2>
            </div>
            <div className='w-full h-auto flex flex-col items-center py-1'>
              <button className='bg-[#36bd70] rounded-lg flex items-center p-3 px-7'><span className='pr-3  text-xl'>Join now</span><FaArrowRight/></button>
              {/* <p className='text-sm text-[#ac0904] font-bold py-2 opacity-90'>Don't hesitate to join . . .</p> */}
            </div>
   </div>
  )
}

export default HomeFive

