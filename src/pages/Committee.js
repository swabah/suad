import React, { useState } from 'react'
import bg3 from './img/bg3.png'
import Muad from './Depetence/Committee/Muad'
import Suad from './Depetence/Committee/Suad'
import SubHeadings from '../components/SubHeadings'

function Committee() {
  return (
    <div className='w-full text-[#1c415d] h-auto pb-20 '>
      <SubHeadings subheading='Working Committee'/>
      <div className='w-full  px-5 md:px-12 lg:px-20 xl:px-44 mt-16'>
        <div className='w-full h-auto p-3 px-5 rounded border flex space-x-3 items-start'>
          <h2  className='text-xl font-medium drop-shadow-lg '>Suad</h2>
          <h2  className='text-xl font-medium drop-shadow-lg '>Muad</h2>
        </div>
        <Suad/>
        <Muad/> 
      </div>
    </div>
  )
}

export default Committee
