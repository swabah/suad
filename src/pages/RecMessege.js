import React from 'react'
import SubHeadings from '../components/SubHeadings'
import arshadusthad from './img/arshadusthad.jpg'
import bg1 from './img/bg1.png'
import bg2 from './img/bg2.png'
import bg3 from './img/bg3.png'

function PreMessege() {
  return (

    <div className='w-full text-[#1c415d] flex flex-col bg-white h-full   '>
      <SubHeadings subheading="President's Messege"/>
        {/* <div className='pt-16 '>
        <h1 className=' text-4xl font-bold '>President's Messege</h1>
        </div> */}
            <div className='w-full  flex flex-col items-start select-none  px-2 md:px-7 lg:px-20  mt-7 md:mt-12'>
        		  	<h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
        		  	   <span className='uppercase '>RECTOR'S Messege</span> 
        		  	</h2>
        		</div>
        <div className='w-full h-auto mt-3 md:mt-7 pb-10 md:pb-16 xl:pb-20 text-lg flex flex-col md:flex-row items-center justify-between   px-2 md:px-7 lg:px-20 '>
            <div className='md:w-1/2 h-full text-gray-600'>
                <p className='text-sm lg:text-base'>Ahlussuffa deals with many activities to build up high qualified Islamic scholars under Ahlussunnah wal Jama’a. Our intention is to keep up the way of Prophet Muhammed (S.A.W). Ahlussuffa is blessed with the Edu-Friendly Atmosphere of Thathoor Shuhada Maqam and Spiritual guidance of Thathoor shuhada. And also the mindful interventions of thathoor natives gives us an extra energy to fly high.</p> 
                <p className='text-sm lg:text-base'>Usthad Arshad Nurani Kamil Saquafi, The Invincible charioteer of Ahlussuffa dars. He completed his islamic studies from Jamia Madeenathunnoor and India's biggest islamic educational institution Jamia Markazussaquafatthissunniyya and also he completed his post graduation in M.sc Psychology. Now he serving for the community by nurturing valueble products to propogate the holy islamic religion.</p>
                <h1 className='font-semibold text-[#1c415d]  text-sm mt-8'>Rector'</h1>
                <h1 className='font-semibold text-[#1c415d]  text-base '>Usthad Arshad Nurani Kamil Saquafi</h1>
            </div>
            <div className='md:w-1/2 h-full flex items-center justify-center relative mt-7 md:mt-0'>
                <img className='absolute -top-10 left-20 w-28 -z-20' src={bg1} alt="" />
                <img className='absolute -bottom-6 left-20 w-32 -z-20' src={bg2} alt="" />
                <img className='absolute right-12 bottom-32 w-36 -rotate-12 -z-20' src={bg3} alt="" />
                <img className='rounded-md shadow-xl md:h-80 md:w-72 lg:h-96 object-cover lg:w-80 z-50' src={arshadusthad} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PreMessege
