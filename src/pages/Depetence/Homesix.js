import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import links from '../../assets/Links'
import youtube from '../../assets/Links'

function Homesix() {
  return (
    <div className='w-full px-44 h-[330px] text-[#1c415d] bg-white flex flex-col items-center justify-center py-12 text-center space-y-7'>   
    <h1 className='text-5xl pt-8 font-bold tracking-wide'>Check out few of our <br />
     FREE Video Lessons</h1>
     <a href={links.youtube.url}  className='w-full h-auto  flex items-center justify-end space-x-3'>
           <a className='py-1 border-b-[1px] border-gray-400 hover:border-[#1c415d] transition' >Subscribe
           </a>
           <FaArrowRight/>
     </a>
</div>
  )
}

export default Homesix
