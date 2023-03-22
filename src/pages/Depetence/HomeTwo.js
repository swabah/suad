import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import dars from '../img/darsHall.jpeg'
import hey from '../img/hey.png'
import LinkTags from '../../assets/LinkTags'
import { Link } from 'react-router-dom'

function HomeTwo() {
  return (
    <div className='w-full space-y-3 text-[#1c415d] h-auto bg-gray-100  px-3 md:px-7 lg:px-20  py-7 md:p-12 lg:py-16 xl:py-20 '>
    <div className='w-full text-lg font-bold items-start font-light text-[#1c415d]'>
      {/* <h1>Hey...</h1> */}
      <img className='w-9 md:w-14 lg:w-16' src={hey} alt="" />
    </div>
    <div className='w-full flex items-center  pt-1 md:pb-2 justify-between'>
      <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Welcome to Ahlussuffa</h2>
      <LinkTags name='Read More' to='/ahlussuffa'/>
    </div>
    <div className='w-full'>
      {/* <HomeCard/> */}
      <img className='md:rounded-lg  mt-5 bg-center h-[400px] w-full object-cover shadow-md' src={dars} alt="" />
      <p className='text-xs md:text-sm xl:text-base mt-3 md:mt-5 xl:mt-8 md:text-center w-full h-full  whitespace-normal break-words'>With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad Nurani Kamil saqafi initiated the Ahlussuffa: Dars, an esteemed program on religious knowledge and science, at the Montal Mosque in Kannur in 2014 with the participation of five students. Over the past eight years, the program has flourished into a superior institution of 120 eminent scholars from various Islamic scholastic streams as well as modern-age education.  <Link class="text-blue-600 after:content-['_↗'] ..." to='./Ahlussuffa' >Read More</Link></p>
    </div>
  </div>
  )
}

export default HomeTwo
