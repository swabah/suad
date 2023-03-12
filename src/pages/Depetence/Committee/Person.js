import React from 'react'

function Person(props) {
  return (
    <div className='w-44 h-52 rounded-md flex flex-col px-5 py-7 border justify-between items-center text-center'>
      <img className='rounded-full object-cover w-20 h-20 shadow-lg' src={props.img} alt="" />
      <div className='space-y-2  '>
        <h2 className='uppercase text-sm leading-4'>{props.person}</h2>
        <h2 className='uppercase font-medium text-xs text-[#72bf44] font-semibold drop-shadow-sm tracking-wide'>{props.level}</h2>
      </div>
    </div>
        // <a href="#" class="group relative block bg-black w-64 h-80 rounded-md">
        //    <img
        //      alt="Person"
        //      src={props.img}
        //      class="absolute inset-0 h-full bg-white rounded-md w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        //    />
         
        //    <div class="relative p-5 ">
        //      <p class="text-sm font-bold uppercase tracking-widest  text-[#36bd70]">
        //        {props.level}
        //      </p>
         
        //      <p class="text-xl font-bold text-[#ffffff]">{props.person}</p>
         
        //      <div class="mt-44 ">
        //        <div
        //          class="translate-y-8 transform opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
        //        >
        //          <p class="text-sm font-['robot'] text-white">
        //            {props.para}
        //          </p>
        //        </div>
        //      </div>
        //    </div>
        //  </a>
  )
}

export default Person
