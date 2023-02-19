import React, { useState } from 'react'
// import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider'
import './Depetence/Style.css'
import 'react-simple-carousel-image-slider/dist/index.css'
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
  const [current,setCurrent]=useState(0)
    const length = images.length
    
        setTimeout(() => {
            setCurrent (current === length -1 ? 0 : current  + 1)
        }, 7000);
  return (
    
    <div className='w-full h-auto '>
{/* 
      <div className='h-auto w-full px-5 md:px-12 lg:px-20 xl:px-44 mt-8 rounded -z-30'>
        <SimpleCarouselSlider
           images={images} 
           autoplay={true} 
           width= "100%" 
           height="75vh"
           autplayDelay='3000'
           //  parallax={true}
           />
       </div> */}
       {images.map((slide,index)=>{
        return (
          <div key={index}>
            {index===current ?
            <img src={slide} className='w-full  h-screen brightness-50 object-cover ' id='slidingImage' alt="" />
                            
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
