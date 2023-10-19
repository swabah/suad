import React from 'react'
import { useCountUp } from 'react-countup';

function HomeOne() {
  useCountUp({ ref: '1', end: 6, duration: 10 });
  useCountUp({ ref: '2', end: 150, duration: 10 });
  useCountUp({ ref: '3', end: 56, duration: 10 });
  useCountUp({ ref: '4', end: 30, duration: 10 });
  return (
    <div className='w-full h-full grid grid-cols-2 gap-y-7 md:grid-cols-4 text-[#070307] items-center justify-center py-10 md:pb-24'>
      <Status count={<span id='1' />} measurement='+' name='ASATHIDA' />
      <Status count={<span id='2' />} measurement='+' name='STUDENTS' />
      <Status count={<span id='3' />} measurement='+' name='ALUMNI' />
      <Status count={<span id='4' />} measurement='+' name='NATIVE STUDENTS' />
    </div>
  )
}

export default HomeOne



function Status(props) {
  return (
    <div className='flex flex-col justify-center w-full items-center space-y-3 '>
      <h2 className='font-bold text-center text-4xl md:text-5xl lg:text-6xl flex items-center'>{props.count}<span className='text-[#e7cceb]'>{props.measurement}</span></h2>
      <p className='font-semibold text-center  lg:text-lg tracking-tight '>{props.name}</p>
    </div>
  )
}


