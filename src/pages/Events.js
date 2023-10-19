import React from 'react'
import './Depetence/Style.css'
import SubHeadings from '../components/SubHeadings'
import { EventData } from '../data/EventlistData'
import CardOnly from './Depetence/Events/CardOnly'

function Events() {

  return (

    <div className='w-full h-full flex relative flex-col items-center justify-center bg-white  '>
      <SubHeadings subheading='Events' />
      <div className='w-full h-full flex flex-col space-y-12 items-center justify-center  px-2 md:px-7 lg:px-20  py-8 md:py-16 lg:py-20 '>
        <div className='pt-4 w-full h-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-5 md:gap-7 '>
          {EventData.map((events) => (
            <CardOnly events={events}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events



