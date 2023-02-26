import React from 'react'
import SubHeadings from '../components/SubHeadings'
import Photos from './Depetence/Gallery/Photos'

function Gallary() {
  return (
    <div className='w-full h-auto '>
      <SubHeadings subheading='Photos & Videos'/>
      <div className='w-full h-full px-5 md:px-12 lg:px-20 xl:px-44 mt-16'>
        <div className='bg-gray-100 border rounded w-full h-full p-2 md:p-5 lg:p-8'>
          <div className='w-full h-auto flex space-x-2'>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Pictures</h2>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Visioles</h2>
          </div>
          <div className='w-full h-full border inner-shadow-lg mt-5 md:flex items-center '>
            <div className='w-1/4 h-full border-r'></div>
            <div className='w-3/4 h-full border-l'>
              <Photos/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallary
