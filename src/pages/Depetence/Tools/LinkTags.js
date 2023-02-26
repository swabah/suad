import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function LinkTags(props) {
  return (
    <div className='w-auto text-xs md:text-sm lg:text-base h-auto py-1 border-gray-400  border-b-[1px] hover:border-[#1c415d] transition flex items-center space-x-1 lg:space-x-3'>
          <a href="">{props.name}
          </a>
          <FaArrowRight/>
      </div>
  )
}

export default LinkTags
