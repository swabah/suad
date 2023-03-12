import React from 'react'
import library from '../../img/iconlibrary.png'
import teacher from '../../img/iconteacher.png'
import academy from '../../img/academic.png'
import bed from '../../img/iconbed.png'
import ChooseCard from './ChooseCard'

function Whychoose() {
  return (
   <div className='w-full  px-2 md:px-7 lg:px-20  text-[#1c415d] h-auto flex flex-col items-center py-10'>
        <div className='w-full items-start font-light text-gray-700'>
           <h1 className='flex items-center'><span className='font-medium text-2xl pr-1.5'>#</span> WHY CHOOSE</h1>
        </div>
         <div className='w-full flex items-center  pt-5 pb-2 justify-between'>
           <h2 className='text-4xl font-bold'>Our Ahlussuffa</h2>
         </div>
        {/* <p className='text-center max-w-full min-w-52 pt-3 text-gray-600'>Here, Number of students are approaching us to get an admission in this Dars. So, Lets check it out, Why Ahlussuffa?</p> */}
        <div className='flex items-center justify-between py-8 pt-16'>
            <ChooseCard iconimg={academy} title='Academic Facility' para='Students can pursue their Academic Education at the nearest campuses like KMCT, MAMO'/>
            <ChooseCard iconimg={teacher} title='Radiant Asathida' para='The precious capital of Ahlussuffa, Very attractive interference making them unique'/>
            <ChooseCard iconimg={library} title='Baithul Hikma' para='Its our Library and Reserch centre and through this initiative we could do a lot of intellectual programmes'/>
            <ChooseCard iconimg={bed} title='Comfort dorms' para='Very comfort dorms and other basic amenities are enrichen the Brand value of Ahlussuffa.'/>
        </div>
    </div>
  )
}

export default Whychoose
