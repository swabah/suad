import React from 'react'
import links from '../../assets/Links'
import LinkTags from '../../assets/LinkTags'

function Homesix() {
  return (
    <div className='w-full  px-3 md:px-7 lg:px-20  h-auto xl:h-[330px] text-[#1c415d] bg-white flex flex-col items-start md:items-center md:justify-center  py-10 md:py-12 lg:py-16 text-center space-y-2 xl:space-y-5'>   
    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide text-start md:text-center'>Check out few of our <br />
     USEFULL Video Lessons</h1>
     <a href={links.youtube.url}  className='w-full h-auto  flex items-center md:justify-end space-x-3'>
       <LinkTags name='subscribe' link=''/>
     </a>
</div>
  )
}

export default Homesix
