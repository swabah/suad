import React from 'react'


function Asathidacard(props) {
  return (
    <div className=' h-72 w-64 bg-white '>
        <a href="" class="group drop-shadow-lg relative block h-full w-full rounded-lg">
          <span class="absolute inset-0 border-2 border-dashed border-black rounded-lg"></span>
          <div  class="relative flex h-full transform items-end bg-white rounded-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" >
              <div class="transition-opacity  w-full h-full group-hover:absolute group-hover:opacity-0">
                <img className='w-full h-full object-cover rounded-lg' src={props.img} alt="" />
              </div>
              <div  class="absolute opacity-0 bg-opacity-0 bg-black w-full h-full drop-shadow-xl  transition-opacity group-hover:relative group-hover:opacity-100" >
                <img className='w-full h-full object-cover brightness-50 rounded-lg' src={props.img} alt="" />
                <h3 class="absolute top-0 p-5 w-full flex flex-col bg-gradient-to-b rounded-t-lg from-[#1a1a1a] via-opacity-90 to-opacity-80 items-center text-center rounded-b-lg text-white font-bold  text-xl font-medium">{props.name}</h3>
              </div>
          </div>
      </a>
    </div>
  )
}

export default Asathidacard
