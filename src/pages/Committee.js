import React from 'react'
import bg3 from './img/bg3.png'
import Muad from './Depetence/Committee/Muad'
import Suad from './Depetence/Committee/Suad'
import SubHeadings from '../components/SubHeadings'

function Committee() {
  return (
    <div className='w-full text-[#1c415d] h-auto pb-20 '>
      <SubHeadings subheading='Working Committee'/>
        {/* <div className='relative w-96'>
            <img className='w-16 absolute right-5 -bottom-8' src={bg3} alt="" />
            <h2 className=' text-4xl font-bold pt-16'>Working Committee</h2>
        </div> */}
        <Suad/>
        <Muad/>
      
    </div>
  )
}

export default Committee
