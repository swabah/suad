import React from 'react'
import Person from './Person'
import perdemo from './persondemo.png'

function Suad() {
  return (
    <div className='w-full h-auto mt-6 '>
        <div className='w-full h-auto  flex  items-start'>
          <h2  className='text-xl uppercase p-1.5 shadow-sm w-auto h-auto flex items-center px-7 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
             <span>SUAD</span> 
             <span className='pl-4 text-sm uppercase'>students union of Ahlussuffa dars</span>
          </h2>
        </div>
        <div className='w-full py-8 h-auto flex flex-wrap items-center justify-between  gap-y-5'>
            <Person img={perdemo} person="Ameen Abdul Qadir" level="Chairman" para="Rest is History"/>
            <Person img={perdemo} person="Habeeb Mammuthy" level="Convenor" para="Rest is History"/>
            <Person img={perdemo} person="Thasneem Abubacker" level="Executive" para="Rest is History"/>
            <Person img={perdemo} person="Zuhair Abdurahman" level="Executive" para="Rest is History"/>
            <Person img={perdemo} person="Sinan Sidhique" level="Executive" para="Rest is History"/>
            <Person img={perdemo} person="Dildar Sameer" level="Executive" para="Rest is History"/>
            <Person img={perdemo} person="Thajudheen Moosa" level="Executive" para="Rest is History"/>
        </div>
      </div>
  )
}

export default Suad
