import React, { useState } from 'react'
import './Depetence/Style.css'
import { motion } from 'framer-motion';
import HomeFive from './Depetence/HomeFive';
import HomeFour from './Depetence/HomeFour';
import HomeOne from './Depetence/HomeOne';
import Homeseven from './Depetence/Homeseven';
import Homesix from './Depetence/Homesix';
import HOmeThree from './Depetence/HomeThree';
import HomeTwo from './Depetence/HomeTwo';
import TextHome from './Depetence/TextHome';

function Home() {
   const images = [
     "http://ahlussuffadars.in/assets/images/3.jpg",
    "http://ahlussuffadars.in/assets/images/2.jpg",
    "http://ahlussuffadars.in/assets/images/3.jpg",
    "http://ahlussuffadars.in/assets/images/4.jpg",
    "http://ahlussuffadars.in/assets/images/g1.jpg",
    "http://ahlussuffadars.in/assets/images/1.jpg"
  ];
   const Contents = [
    'Better education for a better world',
    'Explore the world of our graduates',
    'Exceptional people exceptional care',
    'Better education for a better world',
    'Explore the world of our graduates',
    'Exceptional people exceptional care',
  ];
  const [current,setCurrent]=useState(0)
    const length = images.length
    const lengthContent = Contents.length
    
        setTimeout(() => {
            setCurrent (current === length -1 ? 0 : current  + 1)
            setCurrent (current === lengthContent -1 ? 0 : current  + 1)
        }, 7000);
  return (
    <motion.div
		>

    <div className='w-full h-full '>
       {images.map((slide,index)=>{
        return (
          <div key={index}>
            {index===current ?
            <div className='w-full relative h-[750px] bg-black'>
            <img src={slide} className='w-full shadow-lg shadow-indigo-100 h-full bg-center bg-black brightness-50 object-cover ' id='slidingImage' alt="" />
              {Contents.map((Content,index)=>{
                if (current === index) {
                  return (
                    <div class="absolute top-1/2 px-2  flex items-center justify-center w-full h-auto float-center ">
                      <TextHome con={Content} />
                   </div> 
                  )
                }
              })}
            </div>
            :''
          }
          </div>
        )
       })}

       <HomeOne/>
       <HomeTwo/>
       <HOmeThree/>
       <HomeFour/>
       <HomeFive/>
       <Homeseven/>
       <Homesix/>
    </div>
    </motion.div>


  )
}

export default Home
