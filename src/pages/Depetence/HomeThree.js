import React from 'react'
import ArrowrighT from '../img/Arrowright.png'
import Naseeha1 from '../img/Naseeha1.jpeg'
import librarypng from '../img/librarypng.png'
import digikioskpng from '../img/digikioskpng.png'
import HomeCard from './HomeCard'

function HomeThree() {
  return (
    <div className='w-full text-[#1c415d] flex flex-col items-center  px-3 md:px-7 lg:px-20  py-7 md:py-12 lg:py-16 bg-white'>
    {/* <h2 className='text-5xl font-bold '>This Helps You Get Ahead Of The Crowd</h2> */}
    <div className='w-full items-start font-light text-gray-700'>
           <h1 className='text-xs md:text-base uppercase'>Our Special <span className='font-bold md:text-lg'>!</span></h1>
        </div>
         <div className='w-full flex items-start md:items-center  pt-1 md:pt-3 pb-2 justify-between'>
           <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl  font-bold'>This Helps You <br className='md:hidden'/> Get Ahead Of The Crowd</h2>
           {/* <LinkTags name='view detiles'/> */}
         </div>
      <div className='pt-5 md:pt-10 lg:pt-16 w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-y-5 lg:gap-y-0 md:gap-x-5 items-center justify-between'>
          <HomeCard arrow={ArrowrighT} img={Naseeha1} title="Highly Qualified Asathida" para="Under the great visionary Usthad Arshad Nurani Kamil Saquafi, Ahlussuffa conquering the world with it's potential products to make a second islamic golden age." />
          <HomeCard arrow={ArrowrighT}  img={librarypng} title="Baithul Hikma Library" para="Today a reader, tomorrow a leader; Today a reader, tomorrow a leader; Ahlussuffa well prepared to serve the wisdom through its whole way quench the thirst of knowledge seekers" />
          <HomeCard img={digikioskpng}  title="Devinspire" para="An Exclusive initiative for ahlussuffa students to enhance their potentiality in the post modern era to prosper and propogate our holy islamic religion in this new scenario" />
      </div>
  </div>
  )
}

export default HomeThree
