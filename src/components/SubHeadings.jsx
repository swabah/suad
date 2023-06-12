import React from 'react'
import '../pages/Depetence/Style.css'
import h2bottom from '../pages/img/h2bottom.svg'

function SubHeadings(props) {
  return (
    <div className='w-full  relative h-full bg-cover bg-center bg-no-repeat bg-gradient-to-t from-[#72bf44] via-[#72bf44] to-[#000000d5]  pt-[85px] md:pt-[77px] lg:pt-[125px] ' >
    <div className=' w-full h-16 md:h-24 lg:h-32 brightness-90 bg-[#] text-[#fff]  drop-shadow-lg flex items-center justify-center'>
        <div className='relative w-auto h-auto'>
        <h2 id='Blinking' className='uppercase text-2xl lg:text-3xl tracking-wide xl:text-4xl font-semibold'>{props.subheading}</h2>
      <img className='absolute -bootom-2 w-auto object-cover brightness-125 opacity-60' src={h2bottom} alt="subheading" />
        </div>
     </div>
    </div>
  )
}

export default SubHeadings
