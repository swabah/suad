import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import EventsCard from './Events/EventsCard'
import { Link } from 'react-router-dom'
import LinkTags from './Tools/LinkTags'
import { EventData } from '../../data/EventlistData'


function Homeseven() {
    const link = 'www.facebook.com/ahlussuffadars/'
  return (
    <div className='w-full space-y-3 text-[#1c415d] h-auto bg-gray-100  px-2 md:px-7 lg:px-20  py-4 md:py-8 lg:py-12 xl:py-14 '>
     <div className='w-full flex items-center md:pt-1  pb-2 justify-between'>
       <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Program & Occasions</h2>
       <Link to='/Event'>
          <LinkTags name='View All'/>
       </Link>
     </div>
     <div className='pt-6 w-full h-auto flex-wrap flex  gap-y-6   items-center justify-between'>
      {EventData.slice(0,4).map((event)=>(
         <EventsCard imgE={event.imgE} link={event.link} head={event.head} para={event.para}/>
      ))}
        
     </div>
   </div>
  )
}

export default Homeseven
