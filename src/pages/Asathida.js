import React, { useState } from 'react'
import Asathidacard from './Depetence/Asathidacard'
import SubHeadings from '../components/SubHeadings'
import { AsathidaData } from '../data/AsathidaData'
import {motion} from 'framer-motion'

function Asathida() {

  return (
    <div className=' w-full text-[#1c415d] h-auto flex flex-col '>
      <SubHeadings subheading='Asathidah'/>
        <div className='w-full h-auto pt-20 px-44'>
            <h2 className='text-4xl font-bold '>Our blessed Asathida</h2>
            <p className='pt-5 min-w-52 max-w-[600px] text-gray-600'>As previously mentioned, These are the precious capital of Ahlussuffa,  They are on the way to forge a edutainment culture in Ahlussuffa to serve the community.</p>
        </div>
        <div className='py-12 flex justify-between w-full h-full px-44'>
		{AsathidaData.map((data) => (
			   <Asathidacard key={data.id} img={data.img} name={data.name}/>
		))}
        </div>
    </div>
  )
}

export default Asathida
