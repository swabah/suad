import React from 'react'
import { Link } from 'react-router-dom'
import LinkTags from '../../assets/LinkTags'
import { EventData } from '../../data/EventlistData'
import CardOnly from './Events/CardOnly';


function Homeseven() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-5 lg:gap-8 text-[#070307] h-auto bg-[#fdfbfe]  px-3 md:px-7 lg:px-20  py-10 md:py-16 lg:py-20 xl:py-24 '>
      <h2 className=' text-center text-3xl lg:text-4xl xl:text-5xl md:pb-5 font-bold'>Program & Occasions</h2>
      <div className=' w-full h-auto grid grid-cols-2 md:grid-cols-4  gap-3 md:gap-5 gird-rows-auto  items-center justify-center'>
        {EventData.slice(0, 4).map((events) => (
          <CardOnly events={events} />
        ))}
      </div>
      <Link to='/Event'>
        <LinkTags name='View All' to='/event' />
      </Link>
    </div>
  )
}

export default Homeseven
