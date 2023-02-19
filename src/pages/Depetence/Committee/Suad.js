import React from 'react'
import Person from './Person'
import perdemo from './persondemo.png'

function Suad() {
  return (
    <div className='w-full h-auto mt-20 px-44'>
        <div className='flex flex-col w-auto text-start'>
           {/* <h2 className=' text-[#1c415d] font-thin  text-lg tracking-widest '>S     U      A     D     '     S</h2> */}
           <h2 className='font-semibold text-[#16344a]  text-7xl tracking-wide mt-1'>SUAD</h2>
           <p  className='font-semibold text-[#1c415d]  text-xs -mt-1'>Students union of Ahlussuffa Dars</p>
        </div>
        <div className='w-full py-12 h-auto flex flex-wrap items-center justify-center gap-5 '>
            <Person img={perdemo} person="Ameen Abdul Qadir" level="Chairman" para="Rest is History"/>
            <Person img={perdemo} person="Habeeb Mammuthy" level="Convenor" para="Rest is History"/>
            <Person img={perdemo} person="Thasneem Abubacker" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Zuhair Abdurahman" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Sinan Sidhique" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Dildar Sameer" level="Executives" para="Rest is History"/>
            <Person img={perdemo} person="Thajudheen Moosa" level="Executives" para="Rest is History"/>
        </div>
      </div>
  )
}

export default Suad
