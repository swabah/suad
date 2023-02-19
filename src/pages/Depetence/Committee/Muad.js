import React from 'react'
import Person from './Person'
import perdemo from './persondemo.png'

function Muad() {
  return (
    <div className='w-full h-auto mt-20 px-44'>
        <div className='flex flex-col w-auto text-start'>
           <h2 className=' text-[#1c415d] font-thin  text-lg tracking-widest pl-1'>SUAD'S</h2>
           <h2 className='font-semibold text-[#16344a]  text-7xl tracking-wider mt-0.5'>MUAD</h2>
           <p  className='font-semibold text-[#1c415d] pl-1  text-sm -mt-1'>Minors' union of Ahlussuffa Dars</p>
        </div>
        <div className='w-full py-12 h-auto flex flex-wrap items-center justify-center gap-5 '>
            <Person img={perdemo} person="Ameen Abdul Qadir" level="Chairman" para="Rest is History"/>
            <Person img={perdemo} person="Habeeb Mammutty" level="Convenor" para="Rest is History"/>
            <Person img={perdemo} person="Thasneem Abubacker" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Zuhair Abdurahman" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Sinan Sidhique" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Dildar Sameer" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Thajudheen Moosa" level="Executives" para="Rest is History"/>
        </div>
      </div>
  )
}

export default Muad
