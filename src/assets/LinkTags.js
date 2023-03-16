import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function LinkTags(props) {
  return (
    <div className='w-auto text-xs text-[#72bf44] md:text-sm lg:text-base h-auto py-1 border-[#72bf44]  border-b-[2px] hover:border-b-[3px] rounded-b-sm transition flex items-center justify-between space-x-1 lg:space-x-2'>
          <a href="">{props.name}
          </a>
          <FaArrowRight className='font-thin text-sm'/>
          {/* <span aria-hidden="true">→</span> */}
      </div>
  )
}

export default LinkTags
