import React from 'react'
import Asathidacard from './Depetence/Asathidacard'
import SubHeadings from '../components/SubHeadings'
import { AsathidaData } from '../data/AsathidaData'

function Asathida() {

  return (

    <div className=' w-full text-[#1c415d] h-auto flex flex-col  bg-white  '>
      <SubHeadings subheading='Our Faculty'/>
          <div className='w-full space-y-2 md:space-y-5 hidden  md:flex flex-col items-start select-none mt-6 md:mt-12 px-2 md:px-7 lg:px-20 '>
        			  	<h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
        			  	   <span className='uppercase '>Our Faculty</span> 
        			  	</h2>
						<p className='text-base md:text-lg text-[#1c415d]'>As previously mentioned, These are the precious capital of Ahlussuffa,  They are on the way to forge a edutainment culture in Ahlussuffa to serve the community.</p>
        	</div>
        <div className='py-8 grid grid-cols-2 grid-rows-auto md:grid-cols-4 xl:grid-cols-[290px,290px,290px,290px] items-center justify-center md:justify-between gap-5  w-full h-full px-2 md:px-7 lg:px-20 '>
		        {AsathidaData.map((data) => (
              <Asathidacard key={data.id} img={data.img} name={data.name}/>
		        ))}
        </div>
    </div>
  )
}

export default Asathida
