import React from 'react'

function Servicecards(props) {
  return (
    <div className='w-80 h-auto'>
      <a href="#" class="relative drop-shadow-lg w-full h-full block overflow-hidden rounded-lg border-2 p-2 pb-0 border-gray-100 ">
       <span class="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#36bd70] to-[#1c415d]"></span>
       <div className='w-full h-72'>
        <img className='w-full rounded-lg  h-full object-cover' src={props.img} alt="" />
       </div>
       <div className='w-full h-full flex flex-col p-3 pb-4 items-start justiyf-center'>
        <h2 className='text-[#1c415d] text-lg font-bold'>{props.title}</h2>
        <p className='text-gray-600 font-thin'>{props.para}</p>
       </div>
      </a>
    </div>
  )
}

export default Servicecards
