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
     "http://ahlussuffadars.in/assets/images/3.jpg",
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
            setCurrent (current === lengthContent -1 ? 0 : current  + 1)
        }, 7000);
  return (
    
    <div className='w-full h-auto '>
       {images.map((slide,index)=>{
        return (
          <div key={index}>
            {index===current ?
            <div className='w-full rounded-lg h-[550px]  px-44 pt-10'>
            <img src={slide} className='w-full shadow-lg shadow-indigo-100 h-full bg-center bg-black brightness-50 object-cover rounded-lg ' id='slidingImage' alt="" />
            {Contents.map((Content,index)=>{
              return (
                <div className='relative ' key={index}>
                {index===current ?
                  <div id='Textshadow' className='absolute  bottom-0 rounded-b-lg float-center bg-opacity-30  bg-black w-full p-2 xl:p-5 rounded h-auto'>
                  <h2   className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#1c415d] font-bold text-white text-start md:text-center'>{Content}</h2>
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
