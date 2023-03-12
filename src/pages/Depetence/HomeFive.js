

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HomeFive() {
  return (
   <div  style={{backgroundImage: `url(http://ahlussuffadars.in/assets/images/1.jpg)`}} className='w-full h-auto xl:h-[400px]  bg-center bg-cover bg-fixed '>
    <div className='w-full h-full flex flex-col justify-center bg-black bg-opacity-70  text-[#ffff]  px-2 md:px-7 lg:px-20  py-5 md:py-8 lg:py-12'>
             <div className='w-full h-auto md:items-center flex flex-col pb-3 md:pb-5 lg:pb-7  space-y-3'>
              <h1 className='text-sm md:text-xl lg:text-2xl xl:text-3xl font-medium'>JOIN THE AHLUSSUFFA FAMILY TODAY</h1>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold md:text-center'>join with us to experience <br /> real edutainmental atmosphere</h2>
            </div>
            <div className='w-full h-auto flex flex-col md:items-center py-1'>
              <Link to='/contact'>
                <button className='bg-[#36bd70] rounded-lg flex items-center shadow-xl text-lg p-2 px-3 md:p-3 md:px-5 lg:p-3 lg:px-7'><span className='pr-3 lg:text-xl'>Apply now</span><FaArrowRight/></button>
              </Link>
              {/* <p className='text-sm text-[#ac0904] font-bold py-1 opacity-80'>Don't hesitate to join . . .</p> */}
            </div>
    </div>
   </div>
  )
}

export default HomeFive

