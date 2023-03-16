import React from 'react'
import SubHeadings from '../components/SubHeadings'
import Servicecards from './Depetence/Services/Servicecards'
import { ServiceCardData } from '../data/ServiceCardData'
import { motion } from 'framer-motion'

function Services() {

  return (

    <div className='w-full h-auto bg-white '>
        <SubHeadings subheading='Our Services'/>
        
        <div className='mt-3 md:mt-5 w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-3 items-center justify-center px-10 md:px-7 lg:px-20  py-8 md:py-16 lg:py-20 '>
          {ServiceCardData.map((content)=>(
            <Servicecards img={content.img} title={content.title} para={content.para}/>
          ))}
        </div>
    </div>
  )
}

export default Services
