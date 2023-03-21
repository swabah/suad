import React from 'react'
import SubHeadings from '../components/SubHeadings'
import suffathulhuffadDesigned from './img/suffathulhuffadDesigned.jpg'

function Huffad() {
  return (
    <div className='w-full h-full '>
    <SubHeadings subheading='Suffathul huffad'/>
    <div className='w-full h-full flex flex-col items-start select-none px-3 md:px-7 lg:px-20   py-12  '>
        <h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
           <span className='uppercase '>Suffathul huffad</span> 
        </h2>
        <div className=' text-[#1c415d] mt-10  mb-12 w-full h-full'>
            <div className='items-center w-full h-auto p-5 rounded-lg shadow-lg border grid grid-cols-1 gap-5 md:gap-0 grid-rows-auto lg:grid-cols-4'>
                <img className='object-cover w-full lg:w-96 h-52 rounded drop-shadow-md' src={suffathulhuffadDesigned} alt="" />
                <p className='md:col-span-3 md:px-3 lg:px-6 xl:px-10 lg:text-lg'>Suffatul Hufaz is an academy established for Quranic studies and staying in the hearts of more than 30 Muthallim Hafilis of Ahlussufa, The aim is to inculcate in the Ahlul of the Noble Qur'an demanded by the society by providing opportunities for daily Hifz Daura and specialQira'at training classes.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Huffad
