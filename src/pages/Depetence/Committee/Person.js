import React from 'react'

function Person(props) {
  return (
    <div className='w-full h-44 md:w-44 md:h-52 hover:shadow-lg rounded-md flex flex-col px-2 py-4 md:px-5 md:py-7 border justify-between items-center text-center'>
      <img className='rounded-full object-cover h-20 w-20 shadow-lg' src={props.img} alt="" />
      <div className='space-y-2  '>
        <h2 className='uppercase text-xs md:text-sm leading-4'>{props.person}</h2>
        <h2 className='uppercase font-medium text-xs text-[#72bf44] font-semibold drop-shadow-sm tracking-wide'>{props.level}</h2>
      </div>
    </div>
  )
}

export default Person
