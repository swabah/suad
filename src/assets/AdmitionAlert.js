import React from 'react'
import links from './Links'
import { FaArrowRight, FaRegWindowClose } from 'react-icons/fa'

function AdmitionAlert() {
  return (
    <div>
      
    </div>
  )
}

export default AdmitionAlert

export const AdmitionResult = ()=> {
  return (
    <div className='fixed z-50 bottom-0  p-3 md:p-4 left-0 md:left-5 md:bottom-5 w-full mr-1 md:w-auto h-auto py-3 md:py-2 drop-shadow-md shadow-lg bg-white'>
      <div className='relative h-full  md:space-x-5 flex flex-col md:flex-row items-center justify-end  w-full md:w-auto'>
        <div className='absolute -right-1 md:-right-4 -top-12 cursor-pointer bg-opacity-60 bg-white rounded-full p-1.5 text-lg md:text-xl'><FaRegWindowClose/></div>
        <h2 className='text-base lg:text-xl font-normal  w-full md:w-auto'>your Admission Result published</h2>
        <div className='mt-1 md:mt-0  w-full md:w-auto h-auto flex flex-col py-1'>
          <a href={links.suadadmition.url}>
            <button className='bg-[#36bd70] flex items-center shadow-xl drop-shadow-md text-sm md:text-base p-0.5 px-1 md:p-1 md:px-4 opacity-90'><span className='pr-1 md:pr-2 lg:text-lg capitalize'>Check now</span ><FaArrowRight/></button>
          </a>
        </div>
      </div>
    </div>
  )
}