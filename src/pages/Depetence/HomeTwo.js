import React from 'react'
import dars from '../img/darsHall.jpeg'
import { Link } from 'react-router-dom'

function HomeTwo() {
  return (
    <div className='w-full space-y-3 text-[#1c415d] h-auto bg-gray-100  px-3 md:px-7 lg:px-20  py-7 md:p-12 lg:py-16 xl:py-20 '>
    <div className='w-full flex items-center  md:pb-2 justify-start'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>Welcome to Ahlussuffa</h2>
    </div>
    <div className='w-full'>
      <img className='md:rounded-lg  mt-5 bg-center h-[400px] w-full object-cover shadow-md' src={dars} alt="" />
      <p className='text-xs md:text-sm xl:text-base mt-3 md:mt-5 xl:mt-8 md:text-center w-full h-full  whitespace-normal break-words'>With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad Nurani Kamil saqafi initiated the Ahlussuffa: Dars, an esteemed program on religious knowledge and science, at the Montal Mosque in Kannur in 2014 with the participation of five students. Over the past eight years, the program has flourished into a superior institution of 120 eminent scholars from various Islamic scholastic streams as well as modern-age education.  <Link class="text-blue-600 after:content-['_↗'] ..." to='./Ahlussuffa' >Read More</Link></p>
    </div>
  </div>
  )
}

export default HomeTwo
