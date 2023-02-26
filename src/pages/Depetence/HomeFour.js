import React from 'react'
import HomeCard from './HomeCard'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import LinkTags from './Tools/LinkTags'

function HomeFour() {
  return (
     <div className='w-full space-y-3 text-[#1c415d] h-[750px] bg-gray-100 px-5 md:px-12 lg:px-20 xl:px-44 py-8 md:py-12 lg:py-16 xl:py-20 '>
     <div className='w-full items-start font-light text-gray-700'>
       <h1 className='text-sm md:text-base uppercase'>READY TO LEARN <span className='font-bold md:text-lg'>?</span> </h1>
     </div>
     <div className='w-full flex items-center  md:pt-4 pb-2 justify-between'>
       <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Featured Courses</h2>
       <Link to='/'>
       <LinkTags name='view detiles'/>
       </Link>
     </div>
     <div className='w-full'>
       <HomeCard/>
     </div>
   </div>
  )
}

export default HomeFour