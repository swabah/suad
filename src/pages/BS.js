import React from 'react'
import SubHeadings from '../components/SubHeadings'
import img from './img/img5.jpeg'

function BS() {
  return (
    <div className='w-full h-full'>
    <SubHeadings subheading='BS Programmes'/>
    <div className='w-full  flex flex-col items-start select-none px-3 md:px-7 lg:px-20   mt-12  '>
        <h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
           <span className='uppercase '>BS program</span> 
        </h2>
    </div>
    <div className='px-2 md:px-7 lg:px-20  text-[#1c415d] mt-10  mb-12 w-full h-full'>
        <div className='items-center w-full h-auto p-5 rounded-lg shadow-lg border grid grid-cols-1 gap-5 md:gap-0 grid-rows-auto lg:grid-cols-4'>
            <img className='object-cover w-full lg:w-96 h-52 rounded drop-shadow-md' src={img} alt="" />
            <p className='md:col-span-3 md:px-3 lg:px-6 xl:px-10 lg:text-lg'>Exhibiting as unrivalled knowledge centre 'Baitul Hikma Library' is the main attraction of Ahlussufa Dars.  contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. It is equipped with advanced systems such as air-conditioning and tele-casting to provide a better learning experience for the students.  Periodicals, student-run magazines, and journal articles are also available here.</p>
        </div>
    </div>
</div>
  )
}

export default BS
