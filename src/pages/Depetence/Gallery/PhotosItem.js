import React from 'react'
import { motion } from 'framer-motion'

function PhotosItem(props) {
  return (      
    <motion.div
    initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
    className='w-full h-full flex flex-col items-center gap-y-5'
    >
      <div className=' flex h-auto flex-col md:flex-row items-center gap-y-5 md:gap-y-0 md:gap-x-5'>
        <div className='relative h-auto md:h-[600px] rounded-md md:w-3/5'>
          <img className=' rounded w-full md:h-full object-cover' src={props.img} alt="" />
        </div>
        <div className='md:w-2/5 h-auto md:h-[600px]  flex flex-col gap-y-5 md:gap-y-0'>
          <img className='w-full md:h-1/2 rounded-t object-cover' src={props.img} alt="" />
          <img className='w-full md:h-1/2 rounded-b object-cover' src={props.img} alt="" />
        </div>
      </div>
      <div className=' flex h-auto flex-col md:flex-row items-center gap-y-5 md:gap-y-0 md:gap-x-5'>
        <div className='md:w-2/5 h-auto md:h-[600px]  flex flex-col gap-y-5 md:gap-y-0'>
          <img className='w-full md:h-1/2 rounded-t object-cover' src={props.img} alt="" />
          <img className='w-full md:h-1/2 rounded-b object-cover' src={props.img} alt="" />
        </div>
        <div className='relative h-auto md:h-[600px] rounded-md md:w-3/5'>
          <img className=' rounded w-full md:h-full object-cover' src={props.img} alt="" />
        </div>
      </div>
  {/* <div className="relative flex items-end justify-start w-full rounded-md text-left bg-center bg-cover h-96 bg-gray-500"  style={{backgroundImage: `url(${props.img})`}}>
    <div className="absolute top-0 bottom-0 rounded-md  left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-transparent"></div>
    <div className="absolute top-0 left-0 right-0 rounded-md  flex items-center justify-between mx-5 mt-3">
      <p  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined">{props.tag}</p>
      <div className="flex flex-col justify-start text-center text-gray-100">
        <span className="text-3xl font-semibold leading-none tracking-wide">{props.id}</span>
        <span className="leading-none uppercase">Aug</span>
      </div>
    </div>
  </div> */}
    </motion.div>
  )
}

export default PhotosItem
