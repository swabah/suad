

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import img from '../img/img9.jpeg'
import links from '../../assets/Links'


function HomeFive() {
  return (
   <div  style={{backgroundImage: `url(${img})`}} className='w-full h-auto xl:h-[400px]  bg-center bg-cover bg-fixed '>
    <div className='w-full h-full flex flex-col justify-center bg-black bg-opacity-80  text-[#ffff]  px-3 md:px-7 lg:px-20  py-10 md:py-12 lg:py-16'>
             <div className='w-full h-auto md:items-center flex flex-col pb-3 md:pb-5 lg:pb-7 opacity-90 space-y-1.5 md:space-y-3'>
              <h1 className='text-sm md:text-xl lg:text-2xl xl:text-3xl font-normal drop-shadow-md'>JOIN THE AHLUSSUFFA FAMILY TODAY</h1>
              <h2 className='text-3xl md:text-4xl lg:text-5xl leading-8 capitalize font-semibold md:text-center drop-shadow-lg'>join with us to experience <br /> real edutainmental atmosphere</h2>
            </div>
            <div className='w-full h-auto flex flex-col md:items-center py-1'>
              <a href={links.suadadmition.url}>
                <button className='bg-[#36bd70] flex items-center shadow-xl drop-shadow-md text-sm md:text-lg p-1 px-2 md:p-1.5 md:px-4 opacity-90'><span className='pr-1.5 md:pr-3 lg:text-xl uppercase'>rEGISTER now</span ><FaArrowRight/></button>
              </a>
              {/* <p className='text-sm text-[#ac0904] font-bold py-1 opacity-80'>Don't hesitate to join . . .</p> */}
            </div>
    </div>
   </div>
  )
}

export default HomeFive

