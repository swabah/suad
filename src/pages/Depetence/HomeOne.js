import React from 'react'

function HomeOne() {
  return (
    <div className='w-full mt-24 py-24 h-auto px-5 md:px-12 lg:px-20 xl:px-44'>
      <div className='w-full h-full flex flex-col md:flex-row space-y-5 md:space-y-0 text-[#35566f] items-center justify-center '>
        <div className='flex flex-col h-32 border-r-[3px] justify-center w-full items-center space-y-3 '>
            <h2 className='font-bold text-center text-6xl'>06+</h2>
            <p className='font-light text-gary-700 text-center  text-lg tracking-tight '>ASATHIDA</p>
        </div>
        <div className='flex flex-col h-32 border-r-[3px] justify-center w-full items-center space-y-3 '>
            <h2 className='font-bold text-center text-6xl'>120+</h2>
            <p className='font-light text-gary-700 text-center  text-lg tracking-tight '>STUDENTS</p>
        </div>
        <div className='flex flex-col h-32 border-r-[3px] justify-center w-full items-center space-y-3 '>
            <h2 className='font-bold text-center text-6xl'>46+</h2>
            <p className='font-light text-gary-700 text-center  text-lg tracking-tight '>ALUMNI</p>
        </div>
        <div className='flex flex-col justify-center w-full items-center space-y-3 '>
            <h2 className='font-bold text-center text-6xl'>20+</h2>
            <p className='font-light text-gary-700 text-center  text-lg tracking-tight '>NATIVE STUDENTS</p>
        </div>
      </div>
    </div>
  )
}

export default HomeOne
