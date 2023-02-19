import React from 'react'
import HomeCard from './HomeCard'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function HomeFour() {
  return (
     <div className='w-full space-y-3 text-[#1c415d] h-[750px] bg-gray-100 px-44 py-20 '>
     <div className='w-full items-start font-light text-gray-700'>
       <h1>READY TO LEARN <span className='font-bold text-lg'>?</span> </h1>
     </div>
     <div className='w-full flex items-center  pt-4 pb-2 justify-between'>
       <h2 className='text-4xl font-bold'>Featured Courses</h2>
       <Link to='/'>
       <div className='w-auto h-auto py-1 border-gray-400  border-b-[1px] hover:border-[#1c415d] transition flex items-center space-x-3'>
           <a href="">View Detiles
           </a>
           <FaArrowRight/>
       </div>
       </Link>
     </div>
     <div className='w-full'>
       <HomeCard/>
     </div>
   </div>
  )
}

export default HomeFour