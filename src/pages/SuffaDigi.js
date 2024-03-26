import React from 'react'
import SubHeadings from '../components/SubHeadings'
import suffaDigiDesigned from './img/suffaDigiDesigned.jpg'

function SuffaDigi() {
  return (
    <div className='w-full h-full'>
      <SubHeadings subheading='Suffa Digi Kiosk' />
      <div className='w-full  flex flex-col items-start select-none px-3 md:px-7 lg:px-20   mt-12  '>
        <div className=' text-[#1c415d] mt-10  mb-12 w-full h-full'>
          <div className='items-center w-full h-auto md:p-5 rounded-lg md:shadow-lg md:border grid grid-cols-1 gap-5 md:gap-0 grid-rows-auto lg:grid-cols-4'>
            <img className='object-cover w-full lg:w-96 h-52 md:rounded drop-shadow-md' src={suffaDigiDesigned} alt="" />
            <p className='md:col-span-3 md:px-3 lg:px-6 xl:px-10 lg:text-lg'>Ahlussuffa: Suffa Digi Kiosk is a project initiated with the aim of molding the learned community to understand and address the new possibilities of DeeneeDa awath in this fast moving modern age.Apart from that, Digi World is molding students who excel in different fields like web designing, graphic designing, video creat- ing, multi-language typing etc. At present many students are pursuing degrees from national universities.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SuffaDigi
