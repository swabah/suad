import React, { useState } from 'react'
import './Depetence/Style.css'
import HomeFive from './Depetence/HomeFive';
import HomeOne from './Depetence/HomeOne';
import Homeseven from './Depetence/Homeseven';
import Homesix from './Depetence/Homesix';
import HOmeThree from './Depetence/HomeThree';
import HomeTwo from './Depetence/HomeTwo';
import TextHome from './Depetence/TextHome';
import homImg1 from './img/IMG_2747.JPG' 
import homImg2 from './img/1.jpg' 
import homImg3 from './img/2.jpg' 
import homImg4 from './img/3.jpg' 
import homImg5 from './img/4.jpg' 

function Home() {
   const images = [
     homImg1,
     homImg2,
     homImg3,
     homImg4,
     homImg5,
    //  "http://ahlussuffadars.in/assets/images/4.jpg",
    // "http://ahlussuffadars.in/assets/images/2.jpg",
    // "http://ahlussuffadars.in/assets/images/3.jpg",
    // "http://ahlussuffadars.in/assets/images/g1.jpg",
    // "http://ahlussuffadars.in/assets/images/1.jpg"
  ];
   const Contents = [
    'Experience Ahlussuffa',
    'Better education for a better world',
    'Explore the world of our graduates',
    'Better education for a better world',
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
    <div className='w-full h-full bg-white'>
       {images.map((slide,index)=>{
        return (
          <div key={index}>
            {index===current ?
            <div className='w-full relative h-screen bg-black'>
            <img src={slide} className='w-full shadow-lg shadow-indigo-100 h-full bg-center bg-black brightness-50 opacity-50 md:opacity-70 object-cover ' id='slidingImage' alt="" />
              {Contents.map((Content,index) => {
                if (current === index) {
                  return (
                    <div className="absolute top-1/2 flex items-center justify-center w-full h-auto ">
                      <TextHome  con={Content} />
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
       {/* <HomeFour/> */}
       {/* <HOmeThree/> */}
       <HomeFive/>
       <Homeseven/>
       <Homesix/>
    </div>
  )
}

export default Home
