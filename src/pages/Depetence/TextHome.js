import React from 'react'
import './Style.css'

function TextHome(props) {
  return (
    <div className="relative px-2 md:px-5  w-full h-auto flex items-center justify-center  ">
    <div className="min-x-md max-w-2xl">
      <div className="text-center">
        <h1 id='Aboreto-font' className="mt-10 md:mt-5 font-semibold text-[#e7cceb] px-3 md:px-0 text-4xl md:text-5xl lg:text-5xl xl:text-7xl drop-shadow-xl tracking-wide uppercase opacity-80" >{props.con}</h1>
        {/* <p className="mt-6 text-base md:text-lg lg:leading-8 text-shadow-lg font-thin text-white brightness-75">Ahlussuffa deals with many activities to build up high qualified Islamic scholars under Ahlussunnah wal Jama’a. Our intention is to keep up the way of Prophet Muhammed (S.A.W).</p> */}
      </div>
    </div>
  </div>
  )
}

export default TextHome
