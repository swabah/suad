import React from 'react'

function HomeOne() {
  return (
    <div className='w-full mt-24  py-9 md:py-16 lg:py-24 h-auto px-5 md:px-12 lg:px-20 xl:px-44'>
      <div className='w-full h-full grid grid-cols-2 gap-y-7 md:grid-cols-4 text-[#35566f] items-center justify-center '>
        <Status count='06+' name='ASATHIDA'/>
        <Status count='120+' name='STUDENTS'/>
        <Status count='46+' name='ALUMNI'/>
        <Status count='20+' name='NATIVE STUDENTS'/>
      </div>
    </div>
  )
}

export default HomeOne



function Status(props) {
  return (
    <div className='flex flex-col justify-center w-full items-center space-y-3 '>
        <h2 className='font-bold text-center text-4xl md:text-5xl lg:text-6xl'>{props.count}</h2>
        <p className='font-light text-gary-700 text-center  lg:text-lg tracking-tight '>{props.name}</p>
    </div>
  )
}


