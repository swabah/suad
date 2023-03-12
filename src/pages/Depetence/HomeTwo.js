import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import dars from '../img/darsHall.jpeg'
import hey from '../img/hey.png'
import LinkTags from './Tools/LinkTags'

function HomeTwo() {
  return (
    <div className='w-full space-y-3 text-[#1c415d] h-auto xl:h-[850px] bg-gray-100  px-2 md:px-7 lg:px-20  py-4 md:p-10 lg:py-12 xl:py-14 '>
    <div className='w-full text-lg font-bold items-start font-light text-[#1c415d]'>
      {/* <h1>Hey...</h1> */}
      <img className='w-9 md:w-14 lg:w-16' src={hey} alt="" />
    </div>
    <div className='w-full flex items-center  pt-1 pb-2 justify-between'>
      <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Welcome to Ahlussuffa</h2>
      <LinkTags name='view details'/>
    </div>
    <div className='w-full'>
      {/* <HomeCard/> */}
      <img className='rounded-lg  mt-5 bg-center h-[400px] w-full object-cover' src={dars} alt="" />
      <p className='text-xs md:text-sm mt-8 md:text-center w-full h-full'>Ahlussuffa Dars is located at Thathoor Shuhada Maqam, a historical Masjid situated in Thathoor, Near Mavoor, has a history of more than 100 years. With the boundless help of the natives of the Mahall, our Dars has more than 120 students who are pursuing their academic studies includes B.sc Physics, Computer programming, Commerce, Chartered Accountant and psychology courses etc, simultaneously. Ahlussuffa is blessed with the Edu-Friendly Atmosphere of Thathoor Shuhada Maqam and Spiritual guidance of Thathoor shuhada. And also the mindful interventions of thathoor natives gives us an extra energy to fly.</p>
    </div>
  </div>
  )
}

export default HomeTwo
