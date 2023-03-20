import React from 'react'
import Person from './Person'
import perdemo from './persondemo.png'

function Suad() {
  return (
    <div className='w-full h-auto mt-6 '>
        <div className='w-full h-auto  flex  items-start'>
          <h2  className='text-xl uppercase p-1.5 shadow-sm w-auto h-auto flex flex-col md:flex-row items-start md:items-center px-3 md:px-7 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
             <span>SUAD</span> 
             <span className='md:pl-4 text-xs md:text-sm uppercase'>students union of Ahlussuffa dars</span>
          </h2>
        </div>
        <div className='w-full py-8 h-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 items-center justify-center gap-5'>
            <Person img={perdemo} person="Raheem Manzari" level="president" para="Rest is History"/>
            <Person img={perdemo} person="shahbaz ali ahmed" level="general secretary" para="Rest is History"/>
            <Person img={perdemo} person="abu thwahir" level="finance secretary" para="Rest is History"/>
            <Person img={perdemo} person="saleem sameer" level="cabinet secretary" para="Rest is History"/>
            <Person img={perdemo} person="shahi muhammed" level="dars leader" para="Rest is History"/>
            <Person img={perdemo} person="swalahudheen" level="malayalam samathi" para="Rest is History"/>
            <Person img={perdemo} person="muhammed aliyar" level="english department" para="Rest is History"/>
            <Person img={perdemo} person="unais nizar" level="arabic department" para="Rest is History"/>
            <Person img={perdemo} person="hijas" level="urdu department" para="Rest is History"/>
            <Person img={perdemo} person="adhil" level="speakers forum" para="Rest is History"/>
            <Person img={perdemo} person="ziyad" level="situation alive" para="Rest is History"/>
            <Person img={perdemo} person="noufal" level="suffathul huffaz" para="Rest is History"/>
            <Person img={perdemo} person="fazlurahman" level="ssf dawa" para="Rest is History"/>
            <Person img={perdemo} person="salman chelari" level="bailthul hikma" para="Rest is History"/>
            <Person img={perdemo} person="shamnad" level="zaviyah" para="Rest is History"/>
            <Person img={perdemo} person="khubaib" level="media" para="Rest is History"/>
        </div>
      </div>
  )
}

export default Suad
