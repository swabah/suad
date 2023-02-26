import React from 'react'
import Teacher from '../img/Teacher.png'
import Computerr from '../img/Computerr.png'
import Library from '../img/Library.png'
import ArrowrighT from '../img/Arrowright.png'
import { FaArrowRight} from 'react-icons/fa'
import HomeCard from './HomeCard'
import LinkTags from './Tools/LinkTags'

function HomeThree() {
  return (
    <div className='w-full text-[#1c415d] flex flex-col items-center py-8 md:py-12 lg:py-16 xl:py-20 h-auto px-5 md:px-12 lg:px-20 xl:px-44 bg-white'>
    {/* <h2 className='text-5xl font-bold '>This Helps You Get Ahead Of The Crowd</h2> */}
    <div className='w-full items-start font-light text-gray-700'>
           <h1 className='text-sm md:text-base uppercase'>Our Special <span className='font-bold md:text-lg'>!</span></h1>
        </div>
         <div className='w-full flex items-start md:items-center  pt-5 pb-2 justify-between'>
           <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-bold'>This Helps You <br className='md:hidden'/> Get Ahead Of The Crowd</h2>
           <LinkTags name='view detiles'/>
         </div>
      <div className='pt-12 w-full h-auto flex flex-wrap space-y-6 lg:space-y-0 items-center justify-evenly'>
          <HomeCard arrow={ArrowrighT} img={Computerr} title="Devinspire" para="An Exclusive initiative for ahlussuffa students to enhance their potentiality in the post modern era to prosper and propogate our holy islamic religion in this new scenario" />
          <HomeCard arrow={ArrowrighT} img={Teacher} title="Highly Qualified Asathida" para="Under the great visionary Usthad Arshad Nurani Kamil Saquafi, Ahlussuffa conquering the world with it's potential products to make a second islamic golden age." />
          <HomeCard img={Library} title="Baithul Hikma Library" para="Today a reader, tomorrow a leader; Today a reader, tomorrow a leader; Ahlussuffa well prepared to serve the wisdom through its whole way quench the thirst of knowledge seekers" />
      </div>
  </div>
  )
}

export default HomeThree
