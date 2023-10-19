import React, { useState, useEffect } from 'react';
import './Depetence/Style.css';
import HomeFive from './Depetence/HomeFive';
import HomeOne from './Depetence/HomeOne';
import Homeseven from './Depetence/Homeseven';
import Homesix from './Depetence/Homesix';
import HomeTwo from './Depetence/HomeTwo';
import TextHome from './Depetence/TextHome';
import homImg1 from './img/IMG_2747.JPG';
import homImg2 from './img/1.jpg';
import homImg3 from './img/2.jpg';
import homImg4 from './img/3.jpg';
import homImg5 from './img/4.jpg';

function Home() {
  const images = [homImg1, homImg2, homImg3, homImg4, homImg5];
  const contents = [
    'Experience Ahlussuffa',
    'Better education for a better world',
    'Explore the world of our graduates',
    'Better education for a better world',
    'Exceptional people exceptional care',
  ];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="w-full h-full bg-[#fdfbfe]">
      {images.map((slide, index) => (
        <div key={index}>
          {index === current ? (
            <div className="w-full relative h-screen bg-black">
              <img src={slide} className="w-full shadow-lg shadow-indigo-100 h-full brightness-50 bg-center object-cover" id="slidingImage" alt={`Slide ${index + 1}`} />
              <div className="w-full h-full bg-black opacity-40 z-10 absolute top-0"></div>
              {contents.map((content, index) => (
                current === index && (
                  <div className="absolute top-1/2 flex z-10 items-center justify-center w-full h-auto" key={index}>
                    <TextHome con={content} />
                  </div>
                )
              ))}
            </div>
          ) : null}
        </div>
      ))}

      <HomeTwo />
      <HomeOne />
      <HomeFive />
      <Homeseven />
      <Homesix />
    </div>
  );
}

export default Home;
