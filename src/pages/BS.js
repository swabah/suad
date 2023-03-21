import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
            <div className='md:col-span-3 md:px-3 lg:px-6 xl:px-10 flex flex-col justify-start space-y-3'>
                 <p className='lg:text-lg'>Exhibiting as unrivalled knowledge centre 'Baitul Hikma Library' is the main attraction of Ahlussufa Dars.  contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. It is equipped with advanced systems such as air-conditioning and tele-casting to provide a better learning experience for the students.  Periodicals, student-run magazines, and journal articles are also available here.</p>
                 <Link to='/contact'>
                <button className='bg-[#72bf44] flex items-center shadow-xl drop-shadow-md text-sm md:text-base p-1 px-2 md:p-1.5 md:px-4 opacity-90 text-white drop-shadow-md '><span className='pr-1.5 md:pr-3 lg:text-lg '>Register now</span ><FaArrowRight/></button>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default BS
