import React from 'react'
import SubHeadings from '../components/SubHeadings'
import VideosItem from './Depetence/Gallery/VideosItem'
import { GallaryData } from '../data/GallaryData'


function Videos() {
  return (
    <div className='w-full h-auto  bg-white '>
      <SubHeadings subheading='Videos' />
      <div className='w-full text-[#1c415d] h-full  px-2 md:px-7 py-12  lg:px-20  mt-1126'>
        <div className=' rounded w-full h-full p-2 md:p-3 lg:p-5 '>
          <div className='w-full h-full pb-5  grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-center gap-1.5 md:gap-3 lg:gap-5'>
            {GallaryData.VideosData.map((viddata) => (
              <VideosItem vidID={viddata.vidID} title={viddata.title} id={viddata.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
