import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function LinkTags(props) {
  return (
      <Link to={`${props.to}`}>
    <div className='w-auto text-xs text-[#72bf44] md:text-sm lg:text-base h-auto py-1 rounded-b-sm transition flex items-center justify-between space-x-1 lg:space-x-2'>
          <h2>{props.name}</h2>
          <FaArrowRight className='font-thin text-sm'/>
      </div>
    </Link>
  )
}

export default LinkTags
