import React from 'react'
import EventsCard from './Depetence/Events/EventsCard'
import SubHeadings from '../components/SubHeadings'
import { EventData } from '../data/EventlistData'

function Events() {
  return (

    <div className='w-full h-full flex flex-col items-center justify-center   mt-[60px] md:mt-[77px] lg:mt-[90px]'>
        <SubHeadings subheading='Events'/>
        <div className='w-full h-full flex items-center justify-center  px-2 md:px-7 lg:px-20  py-4 md:py-10 lg:py-12 xl:py-14 '>
             <div className='pt-4 w-full h-auto flex-wrap flex  gap-y-6   items-center justify-between'>
               {EventData.map((events)=>(
                 <EventsCard imgE={events.imgE} link={events.link} head={events.head} para={events.para}/>
                 ))}
             </div>
        </div>
    </div>
  )
}

export default Events



