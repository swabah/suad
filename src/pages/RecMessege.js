import React from 'react'
import SubHeadings from '../components/SubHeadings'
import arshadusthad from './img/arshadusthad.jpg'

function PreMessege() {
  return (

    <div className='w-full text-[#1c415d] flex flex-col bg-white min-h-screen   '>
      <SubHeadings subheading="RECTOR'S Messege" />
      <div className='px-3 md:px-7 lg:px-20  text-[#1c415d] mt-10  mb-12 w-full h-full'>
        <div className='items-center w-full h-auto md:p-9 md:shadow-lg grid grid-cols-1 gap-5 md:gap-0 grid-rows-auto lg:grid-cols-4'>
          <img className='lg:order-2 object-cover w-full lg:w-96 h-52 lg:h-64 md:rounded drop-shadow-md' src={arshadusthad} alt="not available" />
          <div className='md:col-span-3 lg:px-6 xl:px-10 md:mt-5 lg:mt-0 flex flex-col justify-start '>
            <h1 className='font-semibold text-lg'>RECTOR'S MESSEGE</h1>
            <h1 className='font-bold text-[#1c415d]  text-xl capitalize '>Usthad Arshad Nurani Kamil Saquafi</h1>
            <p className='lg:text-lg mt-4 lg:mt-8'>Ahlussuffa deals with many activities to build up high qualified Islamic scholars under Ahlussunnah wal Jama’a. Our intention is to keep up the way of Prophet Muhammed (S.A.W). Ahlussuffa is blessed with the Edu-Friendly Atmosphere of Thathoor Shuhada Maqam and Spiritual guidance of Thathoor shuhada. And also the mindful interventions of thathoor natives gives us an extra energy to fly high.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreMessege
