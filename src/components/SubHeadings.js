import React from 'react'
import shade from '../pages/img/bg5.png'
import '../pages/Depetence/Style.css'
import img from '../pages/img/IMG_2747.JPG'

function SubHeadings(props) {
  return (
    <div className='w-full  relative h-full bg-cover bg-center bg-no-repeat bg-gradient-to-t from-[#72bf44] via-[#72bf44] to-[#000000d5]  pt-[85px] md:pt-[77px] lg:pt-[125px] ' >
    <div className=' w-full h-16 md:h-24 lg:h-32 brightness-90 bg-[#] text-[#fff]  drop-shadow-lg flex items-center justify-center'>
        <h2 id='Blinking' className='uppercase text-2xl lg:text-3xl tracking-wide xl:text-4xl font-bold'>{props.subheading}</h2>
     </div>
    </div>
  )
}

export default SubHeadings
