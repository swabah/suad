import React from 'react'
import Person from './Person'
import perdemo from './persondemo.png'
import Raheem from '../../img/Committe/raheem.jfif'
import Fazlu from '../../img/Committe/Fazlu.jfif'
import Saleem from '../../img/Committe/Saleem.jfif'
import noufal from '../../img/Committe/noufal.jpg'

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
            <Person img={Raheem} person="Raheem Manzari" level="president"/>
            <Person img={perdemo} person="shahbaz ali ahmed" level="general secretary"/>
            <Person img={perdemo} person="abu thwahir" level="finance secretary"/>
            <Person img={Saleem} person="saleem sameer" level="cabinet secretary"/>
            <Person img={perdemo} person="shahid muhaimid" level="dars leader"/>
            <Person img={perdemo} person="swalahudheen" level="malayalam samithi"/>
            <Person img={perdemo} person="muhammed aliyar" level="english department"/>
            <Person img={perdemo} person="unais nizar" level="arabic department"/>
            <Person img={perdemo} person="hijas" level="urdu department"/>
            <Person img={perdemo} person="adhil" level="speakers forum"/>
            <Person img={perdemo} person="ziyad" level="situation alive"/>
            <Person img={noufal} person="noufal" level="suffathul huffaz"/>
            <Person img={Fazlu} person="fazlurahman" level="ssf dawa"/>
            <Person img={perdemo} person="salman chelari" level="baithul hikma"/>
            <Person img={perdemo} person="shamnad" level="zaviyah"/>
            <Person img={perdemo} person="khubaib" level="media"/>
        </div>
      </div>
  )
}

export default Suad
