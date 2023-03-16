import React from 'react'
import {Link} from 'react-router-dom'
import LinkTags from '../../assets/LinkTags'
import Servicecards from './Services/Servicecards'
import img2 from './../img/servise2.jpg'
import img3 from './../img/servise3.jpg'
import img4 from './../img/servise4.jpg'
import { ServiceCardData } from '../../data/ServiceCardData'

function HomeFour() {
  return (
     <div className='w-full space-y-1 md:space-y-3 text-[#1c415d] h-auto bg-gray-100  px-2 md:px-7 lg:px-20  py-8 md:py-10 lg:py-12 xl:py-16 '>
     <div className='w-full items-start font-light text-gray-700'>
       <h1 className='text-xs md:text-base uppercase '>READY TO LEARN <span className='font-bold md:text-lg '>?</span> </h1>
     </div>
     <div className='w-full flex items-center md:pt-1  pb-2 justify-between'>
       <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Featured Services</h2>
       <Link to='/services'>
       <LinkTags name='view detiles'/>
       </Link>
     </div>
     <div className='mt-1 md:mt-5 w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 px-2 md:px-0 items-center justify-center'>
      {ServiceCardData.slice(0,4).map((con)=>(
           <Servicecards img={con.img} title={con.title} para={con.para} />
      ))}
     </div>
   </div>
  )
}

export default HomeFour