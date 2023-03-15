import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutubeSquare } from 'react-icons/fa'
import links from '../assets/Links'

function Banner() {

  return (
    <motion.div
    className={`w-full h-8 py-3 md:py-0 space-y-2 shadow-md md:space-y-0 md:h-10 bg-[#032c4b] flex flex-col md:flex-row items-center justify-center md:justify-between transition duration-300  px-2 md:px-7 lg:px-20 `}
   >
            <div className='flex space-x-1 w-full justify-between md:justify-start items-center h-5 text-sm text-gray-200  font-thin'>
                <Link className='border-r-2 pr-10 md:pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to='/'  >Home</Link>
                <Link className='border-r-2 pr-10 md:pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to='/event'  >Events</Link>
                <Link className='border-r-2 pr-10 md:pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to=''  >Blog</Link>
                <Link className=' transition hover:text-gray-500'  to=''  >News</Link>
            </div>
         <div className=' hidden md:flex md:justify-end items-center w-full text-xl text-gray-300 space-x-1 '>
            <div className='flex space-x-1 '>
            <a className='transition hover:text-gray-500' href={links.youtube.url}><FaYoutubeSquare/></a>
            <a className='transition hover:text-gray-500' href={links.instagram.url}><FaInstagram/></a>
            <a className='transition hover:text-gray-500 pr-5' href={links.facebook.url}><FaFacebook/></a>
            </div>
         </div>
      
   </motion.div>
  )
}

export default Banner
