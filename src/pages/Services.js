import React from 'react'
import SubHeadings from '../components/SubHeadings'
import Servicecards from './Depetence/Services/Servicecards'
import { ServiceCardData } from '../data/ServiceCardData'
import { motion } from 'framer-motion'

function Services() {

  return (

    <div className='w-full h-auto bg-white '>
        <SubHeadings subheading='Our Services'/>
        
        <div className='w-full h-full flex flex-wrap gap-5 mt-5 py-3 md:py-8 xl:py-14 justify-center items-center   px-2 md:px-7 lg:px-20 '>
          {ServiceCardData.map((content)=>(
            <Servicecards img={content.img} title={content.title} para={content.para}/>
          ))}
        </div>
    </div>
  )
}

export default Services
