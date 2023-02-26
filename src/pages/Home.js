import React, { useState } from 'react'
import './Depetence/Style.css'
import Homeeight from './Depetence/Homeeight';
import HomeFive from './Depetence/HomeFive';
import HomeFour from './Depetence/HomeFour';
import HomeOne from './Depetence/HomeOne';
import Homeseven from './Depetence/Homeseven';
import Homesix from './Depetence/Homesix';
import HOmeThree from './Depetence/HomeThree';
import HomeTwo from './Depetence/HomeTwo';

function Home() {
   const images = [
    "http://ahlussuffadars.in/assets/images/2.jpg",
    "http://ahlussuffadars.in/assets/images/3.jpg",
    "http://ahlussuffadars.in/assets/images/4.jpg",
    "http://ahlussuffadars.in/assets/images/g1.jpg",
    "http://ahlussuffadars.in/assets/images/1.jpg"
  ];
   const Contents = [
    'Better Education For A Better World',
    'Explore the World Of Our Graduates',
    'Exceptional People  Exceptional Care',
    'Better Education For A Better World',
    'Explore the World Of Our Graduates',
    'Exceptional People  Exceptional Care',
  ];
  const [current,setCurrent]=useState(0)
    const length = images.length
    const lengthContent = Contents.length
    
        setTimeout(() => {
            setCurrent (current === length -1 ? 0 : current  + 1)
        }, 7000);
  return (
    
    <div className='w-full h-auto '>
       {images.map((slide,index)=>{
        return (
          <div key={index}>
            {index===current ?
            <div className='w-full  h-screen bg-black relative '>
            <img src={slide} className='w-full h-full brightness-50 object-cover ' id='slidingImage' alt="" />
            {Contents.map((Content,index)=>{
              return (
                <div key={index}>
                {index===current ?
                  <div id='backdrop' className='absolute  bottom-[35%] bg-opacity-40  drop-shadow-2xl bg-black w-full p-2 xl:p-7 rounded h-auto'>
                  <h2  id='slidingImage' className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#1c415d] font-bold text-white text-start md:text-center'>{Content}</h2>
                  </div>
                  :''           
                }
                </div>
                )
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
       <Homeeight/>
    </div>


  )
}

export default Home
