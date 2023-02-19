import React from 'react'

function Person(props) {
  return (
        <a href="#" class="group relative block bg-black w-64 h-80 rounded-md">
           <img
             alt="Person"
             src={props.img}
             class="absolute inset-0 h-full  rounded-md w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
           />
         
           <div class="relative p-5 ">
             <p class="text-sm font-bold uppercase tracking-widest  text-[#36bd70]">
               {props.level}
             </p>
         
             <p class="text-xl font-bold text-[#ffffff]">{props.person}</p>
         
             <div class="mt-44 ">
               <div
                 class="translate-y-8 transform opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
               >
                 <p class="text-sm font-['robot'] text-white">
                   {props.para}
                 </p>
               </div>
             </div>
           </div>
         </a>
  )
}

export default Person
