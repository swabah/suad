import React from 'react'
import { useCountUp } from 'react-countup';

function HomeOne() {
  	useCountUp({ ref: '1', end: 6, duration: 2 });
	useCountUp({ ref: '2', end: 120, duration: 2 });
	useCountUp({ ref: '3', end: 46, duration: 2 });
	useCountUp({ ref: '4', end: 20, duration: 2 });
  return (
    <div className='w-full mt-24  py-9 md:py-16 lg:py-24 h-auto px-5 md:px-12 lg:px-20 xl:px-44'>
      <div className='w-full h-full grid grid-cols-2 gap-y-7 md:grid-cols-4 text-[#35566f] items-center justify-center '>
        <Status count={<span id='1'/>} measurement='+' name='ASATHIDA'/>
        <Status count={<span id='2'/>} measurement='+' name='STUDENTS'/>
        <Status count={<span id='3'/>} measurement='+' name='ALUMNI'/>
        <Status count={<span id='4'/>} measurement='+' name='NATIVE STUDENTS'/>
      </div>
    </div>
  )
}

export default HomeOne



function Status(props) {
  return (
    <div className='flex flex-col justify-center w-full items-center space-y-3 '>
        <h2 className='font-bold text-center text-4xl md:text-5xl lg:text-6xl flex items-center'>{props.count}{props.measurement}</h2>
        <p className='font-light text-gary-700 text-center  lg:text-lg tracking-tight '>{props.name}</p>
    </div>
  )
}


