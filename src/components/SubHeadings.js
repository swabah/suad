import React from 'react'
import shade from '../pages/img/bg5.png'
import '../pages/Depetence/Style.css'

function SubHeadings(props) {
  return (
    <div  className=' w-full realative h-16 md:h-24 lg:h-32 xl:h-44 brightness-90 bg-[#72bf44] text-[#fff] mt-0.5 drop-shadow-lg flex items-center justify-center'>
        <h2 id='Blinking' className='uppercase text-2xl lg:text-3xl tracking-wide  xl:text-4xl font-bold'>{props.subheading}</h2>
        <img className='w-1/3 h-full brightness-50 opacity-80 saturate-150 absolute right-0' src={shade} alt="" />
        {/* <div style={{backgroundImage: `url(${shade})`}} className='absolute w-full no-repeat bg-fill h-full'></div> */}
    </div>
  )
}

export default SubHeadings
