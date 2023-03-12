import React, { useState } from 'react'
import Muad from './Depetence/Committee/Muad'
import Suad from './Depetence/Committee/Suad'
import SubHeadings from '../components/SubHeadings'

function Committee() {
  return (
    <div className='w-full text-[#1c415d] h-auto pb-12  mt-[60px] md:mt-[77px] lg:mt-[90px]'>
      <SubHeadings subheading='Working Committee'/>
      <div className='w-full   px-2 md:px-5 lg:px-20  mt-12'>
        <Suad/>
        <Muad/> 
      </div>
    </div>
  )
}

export default Committee
