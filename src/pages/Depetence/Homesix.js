import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import links from '../../assets/Links'
import youtube from '../../assets/Links'
import LinkTags from './Tools/LinkTags'

function Homesix() {
  return (
    <div className='w-full px-5 md:px-12 lg:px-20 xl:px-44 h-auto xl:h-[330px] text-[#1c415d] bg-white flex flex-col items-start md:items-center md:justify-center  py-6 md:py-8 lg:py-12 text-center space-y-3 xl:space-y-7'>   
    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-3 xl:pt-8 font-bold tracking-wide'>Check out few of our <br />
     FREE Video Lessons</h1>
     <a href={links.youtube.url}  className='w-full h-auto  flex items-center md:justify-end space-x-3'>
       <LinkTags name='subscribe' link=''/>
     </a>
</div>
  )
}

export default Homesix
