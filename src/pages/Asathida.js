import React from 'react'
import Asathidacard from './Depetence/Asathidacard'
import SubHeadings from '../components/SubHeadings'
import { AsathidaData } from '../data/AsathidaData'

function Asathida() {

  return (

    <div className=' w-full text-[#1c415d] h-auto flex flex-col  bg-white  '>
      <SubHeadings subheading='Our Faculty' />
      <p className='text-base md:text-lg text-[#1c415d] px-2 md:px-7 lg:px-20 pt-10 '>As previously mentioned, These are the precious capital of Ahlussuffa,  They are on the way to forge a edutainment culture in Ahlussuffa to serve the community.</p>
      <div className='py-8 grid grid-cols-2 grid-rows-auto md:grid-cols-4 xl:grid-cols-[290px,290px,290px,290px] items-center justify-center md:justify-between gap-5  w-full h-full px-2 md:px-7 lg:px-20 '>
        {AsathidaData.map((data) => (
          <Asathidacard key={data.id} img={data.img} name={data.name} />
        ))}
      </div>
    </div>
  )
}

export default Asathida
