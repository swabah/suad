import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import dars from '../img/darsHall.jpeg'
import hey from '../img/hey.png'

function HomeTwo() {
  return (
    <div className='w-full space-y-3 text-[#1c415d] h-[850px] bg-gray-100 px-44 py-20 '>
    <div className='w-full text-lg font-bold items-start font-light text-[#1c415d]'>
      {/* <h1>Hey...</h1> */}
      <img className='w-16' src={hey} alt="" />
    </div>
    <div className='w-full flex items-center  pt-1 pb-2 justify-between'>
      <h2 className='text-4xl font-bold'>Welcome to Ahlussuffa</h2>
      <div className='w-auto h-auto py-1 border-gray-400  border-b-[1px] hover:border-[#1c415d] transition flex items-center space-x-3'>
          <a href="">View Detiles
          </a>
          <FaArrowRight/>
      </div>
    </div>
    <div className='w-full'>
      {/* <HomeCard/> */}
      <img className='rounded-lg blur mt-7 bg-center h-[400px] w-full object-cover' src={dars} alt="" />
      <p className=' mt-8 text-center w-full h-full'>Ahlussuffa Dars is located at Thathoor Shuhada Maqam, a historical Masjid situated in Thathoor, Near Mavoor, has a history of more than 100 years. With the boundless help of the natives of the Mahall, our Dars has more than 120 students who are pursuing their academic studies includes B.sc Physics, Computer programming, Commerce, Chartered Accountant and psychology courses etc, simultaneously. Ahlussuffa is blessed with the Edu-Friendly Atmosphere of Thathoor Shuhada Maqam and Spiritual guidance of Thathoor shuhada. And also the mindful interventions of thathoor natives gives us an extra energy to fly.</p>
    </div>
  </div>
  )
}

export default HomeTwo
