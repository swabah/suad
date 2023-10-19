import React from 'react'
import dars from '../img/darsHall.jpeg'
import { Link } from 'react-router-dom'

function HomeTwo() {
  return (
    <div className='w-full space-y-3 text-[#070307] h-full bg-[#fdfbfe]  px-3 md:px-7 lg:px-20  py-16  lg:py-22 xl:pt-32 '>
    <div className='w-full flex items-center pb-5  md:pb-10 justify-center'>
      <h2 className='text-center text-3xl lg:text-4xl xl:text-6xl font-bold'>Welcome to Ahlussuffa</h2>
    </div>
    <div className='w-full'>
      <img className='md:rounded-lg  mt-5 bg-center h-[400px] w-full object-cover shadow-md' src={dars} alt="" />
      <p className='md:text-lg xl:text-xl mt-3 md:mt-5 xl:mt-8 w-full h-full text-center md:text-justify'>With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad Nurani Kamil saqafi initiated the Ahlussuffa: Dars, an esteemed program on religious knowledge and science, at the Montal Mosque in Kannur in 2014 with the participation of five students. Over the past eight years, the program has flourished into a superior institution of 120 eminent scholars from various Islamic scholastic streams as well as modern-age education.  <Link class="text-[#4ea942] after:content-['_↗'] ..." to='./Ahlussuffa' >Read More</Link></p>
    </div>
  </div>
  )
}

export default HomeTwo
