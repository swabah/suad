import React from 'react'
import links from '../../assets/Links'
import LinkTags from '../../assets/LinkTags'

function Homesix() {
  return (
    <div className='w-full  px-3 md:px-7 lg:px-20  h-full py-8 md:py-12 lg:py-20 xl:py-32  text-[#070307] bg-[#fdfbfe]'>
      <div className='flex bg-[#f6edf8] p-8 lg:py-12 rounded-lg w-full h-full flex-col items-center justify-center gap-5 lg:gap-8'>
        <h1 className=' text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide text-center capitalize'>Check out few of our <br /> Fruitfull Video Lessons</h1>
        <LinkTags name='subscribe' link={links.youtube.url} />
      </div>
    </div>
  )
}

export default Homesix
