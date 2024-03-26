import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import SubHeadings from '../components/SubHeadings'
import img from './img/img5.jpeg'
import links from '../assets/Links'
import { Link } from 'react-router-dom'

function BS() {
  return (
    <div className='w-full h-full'>
      <SubHeadings subheading='BS Programmes' />
      <div className='px-3 md:px-7 lg:px-20  text-[#1c415d] mt-10  mb-12 w-full h-full'>
        <div className='items-center w-full h-auto md:p-5 rounded-lg md:shadow-lg md:border grid grid-cols-1 gap-5 md:gap-0 grid-rows-auto lg:grid-cols-4'>
          <img className='object-cover w-full lg:w-96 h-52 md:rounded drop-shadow-md' src={img} alt="" />
          <div className='md:col-span-3 md:px-3 lg:px-6 xl:px-10 flex flex-col justify-start space-y-5'>
            <p className='lg:text-lg'>Exhibiting as unrivalled knowledge centre 'Baitul Hikma Library' is the main attraction of Ahlussufa Dars.  contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. It is equipped with advanced systems such as air-conditioning and tele-casting to provide a better learning experience for the students.  Periodicals, student-run magazines, and journal articles are also available here.</p>
            <Link to={links.suadadmition.url}>
              <button className='bg-[#72bf44] flex items-center shadow-xl drop-shadow-md text-base lg:text-lg p-1.5 px-5 md:p-1.5 md:px-4 opacity-90 text-white drop-shadow-md uppercase'><span className='pr-3 lg:text-lg '>get Admission</span ><FaArrowRight /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BS
