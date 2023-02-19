import React from 'react'
import SubHeadings from '../components/SubHeadings'
import Servicecards from './Depetence/Services/Servicecards'
import img1 from './img/servise1.jpg'
import img2 from './img/servise2.jpg'
import img3 from './img/servise3.jpg'
import img4 from './img/servise4.jpg'
import img5 from './img/servise5.jpg'
import img6 from './img/servise6.jpg'

function Services() {
  return (
    <div className='w-full h-auto '>
        <SubHeadings subheading='Our Services'/>
        <div className='w-full h-full flex flex-wrap gap-10 mt-10 py-20 justify-center items-center  px-5 md:px-12 lg:px-20 xl:px-44'>
        <Servicecards img={img1} title="Robots in Space" para='Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet'/>
        <Servicecards img={img2} title="Differentiated Instruction" para='Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet'/>
        <Servicecards img={img3} title="Analysis of Principal" para='Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet'/>
        <Servicecards img={img4} title="The Sound of Silence" para='Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet'/>
        <Servicecards img={img5} title="Formation Flying" para='Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet'/>
        <Servicecards img={img6} title="Finger Gesture" para='Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet'/>
        </div>
    </div>
  )
}

export default Services
